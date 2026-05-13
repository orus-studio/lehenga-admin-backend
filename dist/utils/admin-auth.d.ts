export declare function hashPassword(password: string): Promise<string>;
export declare function verifyPassword(password: string, passwordHash: string): Promise<boolean>;
export declare function createAdminToken(adminId: string, email: string): string;
export declare function verifyAdminToken(token: string): {
    adminId: string;
    email?: string;
};
//# sourceMappingURL=admin-auth.d.ts.map