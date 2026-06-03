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
    let response;
    try {
        response = await fetch(`${RAZORPAY_BASE_URL}${path}`, {
            ...init,
            headers: {
                "Content-Type": "application/json",
                Authorization: getBasicAuthHeader(),
                ...(init.headers ?? {}),
            },
        });
    }
    catch {
        throw new AppError("Unable to connect to Razorpay from the server", 502);
    }
    const text = await response.text();
    let json = null;
    try {
        json = text ? JSON.parse(text) : null;
    }
    catch {
        throw new AppError("Razorpay returned an invalid response", 502);
    }
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