import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { env } from "../config/env.js";

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, passwordHash: string): Promise<boolean> {
  return bcrypt.compare(password, passwordHash);
}

export function createAdminToken(adminId: string, email: string): string {
  return jwt.sign({ sub: adminId, email }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn,
  });
}

export function verifyAdminToken(token: string): { adminId: string; email?: string } {
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
