import { normalizeCatalogImageUrls } from "../utils/catalog-image-url.js";
export function normalizeCatalogImageResponses(_request, response, next) {
    const sendJson = response.json.bind(response);
    response.json = ((body) => sendJson(normalizeCatalogImageUrls(body)));
    next();
}
//# sourceMappingURL=catalog-image-url.js.map