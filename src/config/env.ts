import { config } from "dotenv";

config();

function getRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getFirstRequiredEnv(...names: string[]): string {
  for (const name of names) {
    const value = process.env[name]?.trim();

    if (value) {
      return value;
    }
  }

  throw new Error(`Missing required environment variable: ${names.join(" or ")}`);
}

function getNumberEnv(name: string, fallback: number): number {
  const rawValue = process.env[name];

  if (!rawValue) {
    return fallback;
  }

  const parsedValue = Number(rawValue);

  if (Number.isNaN(parsedValue)) {
    throw new Error(`Environment variable ${name} must be a valid number`);
  }

  return parsedValue;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: getNumberEnv("PORT", 4000),
  databaseUrl: getRequiredEnv("DATABASE_URL"),
  jwtSecret: getRequiredEnv("JWT_SECRET"),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  razorpayKeyId: process.env.RAZORPAY_KEY_ID ?? "",
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET ?? "",
  awsAccessKeyId: getRequiredEnv("AWS_ACCESS_KEY_ID"),
  awsSecretAccessKey: getFirstRequiredEnv("AWS_SECRET_ACCESS_KEY", "AWS_SECRET_KEY_ID"),
  awsRegion: getRequiredEnv("AWS_REGION"),
  s3BucketName: getRequiredEnv("S3_BUCKET_NAME"),
  cloudfrontDomain: process.env.CLOUDFRONT_DOMAIN?.trim().replace(/\/$/, ""),
  redisUrl: (process.env.REDIS_URL ?? process.env.KV_URL)?.trim(),
  catalogCacheTtlSeconds: getNumberEnv("CATALOG_CACHE_TTL_SECONDS", 300),
  catalogCacheStaleTtlSeconds: getNumberEnv("CATALOG_CACHE_STALE_TTL_SECONDS", 86400),
  catalogCacheDisabled: process.env.CATALOG_CACHE_DISABLED === "true",
  availabilityCacheTtlSeconds: getNumberEnv("AVAILABILITY_CACHE_TTL_SECONDS", 30),
  whatsappAccessToken: process.env.WHATSAPP_ACCESS_TOKEN?.trim() ?? "",
  whatsappPhoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID?.trim() ?? "",
  whatsappApiVersion: process.env.WHATSAPP_API_VERSION?.trim() ?? "v23.0",
  whatsappOrderTemplateName: process.env.WHATSAPP_ORDER_TEMPLATE_NAME?.trim() ?? "rental_order_confirmation",
  whatsappTemplateLanguage: process.env.WHATSAPP_TEMPLATE_LANGUAGE?.trim() ?? "en",
  storeContactPhone: process.env.STORE_CONTACT_PHONE?.trim() ?? "",
  storeContactEmail: process.env.STORE_CONTACT_EMAIL?.trim() ?? "",
};
