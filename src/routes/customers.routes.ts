import { Router } from "express";

import { prisma } from "../lib/prisma.js";
import { asyncHandler } from "../utils/async-handler.js";
import { hashPassword } from "../utils/admin-auth.js";
import { AppError } from "../utils/app-error.js";
import { ensureObject, getOptionalString, getRequiredString } from "../utils/validation.js";

const ADMIN_CREATED_CUSTOMER_PASSWORD = "Lehenga@123";

const customerInclude = {
  _count: {
    select: {
      orders: true,
    },
  },
  orders: {
    orderBy: {
      createdAt: "desc" as const,
    },
    include: {
      items: {
        orderBy: {
          createdAt: "asc" as const,
        },
      },
      pickupLocation: true,
    },
  },
};

export const customersRouter = Router();

function splitCustomerName(name: string) {
  const [firstName, ...rest] = name.trim().split(/\s+/);

  return {
    firstName: firstName || name.trim(),
    lastName: rest.length > 0 ? rest.join(" ") : null,
  };
}

function exposeAdminCustomerPassword<T extends { email?: string | null }>(customer: T) {
  return {
    ...customer,
    adminVisiblePassword: customer.email ? null : ADMIN_CREATED_CUSTOMER_PASSWORD,
  };
}

customersRouter.get(
  "/",
  asyncHandler(async (_request, response) => {
    const customers = await prisma.customer.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: customerInclude,
    });

    response.json({
      success: true,
      data: customers.map(exposeAdminCustomerPassword),
    });
  }),
);

customersRouter.post(
  "/",
  asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const fullName = getOptionalString(body, "name");
    const nameParts = fullName ? splitCustomerName(fullName) : null;
    const firstName = nameParts?.firstName ?? getRequiredString(body, "firstName");
    const lastName = nameParts?.lastName ?? getOptionalString(body, "lastName");
    const email = getOptionalString(body, "email")?.toLowerCase();
    const phone = getRequiredString(body, "phone");
    const password = getOptionalString(body, "password") ?? ADMIN_CREATED_CUSTOMER_PASSWORD;
    const notes = getOptionalString(body, "notes");

    const existingCustomer = await prisma.customer.findFirst({
      where: {
        OR: [{ phone }, ...(email ? [{ email }] : [])],
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
        email: email ?? null,
        phone,
        passwordHash,
        ...(notes ? { notes } : {}),
      },
      include: customerInclude,
    });

    response.status(201).json({
      success: true,
      message: "Customer created successfully",
      data: exposeAdminCustomerPassword(customer),
    });
  }),
);
