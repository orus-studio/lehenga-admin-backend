import { env } from "../config/env.js";

type OrderForWhatsApp = {
  orderNumber: string;
  rentalStartDate: Date;
  rentalEndDate: Date;
  subtotalAmount: unknown;
  securityDeposit: unknown;
  totalAmount: unknown;
  amountPaid: unknown;
  amountDueAtPickup: unknown;
  paymentMethod: string;
  customer: {
    firstName: string;
    lastName?: string | null;
    phone: string;
  };
  pickupLocation: {
    name: string;
    phone?: string | null;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    pickupNotes?: string | null;
  };
  items: Array<{
    productNameSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity: number;
    rentalStartDate: Date;
    rentalEndDate: Date;
    lineTotal: unknown;
  }>;
};

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(value);
}

function formatMoney(value: unknown) {
  return `INR ${Number(value ?? 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
}

function normalizeWhatsAppNumber(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 10 ? `91${digits}` : digits;
}

function textParameter(text: string) {
  return {
    type: "text",
    text: text.slice(0, 1000),
  };
}

export async function sendOrderConfirmationWhatsApp(order: OrderForWhatsApp) {
  if (!env.whatsappAccessToken || !env.whatsappPhoneNumberId) {
    return { sent: false, reason: "WhatsApp Cloud API is not configured" };
  }

  const customerName = [order.customer.firstName, order.customer.lastName].filter(Boolean).join(" ");
  const items = order.items
    .map(
      (item) =>
        `${item.productNameSnapshot}${item.sizeLabelSnapshot ? ` (${item.sizeLabelSnapshot})` : ""} x${item.quantity}, ${formatDate(item.rentalStartDate)} to ${formatDate(item.rentalEndDate)}, ${formatMoney(item.lineTotal)}`,
    )
    .join("; ");
  const pickup = [
    order.pickupLocation.name,
    order.pickupLocation.addressLine1,
    order.pickupLocation.addressLine2,
    order.pickupLocation.city,
    order.pickupLocation.state,
    order.pickupLocation.postalCode,
    order.pickupLocation.country,
    order.pickupLocation.pickupNotes,
  ]
    .filter(Boolean)
    .join(", ");
  const contact = [
    order.pickupLocation.phone || env.storeContactPhone,
    env.storeContactEmail,
  ]
    .filter(Boolean)
    .join(" | ") || "Contact details available on the store website";

  const response = await fetch(
    `https://graph.facebook.com/${env.whatsappApiVersion}/${env.whatsappPhoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.whatsappAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: normalizeWhatsAppNumber(order.customer.phone),
        type: "template",
        template: {
          name: env.whatsappOrderTemplateName,
          language: {
            code: env.whatsappTemplateLanguage,
          },
          components: [
            {
              type: "body",
              parameters: [
                textParameter(customerName || "Customer"),
                textParameter(order.orderNumber),
                textParameter(`${formatDate(order.rentalStartDate)} to ${formatDate(order.rentalEndDate)}`),
                textParameter(items),
                textParameter(pickup),
                textParameter(contact),
                textParameter(formatMoney(order.subtotalAmount)),
                textParameter(formatMoney(order.securityDeposit)),
                textParameter(formatMoney(order.totalAmount)),
                textParameter(
                  `${order.paymentMethod}; paid ${formatMoney(order.amountPaid)}; due at pickup ${formatMoney(order.amountDueAtPickup)}`,
                ),
              ],
            },
          ],
        },
      }),
    },
  );

  const result = await response.text();

  if (!response.ok) {
    throw new Error(`WhatsApp Cloud API returned ${response.status}: ${result}`);
  }

  return { sent: true };
}

export function queueOrderConfirmationWhatsApp(order: OrderForWhatsApp) {
  void sendOrderConfirmationWhatsApp(order).catch((error) => {
    console.error(`Failed to send WhatsApp confirmation for ${order.orderNumber}`, error);
  });
}
