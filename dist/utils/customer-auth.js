import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
export function createCustomerToken(customerId, phone, email) {
    return jwt.sign({
        sub: customerId,
        phone,
        role: "customer",
        ...(email ? { email } : {}),
    }, env.jwtSecret, {
        expiresIn: env.jwtExpiresIn,
    });
}
export function verifyCustomerToken(token) {
    const decoded = jwt.verify(token, env.jwtSecret);
    if (typeof decoded === "string" || !decoded.sub) {
        throw new Error("Invalid token");
    }
    const payload = decoded;
    return {
        customerId: payload.sub,
        ...(typeof payload.phone === "string" ? { phone: payload.phone } : {}),
        ...(typeof payload.email === "string" ? { email: payload.email } : {}),
    };
}
//# sourceMappingURL=customer-auth.js.map