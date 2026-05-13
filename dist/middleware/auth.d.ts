import type { NextFunction, Request, Response } from "express";
export interface AuthenticatedRequest extends Request {
    admin?: {
        id: string;
        email: string;
        name: string;
    };
}
export declare function requireAdmin(request: AuthenticatedRequest, _response: Response, next: NextFunction): Promise<void>;
//# sourceMappingURL=auth.d.ts.map