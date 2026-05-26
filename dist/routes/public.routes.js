import { DepositRefundStatus, PaymentMethod, PaymentStatus, ProductStatus, RentalItemType } from "../generated/prisma/enums.js";
import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { env } from "../config/env.js";
import { asyncHandler } from "../utils/async-handler.js";
import { hashPassword, verifyPassword } from "../utils/admin-auth.js";
import { createCustomerToken, verifyCustomerToken } from "../utils/customer-auth.js";
import { AppError } from "../utils/app-error.js";
import { buildInventoryApplyOperations, buildOrderItemCreates, parseCheckoutItems, prepareCheckoutItems, summarizePreparedCheckout, } from "../utils/order-checkout.js";
import { createRazorpayOrder, verifyRazorpaySignature } from "../utils/razorpay.js";
import { ensureObject, getOptionalNumber, getOptionalString, getRequiredString, } from "../utils/validation.js";
const orderedImageInclude = {
    orderBy: {
        sortOrder: "asc",
    },
};
const publicLehengaInclude = {
    category: true,
    images: orderedImageInclude,
    sizes: {
        orderBy: {
            createdAt: "asc",
        },
    },
    reviews: {
        where: {
            isVisible: true,
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            customer: {
                select: {
                    firstName: true,
                    lastName: true,
                },
            },
        },
    },
};
const publicJewelleryInclude = {
    category: true,
    images: orderedImageInclude,
    reviews: {
        where: {
            isVisible: true,
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            customer: {
                select: {
                    firstName: true,
                    lastName: true,
                },
            },
        },
    },
};
const publicCategoryInclude = {
    lehengas: {
        where: {
            status: {
                not: ProductStatus.ARCHIVED,
            },
        },
        orderBy: {
            createdAt: "desc",
        },
        include: publicLehengaInclude,
    },
    jewelleryItems: {
        where: {
            status: {
                not: ProductStatus.ARCHIVED,
            },
        },
        orderBy: {
            createdAt: "desc",
        },
        include: publicJewelleryInclude,
    },
};
const orderInclude = {
    customer: true,
    pickupLocation: true,
    items: {
        orderBy: {
            createdAt: "asc",
        },
        include: {
            lehenga: {
                include: {
                    images: orderedImageInclude,
                },
            },
            lehengaSize: true,
            jewellery: {
                include: {
                    images: orderedImageInclude,
                },
            },
        },
    },
};
const publicCustomerSelect = {
    id: true,
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    notes: true,
    createdAt: true,
    updatedAt: true,
};
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
function getBearerToken(authorization) {
    if (!authorization?.startsWith("Bearer ")) {
        throw new AppError("Authorization token is required", 401);
    }
    return authorization.slice("Bearer ".length);
}
async function getAuthenticatedCustomer(authorization) {
    const token = getBearerToken(authorization);
    const { customerId } = verifyCustomerToken(token);
    const customer = await prisma.customer.findUnique({
        where: { id: customerId },
    });
    if (!customer) {
        throw new AppError("Customer account not found", 401);
    }
    return customer;
}
function getOptionalPositiveInteger(value, fallback) {
    const parsedValue = Number(value);
    if (value === undefined || value === null || value === "") {
        return fallback;
    }
    if (!Number.isInteger(parsedValue) || parsedValue <= 0) {
        throw new AppError("limit must be a positive integer", 400);
    }
    return parsedValue;
}
export const publicRouter = Router();
publicRouter.post("/auth/signup", asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const firstName = getRequiredString(body, "firstName");
    const lastName = getOptionalString(body, "lastName");
    const email = getRequiredString(body, "email").toLowerCase();
    const phone = getRequiredString(body, "phone");
    const password = getRequiredString(body, "password");
    const existingCustomers = await prisma.customer.findMany({
        where: {
            OR: [{ phone }, { email }],
        },
    });
    if (existingCustomers.length > 1) {
        throw new AppError("Email or phone number is already linked to another account.", 409);
    }
    const existingCustomer = existingCustomers[0];
    const passwordHash = await hashPassword(password);
    const customer = existingCustomer && existingCustomer.passwordHash
        ? (() => {
            throw new AppError("Customer already exists. Please log in.", 409);
        })()
        : existingCustomer
            ? await prisma.customer.update({
                where: { id: existingCustomer.id },
                data: {
                    firstName,
                    lastName: lastName ?? null,
                    email,
                    phone,
                    passwordHash,
                },
                select: publicCustomerSelect,
            })
            : await prisma.customer.create({
                data: {
                    firstName,
                    lastName: lastName ?? null,
                    email,
                    phone,
                    passwordHash,
                },
                select: publicCustomerSelect,
            });
    response.status(201).json({
        success: true,
        message: "Signup successful",
        data: {
            customer,
            token: createCustomerToken(customer.id, customer.phone, customer.email),
        },
    });
}));
publicRouter.post("/auth/login", asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const email = getRequiredString(body, "email").toLowerCase();
    const phone = getRequiredString(body, "phone");
    const password = getRequiredString(body, "password");
    const customer = await prisma.customer.findFirst({
        where: {
            email,
            phone,
        },
    });
    if (!customer || !customer.passwordHash) {
        throw new AppError("Customer account not found. Please sign up first.", 404);
    }
    if (!(await verifyPassword(password, customer.passwordHash))) {
        throw new AppError("Invalid login details", 401);
    }
    response.json({
        success: true,
        message: "Login successful",
        data: {
            customer: {
                id: customer.id,
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                phone: customer.phone,
                notes: customer.notes,
                createdAt: customer.createdAt,
                updatedAt: customer.updatedAt,
            },
            token: createCustomerToken(customer.id, customer.phone, customer.email),
        },
    });
}));
publicRouter.get("/auth/me", asyncHandler(async (request, response) => {
    const customer = await getAuthenticatedCustomer(request.headers.authorization);
    response.json({
        success: true,
        data: {
            id: customer.id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            phone: customer.phone,
            notes: customer.notes,
            createdAt: customer.createdAt,
            updatedAt: customer.updatedAt,
        },
    });
}));
publicRouter.get("/categories", asyncHandler(async (request, response) => {
    const limit = getOptionalPositiveInteger(request.query.limit, 0);
    const featuredOnly = request.query.featured === "true";
    const categories = await prisma.category.findMany({
        ...(featuredOnly
            ? {
                where: {
                    isFeatured: true,
                },
            }
            : {}),
        orderBy: [{ createdAt: "asc" }],
        ...(limit > 0 ? { take: limit } : {}),
        include: publicCategoryInclude,
    });
    response.json({
        success: true,
        data: categories,
    });
}));
publicRouter.get("/lehengas", asyncHandler(async (_request, response) => {
    const lehengas = await prisma.lehenga.findMany({
        where: {
            status: {
                not: ProductStatus.ARCHIVED,
            },
        },
        orderBy: { createdAt: "desc" },
        include: publicLehengaInclude,
    });
    response.json({
        success: true,
        data: lehengas,
    });
}));
publicRouter.get("/lehengas/:slug", asyncHandler(async (request, response) => {
    const slug = getRequiredString(request.params, "slug");
    const lehenga = await prisma.lehenga.findFirst({
        where: {
            slug,
            status: {
                not: ProductStatus.ARCHIVED,
            },
        },
        include: publicLehengaInclude,
    });
    if (!lehenga) {
        throw new AppError("Lehenga not found", 404);
    }
    response.json({
        success: true,
        data: lehenga,
    });
}));
publicRouter.get("/jewellery", asyncHandler(async (_request, response) => {
    const jewelleryItems = await prisma.jewellery.findMany({
        where: {
            status: {
                not: ProductStatus.ARCHIVED,
            },
        },
        orderBy: { createdAt: "desc" },
        include: publicJewelleryInclude,
    });
    response.json({
        success: true,
        data: jewelleryItems,
    });
}));
publicRouter.get("/jewellery/:slug", asyncHandler(async (request, response) => {
    const slug = getRequiredString(request.params, "slug");
    const jewellery = await prisma.jewellery.findFirst({
        where: {
            slug,
            status: {
                not: ProductStatus.ARCHIVED,
            },
        },
        include: publicJewelleryInclude,
    });
    if (!jewellery) {
        throw new AppError("Jewellery not found", 404);
    }
    response.json({
        success: true,
        data: jewellery,
    });
}));
publicRouter.get("/orders/mine", asyncHandler(async (request, response) => {
    const customer = await getAuthenticatedCustomer(request.headers.authorization);
    const orders = await prisma.rentalOrder.findMany({
        where: {
            customerId: customer.id,
        },
        orderBy: {
            createdAt: "desc",
        },
        include: orderInclude,
    });
    response.json({
        success: true,
        data: orders,
    });
}));
publicRouter.post("/orders/preview", asyncHandler(async (request, response) => {
    await getAuthenticatedCustomer(request.headers.authorization);
    const body = ensureObject(request.body);
    const items = parseCheckoutItems(body.items);
    const preparedItems = await prepareCheckoutItems(items);
    const summary = summarizePreparedCheckout(preparedItems);
    response.json({
        success: true,
        data: {
            rentalStartDate: summary.rentalStartDate,
            rentalEndDate: summary.rentalEndDate,
            subtotalAmount: summary.subtotalAmount,
            securityDeposit: summary.securityDeposit,
            totalAmount: summary.totalAmount,
            items: preparedItems.map((item) => ({
                itemType: item.itemType,
                productNameSnapshot: item.productNameSnapshot,
                quantity: item.quantity,
                rentalStartDate: item.rentalStartDate,
                rentalEndDate: item.rentalEndDate,
                rentalDays: item.rentalDays,
                lineTotal: item.lineTotal,
                depositAmount: item.depositAmount,
                sizeLabelSnapshot: item.sizeLabelSnapshot,
            })),
        },
    });
}));
publicRouter.post("/orders", asyncHandler(async (request, response) => {
    const customer = await getAuthenticatedCustomer(request.headers.authorization);
    const body = ensureObject(request.body);
    const specialInstructions = getOptionalString(body, "specialInstructions");
    const firstName = getOptionalString(body, "customerName");
    const email = getOptionalString(body, "customerEmail")?.toLowerCase();
    const rawPaymentMethod = getRequiredString(body, "paymentMethod");
    const paymentMethod = rawPaymentMethod === PaymentMethod.ONLINE ? PaymentMethod.ONLINE : rawPaymentMethod === PaymentMethod.PICKUP ? PaymentMethod.PICKUP : null;
    if (!paymentMethod) {
        throw new AppError("paymentMethod must be ONLINE or PICKUP", 400);
    }
    const items = parseCheckoutItems(body.items);
    const pickupLocation = await getDefaultPickupLocation();
    const preparedItems = await prepareCheckoutItems(items);
    const summary = summarizePreparedCheckout(preparedItems);
    if (email) {
        const existingEmailOwner = await prisma.customer.findFirst({
            where: {
                email,
                id: {
                    not: customer.id,
                },
            },
            select: {
                id: true,
            },
        });
        if (existingEmailOwner) {
            throw new AppError("This email is already linked to another customer account", 409);
        }
    }
    const orderNumber = generateOrderNumber();
    const depositRefundStatus = paymentMethod === PaymentMethod.ONLINE && summary.securityDeposit > 0
        ? DepositRefundStatus.PENDING
        : DepositRefundStatus.NOT_APPLICABLE;
    const razorpayOrder = paymentMethod === PaymentMethod.ONLINE
        ? await createRazorpayOrder({
            amountInPaise: Math.round(summary.totalAmount * 100),
            receipt: orderNumber,
            notes: {
                orderNumber,
                customerId: customer.id,
            },
        })
        : null;
    await prisma.$transaction([
        prisma.customer.update({
            where: { id: customer.id },
            data: {
                ...(firstName ? { firstName } : {}),
                ...(email ? { email } : {}),
            },
        }),
        prisma.rentalOrder.create({
            data: {
                orderNumber,
                customer: {
                    connect: { id: customer.id },
                },
                pickupLocation: {
                    connect: { id: pickupLocation.id },
                },
                paymentMethod,
                paymentStatus: PaymentStatus.PENDING,
                rentalStartDate: summary.rentalStartDate,
                rentalEndDate: summary.rentalEndDate,
                subtotalAmount: summary.subtotalAmount,
                securityDeposit: summary.securityDeposit,
                totalAmount: summary.totalAmount,
                amountPaid: paymentMethod === PaymentMethod.PICKUP ? 0 : 0,
                amountDueAtPickup: paymentMethod === PaymentMethod.PICKUP ? summary.totalAmount : 0,
                depositRefundStatus,
                ...(razorpayOrder ? { paymentGatewayOrderId: razorpayOrder.id } : {}),
                ...(specialInstructions ? { specialInstructions } : {}),
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
        message: paymentMethod === PaymentMethod.ONLINE ? "Order created. Complete the payment to confirm it." : "Order placed successfully",
        data: {
            order,
            ...(razorpayOrder
                ? {
                    razorpayOrder: {
                        id: razorpayOrder.id,
                        amount: razorpayOrder.amount,
                        currency: razorpayOrder.currency,
                        keyId: env.razorpayKeyId,
                        name: "Lehenga Rental",
                        description: `Payment for ${order.orderNumber}`,
                    },
                }
                : {}),
        },
    });
}));
publicRouter.post("/payments/razorpay/verify", asyncHandler(async (request, response) => {
    const customer = await getAuthenticatedCustomer(request.headers.authorization);
    const body = ensureObject(request.body);
    const orderId = getRequiredString(body, "orderId");
    const razorpayOrderId = getRequiredString(body, "razorpayOrderId");
    const razorpayPaymentId = getRequiredString(body, "razorpayPaymentId");
    const razorpaySignature = getRequiredString(body, "razorpaySignature");
    const order = await prisma.rentalOrder.findFirst({
        where: {
            id: orderId,
            customerId: customer.id,
        },
        include: orderInclude,
    });
    if (!order) {
        throw new AppError("Order not found", 404);
    }
    if (order.paymentMethod !== PaymentMethod.ONLINE) {
        throw new AppError("This order is not configured for online payment", 400);
    }
    if (!verifyRazorpaySignature({ razorpayOrderId, razorpayPaymentId, razorpaySignature })) {
        throw new AppError("Invalid Razorpay payment signature", 400);
    }
    const updatedOrder = await prisma.rentalOrder.update({
        where: {
            id: order.id,
        },
        data: {
            paymentStatus: PaymentStatus.PAID,
            amountPaid: order.totalAmount,
            amountDueAtPickup: 0,
            paymentGatewayOrderId: razorpayOrderId,
            paymentGatewayPaymentId: razorpayPaymentId,
            paymentGatewaySignature: razorpaySignature,
            paymentCapturedAt: new Date(),
            depositRefundStatus: Number(order.securityDeposit) > 0 ? DepositRefundStatus.PENDING : DepositRefundStatus.NOT_APPLICABLE,
        },
        include: orderInclude,
    });
    response.json({
        success: true,
        message: "Payment verified successfully",
        data: updatedOrder,
    });
}));
publicRouter.post("/reviews", asyncHandler(async (request, response) => {
    const customer = await getAuthenticatedCustomer(request.headers.authorization);
    const body = ensureObject(request.body);
    const itemType = getRequiredString(body, "itemType");
    const rating = getOptionalNumber(body, "rating");
    const comment = getRequiredString(body, "comment");
    if (itemType !== RentalItemType.LEHENGA && itemType !== RentalItemType.JEWELLERY) {
        throw new AppError("itemType must be LEHENGA or JEWELLERY", 400);
    }
    if (!rating || !Number.isInteger(rating) || rating < 1 || rating > 5) {
        throw new AppError("rating must be an integer between 1 and 5", 400);
    }
    const lehengaId = itemType === RentalItemType.LEHENGA ? getRequiredString(body, "lehengaId") : undefined;
    const jewelleryId = itemType === RentalItemType.JEWELLERY ? getRequiredString(body, "jewelleryId") : undefined;
    const matchingOrderItem = await prisma.rentalOrderItem.findFirst({
        where: {
            order: {
                customerId: customer.id,
            },
            ...(lehengaId ? { lehengaId } : {}),
            ...(jewelleryId ? { jewelleryId } : {}),
        },
        select: {
            id: true,
        },
    });
    if (!matchingOrderItem) {
        throw new AppError("You can review only products you have ordered", 403);
    }
    const existingReview = await prisma.productReview.findFirst({
        where: {
            customerId: customer.id,
            ...(lehengaId ? { lehengaId } : {}),
            ...(jewelleryId ? { jewelleryId } : {}),
        },
    });
    const review = existingReview
        ? await prisma.productReview.update({
            where: {
                id: existingReview.id,
            },
            data: {
                rating,
                comment,
                isVisible: true,
            },
            include: {
                customer: {
                    select: {
                        firstName: true,
                        lastName: true,
                    },
                },
            },
        })
        : await prisma.productReview.create({
            data: {
                customer: {
                    connect: { id: customer.id },
                },
                itemType: itemType,
                ...(lehengaId ? { lehenga: { connect: { id: lehengaId } } } : {}),
                ...(jewelleryId ? { jewellery: { connect: { id: jewelleryId } } } : {}),
                rating,
                comment,
                isVisible: true,
            },
            include: {
                customer: {
                    select: {
                        firstName: true,
                        lastName: true,
                    },
                },
            },
        });
    response.status(201).json({
        success: true,
        message: "Review saved successfully",
        data: review,
    });
}));
//# sourceMappingURL=public.routes.js.map