CREATE TYPE "PaymentMethod" AS ENUM ('ONLINE', 'PICKUP');

CREATE TYPE "DepositRefundStatus" AS ENUM ('NOT_APPLICABLE', 'PENDING', 'REFUNDED', 'FAILED');

ALTER TABLE "RentalOrder"
ADD COLUMN "amountDueAtPickup" DECIMAL(12,2) NOT NULL DEFAULT 0,
ADD COLUMN "depositRefundNotes" TEXT,
ADD COLUMN "depositRefundReference" TEXT,
ADD COLUMN "depositRefundStatus" "DepositRefundStatus" NOT NULL DEFAULT 'NOT_APPLICABLE',
ADD COLUMN "depositRefundedAmount" DECIMAL(12,2) NOT NULL DEFAULT 0,
ADD COLUMN "depositRefundedAt" TIMESTAMP(3),
ADD COLUMN "paymentCapturedAt" TIMESTAMP(3),
ADD COLUMN "paymentGatewayOrderId" TEXT,
ADD COLUMN "paymentGatewayPaymentId" TEXT,
ADD COLUMN "paymentGatewaySignature" TEXT,
ADD COLUMN "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'PICKUP';

ALTER TABLE "RentalOrderItem"
ADD COLUMN "measurementArmHole" TEXT,
ADD COLUMN "measurementChest" TEXT,
ADD COLUMN "measurementMori" TEXT,
ADD COLUMN "measurementNotes" TEXT,
ADD COLUMN "measurementUpper" TEXT,
ADD COLUMN "measurementWaist" TEXT,
ADD COLUMN "rentalEndDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN "rentalStartDate" TIMESTAMP(3) NOT NULL;

CREATE TABLE "ProductReview" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "itemType" "RentalItemType" NOT NULL,
    "lehengaId" TEXT,
    "jewelleryId" TEXT,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductReview_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "ProductReview_customerId_idx" ON "ProductReview"("customerId");
CREATE INDEX "ProductReview_lehengaId_idx" ON "ProductReview"("lehengaId");
CREATE INDEX "ProductReview_jewelleryId_idx" ON "ProductReview"("jewelleryId");
CREATE INDEX "ProductReview_itemType_createdAt_idx" ON "ProductReview"("itemType", "createdAt");

ALTER TABLE "ProductReview"
ADD CONSTRAINT "ProductReview_customerId_fkey"
FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ProductReview"
ADD CONSTRAINT "ProductReview_lehengaId_fkey"
FOREIGN KEY ("lehengaId") REFERENCES "Lehenga"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "ProductReview"
ADD CONSTRAINT "ProductReview_jewelleryId_fkey"
FOREIGN KEY ("jewelleryId") REFERENCES "Jewellery"("id") ON DELETE SET NULL ON UPDATE CASCADE;
