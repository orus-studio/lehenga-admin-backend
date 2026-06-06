import type { NextFunction, Request, Response } from "express";

import { invalidateCatalogCache } from "../lib/catalog-cache.js";

export function invalidateCatalogCacheAfterMutation(request: Request, response: Response, next: NextFunction) {
  if (request.method === "GET" || request.method === "HEAD" || request.method === "OPTIONS") {
    next();
    return;
  }

  response.on("finish", () => {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      void invalidateCatalogCache().catch((error) => {
        console.error("Failed to invalidate catalog cache", error);
      });
    }
  });

  next();
}
