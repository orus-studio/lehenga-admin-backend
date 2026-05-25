CREATE TYPE "CategoryStyle" AS ENUM ('BRIDAL', 'SEMI_BRIDAL', 'GOWN', 'JEWELLERY');

ALTER TYPE "OrderStatus" ADD VALUE IF NOT EXISTS 'FULFILLED';

ALTER TABLE "Collection" RENAME TO "Category";
ALTER TABLE "Category" RENAME CONSTRAINT "Collection_pkey" TO "Category_pkey";

ALTER TABLE "Lehenga" RENAME COLUMN "collectionId" TO "categoryId";
ALTER TABLE "Jewellery" RENAME COLUMN "collectionId" TO "categoryId";

ALTER TABLE "Category"
ADD COLUMN "style" "CategoryStyle";

UPDATE "Category"
SET "style" = CASE
  WHEN lower("name") LIKE '%semi%' OR lower("slug") LIKE '%semi%' THEN 'SEMI_BRIDAL'::"CategoryStyle"
  WHEN lower("name") LIKE '%gown%' OR lower("slug") LIKE '%gown%' THEN 'GOWN'::"CategoryStyle"
  WHEN lower("name") LIKE '%jewel%' OR lower("slug") LIKE '%jewel%' THEN 'JEWELLERY'::"CategoryStyle"
  ELSE 'BRIDAL'::"CategoryStyle"
END;

ALTER TABLE "Category"
ALTER COLUMN "style" SET NOT NULL;

WITH ranked_categories AS (
  SELECT
    "id",
    "style",
    ROW_NUMBER() OVER (PARTITION BY "style" ORDER BY "createdAt" ASC, "id" ASC) AS row_number,
    FIRST_VALUE("id") OVER (PARTITION BY "style" ORDER BY "createdAt" ASC, "id" ASC) AS keep_id
  FROM "Category"
)
UPDATE "Lehenga" AS "lehenga"
SET "categoryId" = ranked_categories.keep_id
FROM ranked_categories
WHERE "lehenga"."categoryId" = ranked_categories."id"
  AND ranked_categories.row_number > 1;

WITH ranked_categories AS (
  SELECT
    "id",
    "style",
    ROW_NUMBER() OVER (PARTITION BY "style" ORDER BY "createdAt" ASC, "id" ASC) AS row_number,
    FIRST_VALUE("id") OVER (PARTITION BY "style" ORDER BY "createdAt" ASC, "id" ASC) AS keep_id
  FROM "Category"
)
UPDATE "Jewellery" AS "jewellery"
SET "categoryId" = ranked_categories.keep_id
FROM ranked_categories
WHERE "jewellery"."categoryId" = ranked_categories."id"
  AND ranked_categories.row_number > 1;

WITH ranked_categories AS (
  SELECT
    "id",
    ROW_NUMBER() OVER (PARTITION BY "style" ORDER BY "createdAt" ASC, "id" ASC) AS row_number
  FROM "Category"
)
DELETE FROM "Category"
USING ranked_categories
WHERE "Category"."id" = ranked_categories."id"
  AND ranked_categories.row_number > 1;

UPDATE "Category"
SET "name" = CASE "style"
  WHEN 'BRIDAL' THEN 'Bridal'
  WHEN 'SEMI_BRIDAL' THEN 'Semi Bridal'
  WHEN 'GOWN' THEN 'Gown'
  WHEN 'JEWELLERY' THEN 'Jewellery'
END,
"slug" = CASE "style"
  WHEN 'BRIDAL' THEN 'bridal'
  WHEN 'SEMI_BRIDAL' THEN 'semi-bridal'
  WHEN 'GOWN' THEN 'gown'
  WHEN 'JEWELLERY' THEN 'jewellery'
END;

ALTER TABLE "Category"
DROP COLUMN "season",
DROP COLUMN "audience",
DROP COLUMN "displayOrder";

DROP TYPE "CollectionSeason";
DROP TYPE "Audience";

ALTER INDEX "Collection_slug_key" RENAME TO "Category_slug_key";
ALTER INDEX "Lehenga_collectionId_idx" RENAME TO "Lehenga_categoryId_idx";
ALTER INDEX "Jewellery_collectionId_idx" RENAME TO "Jewellery_categoryId_idx";

CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
CREATE UNIQUE INDEX "Category_style_key" ON "Category"("style");

ALTER TABLE "Lehenga" DROP CONSTRAINT "Lehenga_collectionId_fkey";
ALTER TABLE "Jewellery" DROP CONSTRAINT "Jewellery_collectionId_fkey";

ALTER TABLE "Lehenga"
ADD CONSTRAINT "Lehenga_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "Jewellery"
ADD CONSTRAINT "Jewellery_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
