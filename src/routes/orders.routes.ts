import { Router } from "express";

import type { Prisma } from "../generated/prisma/client.js";
import { DepositRefundStatus, OrderStatus, PaymentMethod, PaymentStatus } from "../generated/prisma/enums.js";
import { prisma } from "../lib/prisma.js";
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
  getOptionalEnum,
  getOptionalString,
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
    const items = parseCheckoutItems(body.items);
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
    const items = body.items === undefined ? undefined : parseCheckoutItems(body.items);

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

    response.json({
      success: true,
      message: "Order updated successfully",
      data: order,
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

    if (order.paymentMethod !== PaymentMethod.ONLINE) {
      throw new AppError("Deposit refunds are available only for online payments", 400);
    }

    if (!order.paymentGatewayPaymentId) {
      throw new AppError("No online payment reference exists for this order", 400);
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

    response.json({
      success: true,
      message: "Security deposit refund initiated successfully",
      data: updatedOrder,
    });
  }),
);
