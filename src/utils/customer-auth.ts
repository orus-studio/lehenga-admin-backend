import jwt from "jsonwebtoken";

import { env } from "../config/env.js";

export function createCustomerToken(customerId: string, phone: string, email?: string | null): string {
  return jwt.sign(
    {
      sub: customerId,
      phone,
      role: "customer",
      ...(email ? { email } : {}),
    },
    env.jwtSecret,
    {
      expiresIn: env.jwtExpiresIn,
    },
  );
}

export function verifyCustomerToken(
  token: string,
): {
  customerId: string;
  phone?: string;
  email?: string;
} {
  const decoded = jwt.verify(token, env.jwtSecret);

  if (typeof decoded === "string" || !decoded.sub) {
    throw new Error("Invalid token");
  }

  const payload = decoded as {
    sub: string;
    phone?: unknown;
    email?: unknown;
  };

  return {
    customerId: payload.sub,
    ...(typeof payload.phone === "string" ? { phone: payload.phone } : {}),
    ...(typeof payload.email === "string" ? { email: payload.email } : {}),
  };
}
