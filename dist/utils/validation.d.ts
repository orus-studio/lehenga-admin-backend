type BodyObject = Record<string, unknown>;
export declare function ensureObject(value: unknown, message?: string): BodyObject;
export declare function getRequiredString(body: BodyObject, key: string): string;
export declare function getOptionalString(body: BodyObject, key: string): string | undefined;
export declare function getRequiredNumber(body: BodyObject, key: string): number;
export declare function getOptionalNumber(body: BodyObject, key: string): number | undefined;
export declare function getOptionalBoolean(body: BodyObject, key: string): boolean | undefined;
export declare function getRequiredArray(body: BodyObject, key: string): unknown[];
export declare function getOptionalArray(body: BodyObject, key: string): unknown[] | undefined;
export declare function getOptionalEnum<T extends string>(body: BodyObject, key: string, allowedValues: readonly T[]): T | undefined;
export declare function getRequiredEnum<T extends string>(body: BodyObject, key: string, allowedValues: readonly T[]): T;
export declare function parseImageArray(value: unknown): Array<{
    imageUrl: string;
    altText?: string;
    isPrimary: boolean;
    sortOrder: number;
}>;
export declare function parseLehengaSizeArray(value: unknown): Array<{
    sizeLabel: string;
    blouseSize?: string;
    waistInInches?: number;
    bustInInches?: number;
    hipInInches?: number;
    lengthInInches?: number;
    quantityTotal: number;
    quantityReserved: number;
    notes?: string;
}>;
export declare function getRouteParam(value: unknown, key: string): string;
export {};
//# sourceMappingURL=validation.d.ts.map