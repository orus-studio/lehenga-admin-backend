-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('DRAFT', 'ACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "CollectionSeason" AS ENUM ('SPRING', 'SUMMER', 'MONSOON', 'AUTUMN', 'WINTER', 'FESTIVE', 'ALL_SEASON');

-- CreateEnum
CREATE TYPE "Audience" AS ENUM ('WOMEN', 'MEN', 'UNISEX', 'KIDS');

-- CreateEnum
CREATE TYPE "JewelleryType" AS ENUM ('NECKLACE', 'EARRINGS', 'MAANG_TIKKA', 'BANGLE', 'BRACELET', 'RING', 'NATH', 'WAIST_BELT', 'ANKLET', 'BROOCH', 'SET', 'OTHER');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONFIRMED', 'READY_FOR_PICKUP', 'PICKED_UP', 'RETURNED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PARTIALLY_PAID', 'PAID', 'REFUNDED', 'FAILED');

-- CreateEnum
CREATE TYPE "RentalItemType" AS ENUM ('LEHENGA', 'JEWELLERY');

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "phone" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLoginAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "season" "CollectionSeason" NOT NULL DEFAULT 'ALL_SEASON',
    "audience" "Audience" NOT NULL DEFAULT 'WOMEN',
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lehenga" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "shortDescription" TEXT,
    "description" TEXT,
    "designer" TEXT,
    "color" TEXT,
    "fabric" TEXT,
    "embroideryDetails" TEXT,
    "occasion" TEXT,
    "setIncludes" TEXT,
    "careInstructions" TEXT,
    "rentalPricePerDay" DECIMAL(10,2) NOT NULL,
    "securityDeposit" DECIMAL(10,2),
    "originalPrice" DECIMAL(10,2),
    "minimumRentalDays" INTEGER NOT NULL DEFAULT 1,
    "pickupAvailable" BOOLEAN NOT NULL DEFAULT true,
    "status" "ProductStatus" NOT NULL DEFAULT 'DRAFT',
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "collectionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lehenga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LehengaSize" (
    "id" TEXT NOT NULL,
    "lehengaId" TEXT NOT NULL,
    "sizeLabel" TEXT NOT NULL,
    "blouseSize" TEXT,
    "waistInInches" DECIMAL(5,2),
    "bustInInches" DECIMAL(5,2),
    "hipInInches" DECIMAL(5,2),
    "lengthInInches" DECIMAL(5,2),
    "quantityTotal" INTEGER NOT NULL DEFAULT 1,
    "quantityReserved" INTEGER NOT NULL DEFAULT 0,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LehengaSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LehengaImage" (
    "id" TEXT NOT NULL,
    "lehengaId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "altText" TEXT,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LehengaImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jewellery" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "shortDescription" TEXT,
    "description" TEXT,
    "type" "JewelleryType" NOT NULL DEFAULT 'OTHER',
    "material" TEXT,
    "color" TEXT,
    "finish" TEXT,
    "stoneDetails" TEXT,
    "occasion" TEXT,
    "rentalPricePerDay" DECIMAL(10,2) NOT NULL,
    "securityDeposit" DECIMAL(10,2),
    "originalPrice" DECIMAL(10,2),
    "minimumRentalDays" INTEGER NOT NULL DEFAULT 1,
    "stockQuantity" INTEGER NOT NULL DEFAULT 1,
    "pickupAvailable" BOOLEAN NOT NULL DEFAULT true,
    "status" "ProductStatus" NOT NULL DEFAULT 'DRAFT',
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "collectionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jewellery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JewelleryImage" (
    "id" TEXT NOT NULL,
    "jewelleryId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "altText" TEXT,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JewelleryImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreLocation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'India',
    "pickupNotes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoreLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentalOrder" (
    "id" TEXT NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "pickupLocationId" TEXT NOT NULL,
    "createdByAdminId" TEXT,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "rentalStartDate" TIMESTAMP(3) NOT NULL,
    "rentalEndDate" TIMESTAMP(3) NOT NULL,
    "pickupDate" TIMESTAMP(3),
    "returnDate" TIMESTAMP(3),
    "subtotalAmount" DECIMAL(12,2) NOT NULL,
    "securityDeposit" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "discountAmount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "totalAmount" DECIMAL(12,2) NOT NULL,
    "amountPaid" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "specialInstructions" TEXT,
    "internalNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RentalOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentalOrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "itemType" "RentalItemType" NOT NULL,
    "lehengaId" TEXT,
    "lehengaSizeId" TEXT,
    "jewelleryId" TEXT,
    "productNameSnapshot" TEXT NOT NULL,
    "skuSnapshot" TEXT NOT NULL,
    "sizeLabelSnapshot" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "pricePerDay" DECIMAL(10,2) NOT NULL,
    "rentalDays" INTEGER NOT NULL,
    "lineTotal" DECIMAL(12,2) NOT NULL,
    "depositAmount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RentalOrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_phone_key" ON "AdminUser"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phone_key" ON "Customer"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_slug_key" ON "Collection"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Lehenga_slug_key" ON "Lehenga"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Lehenga_sku_key" ON "Lehenga"("sku");

-- CreateIndex
CREATE INDEX "Lehenga_collectionId_idx" ON "Lehenga"("collectionId");

-- CreateIndex
CREATE INDEX "Lehenga_status_idx" ON "Lehenga"("status");

-- CreateIndex
CREATE INDEX "Lehenga_isFeatured_idx" ON "Lehenga"("isFeatured");

-- CreateIndex
CREATE INDEX "LehengaSize_sizeLabel_idx" ON "LehengaSize"("sizeLabel");

-- CreateIndex
CREATE UNIQUE INDEX "LehengaSize_lehengaId_sizeLabel_key" ON "LehengaSize"("lehengaId", "sizeLabel");

-- CreateIndex
CREATE INDEX "LehengaImage_lehengaId_sortOrder_idx" ON "LehengaImage"("lehengaId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "Jewellery_slug_key" ON "Jewellery"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Jewellery_sku_key" ON "Jewellery"("sku");

-- CreateIndex
CREATE INDEX "Jewellery_collectionId_idx" ON "Jewellery"("collectionId");

-- CreateIndex
CREATE INDEX "Jewellery_status_idx" ON "Jewellery"("status");

-- CreateIndex
CREATE INDEX "Jewellery_isFeatured_idx" ON "Jewellery"("isFeatured");

-- CreateIndex
CREATE INDEX "JewelleryImage_jewelleryId_sortOrder_idx" ON "JewelleryImage"("jewelleryId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "StoreLocation_slug_key" ON "StoreLocation"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "RentalOrder_orderNumber_key" ON "RentalOrder"("orderNumber");

-- CreateIndex
CREATE INDEX "RentalOrder_customerId_idx" ON "RentalOrder"("customerId");

-- CreateIndex
CREATE INDEX "RentalOrder_pickupLocationId_idx" ON "RentalOrder"("pickupLocationId");

-- CreateIndex
CREATE INDEX "RentalOrder_status_idx" ON "RentalOrder"("status");

-- CreateIndex
CREATE INDEX "RentalOrder_rentalStartDate_rentalEndDate_idx" ON "RentalOrder"("rentalStartDate", "rentalEndDate");

-- CreateIndex
CREATE INDEX "RentalOrderItem_orderId_idx" ON "RentalOrderItem"("orderId");

-- CreateIndex
CREATE INDEX "RentalOrderItem_lehengaId_idx" ON "RentalOrderItem"("lehengaId");

-- CreateIndex
CREATE INDEX "RentalOrderItem_jewelleryId_idx" ON "RentalOrderItem"("jewelleryId");

-- CreateIndex
CREATE INDEX "RentalOrderItem_lehengaSizeId_idx" ON "RentalOrderItem"("lehengaSizeId");

-- AddForeignKey
ALTER TABLE "Lehenga" ADD CONSTRAINT "Lehenga_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LehengaSize" ADD CONSTRAINT "LehengaSize_lehengaId_fkey" FOREIGN KEY ("lehengaId") REFERENCES "Lehenga"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LehengaImage" ADD CONSTRAINT "LehengaImage_lehengaId_fkey" FOREIGN KEY ("lehengaId") REFERENCES "Lehenga"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jewellery" ADD CONSTRAINT "Jewellery_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JewelleryImage" ADD CONSTRAINT "JewelleryImage_jewelleryId_fkey" FOREIGN KEY ("jewelleryId") REFERENCES "Jewellery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalOrder" ADD CONSTRAINT "RentalOrder_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalOrder" ADD CONSTRAINT "RentalOrder_pickupLocationId_fkey" FOREIGN KEY ("pickupLocationId") REFERENCES "StoreLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalOrder" ADD CONSTRAINT "RentalOrder_createdByAdminId_fkey" FOREIGN KEY ("createdByAdminId") REFERENCES "AdminUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalOrderItem" ADD CONSTRAINT "RentalOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "RentalOrder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalOrderItem" ADD CONSTRAINT "RentalOrderItem_lehengaId_fkey" FOREIGN KEY ("lehengaId") REFERENCES "Lehenga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalOrderItem" ADD CONSTRAINT "RentalOrderItem_lehengaSizeId_fkey" FOREIGN KEY ("lehengaSizeId") REFERENCES "LehengaSize"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalOrderItem" ADD CONSTRAINT "RentalOrderItem_jewelleryId_fkey" FOREIGN KEY ("jewelleryId") REFERENCES "Jewellery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
