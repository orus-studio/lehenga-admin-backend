export declare const ProductStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly ARCHIVED: "ARCHIVED";
};
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];
export declare const CollectionSeason: {
    readonly SPRING: "SPRING";
    readonly SUMMER: "SUMMER";
    readonly MONSOON: "MONSOON";
    readonly AUTUMN: "AUTUMN";
    readonly WINTER: "WINTER";
    readonly FESTIVE: "FESTIVE";
    readonly ALL_SEASON: "ALL_SEASON";
};
export type CollectionSeason = (typeof CollectionSeason)[keyof typeof CollectionSeason];
export declare const Audience: {
    readonly WOMEN: "WOMEN";
    readonly MEN: "MEN";
    readonly UNISEX: "UNISEX";
    readonly KIDS: "KIDS";
};
export type Audience = (typeof Audience)[keyof typeof Audience];
export declare const JewelleryType: {
    readonly NECKLACE: "NECKLACE";
    readonly EARRINGS: "EARRINGS";
    readonly MAANG_TIKKA: "MAANG_TIKKA";
    readonly BANGLE: "BANGLE";
    readonly BRACELET: "BRACELET";
    readonly RING: "RING";
    readonly NATH: "NATH";
    readonly WAIST_BELT: "WAIST_BELT";
    readonly ANKLET: "ANKLET";
    readonly BROOCH: "BROOCH";
    readonly SET: "SET";
    readonly OTHER: "OTHER";
};
export type JewelleryType = (typeof JewelleryType)[keyof typeof JewelleryType];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly READY_FOR_PICKUP: "READY_FOR_PICKUP";
    readonly PICKED_UP: "PICKED_UP";
    readonly RETURNED: "RETURNED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PARTIALLY_PAID: "PARTIALLY_PAID";
    readonly PAID: "PAID";
    readonly REFUNDED: "REFUNDED";
    readonly FAILED: "FAILED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const RentalItemType: {
    readonly LEHENGA: "LEHENGA";
    readonly JEWELLERY: "JEWELLERY";
};
export type RentalItemType = (typeof RentalItemType)[keyof typeof RentalItemType];
//# sourceMappingURL=enums.d.ts.map