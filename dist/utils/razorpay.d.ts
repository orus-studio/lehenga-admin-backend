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
export declare function createRazorpayOrder(options: {
    amountInPaise: number;
    receipt: string;
    notes?: Record<string, string>;
}): Promise<RazorpayOrderResponse>;
export declare function verifyRazorpaySignature(options: {
    razorpayOrderId: string;
    razorpayPaymentId: string;
    razorpaySignature: string;
}): boolean;
export declare function refundRazorpayPayment(options: {
    razorpayPaymentId: string;
    amountInPaise: number;
    notes?: Record<string, string>;
}): Promise<RazorpayRefundResponse>;
//# sourceMappingURL=razorpay.d.ts.map