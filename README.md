# Lehenga Admin Backend

## Bulk Lehenga Import

The editor export can be imported without manually creating products:

```bash
npm run catalog:import:dry -- --source=../lehenga-editor
npm run catalog:import -- --source=../lehenga-editor
```

The importer reads `final_image_details.json`, validates every referenced image, creates the required categories, uploads deterministic image keys to S3, stores CloudFront URLs, and upserts lehengas by SKU. Rerunning it updates metadata and avoids duplicate image uploads when image URLs already match.

Useful options:

```bash
--metadata=final_image_details.json
--status=ACTIVE
--force-images
```

Run the dry command first. The normal import uses the backend's `DATABASE_URL`, AWS, CloudFront, and Redis environment configuration.

## Catalog Redis Cache

The public categories, lehengas, jewellery listings, and product detail endpoints use Redis caching. Successful admin mutations for categories, lehengas, and jewellery invalidate the catalog cache automatically.

Responses include an `X-Catalog-Cache` header with `hit`, `miss`, `stale`, or `bypass`. The health endpoint reports whether the cache is using `redis`, `memory`, or is `disabled`.

Required production settings:

```bash
REDIS_URL=redis://default:password@host:6379
CATALOG_CACHE_TTL_SECONDS=300
CATALOG_CACHE_STALE_TTL_SECONDS=86400
```

Without `REDIS_URL`, the application uses an in-memory development fallback that is not shared between instances.

## CloudFront Images

Images upload to S3, but all saved and returned public image URLs use CloudFront:

```bash
S3_BUCKET_NAME=your-private-origin-bucket
CLOUDFRONT_DOMAIN=https://your-distribution.cloudfront.net
```

Existing S3 image URLs are rewritten to CloudFront in API responses. New S3 objects receive one-year immutable cache headers. The CloudFront distribution must use the configured S3 bucket as its origin.
