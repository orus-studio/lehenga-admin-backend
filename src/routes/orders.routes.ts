import { Router } from "express";

import { OrderStatus, PaymentStatus, RentalItemType } from "../generated/prisma/enums.js";
import { prisma } from "../lib/prisma.js";
import type { AuthenticatedRequest } from "../middleware/auth.js";
import { asyncHandler } from "../utils/async-handler.js";
import { AppError } from "../utils/app-error.js";
import {
  ensureObject,
  getOptionalEnum,
  getOptionalString,
  getRequiredArray,
  getRequiredString,
} from "../utils/validation.js";

const orderInclude = {
  customer: true,
  pickupLocation: true,
  items: {
    orderBy: {
      createdAt: "asc" as const,
    },
    include: {
      lehenga: {
        include: {
          images: {
            orderBy: {
              sortOrder: "asc" as const,
            },
          },
        },
      },
      lehengaSize: true,
      jewellery: {
        include: {
          images: {
            orderBy: {
              sortOrder: "asc" as const,
            },
          },
        },
      },
    },
  },
};

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

type AdminOrderInputItem =
  | {
      itemType: typeof RentalItemType.LEHENGA;
      quantity: number;
      lehengaId: string;
      lehengaSizeId?: string;
    }
  | {
      itemType: typeof RentalItemType.JEWELLERY;
      quantity: number;
      jewelleryId: string;
    };

type PreparedOrderItem = {
  itemType: typeof RentalItemType.LEHENGA | typeof RentalItemType.JEWELLERY;
  quantity: number;
  productNameSnapshot: string;
  skuSnapshot: string;
  pricePerDay: number;
  rentalDays: number;
  lineTotal: number;
  depositAmount: number;
  sizeLabelSnapshot?: string;
  lehengaId?: string;
  lehengaSizeId?: string;
  jewelleryId?: string;
};

type ExistingOrderForEdit = Awaited<ReturnType<typeof fetchEditableOrder>>;

function parseDateValue(value: string, key: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new AppError(`${key} must be a valid date`, 400);
  }

  return date;
}

function getRentalDays(startDate: Date, endDate: Date) {
  const diff = endDate.getTime() - startDate.getTime();

  if (diff < 0) {
    throw new AppError("rentalEndDate must be on or after rentalStartDate", 400);
  }

  return Math.floor(diff / ONE_DAY_MS) + 1;
}

async function getDefaultPickupLocation() {
  const existingLocation = await prisma.storeLocation.findFirst({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  if (existingLocation) {
    return existingLocation;
  }

  return prisma.storeLocation.create({
    data: {
      name: "Main Store",
      slug: "main-store",
      addressLine1: "Store pickup address pending update",
      city: "Ahmedabad",
      state: "Gujarat",
      postalCode: "380001",
      country: "India",
      pickupNotes: "Please contact support before pickup.",
      isActive: true,
    },
  });
}

function generateOrderNumber() {
  return `ORD-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
}

function parseAdminOrderItems(value: unknown): AdminOrderInputItem[] {
  const items = getRequiredArray({ items: value }, "items");

  return items.map((entry, index) => {
    const item = ensureObject(entry, `items[${index}] must be an object`);
    const itemType = getRequiredString(item, "itemType");
    const quantity = Number(item.quantity ?? 1);

    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new AppError(`items[${index}].quantity must be a positive integer`, 400);
    }

    if (itemType === RentalItemType.LEHENGA) {
      const lehengaSizeId = getOptionalString(item, "lehengaSizeId");

      return {
        itemType,
        quantity,
        lehengaId: getRequiredString(item, "lehengaId"),
        ...(lehengaSizeId ? { lehengaSizeId } : {}),
      };
    }

    if (itemType === RentalItemType.JEWELLERY) {
      return {
        itemType,
        quantity,
        jewelleryId: getRequiredString(item, "jewelleryId"),
      };
    }

    throw new AppError(`items[${index}].itemType must be LEHENGA or JEWELLERY`, 400);
  });
}

function buildAdjustmentMaps(existingOrder?: ExistingOrderForEdit) {
  const lehengaSizeAdjustments = new Map<string, number>();
  const jewelleryAdjustments = new Map<string, number>();

  if (!existingOrder) {
    return { lehengaSizeAdjustments, jewelleryAdjustments };
  }

  for (const item of existingOrder.items) {
    if (item.lehengaSizeId) {
      lehengaSizeAdjustments.set(
        item.lehengaSizeId,
        (lehengaSizeAdjustments.get(item.lehengaSizeId) ?? 0) + item.quantity,
      );
    }

    if (item.jewelleryId) {
      jewelleryAdjustments.set(
        item.jewelleryId,
        (jewelleryAdjustments.get(item.jewelleryId) ?? 0) + item.quantity,
      );
    }
  }

  return { lehengaSizeAdjustments, jewelleryAdjustments };
}

async function prepareOrderItems(
  items: AdminOrderInputItem[],
  rentalDays: number,
  existingOrder?: ExistingOrderForEdit,
) {
  const lehengaItems = items.filter((item) => item.itemType === RentalItemType.LEHENGA);
  const jewelleryItems = items.filter((item) => item.itemType === RentalItemType.JEWELLERY);
  const { lehengaSizeAdjustments, jewelleryAdjustments } = buildAdjustmentMaps(existingOrder);

  const [lehengas, jewelleryProducts] = await Promise.all([
    lehengaItems.length
      ? prisma.lehenga.findMany({
          where: {
            id: {
              in: lehengaItems.map((item) => item.lehengaId),
            },
          },
          include: {
            sizes: true,
          },
        })
      : Promise.resolve([]),
    jewelleryItems.length
      ? prisma.jewellery.findMany({
          where: {
            id: {
              in: jewelleryItems.map((item) => item.jewelleryId),
            },
          },
        })
      : Promise.resolve([]),
  ]);

  if (lehengas.length !== lehengaItems.length) {
    throw new AppError("One or more selected lehengas were not found", 404);
  }

  if (jewelleryProducts.length !== jewelleryItems.length) {
    throw new AppError("One or more selected jewellery items were not found", 404);
  }

  const lehengasById = new Map(lehengas.map((lehenga) => [lehenga.id, lehenga]));
  const jewelleryById = new Map(jewelleryProducts.map((jewellery) => [jewellery.id, jewellery]));

  return items.map<PreparedOrderItem>((item) => {
    if (item.itemType === RentalItemType.LEHENGA) {
      const lehenga = lehengasById.get(item.lehengaId);

      if (!lehenga) {
        throw new AppError("Selected lehenga was not found", 404);
      }

      const selectedSize =
        (item.lehengaSizeId
          ? lehenga.sizes.find((size) => size.id === item.lehengaSizeId)
          : lehenga.sizes[0]) ?? null;

      if (!selectedSize) {
        throw new AppError(`No size is available for ${lehenga.name}`, 400);
      }

      if (item.lehengaSizeId && !selectedSize) {
        throw new AppError(`Selected size is not available for ${lehenga.name}`, 400);
      }

      const availableQuantity =
        selectedSize.quantityTotal -
        selectedSize.quantityReserved +
        (lehengaSizeAdjustments.get(selectedSize.id) ?? 0);

      if (item.quantity > availableQuantity) {
        throw new AppError(`Only limited stock is available for ${lehenga.name}`, 400);
      }

      const pricePerDay = Number(lehenga.rentalPricePerDay);
      const depositAmount = Number(lehenga.securityDeposit ?? 0);
      const lineTotal = pricePerDay * rentalDays * item.quantity;

      return {
        itemType: item.itemType,
        quantity: item.quantity,
        productNameSnapshot: lehenga.name,
        skuSnapshot: lehenga.sku,
        pricePerDay,
        rentalDays,
        lineTotal,
        depositAmount: depositAmount * item.quantity,
        sizeLabelSnapshot: selectedSize.sizeLabel,
        lehengaId: lehenga.id,
        lehengaSizeId: selectedSize.id,
      };
    }

    const jewellery = jewelleryById.get(item.jewelleryId);

    if (!jewellery) {
      throw new AppError("Selected jewellery item was not found", 404);
    }

    const availableQuantity = jewellery.stockQuantity + (jewelleryAdjustments.get(jewellery.id) ?? 0);

    if (item.quantity > availableQuantity) {
      throw new AppError(`Only limited stock is available for ${jewellery.name}`, 400);
    }

    const pricePerDay = Number(jewellery.rentalPricePerDay);
    const depositAmount = Number(jewellery.securityDeposit ?? 0);
    const lineTotal = pricePerDay * rentalDays * item.quantity;

    return {
      itemType: item.itemType,
      quantity: item.quantity,
      productNameSnapshot: jewellery.name,
      skuSnapshot: jewellery.sku,
      pricePerDay,
      rentalDays,
      lineTotal,
      depositAmount: depositAmount * item.quantity,
      jewelleryId: jewellery.id,
    };
  });
}

function buildInventoryRevertOperations(existingOrder: ExistingOrderForEdit) {
  return existingOrder.items.flatMap((item) => {
    const operations = [];

    if (item.lehengaSizeId) {
      operations.push(
        prisma.lehengaSize.update({
          where: { id: item.lehengaSizeId },
          data: {
            quantityReserved: {
              decrement: item.quantity,
            },
          },
        }),
      );
    }

    if (item.jewelleryId) {
      operations.push(
        prisma.jewellery.update({
          where: { id: item.jewelleryId },
          data: {
            stockQuantity: {
              increment: item.quantity,
            },
          },
        }),
      );
    }

    return operations;
  });
}

function buildInventoryApplyOperations(items: PreparedOrderItem[]) {
  return items.flatMap((item) => {
    const operations = [];

    if (item.lehengaSizeId) {
      operations.push(
        prisma.lehengaSize.update({
          where: { id: item.lehengaSizeId },
          data: {
            quantityReserved: {
              increment: item.quantity,
            },
          },
        }),
      );
    }

    if (item.jewelleryId) {
      operations.push(
        prisma.jewellery.update({
          where: { id: item.jewelleryId },
          data: {
            stockQuantity: {
              decrement: item.quantity,
            },
          },
        }),
      );
    }

    return operations;
  });
}

function buildOrderItemCreates(items: PreparedOrderItem[]) {
  return items.map((item) => ({
    itemType: item.itemType,
    ...(item.lehengaId
      ? {
          lehenga: {
            connect: { id: item.lehengaId },
          },
        }
      : {}),
    ...(item.lehengaSizeId
      ? {
          lehengaSize: {
            connect: { id: item.lehengaSizeId },
          },
        }
      : {}),
    ...(item.jewelleryId
      ? {
          jewellery: {
            connect: { id: item.jewelleryId },
          },
        }
      : {}),
    productNameSnapshot: item.productNameSnapshot,
    skuSnapshot: item.skuSnapshot,
    ...(item.sizeLabelSnapshot ? { sizeLabelSnapshot: item.sizeLabelSnapshot } : {}),
    quantity: item.quantity,
    pricePerDay: item.pricePerDay,
    rentalDays: item.rentalDays,
    lineTotal: item.lineTotal,
    depositAmount: item.depositAmount,
  }));
}

async function fetchEditableOrder(orderId: string) {
  const order = await prisma.rentalOrder.findUnique({
    where: {
      id: orderId,
    },
    include: {
      items: true,
    },
  });

  if (!order) {
    throw new AppError("Order not found", 404);
  }

  return order;
}

export const ordersRouter = Router();

ordersRouter.get(
  "/",
  asyncHandler(async (_request, response) => {
    const orders = await prisma.rentalOrder.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: orderInclude,
    });

    response.json({
      success: true,
      data: orders,
    });
  }),
);

ordersRouter.post(
  "/",
  asyncHandler(async (request: AuthenticatedRequest, response) => {
    const body = ensureObject(request.body);
    const customerId = getRequiredString(body, "customerId");
    const customerName = getOptionalString(body, "customerName");
    const rentalStartDate = parseDateValue(getRequiredString(body, "rentalStartDate"), "rentalStartDate");
    const rentalEndDate = parseDateValue(getRequiredString(body, "rentalEndDate"), "rentalEndDate");
    const specialInstructions = getOptionalString(body, "specialInstructions");
    const internalNotes = getOptionalString(body, "internalNotes");
    const status = getOptionalEnum(body, "status", Object.values(OrderStatus)) ?? OrderStatus.PENDING;
    const paymentStatus =
      getOptionalEnum(body, "paymentStatus", Object.values(PaymentStatus)) ?? PaymentStatus.PENDING;
    const pickupLocation = await getDefaultPickupLocation();
    const items = parseAdminOrderItems(body.items);
    const rentalDays = getRentalDays(rentalStartDate, rentalEndDate);
    const preparedItems = await prepareOrderItems(items, rentalDays);
    const subtotalAmount = preparedItems.reduce((sum, item) => sum + item.lineTotal, 0);
    const securityDeposit = preparedItems.reduce((sum, item) => sum + item.depositAmount, 0);
    const totalAmount = subtotalAmount + securityDeposit;
    const orderNumber = generateOrderNumber();

    await prisma.$transaction([
      prisma.customer.update({
        where: { id: customerId },
        data: {
          ...(customerName ? { firstName: customerName } : {}),
        },
      }),
      prisma.rentalOrder.create({
        data: {
          orderNumber,
          customer: {
            connect: { id: customerId },
          },
          pickupLocation: {
            connect: { id: pickupLocation.id },
          },
          ...(request.admin?.id
            ? {
                createdByAdmin: {
                  connect: { id: request.admin.id },
                },
              }
            : {}),
          status,
          paymentStatus,
          rentalStartDate,
          rentalEndDate,
          subtotalAmount,
          securityDeposit,
          totalAmount,
          ...(specialInstructions ? { specialInstructions } : {}),
          ...(internalNotes ? { internalNotes } : {}),
          items: {
            create: buildOrderItemCreates(preparedItems),
          },
        },
      }),
      ...buildInventoryApplyOperations(preparedItems),
    ]);

    const order = await prisma.rentalOrder.findUniqueOrThrow({
      where: {
        orderNumber,
      },
      include: orderInclude,
    });

    response.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  }),
);

ordersRouter.patch(
  "/:id",
  asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const orderId = getRequiredString({ id: request.params.id }, "id");
    const existingOrder = await fetchEditableOrder(orderId);
    const nextStatus = getOptionalEnum(body, "status", Object.values(OrderStatus));
    const nextPaymentStatus = getOptionalEnum(body, "paymentStatus", Object.values(PaymentStatus));
    const specialInstructions = getOptionalString(body, "specialInstructions");
    const internalNotes = getOptionalString(body, "internalNotes");
    const items = body.items === undefined ? undefined : parseAdminOrderItems(body.items);
    const rentalStartDate =
      body.rentalStartDate === undefined
        ? existingOrder.rentalStartDate
        : parseDateValue(getRequiredString(body, "rentalStartDate"), "rentalStartDate");
    const rentalEndDate =
      body.rentalEndDate === undefined
        ? existingOrder.rentalEndDate
        : parseDateValue(getRequiredString(body, "rentalEndDate"), "rentalEndDate");
    const rentalDays = getRentalDays(rentalStartDate, rentalEndDate);

    if (!items) {
      await prisma.rentalOrder.update({
        where: { id: orderId },
        data: {
          ...(nextStatus ? { status: nextStatus } : {}),
          ...(nextPaymentStatus ? { paymentStatus: nextPaymentStatus } : {}),
          ...(body.specialInstructions !== undefined ? { specialInstructions: specialInstructions ?? null } : {}),
          ...(body.internalNotes !== undefined ? { internalNotes: internalNotes ?? null } : {}),
          ...(body.rentalStartDate !== undefined ? { rentalStartDate } : {}),
          ...(body.rentalEndDate !== undefined ? { rentalEndDate } : {}),
        },
      });
    } else {
      const preparedItems = await prepareOrderItems(items, rentalDays, existingOrder);
      const subtotalAmount = preparedItems.reduce((sum, item) => sum + item.lineTotal, 0);
      const securityDeposit = preparedItems.reduce((sum, item) => sum + item.depositAmount, 0);
      const totalAmount = subtotalAmount + securityDeposit;

      await prisma.$transaction([
        ...buildInventoryRevertOperations(existingOrder),
        prisma.rentalOrder.update({
          where: { id: orderId },
          data: {
            ...(nextStatus ? { status: nextStatus } : {}),
            ...(nextPaymentStatus ? { paymentStatus: nextPaymentStatus } : {}),
            rentalStartDate,
            rentalEndDate,
            subtotalAmount,
            securityDeposit,
            totalAmount,
            ...(body.specialInstructions !== undefined ? { specialInstructions: specialInstructions ?? null } : {}),
            ...(body.internalNotes !== undefined ? { internalNotes: internalNotes ?? null } : {}),
            items: {
              deleteMany: {},
              create: buildOrderItemCreates(preparedItems),
            },
          },
        }),
        ...buildInventoryApplyOperations(preparedItems),
      ]);
    }

    const order = await prisma.rentalOrder.findUniqueOrThrow({
      where: { id: orderId },
      include: orderInclude,
    });

    response.json({
      success: true,
      message: "Order updated successfully",
      data: order,
    });
  }),
);
