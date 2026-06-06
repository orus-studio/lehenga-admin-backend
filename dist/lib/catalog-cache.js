import { createClient } from "redis";
import { env } from "../config/env.js";
const CACHE_VERSION = "v2";
const CACHE_NAMESPACE = `lehenga:catalog:${CACHE_VERSION}`;
const CACHE_KEY_SET = `${CACHE_NAMESPACE}:keys`;
const memoryCache = new Map();
let redisClientPromise = null;
function getRedisUrl() {
    return env.redisUrl;
}
async function getRedisClient() {
    const redisUrl = getRedisUrl();
    if (!redisUrl) {
        return null;
    }
    redisClientPromise ??= (async () => {
        const client = createClient({ url: redisUrl });
        client.on("error", (error) => {
            console.error("Redis catalog cache error", error);
        });
        await client.connect();
        return client;
    })().catch((error) => {
        redisClientPromise = null;
        console.error("Redis catalog cache unavailable", error);
        return null;
    });
    return redisClientPromise;
}
export function getCatalogCacheMode() {
    if (env.catalogCacheDisabled) {
        return "disabled";
    }
    return env.redisUrl ? "redis" : "memory";
}
export function buildCatalogCacheKey(parts) {
    return [CACHE_NAMESPACE, ...parts.filter((part) => part !== undefined && part !== null)].join(":");
}
async function readCache(key) {
    const redis = await getRedisClient();
    if (redis) {
        return redis.get(key);
    }
    const entry = memoryCache.get(key);
    if (!entry || entry.expiresAt < Date.now()) {
        memoryCache.delete(key);
        return null;
    }
    return entry.value;
}
async function writeCache(key, value, ttlSeconds) {
    const redis = await getRedisClient();
    if (redis) {
        await redis.set(key, value, {
            expiration: {
                type: "EX",
                value: ttlSeconds,
            },
        });
        await redis.sAdd(CACHE_KEY_SET, key);
        return;
    }
    memoryCache.set(key, {
        expiresAt: Date.now() + ttlSeconds * 1000,
        value,
    });
}
function parseEnvelope(rawValue) {
    if (!rawValue) {
        return null;
    }
    try {
        return JSON.parse(rawValue);
    }
    catch {
        return null;
    }
}
export async function cachedCatalogRead(keyParts, loader) {
    const key = buildCatalogCacheKey(keyParts);
    const cachedEnvelope = env.catalogCacheDisabled ? null : parseEnvelope(await readCache(key));
    if (cachedEnvelope && Date.now() - cachedEnvelope.cachedAt < env.catalogCacheTtlSeconds * 1000) {
        return {
            data: cachedEnvelope.data,
            status: "hit",
        };
    }
    try {
        const data = await loader();
        if (!env.catalogCacheDisabled) {
            await writeCache(key, JSON.stringify({
                cachedAt: Date.now(),
                data,
            }), env.catalogCacheStaleTtlSeconds);
        }
        return {
            data,
            status: env.catalogCacheDisabled ? "bypass" : "miss",
        };
    }
    catch (error) {
        if (cachedEnvelope) {
            return {
                data: cachedEnvelope.data,
                status: "stale",
            };
        }
        throw error;
    }
}
export async function sendCachedCatalogResponse(response, keyParts, loader) {
    const result = await cachedCatalogRead(keyParts, loader);
    response.setHeader("Cache-Control", "private, no-store");
    response.setHeader("X-Catalog-Cache", result.status);
    response.json({
        success: true,
        data: result.data,
    });
}
export async function invalidateCatalogCache() {
    memoryCache.clear();
    const redis = await getRedisClient();
    if (!redis) {
        return;
    }
    const keys = await redis.sMembers(CACHE_KEY_SET);
    if (keys.length > 0) {
        await redis.del(keys);
    }
    await redis.del(CACHE_KEY_SET);
}
//# sourceMappingURL=catalog-cache.js.map