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
    priceDiscountPerDay?: number;
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
    lineDiscountAmount: number;
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
type ParseCheckoutItemsOptions = {
    allowPriceDiscountPerDay?: boolean;
};
export declare function parseCheckoutItems(value: unknown, options?: ParseCheckoutItemsOptions): CheckoutInputItem[];
export declare function prepareCheckoutItems(items: CheckoutInputItem[], existingOrder?: ExistingEditableOrder): Promise<PreparedCheckoutItem[]>;
export declare function summarizePreparedCheckout(preparedItems: PreparedCheckoutItem[]): {
    subtotalAmount: number;
    securityDeposit: number;
    discountAmount: number;
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
export declare function buildInventoryApplyOperations(items: PreparedCheckoutItem[]): never[];
export declare function buildInventoryRevertOperations(existingOrder: ExistingEditableOrder): never[];
export {};
//# sourceMappingURL=order-checkout.d.ts.map