import type { Response } from "express";
import { createClient, type RedisClientType } from "redis";

import { env } from "../config/env.js";

const CACHE_VERSION = "v2";
const CACHE_NAMESPACE = `lehenga:catalog:${CACHE_VERSION}`;
const CACHE_KEY_SET = `${CACHE_NAMESPACE}:keys`;

type CacheStatus = "hit" | "miss" | "stale" | "bypass";

type CacheEnvelope<T> = {
  cachedAt: number;
  data: T;
};

const memoryCache = new Map<string, { expiresAt: number; value: string }>();
let redisClientPromise: Promise<RedisClientType | null> | null = null;

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
    return client as RedisClientType;
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

export function buildCatalogCacheKey(parts: Array<string | number | undefined | null>) {
  return [CACHE_NAMESPACE, ...parts.filter((part) => part !== undefined && part !== null)].join(":");
}

async function readCache(key: string) {
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

async function writeCache(key: string, value: string, ttlSeconds: number) {
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

function parseEnvelope<T>(rawValue: string | null): CacheEnvelope<T> | null {
  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as CacheEnvelope<T>;
  } catch {
    return null;
  }
}

export async function cachedCatalogRead<T>(
  keyParts: Array<string | number | undefined | null>,
  loader: () => Promise<T>,
) {
  const key = buildCatalogCacheKey(keyParts);
  const cachedEnvelope = env.catalogCacheDisabled ? null : parseEnvelope<T>(await readCache(key));

  if (cachedEnvelope && Date.now() - cachedEnvelope.cachedAt < env.catalogCacheTtlSeconds * 1000) {
    return {
      data: cachedEnvelope.data,
      status: "hit" as CacheStatus,
    };
  }

  try {
    const data = await loader();

    if (!env.catalogCacheDisabled) {
      await writeCache(
        key,
        JSON.stringify({
          cachedAt: Date.now(),
          data,
        } satisfies CacheEnvelope<T>),
        env.catalogCacheStaleTtlSeconds,
      );
    }

    return {
      data,
      status: env.catalogCacheDisabled ? ("bypass" as CacheStatus) : ("miss" as CacheStatus),
    };
  } catch (error) {
    if (cachedEnvelope) {
      return {
        data: cachedEnvelope.data,
        status: "stale" as CacheStatus,
      };
    }

    throw error;
  }
}

export async function sendCachedCatalogResponse<T>(
  response: Response,
  keyParts: Array<string | number | undefined | null>,
  loader: () => Promise<T>,
) {
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
