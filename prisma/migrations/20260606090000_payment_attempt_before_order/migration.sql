CREATE TYPE "CheckoutPaymentAttemptStatus" AS ENUM ('INITIATED', 'VERIFIED', 'CANCELLED', 'EXPIRED');

CREATE TABLE "CheckoutPaymentAttempt" (
    "id" TEXT NOT NULL,
    "paymentGatewayOrderId" TEXT NOT NULL,
    "paymentGatewayPaymentId" TEXT,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "paymentAmount" DECIMAL(12,2) NOT NULL,
    "checkoutPayload" JSONB NOT NULL,
    "customerId" TEXT,
    "status" "CheckoutPaymentAttemptStatus" NOT NULL DEFAULT 'INITIATED',
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "rentalOrderId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CheckoutPaymentAttempt_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "CheckoutPaymentAttempt_paymentGatewayOrderId_key" ON "CheckoutPaymentAttempt"("paymentGatewayOrderId");
CREATE UNIQUE INDEX "CheckoutPaymentAttempt_paymentGatewayPaymentId_key" ON "CheckoutPaymentAttempt"("paymentGatewayPaymentId");
CREATE UNIQUE INDEX "CheckoutPaymentAttempt_rentalOrderId_key" ON "CheckoutPaymentAttempt"("rentalOrderId");
CREATE INDEX "CheckoutPaymentAttempt_status_expiresAt_idx" ON "CheckoutPaymentAttempt"("status", "expiresAt");
CREATE INDEX "CheckoutPaymentAttempt_customerId_idx" ON "CheckoutPaymentAttempt"("customerId");
CREATE UNIQUE INDEX "RentalOrder_paymentGatewayPaymentId_key" ON "RentalOrder"("paymentGatewayPaymentId");

ALTER TABLE "CheckoutPaymentAttempt"
ADD CONSTRAINT "CheckoutPaymentAttempt_rentalOrderId_fkey"
FOREIGN KEY ("rentalOrderId") REFERENCES "RentalOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
