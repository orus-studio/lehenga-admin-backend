import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
export async function hashPassword(password) {
    return bcrypt.hash(password, 10);
}
export async function verifyPassword(password, passwordHash) {
    return bcrypt.compare(password, passwordHash);
}
export function createAdminToken(adminId, email) {
    return jwt.sign({ sub: adminId, email }, env.jwtSecret, {
        expiresIn: env.jwtExpiresIn,
    });
}
export function verifyAdminToken(token) {
    const decoded = jwt.verify(token, env.jwtSecret);
    if (typeof decoded === "string" || !decoded.sub) {
        throw new Error("Invalid token");
    }
    return decoded.email
        ? {
            adminId: decoded.sub,
            email: decoded.email,
        }
        : {
            adminId: decoded.sub,
        };
}
//# sourceMappingURL=admin-auth.js.map