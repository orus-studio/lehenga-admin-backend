import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { requireAdmin } from "../middleware/auth.js";
import { asyncHandler } from "../utils/async-handler.js";
import { createAdminToken, hashPassword, verifyPassword } from "../utils/admin-auth.js";
import { AppError } from "../utils/app-error.js";
import { ensureObject, getOptionalString, getRequiredString } from "../utils/validation.js";
export const authRouter = Router();
authRouter.post("/register", asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const existingAdmin = await prisma.adminUser.count();
    if (existingAdmin > 0) {
        throw new AppError("Admin is already registered. Please log in.", 409);
    }
    const name = getRequiredString(body, "name");
    const email = getRequiredString(body, "email").toLowerCase();
    const password = getRequiredString(body, "password");
    const phone = getOptionalString(body, "phone");
    const admin = await prisma.adminUser.create({
        data: {
            name,
            email,
            phone: phone ?? null,
            passwordHash: await hashPassword(password),
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            createdAt: true,
        },
    });
    const token = createAdminToken(admin.id, admin.email);
    response.status(201).json({
        success: true,
        message: "Admin account created successfully",
        data: {
            admin,
            token,
        },
    });
}));
authRouter.post("/login", asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const email = getRequiredString(body, "email").toLowerCase();
    const password = getRequiredString(body, "password");
    const admin = await prisma.adminUser.findUnique({
        where: { email },
    });
    if (!admin || !(await verifyPassword(password, admin.passwordHash))) {
        throw new AppError("Invalid email or password", 401);
    }
    if (!admin.isActive) {
        throw new AppError("Admin account is inactive", 403);
    }
    await prisma.adminUser.update({
        where: { id: admin.id },
        data: {
            lastLoginAt: new Date(),
        },
    });
    const token = createAdminToken(admin.id, admin.email);
    response.json({
        success: true,
        message: "Login successful",
        data: {
            admin: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
                phone: admin.phone,
            },
            token,
        },
    });
}));
authRouter.get("/me", requireAdmin, asyncHandler(async (request, response) => {
    const admin = await prisma.adminUser.findUnique({
        where: { id: request.admin.id },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            isActive: true,
            createdAt: true,
            lastLoginAt: true,
        },
    });
    response.json({
        success: true,
        data: admin,
    });
}));
//# sourceMappingURL=auth.routes.js.map