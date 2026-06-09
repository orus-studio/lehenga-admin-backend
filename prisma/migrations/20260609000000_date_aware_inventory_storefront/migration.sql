ALTER TABLE "Lehenga"
ADD COLUMN "isCategoryFeatured" BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX "Lehenga_isCategoryFeatured_idx" ON "Lehenga"("isCategoryFeatured");

-- Reservations are now calculated from overlapping order dates. Restore the
-- physical totals that older orders permanently subtracted.
UPDATE "LehengaSize"
SET "quantityReserved" = 0;

UPDATE "Jewellery" AS jewellery
SET "stockQuantity" = jewellery."stockQuantity" + booked.quantity
FROM (
  SELECT item."jewelleryId", SUM(item.quantity)::INTEGER AS quantity
  FROM "RentalOrderItem" AS item
  INNER JOIN "RentalOrder" AS rental_order ON rental_order.id = item."orderId"
  WHERE item."jewelleryId" IS NOT NULL
    AND rental_order.status NOT IN ('CANCELLED', 'RETURNED', 'FULFILLED')
  GROUP BY item."jewelleryId"
) AS booked
WHERE jewellery.id = booked."jewelleryId";
