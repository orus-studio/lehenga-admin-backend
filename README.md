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
# WhatsApp order confirmations

The backend sends an order confirmation through the official Meta WhatsApp
Cloud API after an admin order is created or a storefront payment is verified.
Sending is non-blocking, so a temporary WhatsApp outage does not cancel a paid
order.

Create an approved **Utility** message template named
`rental_order_confirmation` (or set `WHATSAPP_ORDER_TEMPLATE_NAME`) with these
body variables in this exact order:

1. Customer name
2. Order number
3. Rental date range
4. Itemized products, sizes, quantities, dates, and line totals
5. Pickup store name, full address, and pickup notes
6. Store phone and email
7. Subtotal
8. Security deposit
9. Grand total
10. Payment method, amount paid, and amount due at pickup

Suggested template body:

```text
Hello {{1}}, your rental order {{2}} is confirmed.
Rental period: {{3}}
Items: {{4}}
Pickup: {{5}}
Contact: {{6}}
Subtotal: {{7}}
Security deposit: {{8}}
Total: {{9}}
Payment: {{10}}
```

In Meta Business Suite:

1. Create or select a Meta Business Portfolio and add the WhatsApp product.
2. Add and verify the business phone number.
3. Copy the WhatsApp **Phone number ID** into `WHATSAPP_PHONE_NUMBER_ID`.
4. Create a System User, grant WhatsApp permissions, and generate a permanent
   access token for `WHATSAPP_ACCESS_TOKEN`.
5. Create and submit the Utility template above, then wait for approval.
6. Set `STORE_CONTACT_PHONE` and `STORE_CONTACT_EMAIL`.

Customer phone numbers should include the country code. Ten-digit Indian
numbers are automatically prefixed with `91`.

# Redis and availability

Set `REDIS_URL` to a Redis connection string. Catalog responses use
stale-while-revalidate caching, while date availability is cached briefly with
`AVAILABILITY_CACHE_TTL_SECONDS`. Order mutations invalidate availability
entries. Final checkout validation always reads current database reservations.

Apply migrations and regenerate Prisma after deployment:

```bash
npx prisma migrate deploy
npx prisma generate
```
