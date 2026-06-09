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
export declare function sendOrderConfirmationWhatsApp(order: OrderForWhatsApp): Promise<{
    sent: boolean;
    reason: string;
} | {
    sent: boolean;
    reason?: never;
}>;
export declare function queueOrderConfirmationWhatsApp(order: OrderForWhatsApp): void;
export {};
//# sourceMappingURL=whatsapp.d.ts.map