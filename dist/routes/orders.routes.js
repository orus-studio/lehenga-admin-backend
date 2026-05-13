import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { asyncHandler } from "../utils/async-handler.js";
const orderInclude = {
    customer: true,
    pickupLocation: true,
    items: {
        orderBy: {
            createdAt: "asc",
        },
        include: {
            lehenga: {
                include: {
                    images: {
                        orderBy: {
                            sortOrder: "asc",
                        },
                    },
                },
            },
            jewellery: {
                include: {
                    images: {
                        orderBy: {
                            sortOrder: "asc",
                        },
                    },
                },
            },
        },
    },
};
export const ordersRouter = Router();
ordersRouter.get("/", asyncHandler(async (_request, response) => {
    const orders = await prisma.rentalOrder.findMany({
        orderBy: {
            createdAt: "desc",
        },
        include: orderInclude,
    });
    response.json({
        success: true,
        data: orders,
    });
}));
//# sourceMappingURL=orders.routes.js.map