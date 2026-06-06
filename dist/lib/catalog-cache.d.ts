import type { Response } from "express";
type CacheStatus = "hit" | "miss" | "stale" | "bypass";
export declare function getCatalogCacheMode(): "disabled" | "redis" | "memory";
export declare function buildCatalogCacheKey(parts: Array<string | number | undefined | null>): string;
export declare function cachedCatalogRead<T>(keyParts: Array<string | number | undefined | null>, loader: () => Promise<T>): Promise<{
    data: T;
    status: CacheStatus;
}>;
export declare function sendCachedCatalogResponse<T>(response: Response, keyParts: Array<string | number | undefined | null>, loader: () => Promise<T>): Promise<void>;
export declare function invalidateCatalogCache(): Promise<void>;
export {};
//# sourceMappingURL=catalog-cache.d.ts.map