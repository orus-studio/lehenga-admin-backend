import type { Response } from "express";
import { createClient, type RedisClientType } from "redis";

import { env } from "../config/env.js";

const CACHE_VERSION = "v2";
const CACHE_NAMESPACE = `lehenga:catalog:${CACHE_VERSION}`;
const CACHE_KEY_SET = `${CACHE_NAMESPACE}:keys`;
const AVAILABILITY_NAMESPACE = `lehenga:availability:${CACHE_VERSION}`;
const AVAILABILITY_KEY_SET = `${AVAILABILITY_NAMESPACE}:keys`;

type CacheStatus = "hit" | "miss" | "stale" | "bypass";

type CacheEnvelope<T> = {
  cachedAt: number;
  data: T;
};

const memoryCache = new Map<string, { expiresAt: number; value: string }>();
const pendingLoads = new Map<string, Promise<unknown>>();
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

async function writeCache(key: string, value: string, ttlSeconds: number, keySet = CACHE_KEY_SET) {
  const redis = await getRedisClient();

  if (redis) {
    await redis.set(key, value, {
      expiration: {
        type: "EX",
        value: ttlSeconds,
      },
    });
    await redis.sAdd(keySet, key);
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

  const loadAndCache = async () => {
    const existingLoad = pendingLoads.get(key) as Promise<T> | undefined;
    if (existingLoad) {
      return existingLoad;
    }

    const load = loader()
      .then(async (data) => {
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
        return data;
      })
      .finally(() => {
        pendingLoads.delete(key);
      });

    pendingLoads.set(key, load);
    return load;
  };

  if (cachedEnvelope) {
    void loadAndCache().catch((error) => {
      console.error(`Failed to refresh catalog cache key ${key}`, error);
    });
    return {
      data: cachedEnvelope.data,
      status: "stale" as CacheStatus,
    };
  }

  try {
    const data = await loadAndCache();

    return {
      data,
      status: env.catalogCacheDisabled ? ("bypass" as CacheStatus) : ("miss" as CacheStatus),
    };
  } catch (error) {
    throw error;
  }
}

export async function cachedAvailabilityRead<T>(
  keyParts: Array<string | number | undefined | null>,
  loader: () => Promise<T>,
) {
  const key = [AVAILABILITY_NAMESPACE, ...keyParts.filter((part) => part !== undefined && part !== null)].join(":");
  const cachedEnvelope = env.catalogCacheDisabled ? null : parseEnvelope<T>(await readCache(key));

  if (cachedEnvelope) {
    return cachedEnvelope.data;
  }

  const data = await loader();

  if (!env.catalogCacheDisabled) {
    await writeCache(
      key,
      JSON.stringify({
        cachedAt: Date.now(),
        data,
      } satisfies CacheEnvelope<T>),
      env.availabilityCacheTtlSeconds,
      AVAILABILITY_KEY_SET,
    );
  }

  return data;
}

export async function sendCachedCatalogResponse<T>(
  response: Response,
  keyParts: Array<string | number | undefined | null>,
  loader: () => Promise<T>,
) {
  const result = await cachedCatalogRead(keyParts, loader);

  response.setHeader("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
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

export async function invalidateAvailabilityCache() {
  for (const key of memoryCache.keys()) {
    if (key.startsWith(AVAILABILITY_NAMESPACE)) {
      memoryCache.delete(key);
    }
  }

  const redis = await getRedisClient();

  if (!redis) {
    return;
  }

  const keys = await redis.sMembers(AVAILABILITY_KEY_SET);

  if (keys.length > 0) {
    await redis.del(keys);
  }

  await redis.del(AVAILABILITY_KEY_SET);
}
