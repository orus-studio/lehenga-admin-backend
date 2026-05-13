import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model StoreLocation
 *
 */
export type StoreLocationModel = runtime.Types.Result.DefaultSelection<Prisma.$StoreLocationPayload>;
export type AggregateStoreLocation = {
    _count: StoreLocationCountAggregateOutputType | null;
    _min: StoreLocationMinAggregateOutputType | null;
    _max: StoreLocationMaxAggregateOutputType | null;
};
export type StoreLocationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    phone: string | null;
    email: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
    city: string | null;
    state: string | null;
    postalCode: string | null;
    country: string | null;
    pickupNotes: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StoreLocationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    phone: string | null;
    email: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
    city: string | null;
    state: string | null;
    postalCode: string | null;
    country: string | null;
    pickupNotes: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StoreLocationCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    phone: number;
    email: number;
    addressLine1: number;
    addressLine2: number;
    city: number;
    state: number;
    postalCode: number;
    country: number;
    pickupNotes: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StoreLocationMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    phone?: true;
    email?: true;
    addressLine1?: true;
    addressLine2?: true;
    city?: true;
    state?: true;
    postalCode?: true;
    country?: true;
    pickupNotes?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StoreLocationMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    phone?: true;
    email?: true;
    addressLine1?: true;
    addressLine2?: true;
    city?: true;
    state?: true;
    postalCode?: true;
    country?: true;
    pickupNotes?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StoreLocationCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    phone?: true;
    email?: true;
    addressLine1?: true;
    addressLine2?: true;
    city?: true;
    state?: true;
    postalCode?: true;
    country?: true;
    pickupNotes?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StoreLocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StoreLocation to aggregate.
     */
    where?: Prisma.StoreLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StoreLocations to fetch.
     */
    orderBy?: Prisma.StoreLocationOrderByWithRelationInput | Prisma.StoreLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.StoreLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StoreLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StoreLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned StoreLocations
    **/
    _count?: true | StoreLocationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StoreLocationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StoreLocationMaxAggregateInputType;
};
export type GetStoreLocationAggregateType<T extends StoreLocationAggregateArgs> = {
    [P in keyof T & keyof AggregateStoreLocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStoreLocation[P]> : Prisma.GetScalarType<T[P], AggregateStoreLocation[P]>;
};
export type StoreLocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StoreLocationWhereInput;
    orderBy?: Prisma.StoreLocationOrderByWithAggregationInput | Prisma.StoreLocationOrderByWithAggregationInput[];
    by: Prisma.StoreLocationScalarFieldEnum[] | Prisma.StoreLocationScalarFieldEnum;
    having?: Prisma.StoreLocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StoreLocationCountAggregateInputType | true;
    _min?: StoreLocationMinAggregateInputType;
    _max?: StoreLocationMaxAggregateInputType;
};
export type StoreLocationGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    phone: string | null;
    email: string | null;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    pickupNotes: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: StoreLocationCountAggregateOutputType | null;
    _min: StoreLocationMinAggregateOutputType | null;
    _max: StoreLocationMaxAggregateOutputType | null;
};
export type GetStoreLocationGroupByPayload<T extends StoreLocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StoreLocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StoreLocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StoreLocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StoreLocationGroupByOutputType[P]>;
}>>;
export type StoreLocationWhereInput = {
    AND?: Prisma.StoreLocationWhereInput | Prisma.StoreLocationWhereInput[];
    OR?: Prisma.StoreLocationWhereInput[];
    NOT?: Prisma.StoreLocationWhereInput | Prisma.StoreLocationWhereInput[];
    id?: Prisma.StringFilter<"StoreLocation"> | string;
    name?: Prisma.StringFilter<"StoreLocation"> | string;
    slug?: Prisma.StringFilter<"StoreLocation"> | string;
    phone?: Prisma.StringNullableFilter<"StoreLocation"> | string | null;
    email?: Prisma.StringNullableFilter<"StoreLocation"> | string | null;
    addressLine1?: Prisma.StringFilter<"StoreLocation"> | string;
    addressLine2?: Prisma.StringNullableFilter<"StoreLocation"> | string | null;
    city?: Prisma.StringFilter<"StoreLocation"> | string;
    state?: Prisma.StringFilter<"StoreLocation"> | string;
    postalCode?: Prisma.StringFilter<"StoreLocation"> | string;
    country?: Prisma.StringFilter<"StoreLocation"> | string;
    pickupNotes?: Prisma.StringNullableFilter<"StoreLocation"> | string | null;
    isActive?: Prisma.BoolFilter<"StoreLocation"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"StoreLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StoreLocation"> | Date | string;
    orders?: Prisma.RentalOrderListRelationFilter;
};
export type StoreLocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    pickupNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    orders?: Prisma.RentalOrderOrderByRelationAggregateInput;
};
export type StoreLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.StoreLocationWhereInput | Prisma.StoreLocationWhereInput[];
    OR?: Prisma.StoreLocationWhereInput[];
    NOT?: Prisma.StoreLocationWhereInput | Prisma.StoreLocationWhereInput[];
    name?: Prisma.StringFilter<"StoreLocation"> | string;
    phone?: Prisma.StringNullableFilter<"StoreLocation"> | string | null;
    email?: Prisma.StringNullableFilter<"StoreLocation"> | string | null;
    addressLine1?: Prisma.StringFilter<"StoreLocation"> | string;
    addressLine2?: Prisma.StringNullableFilter<"StoreLocation"> | string | null;
    city?: Prisma.StringFilter<"StoreLocation"> | string;
    state?: Prisma.StringFilter<"StoreLocation"> | string;
    postalCode?: Prisma.StringFilter<"StoreLocation"> | string;
    country?: Prisma.StringFilter<"StoreLocation"> | string;
    pickupNotes?: Prisma.StringNullableFilter<"StoreLocation"> | string | null;
    isActive?: Prisma.BoolFilter<"StoreLocation"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"StoreLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StoreLocation"> | Date | string;
    orders?: Prisma.RentalOrderListRelationFilter;
}, "id" | "slug">;
export type StoreLocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    pickupNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StoreLocationCountOrderByAggregateInput;
    _max?: Prisma.StoreLocationMaxOrderByAggregateInput;
    _min?: Prisma.StoreLocationMinOrderByAggregateInput;
};
export type StoreLocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.StoreLocationScalarWhereWithAggregatesInput | Prisma.StoreLocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.StoreLocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StoreLocationScalarWhereWithAggregatesInput | Prisma.StoreLocationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StoreLocation"> | string;
    name?: Prisma.StringWithAggregatesFilter<"StoreLocation"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"StoreLocation"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"StoreLocation"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"StoreLocation"> | string | null;
    addressLine1?: Prisma.StringWithAggregatesFilter<"StoreLocation"> | string;
    addressLine2?: Prisma.StringNullableWithAggregatesFilter<"StoreLocation"> | string | null;
    city?: Prisma.StringWithAggregatesFilter<"StoreLocation"> | string;
    state?: Prisma.StringWithAggregatesFilter<"StoreLocation"> | string;
    postalCode?: Prisma.StringWithAggregatesFilter<"StoreLocation"> | string;
    country?: Prisma.StringWithAggregatesFilter<"StoreLocation"> | string;
    pickupNotes?: Prisma.StringNullableWithAggregatesFilter<"StoreLocation"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"StoreLocation"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StoreLocation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StoreLocation"> | Date | string;
};
export type StoreLocationCreateInput = {
    id?: string;
    name: string;
    slug: string;
    phone?: string | null;
    email?: string | null;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
    pickupNotes?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.RentalOrderCreateNestedManyWithoutPickupLocationInput;
};
export type StoreLocationUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    phone?: string | null;
    email?: string | null;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
    pickupNotes?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.RentalOrderUncheckedCreateNestedManyWithoutPickupLocationInput;
};
export type StoreLocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.RentalOrderUpdateManyWithoutPickupLocationNestedInput;
};
export type StoreLocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.RentalOrderUncheckedUpdateManyWithoutPickupLocationNestedInput;
};
export type StoreLocationCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    phone?: string | null;
    email?: string | null;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
    pickupNotes?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StoreLocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoreLocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoreLocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    pickupNotes?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StoreLocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    pickupNotes?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StoreLocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    pickupNotes?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StoreLocationScalarRelationFilter = {
    is?: Prisma.StoreLocationWhereInput;
    isNot?: Prisma.StoreLocationWhereInput;
};
export type StoreLocationCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.StoreLocationCreateWithoutOrdersInput, Prisma.StoreLocationUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.StoreLocationCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.StoreLocationWhereUniqueInput;
};
export type StoreLocationUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.StoreLocationCreateWithoutOrdersInput, Prisma.StoreLocationUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.StoreLocationCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.StoreLocationUpsertWithoutOrdersInput;
    connect?: Prisma.StoreLocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StoreLocationUpdateToOneWithWhereWithoutOrdersInput, Prisma.StoreLocationUpdateWithoutOrdersInput>, Prisma.StoreLocationUncheckedUpdateWithoutOrdersInput>;
};
export type StoreLocationCreateWithoutOrdersInput = {
    id?: string;
    name: string;
    slug: string;
    phone?: string | null;
    email?: string | null;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
    pickupNotes?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StoreLocationUncheckedCreateWithoutOrdersInput = {
    id?: string;
    name: string;
    slug: string;
    phone?: string | null;
    email?: string | null;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
    pickupNotes?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StoreLocationCreateOrConnectWithoutOrdersInput = {
    where: Prisma.StoreLocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.StoreLocationCreateWithoutOrdersInput, Prisma.StoreLocationUncheckedCreateWithoutOrdersInput>;
};
export type StoreLocationUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.StoreLocationUpdateWithoutOrdersInput, Prisma.StoreLocationUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.StoreLocationCreateWithoutOrdersInput, Prisma.StoreLocationUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.StoreLocationWhereInput;
};
export type StoreLocationUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.StoreLocationWhereInput;
    data: Prisma.XOR<Prisma.StoreLocationUpdateWithoutOrdersInput, Prisma.StoreLocationUncheckedUpdateWithoutOrdersInput>;
};
export type StoreLocationUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoreLocationUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.StringFieldUpdateOperationsInput | string;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type StoreLocationCountOutputType
 */
export type StoreLocationCountOutputType = {
    orders: number;
};
export type StoreLocationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | StoreLocationCountOutputTypeCountOrdersArgs;
};
/**
 * StoreLocationCountOutputType without action
 */
export type StoreLocationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocationCountOutputType
     */
    select?: Prisma.StoreLocationCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * StoreLocationCountOutputType without action
 */
export type StoreLocationCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RentalOrderWhereInput;
};
export type StoreLocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    phone?: boolean;
    email?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    city?: boolean;
    state?: boolean;
    postalCode?: boolean;
    country?: boolean;
    pickupNotes?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    orders?: boolean | Prisma.StoreLocation$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.StoreLocationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["storeLocation"]>;
export type StoreLocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    phone?: boolean;
    email?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    city?: boolean;
    state?: boolean;
    postalCode?: boolean;
    country?: boolean;
    pickupNotes?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["storeLocation"]>;
export type StoreLocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    phone?: boolean;
    email?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    city?: boolean;
    state?: boolean;
    postalCode?: boolean;
    country?: boolean;
    pickupNotes?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["storeLocation"]>;
export type StoreLocationSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    phone?: boolean;
    email?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    city?: boolean;
    state?: boolean;
    postalCode?: boolean;
    country?: boolean;
    pickupNotes?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StoreLocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "phone" | "email" | "addressLine1" | "addressLine2" | "city" | "state" | "postalCode" | "country" | "pickupNotes" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["storeLocation"]>;
export type StoreLocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.StoreLocation$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.StoreLocationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StoreLocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type StoreLocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $StoreLocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StoreLocation";
    objects: {
        orders: Prisma.$RentalOrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        phone: string | null;
        email: string | null;
        addressLine1: string;
        addressLine2: string | null;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        pickupNotes: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["storeLocation"]>;
    composites: {};
};
export type StoreLocationGetPayload<S extends boolean | null | undefined | StoreLocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload, S>;
export type StoreLocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StoreLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StoreLocationCountAggregateInputType | true;
};
export interface StoreLocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StoreLocation'];
        meta: {
            name: 'StoreLocation';
        };
    };
    /**
     * Find zero or one StoreLocation that matches the filter.
     * @param {StoreLocationFindUniqueArgs} args - Arguments to find a StoreLocation
     * @example
     * // Get one StoreLocation
     * const storeLocation = await prisma.storeLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreLocationFindUniqueArgs>(args: Prisma.SelectSubset<T, StoreLocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StoreLocationClient<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one StoreLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreLocationFindUniqueOrThrowArgs} args - Arguments to find a StoreLocation
     * @example
     * // Get one StoreLocation
     * const storeLocation = await prisma.storeLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreLocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StoreLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StoreLocationClient<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StoreLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLocationFindFirstArgs} args - Arguments to find a StoreLocation
     * @example
     * // Get one StoreLocation
     * const storeLocation = await prisma.storeLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreLocationFindFirstArgs>(args?: Prisma.SelectSubset<T, StoreLocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__StoreLocationClient<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StoreLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLocationFindFirstOrThrowArgs} args - Arguments to find a StoreLocation
     * @example
     * // Get one StoreLocation
     * const storeLocation = await prisma.storeLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreLocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StoreLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StoreLocationClient<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more StoreLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreLocations
     * const storeLocations = await prisma.storeLocation.findMany()
     *
     * // Get first 10 StoreLocations
     * const storeLocations = await prisma.storeLocation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const storeLocationWithIdOnly = await prisma.storeLocation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StoreLocationFindManyArgs>(args?: Prisma.SelectSubset<T, StoreLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a StoreLocation.
     * @param {StoreLocationCreateArgs} args - Arguments to create a StoreLocation.
     * @example
     * // Create one StoreLocation
     * const StoreLocation = await prisma.storeLocation.create({
     *   data: {
     *     // ... data to create a StoreLocation
     *   }
     * })
     *
     */
    create<T extends StoreLocationCreateArgs>(args: Prisma.SelectSubset<T, StoreLocationCreateArgs<ExtArgs>>): Prisma.Prisma__StoreLocationClient<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many StoreLocations.
     * @param {StoreLocationCreateManyArgs} args - Arguments to create many StoreLocations.
     * @example
     * // Create many StoreLocations
     * const storeLocation = await prisma.storeLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StoreLocationCreateManyArgs>(args?: Prisma.SelectSubset<T, StoreLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many StoreLocations and returns the data saved in the database.
     * @param {StoreLocationCreateManyAndReturnArgs} args - Arguments to create many StoreLocations.
     * @example
     * // Create many StoreLocations
     * const storeLocation = await prisma.storeLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many StoreLocations and only return the `id`
     * const storeLocationWithIdOnly = await prisma.storeLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StoreLocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StoreLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a StoreLocation.
     * @param {StoreLocationDeleteArgs} args - Arguments to delete one StoreLocation.
     * @example
     * // Delete one StoreLocation
     * const StoreLocation = await prisma.storeLocation.delete({
     *   where: {
     *     // ... filter to delete one StoreLocation
     *   }
     * })
     *
     */
    delete<T extends StoreLocationDeleteArgs>(args: Prisma.SelectSubset<T, StoreLocationDeleteArgs<ExtArgs>>): Prisma.Prisma__StoreLocationClient<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one StoreLocation.
     * @param {StoreLocationUpdateArgs} args - Arguments to update one StoreLocation.
     * @example
     * // Update one StoreLocation
     * const storeLocation = await prisma.storeLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StoreLocationUpdateArgs>(args: Prisma.SelectSubset<T, StoreLocationUpdateArgs<ExtArgs>>): Prisma.Prisma__StoreLocationClient<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more StoreLocations.
     * @param {StoreLocationDeleteManyArgs} args - Arguments to filter StoreLocations to delete.
     * @example
     * // Delete a few StoreLocations
     * const { count } = await prisma.storeLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StoreLocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, StoreLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StoreLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreLocations
     * const storeLocation = await prisma.storeLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StoreLocationUpdateManyArgs>(args: Prisma.SelectSubset<T, StoreLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StoreLocations and returns the data updated in the database.
     * @param {StoreLocationUpdateManyAndReturnArgs} args - Arguments to update many StoreLocations.
     * @example
     * // Update many StoreLocations
     * const storeLocation = await prisma.storeLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more StoreLocations and only return the `id`
     * const storeLocationWithIdOnly = await prisma.storeLocation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends StoreLocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StoreLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one StoreLocation.
     * @param {StoreLocationUpsertArgs} args - Arguments to update or create a StoreLocation.
     * @example
     * // Update or create a StoreLocation
     * const storeLocation = await prisma.storeLocation.upsert({
     *   create: {
     *     // ... data to create a StoreLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreLocation we want to update
     *   }
     * })
     */
    upsert<T extends StoreLocationUpsertArgs>(args: Prisma.SelectSubset<T, StoreLocationUpsertArgs<ExtArgs>>): Prisma.Prisma__StoreLocationClient<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of StoreLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLocationCountArgs} args - Arguments to filter StoreLocations to count.
     * @example
     * // Count the number of StoreLocations
     * const count = await prisma.storeLocation.count({
     *   where: {
     *     // ... the filter for the StoreLocations we want to count
     *   }
     * })
    **/
    count<T extends StoreLocationCountArgs>(args?: Prisma.Subset<T, StoreLocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StoreLocationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a StoreLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreLocationAggregateArgs>(args: Prisma.Subset<T, StoreLocationAggregateArgs>): Prisma.PrismaPromise<GetStoreLocationAggregateType<T>>;
    /**
     * Group by StoreLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends StoreLocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StoreLocationGroupByArgs['orderBy'];
    } : {
        orderBy?: StoreLocationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StoreLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the StoreLocation model
     */
    readonly fields: StoreLocationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for StoreLocation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__StoreLocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.StoreLocation$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StoreLocation$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the StoreLocation model
 */
export interface StoreLocationFieldRefs {
    readonly id: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly name: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly slug: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly phone: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly email: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly addressLine1: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly addressLine2: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly city: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly state: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly postalCode: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly country: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly pickupNotes: Prisma.FieldRef<"StoreLocation", 'String'>;
    readonly isActive: Prisma.FieldRef<"StoreLocation", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"StoreLocation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StoreLocation", 'DateTime'>;
}
/**
 * StoreLocation findUnique
 */
export type StoreLocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StoreLocationInclude<ExtArgs> | null;
    /**
     * Filter, which StoreLocation to fetch.
     */
    where: Prisma.StoreLocationWhereUniqueInput;
};
/**
 * StoreLocation findUniqueOrThrow
 */
export type StoreLocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StoreLocationInclude<ExtArgs> | null;
    /**
     * Filter, which StoreLocation to fetch.
     */
    where: Prisma.StoreLocationWhereUniqueInput;
};
/**
 * StoreLocation findFirst
 */
export type StoreLocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StoreLocationInclude<ExtArgs> | null;
    /**
     * Filter, which StoreLocation to fetch.
     */
    where?: Prisma.StoreLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StoreLocations to fetch.
     */
    orderBy?: Prisma.StoreLocationOrderByWithRelationInput | Prisma.StoreLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StoreLocations.
     */
    cursor?: Prisma.StoreLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StoreLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StoreLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StoreLocations.
     */
    distinct?: Prisma.StoreLocationScalarFieldEnum | Prisma.StoreLocationScalarFieldEnum[];
};
/**
 * StoreLocation findFirstOrThrow
 */
export type StoreLocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StoreLocationInclude<ExtArgs> | null;
    /**
     * Filter, which StoreLocation to fetch.
     */
    where?: Prisma.StoreLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StoreLocations to fetch.
     */
    orderBy?: Prisma.StoreLocationOrderByWithRelationInput | Prisma.StoreLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StoreLocations.
     */
    cursor?: Prisma.StoreLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StoreLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StoreLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StoreLocations.
     */
    distinct?: Prisma.StoreLocationScalarFieldEnum | Prisma.StoreLocationScalarFieldEnum[];
};
/**
 * StoreLocation findMany
 */
export type StoreLocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StoreLocationInclude<ExtArgs> | null;
    /**
     * Filter, which StoreLocations to fetch.
     */
    where?: Prisma.StoreLocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StoreLocations to fetch.
     */
    orderBy?: Prisma.StoreLocationOrderByWithRelationInput | Prisma.StoreLocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing StoreLocations.
     */
    cursor?: Prisma.StoreLocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StoreLocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StoreLocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StoreLocations.
     */
    distinct?: Prisma.StoreLocationScalarFieldEnum | Prisma.StoreLocationScalarFieldEnum[];
};
/**
 * StoreLocation create
 */
export type StoreLocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StoreLocationInclude<ExtArgs> | null;
    /**
     * The data needed to create a StoreLocation.
     */
    data: Prisma.XOR<Prisma.StoreLocationCreateInput, Prisma.StoreLocationUncheckedCreateInput>;
};
/**
 * StoreLocation createMany
 */
export type StoreLocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreLocations.
     */
    data: Prisma.StoreLocationCreateManyInput | Prisma.StoreLocationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StoreLocation createManyAndReturn
 */
export type StoreLocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * The data used to create many StoreLocations.
     */
    data: Prisma.StoreLocationCreateManyInput | Prisma.StoreLocationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StoreLocation update
 */
export type StoreLocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StoreLocationInclude<ExtArgs> | null;
    /**
     * The data needed to update a StoreLocation.
     */
    data: Prisma.XOR<Prisma.StoreLocationUpdateInput, Prisma.StoreLocationUncheckedUpdateInput>;
    /**
     * Choose, which StoreLocation to update.
     */
    where: Prisma.StoreLocationWhereUniqueInput;
};
/**
 * StoreLocation updateMany
 */
export type StoreLocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreLocations.
     */
    data: Prisma.XOR<Prisma.StoreLocationUpdateManyMutationInput, Prisma.StoreLocationUncheckedUpdateManyInput>;
    /**
     * Filter which StoreLocations to update
     */
    where?: Prisma.StoreLocationWhereInput;
    /**
     * Limit how many StoreLocations to update.
     */
    limit?: number;
};
/**
 * StoreLocation updateManyAndReturn
 */
export type StoreLocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * The data used to update StoreLocations.
     */
    data: Prisma.XOR<Prisma.StoreLocationUpdateManyMutationInput, Prisma.StoreLocationUncheckedUpdateManyInput>;
    /**
     * Filter which StoreLocations to update
     */
    where?: Prisma.StoreLocationWhereInput;
    /**
     * Limit how many StoreLocations to update.
     */
    limit?: number;
};
/**
 * StoreLocation upsert
 */
export type StoreLocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StoreLocationInclude<ExtArgs> | null;
    /**
     * The filter to search for the StoreLocation to update in case it exists.
     */
    where: Prisma.StoreLocationWhereUniqueInput;
    /**
     * In case the StoreLocation found by the `where` argument doesn't exist, create a new StoreLocation with this data.
     */
    create: Prisma.XOR<Prisma.StoreLocationCreateInput, Prisma.StoreLocationUncheckedCreateInput>;
    /**
     * In case the StoreLocation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.StoreLocationUpdateInput, Prisma.StoreLocationUncheckedUpdateInput>;
};
/**
 * StoreLocation delete
 */
export type StoreLocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StoreLocationInclude<ExtArgs> | null;
    /**
     * Filter which StoreLocation to delete.
     */
    where: Prisma.StoreLocationWhereUniqueInput;
};
/**
 * StoreLocation deleteMany
 */
export type StoreLocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StoreLocations to delete
     */
    where?: Prisma.StoreLocationWhereInput;
    /**
     * Limit how many StoreLocations to delete.
     */
    limit?: number;
};
/**
 * StoreLocation.orders
 */
export type StoreLocation$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderInclude<ExtArgs> | null;
    where?: Prisma.RentalOrderWhereInput;
    orderBy?: Prisma.RentalOrderOrderByWithRelationInput | Prisma.RentalOrderOrderByWithRelationInput[];
    cursor?: Prisma.RentalOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RentalOrderScalarFieldEnum | Prisma.RentalOrderScalarFieldEnum[];
};
/**
 * StoreLocation without action
 */
export type StoreLocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreLocation
     */
    select?: Prisma.StoreLocationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StoreLocation
     */
    omit?: Prisma.StoreLocationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StoreLocationInclude<ExtArgs> | null;
};
//# sourceMappingURL=StoreLocation.d.ts.map