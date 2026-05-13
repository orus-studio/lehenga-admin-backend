import { Router } from "express";

import { requireAdmin } from "../middleware/auth.js";
import { authRouter } from "./auth.routes.js";
import { collectionsRouter } from "./collections.routes.js";
import { jewelleryRouter } from "./jewellery.routes.js";
import { lehengasRouter } from "./lehengas.routes.js";
import { ordersRouter } from "./orders.routes.js";
import { publicRouter } from "./public.routes.js";

export const apiRouter = Router();

apiRouter.get("/health", (_request, response) => {
  response.json({
    success: true,
    message: "Lehenga admin backend is running",
  });
});

apiRouter.use("/admin/auth", authRouter);
apiRouter.use("/public", publicRouter);
apiRouter.use("/admin/collections", requireAdmin, collectionsRouter);
apiRouter.use("/admin/lehengas", requireAdmin, lehengasRouter);
apiRouter.use("/admin/jewellery", requireAdmin, jewelleryRouter);
apiRouter.use("/admin/orders", requireAdmin, ordersRouter);
