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

async function razorpayRequest<T>(path: string, init: RequestInit = {}) {
  const response = await fetch(`${RAZORPAY_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: getBasicAuthHeader(),
      ...(init.headers ?? {}),
    },
  });

  const text = await response.text();
  const json = text ? (JSON.parse(text) as T & { error?: { description?: string } }) : null;

  if (!response.ok) {
    throw new AppError(json?.error?.description ?? "Razorpay request failed", response.status);
  }

  return json as T;
}

export type RazorpayOrderResponse = {
  id: string;
  amount: number;
  currency: string;
  receipt?: string;
  status: string;
};

export type RazorpayRefundResponse = {
  id: string;
  amount: number;
  status: string;
};

export async function createRazorpayOrder(options: {
  amountInPaise: number;
  receipt: string;
  notes?: Record<string, string>;
}) {
  return razorpayRequest<RazorpayOrderResponse>("/orders", {
    method: "POST",
    body: JSON.stringify({
      amount: options.amountInPaise,
      currency: "INR",
      receipt: options.receipt,
      notes: options.notes,
    }),
  });
}

export function verifyRazorpaySignature(options: {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}) {
  if (!env.razorpayKeySecret) {
    throw new AppError("Razorpay is not configured on the server", 500);
  }

  const expectedSignature = crypto
    .createHmac("sha256", env.razorpayKeySecret)
    .update(`${options.razorpayOrderId}|${options.razorpayPaymentId}`)
    .digest("hex");

  return expectedSignature === options.razorpaySignature;
}

export async function refundRazorpayPayment(options: {
  razorpayPaymentId: string;
  amountInPaise: number;
  notes?: Record<string, string>;
}) {
  return razorpayRequest<RazorpayRefundResponse>(`/payments/${options.razorpayPaymentId}/refund`, {
    method: "POST",
    body: JSON.stringify({
      amount: options.amountInPaise,
      speed: "normal",
      notes: options.notes,
    }),
  });
}
