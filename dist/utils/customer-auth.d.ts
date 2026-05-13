export declare function createCustomerToken(customerId: string, phone: string, email?: string | null): string;
export declare function verifyCustomerToken(token: string): {
    customerId: string;
    phone?: string;
    email?: string;
};
//# sourceMappingURL=customer-auth.d.ts.map