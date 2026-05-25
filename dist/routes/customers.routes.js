import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { asyncHandler } from "../utils/async-handler.js";
import { hashPassword } from "../utils/admin-auth.js";
import { AppError } from "../utils/app-error.js";
import { ensureObject, getOptionalString, getRequiredString } from "../utils/validation.js";
const customerInclude = {
    _count: {
        select: {
            orders: true,
        },
    },
    orders: {
        orderBy: {
            createdAt: "desc",
        },
        include: {
            items: {
                orderBy: {
                    createdAt: "asc",
                },
            },
            pickupLocation: true,
        },
    },
};
export const customersRouter = Router();
customersRouter.get("/", asyncHandler(async (_request, response) => {
    const customers = await prisma.customer.findMany({
        orderBy: {
            createdAt: "desc",
        },
        include: customerInclude,
    });
    response.json({
        success: true,
        data: customers,
    });
}));
customersRouter.post("/", asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const firstName = getRequiredString(body, "firstName");
    const lastName = getOptionalString(body, "lastName");
    const email = getRequiredString(body, "email").toLowerCase();
    const phone = getRequiredString(body, "phone");
    const password = getRequiredString(body, "password");
    const notes = getOptionalString(body, "notes");
    const existingCustomer = await prisma.customer.findFirst({
        where: {
            OR: [{ email }, { phone }],
        },
        select: {
            id: true,
        },
    });
    if (existingCustomer) {
        throw new AppError("A customer with this email or phone already exists", 409);
    }
    const passwordHash = await hashPassword(password);
    const customer = await prisma.customer.create({
        data: {
            firstName,
            lastName: lastName ?? null,
            email,
            phone,
            passwordHash,
            ...(notes ? { notes } : {}),
        },
        include: customerInclude,
    });
    response.status(201).json({
        success: true,
        message: "Customer created successfully",
        data: customer,
    });
}));
//# sourceMappingURL=customers.routes.js.map