import { Router } from "express";

import type { Prisma } from "../generated/prisma/client.js";
import { DepositRefundStatus, OrderStatus, PaymentMethod, PaymentStatus } from "../generated/prisma/enums.js";
import { prisma } from "../lib/prisma.js";
import { invalidateAvailabilityCache } from "../lib/catalog-cache.js";
import type { AuthenticatedRequest } from "../middleware/auth.js";
import { asyncHandler } from "../utils/async-handler.js";
import { AppError } from "../utils/app-error.js";
import {
  buildInventoryApplyOperations,
  buildInventoryRevertOperations,
  buildOrderItemCreates,
  parseCheckoutItems,
  prepareCheckoutItems,
  summarizePreparedCheckout,
} from "../utils/order-checkout.js";
import { refundRazorpayPayment } from "../utils/razorpay.js";
import {
  ensureObject,
  getOptionalNumber,
  getOptionalEnum,
  getOptionalString,
  getRequiredString,
} from "../utils/validation.js";
import { queueOrderConfirmationWhatsApp } from "../utils/whatsapp.js";

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

const orderStatusValues = Object.values(OrderStatus) as string[];
const paymentStatusValues = Object.values(PaymentStatus) as string[];
const paymentMethodValues = Object.values(PaymentMethod) as string[];

type ExistingOrderForEdit = Awaited<ReturnType<typeof fetchEditableOrder>>;

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

function parseRentalDateFilter(value: unknown, endOfDay = false) {
  if (typeof value !== "string") {
    return null;
  }

  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);
  const date = new Date(
    dateOnly
      ? `${value}T${endOfDay ? "23:59:59.999" : "00:00:00.000"}Z`
      : value,
  );

  if (Number.isNaN(date.getTime())) {
    throw new AppError("rentalFrom and rentalTo must be valid dates", 400);
  }

  return date;
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

function assertCanCompleteOrder(order: { status: OrderStatus }) {
  if (order.status === OrderStatus.FULFILLED) {
    throw new AppError("This order is already fulfilled", 409);
  }

  if (order.status === OrderStatus.CANCELLED) {
    throw new AppError("Cancelled orders cannot be fulfilled", 409);
  }
}

export const ordersRouter = Router();

ordersRouter.get(
  "/",
  asyncHandler(async (request, response) => {
    const rentalFrom = parseRentalDateFilter(request.query.rentalFrom);
    const rentalTo = parseRentalDateFilter(request.query.rentalTo, true);

    if (rentalFrom && rentalTo && rentalTo < rentalFrom) {
      throw new AppError("rentalTo must be on or after rentalFrom", 400);
    }

    const orders = await prisma.rentalOrder.findMany({
      ...(rentalFrom || rentalTo
        ? {
            where: {
              items: {
                some: {
                  ...(rentalTo ? { rentalStartDate: { lte: rentalTo } } : {}),
                  ...(rentalFrom ? { rentalEndDate: { gte: rentalFrom } } : {}),
                },
              },
            },
          }
        : {}),
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
    const specialInstructions = getOptionalString(body, "specialInstructions");
    const internalNotes = getOptionalString(body, "internalNotes");
    const status = (getOptionalEnum(body, "status", orderStatusValues) as OrderStatus | null) ?? OrderStatus.PENDING;
    const paymentStatus =
      (getOptionalEnum(body, "paymentStatus", paymentStatusValues) as PaymentStatus | null) ??
      PaymentStatus.PENDING;
    const paymentMethod =
      (getOptionalEnum(body, "paymentMethod", paymentMethodValues) as PaymentMethod | null) ??
      PaymentMethod.PICKUP;
    const pickupLocation = await getDefaultPickupLocation();
    const items = parseCheckoutItems(body.items, { allowPriceDiscountPerDay: true });
    const preparedItems = await prepareCheckoutItems(items);
    const summary = summarizePreparedCheckout(preparedItems);
    const orderNumber = generateOrderNumber();
    const depositRefundStatus =
      paymentMethod === PaymentMethod.ONLINE && summary.securityDeposit > 0
        ? DepositRefundStatus.PENDING
        : DepositRefundStatus.NOT_APPLICABLE;

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
          paymentMethod,
          rentalStartDate: summary.rentalStartDate,
          rentalEndDate: summary.rentalEndDate,
          subtotalAmount: summary.subtotalAmount,
          securityDeposit: summary.securityDeposit,
          discountAmount: summary.discountAmount,
          totalAmount: summary.totalAmount,
          amountDueAtPickup: paymentMethod === PaymentMethod.PICKUP ? summary.totalAmount : 0,
          depositRefundStatus,
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
    await invalidateAvailabilityCache();
    queueOrderConfirmationWhatsApp(order);

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
    const nextStatus = getOptionalEnum(body, "status", orderStatusValues) as OrderStatus | null;
    const nextPaymentStatus = getOptionalEnum(body, "paymentStatus", paymentStatusValues) as PaymentStatus | null;
    const nextPaymentMethod = getOptionalEnum(body, "paymentMethod", paymentMethodValues) as PaymentMethod | null;
    const specialInstructions = getOptionalString(body, "specialInstructions");
    const internalNotes = getOptionalString(body, "internalNotes");
    const items = body.items === undefined ? undefined : parseCheckoutItems(body.items, { allowPriceDiscountPerDay: true });

    if (!items) {
      const updateData: Prisma.RentalOrderUpdateInput = {
        ...(nextStatus ? { status: nextStatus } : {}),
        ...(nextPaymentStatus ? { paymentStatus: nextPaymentStatus } : {}),
        ...(nextPaymentMethod ? { paymentMethod: nextPaymentMethod } : {}),
        ...(body.specialInstructions !== undefined ? { specialInstructions: specialInstructions ?? null } : {}),
        ...(body.internalNotes !== undefined ? { internalNotes: internalNotes ?? null } : {}),
      };

      await prisma.rentalOrder.update({
        where: { id: orderId },
        data: updateData,
      });
    } else {
      const preparedItems = await prepareCheckoutItems(items, existingOrder);
      const summary = summarizePreparedCheckout(preparedItems);
      const paymentMethod = nextPaymentMethod ?? existingOrder.paymentMethod;
      const depositRefundStatus =
        paymentMethod === PaymentMethod.ONLINE && summary.securityDeposit > 0
          ? DepositRefundStatus.PENDING
          : DepositRefundStatus.NOT_APPLICABLE;

      const updateData: Prisma.RentalOrderUpdateInput = {
        ...(nextStatus ? { status: nextStatus } : {}),
        ...(nextPaymentStatus ? { paymentStatus: nextPaymentStatus } : {}),
        ...(nextPaymentMethod ? { paymentMethod: nextPaymentMethod } : {}),
        rentalStartDate: summary.rentalStartDate,
        rentalEndDate: summary.rentalEndDate,
        subtotalAmount: summary.subtotalAmount,
        securityDeposit: summary.securityDeposit,
        discountAmount: summary.discountAmount,
        totalAmount: summary.totalAmount,
        amountDueAtPickup: paymentMethod === PaymentMethod.PICKUP ? summary.totalAmount : 0,
        depositRefundStatus,
        ...(body.specialInstructions !== undefined ? { specialInstructions: specialInstructions ?? null } : {}),
        ...(body.internalNotes !== undefined ? { internalNotes: internalNotes ?? null } : {}),
        items: {
          deleteMany: {},
          create: buildOrderItemCreates(preparedItems),
        },
      };

      await prisma.$transaction([
        ...buildInventoryRevertOperations(existingOrder),
        prisma.rentalOrder.update({
          where: { id: orderId },
          data: updateData,
        }),
        ...buildInventoryApplyOperations(preparedItems),
      ]);
    }

    const order = await prisma.rentalOrder.findUniqueOrThrow({
      where: { id: orderId },
      include: orderInclude,
    });
    await invalidateAvailabilityCache();

    response.json({
      success: true,
      message: "Order updated successfully",
      data: order,
    });
  }),
);

ordersRouter.post(
  "/:id/complete",
  asyncHandler(async (request, response) => {
    const orderId = getRequiredString({ id: request.params.id }, "id");
    const body = ensureObject(request.body);
    const refundAmount = getOptionalNumber(body, "refundAmount") ?? 0;
    const refundNotes = getOptionalString(body, "refundNotes");

    if (refundAmount < 0) {
      throw new AppError("refundAmount must be zero or more", 400);
    }

    const order = await prisma.rentalOrder.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new AppError("Order not found", 404);
    }

    assertCanCompleteOrder(order);

    const securityDeposit = Number(order.securityDeposit);

    if (refundAmount > securityDeposit) {
      throw new AppError("Refund amount cannot be greater than the security deposit", 400);
    }

    if (refundAmount > 0 && order.depositRefundStatus === DepositRefundStatus.REFUNDED) {
      throw new AppError("The security deposit has already been refunded", 409);
    }

    let refundReference: string | null = null;
    let nextRefundStatus: DepositRefundStatus =
      securityDeposit > 0 && refundAmount > 0 ? DepositRefundStatus.REFUNDED : DepositRefundStatus.NOT_APPLICABLE;

    if (refundAmount > 0 && order.paymentGatewayPaymentId) {
      const refund = await refundRazorpayPayment({
        razorpayPaymentId: order.paymentGatewayPaymentId,
        amountInPaise: Math.round(refundAmount * 100),
        notes: {
          orderNumber: order.orderNumber,
          reason: refundNotes ?? "Security deposit refund",
        },
      });

      refundReference = refund.id;
      nextRefundStatus = refund.status === "processed" ? DepositRefundStatus.REFUNDED : DepositRefundStatus.PENDING;
    }

    const updatedOrder = await prisma.rentalOrder.update({
      where: { id: order.id },
      data: {
        status: OrderStatus.FULFILLED,
        depositRefundStatus: nextRefundStatus,
        depositRefundedAmount: refundAmount,
        depositRefundedAt: refundAmount > 0 ? new Date() : null,
        depositRefundReference: refundReference,
        depositRefundNotes: refundNotes ?? null,
      },
      include: orderInclude,
    });

    await invalidateAvailabilityCache();

    response.json({
      success: true,
      message:
        refundAmount > 0
          ? "Order fulfilled and deposit refund recorded"
          : "Order fulfilled without deposit refund",
      data: updatedOrder,
    });
  }),
);

ordersRouter.post(
  "/:id/refund-deposit",
  asyncHandler(async (request, response) => {
    const orderId = getRequiredString({ id: request.params.id }, "id");
    const order = await prisma.rentalOrder.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new AppError("Order not found", 404);
    }

    if (!order.paymentGatewayPaymentId) {
      throw new AppError("No gateway payment reference exists for this order", 400);
    }

    if (order.depositRefundStatus === DepositRefundStatus.REFUNDED) {
      throw new AppError("The security deposit has already been refunded", 409);
    }

    const refundAmount = Number(order.securityDeposit);

    if (refundAmount <= 0) {
      throw new AppError("This order does not have a refundable deposit", 400);
    }

    const refund = await refundRazorpayPayment({
      razorpayPaymentId: order.paymentGatewayPaymentId,
      amountInPaise: Math.round(refundAmount * 100),
      notes: {
        orderNumber: order.orderNumber,
        reason: "Security deposit refund",
      },
    });

    const updatedOrder = await prisma.rentalOrder.update({
      where: { id: order.id },
      data: {
        depositRefundStatus: refund.status === "processed" ? DepositRefundStatus.REFUNDED : DepositRefundStatus.PENDING,
        depositRefundedAmount: refundAmount,
        depositRefundedAt: new Date(),
        depositRefundReference: refund.id,
      },
      include: orderInclude,
    });

    const updatedOrderWithInventory =
      refund.status === "processed"
        ? await prisma.$transaction(async (tx) => {
            const orderWithItems = await tx.rentalOrder.findUnique({
              where: { id: order.id },
              include: { items: true },
            });

            if (!orderWithItems) {
              throw new AppError("Order not found", 404);
            }

            for (const item of orderWithItems.items) {
              if (item.lehengaSizeId) {
                await tx.lehengaSize.update({
                  where: { id: item.lehengaSizeId },
                  data: {
                    quantityReserved: {
                      decrement: item.quantity,
                    },
                  },
                });
              }

              if (item.jewelleryId) {
                await tx.jewellery.update({
                  where: { id: item.jewelleryId },
                  data: {
                    stockQuantity: {
                      increment: item.quantity,
                    },
                  },
                });
              }
            }

            return tx.rentalOrder.findUniqueOrThrow({
              where: { id: order.id },
              include: orderInclude,
            });
          })
        : updatedOrder;

    response.json({
      success: true,
      message: "Security deposit refund initiated successfully",
      data: updatedOrderWithInventory,
    });
  }),
);
