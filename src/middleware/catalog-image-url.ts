import type { NextFunction, Request, Response } from "express";

import { normalizeCatalogImageUrls } from "../utils/catalog-image-url.js";

export function normalizeCatalogImageResponses(_request: Request, response: Response, next: NextFunction) {
  const sendJson = response.json.bind(response);

  response.json = ((body: unknown) => sendJson(normalizeCatalogImageUrls(body))) as Response["json"];
  next();
}
