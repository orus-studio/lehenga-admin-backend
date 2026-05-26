import crypto from "node:crypto";
import { env } from "../config/env.js";
import { AppError } from "./app-error.js";
const RAZORPAY_BASE_URL = "https://api.razorpay.com/v1";
function getBasicAuthHeader() {
    if (!env.razorpayKeyId || !env.razorpayKeySecret) {
        throw new AppError("Razorpay is not configured on the server", 500);
    }
    return `Basic ${Buffer.from(`${env.razorpayKeyId}:${env.razorpayKeySecret}`).toString("base64")}`;
}
async function razorpayRequest(path, init = {}) {
    const response = await fetch(`${RAZORPAY_BASE_URL}${path}`, {
        ...init,
        headers: {
            "Content-Type": "application/json",
            Authorization: getBasicAuthHeader(),
            ...(init.headers ?? {}),
        },
    });
    const text = await response.text();
    const json = text ? JSON.parse(text) : null;
    if (!response.ok) {
        throw new AppError(json?.error?.description ?? "Razorpay request failed", response.status);
    }
    return json;
}
export async function createRazorpayOrder(options) {
    return razorpayRequest("/orders", {
        method: "POST",
        body: JSON.stringify({
            amount: options.amountInPaise,
            currency: "INR",
            receipt: options.receipt,
            notes: options.notes,
        }),
    });
}
export function verifyRazorpaySignature(options) {
    if (!env.razorpayKeySecret) {
        throw new AppError("Razorpay is not configured on the server", 500);
    }
    const expectedSignature = crypto
        .createHmac("sha256", env.razorpayKeySecret)
        .update(`${options.razorpayOrderId}|${options.razorpayPaymentId}`)
        .digest("hex");
    return expectedSignature === options.razorpaySignature;
}
export async function refundRazorpayPayment(options) {
    return razorpayRequest(`/payments/${options.razorpayPaymentId}/refund`, {
        method: "POST",
        body: JSON.stringify({
            amount: options.amountInPaise,
            speed: "normal",
            notes: options.notes,
        }),
    });
}
//# sourceMappingURL=razorpay.js.map