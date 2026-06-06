import express from "express";
import { normalizeCatalogImageResponses } from "./middleware/catalog-image-url.js";
import { errorHandler, notFoundHandler } from "./middleware/error-handler.js";
import { apiRouter } from "./routes/index.js";
export const app = express();
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    response.header("Access-Control-Expose-Headers", "X-Catalog-Cache");
    if (request.method === "OPTIONS") {
        response.sendStatus(204);
        return;
    }
    next();
});
app.use(express.json({ limit: "25mb" }));
app.use(normalizeCatalogImageResponses);
app.use("/api", apiRouter);
app.use(notFoundHandler);
app.use(errorHandler);
//# sourceMappingURL=app.js.map