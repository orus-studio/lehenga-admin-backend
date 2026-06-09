import { RentalItemType } from "../generated/prisma/enums.js";
type AvailabilityInput = {
    itemType: RentalItemType;
    productId: string;
    sizeId?: string;
    startDate: Date;
    endDate: Date;
    excludeOrderId?: string;
    useCache?: boolean;
};
export declare function getItemAvailability(input: AvailabilityInput): Promise<{
    available: boolean;
    quantityAvailable: number;
}>;
export {};
//# sourceMappingURL=availability.d.ts.map