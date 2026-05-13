import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly AdminUser: "AdminUser";
    readonly Customer: "Customer";
    readonly Collection: "Collection";
    readonly Lehenga: "Lehenga";
    readonly LehengaSize: "LehengaSize";
    readonly LehengaImage: "LehengaImage";
    readonly Jewellery: "Jewellery";
    readonly JewelleryImage: "JewelleryImage";
    readonly StoreLocation: "StoreLocation";
    readonly RentalOrder: "RentalOrder";
    readonly RentalOrderItem: "RentalOrderItem";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "adminUser" | "customer" | "collection" | "lehenga" | "lehengaSize" | "lehengaImage" | "jewellery" | "jewelleryImage" | "storeLocation" | "rentalOrder" | "rentalOrderItem";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        AdminUser: {
            payload: Prisma.$AdminUserPayload<ExtArgs>;
            fields: Prisma.AdminUserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminUserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                findFirst: {
                    args: Prisma.AdminUserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                findMany: {
                    args: Prisma.AdminUserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                create: {
                    args: Prisma.AdminUserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                createMany: {
                    args: Prisma.AdminUserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                delete: {
                    args: Prisma.AdminUserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                update: {
                    args: Prisma.AdminUserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminUserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminUserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                upsert: {
                    args: Prisma.AdminUserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                aggregate: {
                    args: Prisma.AdminUserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminUser>;
                };
                groupBy: {
                    args: Prisma.AdminUserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminUserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminUserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminUserCountAggregateOutputType> | number;
                };
            };
        };
        Customer: {
            payload: Prisma.$CustomerPayload<ExtArgs>;
            fields: Prisma.CustomerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findMany: {
                    args: Prisma.CustomerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                create: {
                    args: Prisma.CustomerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                createMany: {
                    args: Prisma.CustomerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                delete: {
                    args: Prisma.CustomerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                update: {
                    args: Prisma.CustomerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomer>;
                };
                groupBy: {
                    args: Prisma.CustomerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerCountAggregateOutputType> | number;
                };
            };
        };
        Collection: {
            payload: Prisma.$CollectionPayload<ExtArgs>;
            fields: Prisma.CollectionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CollectionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectionPayload>;
                };
                findFirst: {
                    args: Prisma.CollectionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectionPayload>;
                };
                findMany: {
                    args: Prisma.CollectionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectionPayload>[];
                };
                create: {
                    args: Prisma.CollectionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectionPayload>;
                };
                createMany: {
                    args: Prisma.CollectionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectionPayload>[];
                };
                delete: {
                    args: Prisma.CollectionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectionPayload>;
                };
                update: {
                    args: Prisma.CollectionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectionPayload>;
                };
                deleteMany: {
                    args: Prisma.CollectionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CollectionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CollectionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectionPayload>[];
                };
                upsert: {
                    args: Prisma.CollectionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CollectionPayload>;
                };
                aggregate: {
                    args: Prisma.CollectionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCollection>;
                };
                groupBy: {
                    args: Prisma.CollectionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CollectionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CollectionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CollectionCountAggregateOutputType> | number;
                };
            };
        };
        Lehenga: {
            payload: Prisma.$LehengaPayload<ExtArgs>;
            fields: Prisma.LehengaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LehengaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LehengaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaPayload>;
                };
                findFirst: {
                    args: Prisma.LehengaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LehengaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaPayload>;
                };
                findMany: {
                    args: Prisma.LehengaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaPayload>[];
                };
                create: {
                    args: Prisma.LehengaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaPayload>;
                };
                createMany: {
                    args: Prisma.LehengaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LehengaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaPayload>[];
                };
                delete: {
                    args: Prisma.LehengaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaPayload>;
                };
                update: {
                    args: Prisma.LehengaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaPayload>;
                };
                deleteMany: {
                    args: Prisma.LehengaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LehengaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LehengaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaPayload>[];
                };
                upsert: {
                    args: Prisma.LehengaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaPayload>;
                };
                aggregate: {
                    args: Prisma.LehengaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLehenga>;
                };
                groupBy: {
                    args: Prisma.LehengaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LehengaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LehengaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LehengaCountAggregateOutputType> | number;
                };
            };
        };
        LehengaSize: {
            payload: Prisma.$LehengaSizePayload<ExtArgs>;
            fields: Prisma.LehengaSizeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LehengaSizeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaSizePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LehengaSizeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaSizePayload>;
                };
                findFirst: {
                    args: Prisma.LehengaSizeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaSizePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LehengaSizeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaSizePayload>;
                };
                findMany: {
                    args: Prisma.LehengaSizeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaSizePayload>[];
                };
                create: {
                    args: Prisma.LehengaSizeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaSizePayload>;
                };
                createMany: {
                    args: Prisma.LehengaSizeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LehengaSizeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaSizePayload>[];
                };
                delete: {
                    args: Prisma.LehengaSizeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaSizePayload>;
                };
                update: {
                    args: Prisma.LehengaSizeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaSizePayload>;
                };
                deleteMany: {
                    args: Prisma.LehengaSizeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LehengaSizeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LehengaSizeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaSizePayload>[];
                };
                upsert: {
                    args: Prisma.LehengaSizeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaSizePayload>;
                };
                aggregate: {
                    args: Prisma.LehengaSizeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLehengaSize>;
                };
                groupBy: {
                    args: Prisma.LehengaSizeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LehengaSizeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LehengaSizeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LehengaSizeCountAggregateOutputType> | number;
                };
            };
        };
        LehengaImage: {
            payload: Prisma.$LehengaImagePayload<ExtArgs>;
            fields: Prisma.LehengaImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LehengaImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LehengaImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaImagePayload>;
                };
                findFirst: {
                    args: Prisma.LehengaImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LehengaImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaImagePayload>;
                };
                findMany: {
                    args: Prisma.LehengaImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaImagePayload>[];
                };
                create: {
                    args: Prisma.LehengaImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaImagePayload>;
                };
                createMany: {
                    args: Prisma.LehengaImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LehengaImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaImagePayload>[];
                };
                delete: {
                    args: Prisma.LehengaImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaImagePayload>;
                };
                update: {
                    args: Prisma.LehengaImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaImagePayload>;
                };
                deleteMany: {
                    args: Prisma.LehengaImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LehengaImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LehengaImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaImagePayload>[];
                };
                upsert: {
                    args: Prisma.LehengaImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LehengaImagePayload>;
                };
                aggregate: {
                    args: Prisma.LehengaImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLehengaImage>;
                };
                groupBy: {
                    args: Prisma.LehengaImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LehengaImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LehengaImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LehengaImageCountAggregateOutputType> | number;
                };
            };
        };
        Jewellery: {
            payload: Prisma.$JewelleryPayload<ExtArgs>;
            fields: Prisma.JewelleryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JewelleryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JewelleryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryPayload>;
                };
                findFirst: {
                    args: Prisma.JewelleryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JewelleryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryPayload>;
                };
                findMany: {
                    args: Prisma.JewelleryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryPayload>[];
                };
                create: {
                    args: Prisma.JewelleryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryPayload>;
                };
                createMany: {
                    args: Prisma.JewelleryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JewelleryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryPayload>[];
                };
                delete: {
                    args: Prisma.JewelleryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryPayload>;
                };
                update: {
                    args: Prisma.JewelleryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryPayload>;
                };
                deleteMany: {
                    args: Prisma.JewelleryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JewelleryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JewelleryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryPayload>[];
                };
                upsert: {
                    args: Prisma.JewelleryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryPayload>;
                };
                aggregate: {
                    args: Prisma.JewelleryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJewellery>;
                };
                groupBy: {
                    args: Prisma.JewelleryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JewelleryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JewelleryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JewelleryCountAggregateOutputType> | number;
                };
            };
        };
        JewelleryImage: {
            payload: Prisma.$JewelleryImagePayload<ExtArgs>;
            fields: Prisma.JewelleryImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JewelleryImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JewelleryImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryImagePayload>;
                };
                findFirst: {
                    args: Prisma.JewelleryImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JewelleryImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryImagePayload>;
                };
                findMany: {
                    args: Prisma.JewelleryImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryImagePayload>[];
                };
                create: {
                    args: Prisma.JewelleryImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryImagePayload>;
                };
                createMany: {
                    args: Prisma.JewelleryImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JewelleryImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryImagePayload>[];
                };
                delete: {
                    args: Prisma.JewelleryImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryImagePayload>;
                };
                update: {
                    args: Prisma.JewelleryImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryImagePayload>;
                };
                deleteMany: {
                    args: Prisma.JewelleryImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JewelleryImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JewelleryImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryImagePayload>[];
                };
                upsert: {
                    args: Prisma.JewelleryImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JewelleryImagePayload>;
                };
                aggregate: {
                    args: Prisma.JewelleryImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJewelleryImage>;
                };
                groupBy: {
                    args: Prisma.JewelleryImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JewelleryImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JewelleryImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JewelleryImageCountAggregateOutputType> | number;
                };
            };
        };
        StoreLocation: {
            payload: Prisma.$StoreLocationPayload<ExtArgs>;
            fields: Prisma.StoreLocationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StoreLocationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreLocationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StoreLocationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreLocationPayload>;
                };
                findFirst: {
                    args: Prisma.StoreLocationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreLocationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StoreLocationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreLocationPayload>;
                };
                findMany: {
                    args: Prisma.StoreLocationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreLocationPayload>[];
                };
                create: {
                    args: Prisma.StoreLocationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreLocationPayload>;
                };
                createMany: {
                    args: Prisma.StoreLocationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StoreLocationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreLocationPayload>[];
                };
                delete: {
                    args: Prisma.StoreLocationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreLocationPayload>;
                };
                update: {
                    args: Prisma.StoreLocationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreLocationPayload>;
                };
                deleteMany: {
                    args: Prisma.StoreLocationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StoreLocationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StoreLocationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreLocationPayload>[];
                };
                upsert: {
                    args: Prisma.StoreLocationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StoreLocationPayload>;
                };
                aggregate: {
                    args: Prisma.StoreLocationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStoreLocation>;
                };
                groupBy: {
                    args: Prisma.StoreLocationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreLocationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StoreLocationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoreLocationCountAggregateOutputType> | number;
                };
            };
        };
        RentalOrder: {
            payload: Prisma.$RentalOrderPayload<ExtArgs>;
            fields: Prisma.RentalOrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RentalOrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RentalOrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderPayload>;
                };
                findFirst: {
                    args: Prisma.RentalOrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RentalOrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderPayload>;
                };
                findMany: {
                    args: Prisma.RentalOrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderPayload>[];
                };
                create: {
                    args: Prisma.RentalOrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderPayload>;
                };
                createMany: {
                    args: Prisma.RentalOrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RentalOrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderPayload>[];
                };
                delete: {
                    args: Prisma.RentalOrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderPayload>;
                };
                update: {
                    args: Prisma.RentalOrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderPayload>;
                };
                deleteMany: {
                    args: Prisma.RentalOrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RentalOrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RentalOrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderPayload>[];
                };
                upsert: {
                    args: Prisma.RentalOrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderPayload>;
                };
                aggregate: {
                    args: Prisma.RentalOrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRentalOrder>;
                };
                groupBy: {
                    args: Prisma.RentalOrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RentalOrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RentalOrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RentalOrderCountAggregateOutputType> | number;
                };
            };
        };
        RentalOrderItem: {
            payload: Prisma.$RentalOrderItemPayload<ExtArgs>;
            fields: Prisma.RentalOrderItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RentalOrderItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RentalOrderItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>;
                };
                findFirst: {
                    args: Prisma.RentalOrderItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RentalOrderItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>;
                };
                findMany: {
                    args: Prisma.RentalOrderItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>[];
                };
                create: {
                    args: Prisma.RentalOrderItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>;
                };
                createMany: {
                    args: Prisma.RentalOrderItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RentalOrderItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>[];
                };
                delete: {
                    args: Prisma.RentalOrderItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>;
                };
                update: {
                    args: Prisma.RentalOrderItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>;
                };
                deleteMany: {
                    args: Prisma.RentalOrderItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RentalOrderItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RentalOrderItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>[];
                };
                upsert: {
                    args: Prisma.RentalOrderItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>;
                };
                aggregate: {
                    args: Prisma.RentalOrderItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRentalOrderItem>;
                };
                groupBy: {
                    args: Prisma.RentalOrderItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RentalOrderItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RentalOrderItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RentalOrderItemCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AdminUserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly phone: "phone";
    readonly isActive: "isActive";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly phone: "phone";
    readonly passwordHash: "passwordHash";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const CollectionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly season: "season";
    readonly audience: "audience";
    readonly isFeatured: "isFeatured";
    readonly displayOrder: "displayOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum];
export declare const LehengaScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly sku: "sku";
    readonly shortDescription: "shortDescription";
    readonly description: "description";
    readonly designer: "designer";
    readonly color: "color";
    readonly fabric: "fabric";
    readonly embroideryDetails: "embroideryDetails";
    readonly occasion: "occasion";
    readonly setIncludes: "setIncludes";
    readonly careInstructions: "careInstructions";
    readonly rentalPricePerDay: "rentalPricePerDay";
    readonly securityDeposit: "securityDeposit";
    readonly originalPrice: "originalPrice";
    readonly minimumRentalDays: "minimumRentalDays";
    readonly pickupAvailable: "pickupAvailable";
    readonly status: "status";
    readonly isFeatured: "isFeatured";
    readonly collectionId: "collectionId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LehengaScalarFieldEnum = (typeof LehengaScalarFieldEnum)[keyof typeof LehengaScalarFieldEnum];
export declare const LehengaSizeScalarFieldEnum: {
    readonly id: "id";
    readonly lehengaId: "lehengaId";
    readonly sizeLabel: "sizeLabel";
    readonly blouseSize: "blouseSize";
    readonly waistInInches: "waistInInches";
    readonly bustInInches: "bustInInches";
    readonly hipInInches: "hipInInches";
    readonly lengthInInches: "lengthInInches";
    readonly quantityTotal: "quantityTotal";
    readonly quantityReserved: "quantityReserved";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LehengaSizeScalarFieldEnum = (typeof LehengaSizeScalarFieldEnum)[keyof typeof LehengaSizeScalarFieldEnum];
export declare const LehengaImageScalarFieldEnum: {
    readonly id: "id";
    readonly lehengaId: "lehengaId";
    readonly imageUrl: "imageUrl";
    readonly altText: "altText";
    readonly isPrimary: "isPrimary";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type LehengaImageScalarFieldEnum = (typeof LehengaImageScalarFieldEnum)[keyof typeof LehengaImageScalarFieldEnum];
export declare const JewelleryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly sku: "sku";
    readonly shortDescription: "shortDescription";
    readonly description: "description";
    readonly type: "type";
    readonly material: "material";
    readonly color: "color";
    readonly finish: "finish";
    readonly stoneDetails: "stoneDetails";
    readonly occasion: "occasion";
    readonly rentalPricePerDay: "rentalPricePerDay";
    readonly securityDeposit: "securityDeposit";
    readonly originalPrice: "originalPrice";
    readonly minimumRentalDays: "minimumRentalDays";
    readonly stockQuantity: "stockQuantity";
    readonly pickupAvailable: "pickupAvailable";
    readonly status: "status";
    readonly isFeatured: "isFeatured";
    readonly collectionId: "collectionId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type JewelleryScalarFieldEnum = (typeof JewelleryScalarFieldEnum)[keyof typeof JewelleryScalarFieldEnum];
export declare const JewelleryImageScalarFieldEnum: {
    readonly id: "id";
    readonly jewelleryId: "jewelleryId";
    readonly imageUrl: "imageUrl";
    readonly altText: "altText";
    readonly isPrimary: "isPrimary";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type JewelleryImageScalarFieldEnum = (typeof JewelleryImageScalarFieldEnum)[keyof typeof JewelleryImageScalarFieldEnum];
export declare const StoreLocationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly phone: "phone";
    readonly email: "email";
    readonly addressLine1: "addressLine1";
    readonly addressLine2: "addressLine2";
    readonly city: "city";
    readonly state: "state";
    readonly postalCode: "postalCode";
    readonly country: "country";
    readonly pickupNotes: "pickupNotes";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StoreLocationScalarFieldEnum = (typeof StoreLocationScalarFieldEnum)[keyof typeof StoreLocationScalarFieldEnum];
export declare const RentalOrderScalarFieldEnum: {
    readonly id: "id";
    readonly orderNumber: "orderNumber";
    readonly customerId: "customerId";
    readonly pickupLocationId: "pickupLocationId";
    readonly createdByAdminId: "createdByAdminId";
    readonly status: "status";
    readonly paymentStatus: "paymentStatus";
    readonly rentalStartDate: "rentalStartDate";
    readonly rentalEndDate: "rentalEndDate";
    readonly pickupDate: "pickupDate";
    readonly returnDate: "returnDate";
    readonly subtotalAmount: "subtotalAmount";
    readonly securityDeposit: "securityDeposit";
    readonly discountAmount: "discountAmount";
    readonly totalAmount: "totalAmount";
    readonly amountPaid: "amountPaid";
    readonly specialInstructions: "specialInstructions";
    readonly internalNotes: "internalNotes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RentalOrderScalarFieldEnum = (typeof RentalOrderScalarFieldEnum)[keyof typeof RentalOrderScalarFieldEnum];
export declare const RentalOrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly itemType: "itemType";
    readonly lehengaId: "lehengaId";
    readonly lehengaSizeId: "lehengaSizeId";
    readonly jewelleryId: "jewelleryId";
    readonly productNameSnapshot: "productNameSnapshot";
    readonly skuSnapshot: "skuSnapshot";
    readonly sizeLabelSnapshot: "sizeLabelSnapshot";
    readonly quantity: "quantity";
    readonly pricePerDay: "pricePerDay";
    readonly rentalDays: "rentalDays";
    readonly lineTotal: "lineTotal";
    readonly depositAmount: "depositAmount";
    readonly createdAt: "createdAt";
};
export type RentalOrderItemScalarFieldEnum = (typeof RentalOrderItemScalarFieldEnum)[keyof typeof RentalOrderItemScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'CollectionSeason'
 */
export type EnumCollectionSeasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollectionSeason'>;
/**
 * Reference to a field of type 'CollectionSeason[]'
 */
export type ListEnumCollectionSeasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollectionSeason[]'>;
/**
 * Reference to a field of type 'Audience'
 */
export type EnumAudienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Audience'>;
/**
 * Reference to a field of type 'Audience[]'
 */
export type ListEnumAudienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Audience[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
/**
 * Reference to a field of type 'ProductStatus'
 */
export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>;
/**
 * Reference to a field of type 'ProductStatus[]'
 */
export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>;
/**
 * Reference to a field of type 'JewelleryType'
 */
export type EnumJewelleryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JewelleryType'>;
/**
 * Reference to a field of type 'JewelleryType[]'
 */
export type ListEnumJewelleryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JewelleryType[]'>;
/**
 * Reference to a field of type 'OrderStatus'
 */
export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>;
/**
 * Reference to a field of type 'OrderStatus[]'
 */
export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>;
/**
 * Reference to a field of type 'PaymentStatus'
 */
export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>;
/**
 * Reference to a field of type 'PaymentStatus[]'
 */
export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;
/**
 * Reference to a field of type 'RentalItemType'
 */
export type EnumRentalItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalItemType'>;
/**
 * Reference to a field of type 'RentalItemType[]'
 */
export type ListEnumRentalItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalItemType[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    adminUser?: Prisma.AdminUserOmit;
    customer?: Prisma.CustomerOmit;
    collection?: Prisma.CollectionOmit;
    lehenga?: Prisma.LehengaOmit;
    lehengaSize?: Prisma.LehengaSizeOmit;
    lehengaImage?: Prisma.LehengaImageOmit;
    jewellery?: Prisma.JewelleryOmit;
    jewelleryImage?: Prisma.JewelleryImageOmit;
    storeLocation?: Prisma.StoreLocationOmit;
    rentalOrder?: Prisma.RentalOrderOmit;
    rentalOrderItem?: Prisma.RentalOrderItemOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map