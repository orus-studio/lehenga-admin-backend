import { Prisma } from "../generated/prisma/client.js";
import { AppError } from "../utils/app-error.js";
export function notFoundHandler(_request, response) {
    response.status(404).json({
        success: false,
        message: "Route not found",
    });
}
export function errorHandler(error, _request, response, _next) {
    if (error instanceof AppError) {
        response.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
        return;
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
            response.status(409).json({
                success: false,
                message: "A record with this unique value already exists",
            });
            return;
        }
        if (error.code === "P2025") {
            response.status(404).json({
                success: false,
                message: "Requested record was not found",
            });
            return;
        }
    }
    console.error(error);
    response.status(500).json({
        success: false,
        message: "Something went wrong on the server",
    });
}
//# sourceMappingURL=error-handler.js.map