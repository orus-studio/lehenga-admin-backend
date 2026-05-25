import { ProductStatus, RentalItemType } from "../generated/prisma/enums.js";
import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { asyncHandler } from "../utils/async-handler.js";
import { hashPassword, verifyPassword } from "../utils/admin-auth.js";
import { createCustomerToken, verifyCustomerToken } from "../utils/customer-auth.js";
import { AppError } from "../utils/app-error.js";
import { ensureObject, getOptionalNumber, getOptionalString, getRequiredArray, getRequiredString, } from "../utils/validation.js";
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
};
const publicJewelleryInclude = {
    category: true,
    images: orderedImageInclude,
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
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
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
function parseDateValue(value, key) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        throw new AppError(`${key} must be a valid date`, 400);
    }
    return date;
}
function getRentalDays(startDate, endDate) {
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
publicRouter.post("/orders", asyncHandler(async (request, response) => {
    const customer = await getAuthenticatedCustomer(request.headers.authorization);
    const body = ensureObject(request.body);
    const rentalStartDate = parseDateValue(getRequiredString(body, "rentalStartDate"), "rentalStartDate");
    const rentalEndDate = parseDateValue(getRequiredString(body, "rentalEndDate"), "rentalEndDate");
    const specialInstructions = getOptionalString(body, "specialInstructions");
    const firstName = getOptionalString(body, "customerName");
    const email = getOptionalString(body, "customerEmail")?.toLowerCase();
    const items = getRequiredArray(body, "items").map((entry, index) => {
        const item = ensureObject(entry, `items[${index}] must be an object`);
        const itemType = getRequiredString(item, "itemType");
        const quantity = getOptionalNumber(item, "quantity") ?? 1;
        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new AppError(`items[${index}].quantity must be a positive integer`, 400);
        }
        if (itemType === RentalItemType.LEHENGA) {
            return {
                itemType,
                quantity,
                lehengaId: getRequiredString(item, "lehengaId"),
                lehengaSizeId: getOptionalString(item, "lehengaSizeId"),
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
    const rentalDays = getRentalDays(rentalStartDate, rentalEndDate);
    const pickupLocation = await getDefaultPickupLocation();
    const lehengaItems = items.filter((item) => item.itemType === RentalItemType.LEHENGA);
    const jewelleryItems = items.filter((item) => item.itemType === RentalItemType.JEWELLERY);
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
    const preparedItems = items.map((item) => {
        if (item.itemType === RentalItemType.LEHENGA) {
            const lehenga = lehengasById.get(item.lehengaId);
            if (!lehenga) {
                throw new AppError("Selected lehenga was not found", 404);
            }
            const selectedSize = (item.lehengaSizeId
                ? lehenga.sizes.find((size) => size.id === item.lehengaSizeId)
                : lehenga.sizes[0]) ?? null;
            if (item.lehengaSizeId && !selectedSize) {
                throw new AppError(`Selected size is not available for ${lehenga.name}`, 400);
            }
            if (selectedSize && selectedSize.quantityReserved + item.quantity > selectedSize.quantityTotal) {
                throw new AppError(`Only limited stock is available for ${lehenga.name} (${selectedSize.sizeLabel})`, 400);
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
                sizeLabelSnapshot: selectedSize?.sizeLabel,
                lehengaId: lehenga.id,
                lehengaSizeId: selectedSize?.id,
            };
        }
        const jewellery = jewelleryById.get(item.jewelleryId);
        if (!jewellery) {
            throw new AppError("Selected jewellery item was not found", 404);
        }
        if (item.quantity > jewellery.stockQuantity) {
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
    const subtotalAmount = preparedItems.reduce((sum, item) => sum + item.lineTotal, 0);
    const securityDeposit = preparedItems.reduce((sum, item) => sum + item.depositAmount, 0);
    const totalAmount = subtotalAmount + securityDeposit;
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
    // Avoid interactive transactions here because pooled Postgres connections can
    // stall on long-lived tx callbacks during checkout.
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
                rentalStartDate,
                rentalEndDate,
                subtotalAmount,
                securityDeposit,
                totalAmount,
                ...(specialInstructions ? { specialInstructions } : {}),
                items: {
                    create: preparedItems.map((item) => ({
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
                                ...(item.sizeLabelSnapshot ? { sizeLabelSnapshot: item.sizeLabelSnapshot } : {}),
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
                        quantity: item.quantity,
                        pricePerDay: item.pricePerDay,
                        rentalDays: item.rentalDays,
                        lineTotal: item.lineTotal,
                        depositAmount: item.depositAmount,
                    })),
                },
            },
        }),
        ...preparedItems.flatMap((item) => {
            const operations = [];
            if (item.lehengaSizeId) {
                operations.push(prisma.lehengaSize.update({
                    where: { id: item.lehengaSizeId },
                    data: {
                        quantityReserved: {
                            increment: item.quantity,
                        },
                    },
                }));
            }
            if (item.jewelleryId) {
                operations.push(prisma.jewellery.update({
                    where: { id: item.jewelleryId },
                    data: {
                        stockQuantity: {
                            decrement: item.quantity,
                        },
                    },
                }));
            }
            return operations;
        }),
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
}));
//# sourceMappingURL=public.routes.js.map