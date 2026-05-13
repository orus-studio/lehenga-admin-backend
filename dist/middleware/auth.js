import { prisma } from "../lib/prisma.js";
import { AppError } from "../utils/app-error.js";
import { verifyAdminToken } from "../utils/admin-auth.js";
export async function requireAdmin(request, _response, next) {
    const authorization = request.headers.authorization;
    if (!authorization?.startsWith("Bearer ")) {
        next(new AppError("Authorization token is required", 401));
        return;
    }
    try {
        const token = authorization.slice("Bearer ".length);
        const { adminId } = verifyAdminToken(token);
        const admin = await prisma.adminUser.findUnique({
            where: { id: adminId },
            select: {
                id: true,
                email: true,
                name: true,
                isActive: true,
            },
        });
        if (!admin || !admin.isActive) {
            next(new AppError("Admin account not found or inactive", 401));
            return;
        }
        request.admin = {
            id: admin.id,
            email: admin.email,
            name: admin.name,
        };
        next();
    }
    catch {
        next(new AppError("Invalid or expired token", 401));
    }
}
//# sourceMappingURL=auth.js.map