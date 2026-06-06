import { RentalItemType } from "../generated/prisma/enums.js";
export type ItemMeasurements = {
    upper?: string;
    chest?: string;
    waist?: string;
    armHole?: string;
    mori?: string;
    notes?: string;
};
export type CheckoutInputItem = {
    itemType: typeof RentalItemType.LEHENGA;
    quantity: number;
    lehengaId: string;
    lehengaSizeId?: string;
    rentalStartDate: Date;
    rentalEndDate: Date;
    measurements?: ItemMeasurements;
} | {
    itemType: typeof RentalItemType.JEWELLERY;
    quantity: number;
    jewelleryId: string;
    rentalStartDate: Date;
    rentalEndDate: Date;
};
export type PreparedCheckoutItem = {
    itemType: typeof RentalItemType.LEHENGA | typeof RentalItemType.JEWELLERY;
    quantity: number;
    productNameSnapshot: string;
    skuSnapshot: string;
    pricePerDay: number;
    rentalStartDate: Date;
    rentalEndDate: Date;
    rentalDays: number;
    lineTotal: number;
    depositAmount: number;
    sizeLabelSnapshot?: string;
    lehengaId?: string;
    lehengaSizeId?: string;
    jewelleryId?: string;
    measurements?: ItemMeasurements;
};
type ExistingEditableOrder = {
    id: string;
    items: Array<{
        id: string;
        quantity: number;
        lehengaSizeId: string | null;
        jewelleryId: string | null;
    }>;
};
export declare function parseDateValue(value: string, key: string): Date;
export declare function getRentalDays(startDate: Date, endDate: Date): number;
export declare function parseCheckoutItems(value: unknown): CheckoutInputItem[];
export declare function prepareCheckoutItems(items: CheckoutInputItem[], existingOrder?: ExistingEditableOrder): Promise<PreparedCheckoutItem[]>;
export declare function summarizePreparedCheckout(preparedItems: PreparedCheckoutItem[]): {
    subtotalAmount: number;
    securityDeposit: number;
    totalAmount: number;
    rentalStartDate: Date;
    rentalEndDate: Date;
};
export declare function buildOrderItemCreates(items: PreparedCheckoutItem[]): {
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    quantity: number;
    rentalStartDate: Date;
    rentalEndDate: Date;
    pricePerDay: number;
    rentalDays: number;
    lineTotal: number;
    depositAmount: number;
    sizeLabelSnapshot?: string;
    productNameSnapshot: string;
    skuSnapshot: string;
    jewellery?: {
        connect: {
            id: string;
        };
    };
    lehengaSize?: {
        connect: {
            id: string;
        };
    };
    lehenga?: {
        connect: {
            id: string;
        };
    };
    itemType: "JEWELLERY" | "LEHENGA";
}[];
export declare function buildInventoryApplyOperations(items: PreparedCheckoutItem[]): (import("../generated/prisma/models.js").Prisma__JewelleryClient<{
    type: import("../generated/prisma/enums.js").JewelleryType;
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    finish: string | null;
    slug: string;
    description: string | null;
    isFeatured: boolean;
    sku: string;
    shortDescription: string | null;
    color: string | null;
    occasion: string | null;
    rentalPricePerDay: import("@prisma/client-runtime-utils").Decimal;
    securityDeposit: import("@prisma/client-runtime-utils").Decimal | null;
    originalPrice: import("@prisma/client-runtime-utils").Decimal | null;
    minimumRentalDays: number;
    pickupAvailable: boolean;
    status: import("../generated/prisma/enums.js").ProductStatus;
    categoryId: string | null;
    material: string | null;
    stoneDetails: string | null;
    stockQuantity: number;
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}> | import("../generated/prisma/models.js").Prisma__LehengaSizeClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    sizeLabel: string;
    quantityTotal: number;
    quantityReserved: number;
    blouseSize: string | null;
    waistInInches: import("@prisma/client-runtime-utils").Decimal | null;
    bustInInches: import("@prisma/client-runtime-utils").Decimal | null;
    hipInInches: import("@prisma/client-runtime-utils").Decimal | null;
    lengthInInches: import("@prisma/client-runtime-utils").Decimal | null;
    notes: string | null;
    lehengaId: string;
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>)[];
export declare function buildInventoryRevertOperations(existingOrder: ExistingEditableOrder): (import("../generated/prisma/models.js").Prisma__JewelleryClient<{
    type: import("../generated/prisma/enums.js").JewelleryType;
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    finish: string | null;
    slug: string;
    description: string | null;
    isFeatured: boolean;
    sku: string;
    shortDescription: string | null;
    color: string | null;
    occasion: string | null;
    rentalPricePerDay: import("@prisma/client-runtime-utils").Decimal;
    securityDeposit: import("@prisma/client-runtime-utils").Decimal | null;
    originalPrice: import("@prisma/client-runtime-utils").Decimal | null;
    minimumRentalDays: number;
    pickupAvailable: boolean;
    status: import("../generated/prisma/enums.js").ProductStatus;
    categoryId: string | null;
    material: string | null;
    stoneDetails: string | null;
    stockQuantity: number;
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}> | import("../generated/prisma/models.js").Prisma__LehengaSizeClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    sizeLabel: string;
    quantityTotal: number;
    quantityReserved: number;
    blouseSize: string | null;
    waistInInches: import("@prisma/client-runtime-utils").Decimal | null;
    bustInInches: import("@prisma/client-runtime-utils").Decimal | null;
    hipInInches: import("@prisma/client-runtime-utils").Decimal | null;
    lengthInInches: import("@prisma/client-runtime-utils").Decimal | null;
    notes: string | null;
    lehengaId: string;
}, never, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>)[];
export {};
//# sourceMappingURL=order-checkout.d.ts.map