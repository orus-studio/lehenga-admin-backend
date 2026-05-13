import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Jewellery
 *
 */
export type JewelleryModel = runtime.Types.Result.DefaultSelection<Prisma.$JewelleryPayload>;
export type AggregateJewellery = {
    _count: JewelleryCountAggregateOutputType | null;
    _avg: JewelleryAvgAggregateOutputType | null;
    _sum: JewellerySumAggregateOutputType | null;
    _min: JewelleryMinAggregateOutputType | null;
    _max: JewelleryMaxAggregateOutputType | null;
};
export type JewelleryAvgAggregateOutputType = {
    rentalPricePerDay: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    originalPrice: runtime.Decimal | null;
    minimumRentalDays: number | null;
    stockQuantity: number | null;
};
export type JewellerySumAggregateOutputType = {
    rentalPricePerDay: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    originalPrice: runtime.Decimal | null;
    minimumRentalDays: number | null;
    stockQuantity: number | null;
};
export type JewelleryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    sku: string | null;
    shortDescription: string | null;
    description: string | null;
    type: $Enums.JewelleryType | null;
    material: string | null;
    color: string | null;
    finish: string | null;
    stoneDetails: string | null;
    occasion: string | null;
    rentalPricePerDay: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    originalPrice: runtime.Decimal | null;
    minimumRentalDays: number | null;
    stockQuantity: number | null;
    pickupAvailable: boolean | null;
    status: $Enums.ProductStatus | null;
    isFeatured: boolean | null;
    collectionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type JewelleryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    sku: string | null;
    shortDescription: string | null;
    description: string | null;
    type: $Enums.JewelleryType | null;
    material: string | null;
    color: string | null;
    finish: string | null;
    stoneDetails: string | null;
    occasion: string | null;
    rentalPricePerDay: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    originalPrice: runtime.Decimal | null;
    minimumRentalDays: number | null;
    stockQuantity: number | null;
    pickupAvailable: boolean | null;
    status: $Enums.ProductStatus | null;
    isFeatured: boolean | null;
    collectionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type JewelleryCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    sku: number;
    shortDescription: number;
    description: number;
    type: number;
    material: number;
    color: number;
    finish: number;
    stoneDetails: number;
    occasion: number;
    rentalPricePerDay: number;
    securityDeposit: number;
    originalPrice: number;
    minimumRentalDays: number;
    stockQuantity: number;
    pickupAvailable: number;
    status: number;
    isFeatured: number;
    collectionId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type JewelleryAvgAggregateInputType = {
    rentalPricePerDay?: true;
    securityDeposit?: true;
    originalPrice?: true;
    minimumRentalDays?: true;
    stockQuantity?: true;
};
export type JewellerySumAggregateInputType = {
    rentalPricePerDay?: true;
    securityDeposit?: true;
    originalPrice?: true;
    minimumRentalDays?: true;
    stockQuantity?: true;
};
export type JewelleryMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    sku?: true;
    shortDescription?: true;
    description?: true;
    type?: true;
    material?: true;
    color?: true;
    finish?: true;
    stoneDetails?: true;
    occasion?: true;
    rentalPricePerDay?: true;
    securityDeposit?: true;
    originalPrice?: true;
    minimumRentalDays?: true;
    stockQuantity?: true;
    pickupAvailable?: true;
    status?: true;
    isFeatured?: true;
    collectionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type JewelleryMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    sku?: true;
    shortDescription?: true;
    description?: true;
    type?: true;
    material?: true;
    color?: true;
    finish?: true;
    stoneDetails?: true;
    occasion?: true;
    rentalPricePerDay?: true;
    securityDeposit?: true;
    originalPrice?: true;
    minimumRentalDays?: true;
    stockQuantity?: true;
    pickupAvailable?: true;
    status?: true;
    isFeatured?: true;
    collectionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type JewelleryCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    sku?: true;
    shortDescription?: true;
    description?: true;
    type?: true;
    material?: true;
    color?: true;
    finish?: true;
    stoneDetails?: true;
    occasion?: true;
    rentalPricePerDay?: true;
    securityDeposit?: true;
    originalPrice?: true;
    minimumRentalDays?: true;
    stockQuantity?: true;
    pickupAvailable?: true;
    status?: true;
    isFeatured?: true;
    collectionId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type JewelleryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Jewellery to aggregate.
     */
    where?: Prisma.JewelleryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jewelleries to fetch.
     */
    orderBy?: Prisma.JewelleryOrderByWithRelationInput | Prisma.JewelleryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.JewelleryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jewelleries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jewelleries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Jewelleries
    **/
    _count?: true | JewelleryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: JewelleryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: JewellerySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JewelleryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JewelleryMaxAggregateInputType;
};
export type GetJewelleryAggregateType<T extends JewelleryAggregateArgs> = {
    [P in keyof T & keyof AggregateJewellery]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJewellery[P]> : Prisma.GetScalarType<T[P], AggregateJewellery[P]>;
};
export type JewelleryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JewelleryWhereInput;
    orderBy?: Prisma.JewelleryOrderByWithAggregationInput | Prisma.JewelleryOrderByWithAggregationInput[];
    by: Prisma.JewelleryScalarFieldEnum[] | Prisma.JewelleryScalarFieldEnum;
    having?: Prisma.JewelleryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JewelleryCountAggregateInputType | true;
    _avg?: JewelleryAvgAggregateInputType;
    _sum?: JewellerySumAggregateInputType;
    _min?: JewelleryMinAggregateInputType;
    _max?: JewelleryMaxAggregateInputType;
};
export type JewelleryGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription: string | null;
    description: string | null;
    type: $Enums.JewelleryType;
    material: string | null;
    color: string | null;
    finish: string | null;
    stoneDetails: string | null;
    occasion: string | null;
    rentalPricePerDay: runtime.Decimal;
    securityDeposit: runtime.Decimal | null;
    originalPrice: runtime.Decimal | null;
    minimumRentalDays: number;
    stockQuantity: number;
    pickupAvailable: boolean;
    status: $Enums.ProductStatus;
    isFeatured: boolean;
    collectionId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: JewelleryCountAggregateOutputType | null;
    _avg: JewelleryAvgAggregateOutputType | null;
    _sum: JewellerySumAggregateOutputType | null;
    _min: JewelleryMinAggregateOutputType | null;
    _max: JewelleryMaxAggregateOutputType | null;
};
export type GetJewelleryGroupByPayload<T extends JewelleryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JewelleryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JewelleryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JewelleryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JewelleryGroupByOutputType[P]>;
}>>;
export type JewelleryWhereInput = {
    AND?: Prisma.JewelleryWhereInput | Prisma.JewelleryWhereInput[];
    OR?: Prisma.JewelleryWhereInput[];
    NOT?: Prisma.JewelleryWhereInput | Prisma.JewelleryWhereInput[];
    id?: Prisma.StringFilter<"Jewellery"> | string;
    name?: Prisma.StringFilter<"Jewellery"> | string;
    slug?: Prisma.StringFilter<"Jewellery"> | string;
    sku?: Prisma.StringFilter<"Jewellery"> | string;
    shortDescription?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    description?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    type?: Prisma.EnumJewelleryTypeFilter<"Jewellery"> | $Enums.JewelleryType;
    material?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    color?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    finish?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    stoneDetails?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    occasion?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    rentalPricePerDay?: Prisma.DecimalFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalNullableFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.DecimalNullableFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFilter<"Jewellery"> | number;
    stockQuantity?: Prisma.IntFilter<"Jewellery"> | number;
    pickupAvailable?: Prisma.BoolFilter<"Jewellery"> | boolean;
    status?: Prisma.EnumProductStatusFilter<"Jewellery"> | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFilter<"Jewellery"> | boolean;
    collectionId?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Jewellery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Jewellery"> | Date | string;
    collection?: Prisma.XOR<Prisma.CollectionNullableScalarRelationFilter, Prisma.CollectionWhereInput> | null;
    images?: Prisma.JewelleryImageListRelationFilter;
    orderItems?: Prisma.RentalOrderItemListRelationFilter;
};
export type JewelleryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    material?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    finish?: Prisma.SortOrderInput | Prisma.SortOrder;
    stoneDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    occasion?: Prisma.SortOrderInput | Prisma.SortOrder;
    rentalPricePerDay?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    pickupAvailable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    collectionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    collection?: Prisma.CollectionOrderByWithRelationInput;
    images?: Prisma.JewelleryImageOrderByRelationAggregateInput;
    orderItems?: Prisma.RentalOrderItemOrderByRelationAggregateInput;
};
export type JewelleryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    sku?: string;
    AND?: Prisma.JewelleryWhereInput | Prisma.JewelleryWhereInput[];
    OR?: Prisma.JewelleryWhereInput[];
    NOT?: Prisma.JewelleryWhereInput | Prisma.JewelleryWhereInput[];
    name?: Prisma.StringFilter<"Jewellery"> | string;
    shortDescription?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    description?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    type?: Prisma.EnumJewelleryTypeFilter<"Jewellery"> | $Enums.JewelleryType;
    material?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    color?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    finish?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    stoneDetails?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    occasion?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    rentalPricePerDay?: Prisma.DecimalFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalNullableFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.DecimalNullableFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFilter<"Jewellery"> | number;
    stockQuantity?: Prisma.IntFilter<"Jewellery"> | number;
    pickupAvailable?: Prisma.BoolFilter<"Jewellery"> | boolean;
    status?: Prisma.EnumProductStatusFilter<"Jewellery"> | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFilter<"Jewellery"> | boolean;
    collectionId?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Jewellery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Jewellery"> | Date | string;
    collection?: Prisma.XOR<Prisma.CollectionNullableScalarRelationFilter, Prisma.CollectionWhereInput> | null;
    images?: Prisma.JewelleryImageListRelationFilter;
    orderItems?: Prisma.RentalOrderItemListRelationFilter;
}, "id" | "slug" | "sku">;
export type JewelleryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    material?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    finish?: Prisma.SortOrderInput | Prisma.SortOrder;
    stoneDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    occasion?: Prisma.SortOrderInput | Prisma.SortOrder;
    rentalPricePerDay?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    pickupAvailable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    collectionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.JewelleryCountOrderByAggregateInput;
    _avg?: Prisma.JewelleryAvgOrderByAggregateInput;
    _max?: Prisma.JewelleryMaxOrderByAggregateInput;
    _min?: Prisma.JewelleryMinOrderByAggregateInput;
    _sum?: Prisma.JewellerySumOrderByAggregateInput;
};
export type JewelleryScalarWhereWithAggregatesInput = {
    AND?: Prisma.JewelleryScalarWhereWithAggregatesInput | Prisma.JewelleryScalarWhereWithAggregatesInput[];
    OR?: Prisma.JewelleryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JewelleryScalarWhereWithAggregatesInput | Prisma.JewelleryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Jewellery"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Jewellery"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Jewellery"> | string;
    sku?: Prisma.StringWithAggregatesFilter<"Jewellery"> | string;
    shortDescription?: Prisma.StringNullableWithAggregatesFilter<"Jewellery"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Jewellery"> | string | null;
    type?: Prisma.EnumJewelleryTypeWithAggregatesFilter<"Jewellery"> | $Enums.JewelleryType;
    material?: Prisma.StringNullableWithAggregatesFilter<"Jewellery"> | string | null;
    color?: Prisma.StringNullableWithAggregatesFilter<"Jewellery"> | string | null;
    finish?: Prisma.StringNullableWithAggregatesFilter<"Jewellery"> | string | null;
    stoneDetails?: Prisma.StringNullableWithAggregatesFilter<"Jewellery"> | string | null;
    occasion?: Prisma.StringNullableWithAggregatesFilter<"Jewellery"> | string | null;
    rentalPricePerDay?: Prisma.DecimalWithAggregatesFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalNullableWithAggregatesFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.DecimalNullableWithAggregatesFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntWithAggregatesFilter<"Jewellery"> | number;
    stockQuantity?: Prisma.IntWithAggregatesFilter<"Jewellery"> | number;
    pickupAvailable?: Prisma.BoolWithAggregatesFilter<"Jewellery"> | boolean;
    status?: Prisma.EnumProductStatusWithAggregatesFilter<"Jewellery"> | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolWithAggregatesFilter<"Jewellery"> | boolean;
    collectionId?: Prisma.StringNullableWithAggregatesFilter<"Jewellery"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Jewellery"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Jewellery"> | Date | string;
};
export type JewelleryCreateInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    type?: $Enums.JewelleryType;
    material?: string | null;
    color?: string | null;
    finish?: string | null;
    stoneDetails?: string | null;
    occasion?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    stockQuantity?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    collection?: Prisma.CollectionCreateNestedOneWithoutJewelleryItemsInput;
    images?: Prisma.JewelleryImageCreateNestedManyWithoutJewelleryInput;
    orderItems?: Prisma.RentalOrderItemCreateNestedManyWithoutJewelleryInput;
};
export type JewelleryUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    type?: $Enums.JewelleryType;
    material?: string | null;
    color?: string | null;
    finish?: string | null;
    stoneDetails?: string | null;
    occasion?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    stockQuantity?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    collectionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.JewelleryImageUncheckedCreateNestedManyWithoutJewelleryInput;
    orderItems?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutJewelleryInput;
};
export type JewelleryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumJewelleryTypeFieldUpdateOperationsInput | $Enums.JewelleryType;
    material?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stoneDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: Prisma.CollectionUpdateOneWithoutJewelleryItemsNestedInput;
    images?: Prisma.JewelleryImageUpdateManyWithoutJewelleryNestedInput;
    orderItems?: Prisma.RentalOrderItemUpdateManyWithoutJewelleryNestedInput;
};
export type JewelleryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumJewelleryTypeFieldUpdateOperationsInput | $Enums.JewelleryType;
    material?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stoneDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    collectionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.JewelleryImageUncheckedUpdateManyWithoutJewelleryNestedInput;
    orderItems?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutJewelleryNestedInput;
};
export type JewelleryCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    type?: $Enums.JewelleryType;
    material?: string | null;
    color?: string | null;
    finish?: string | null;
    stoneDetails?: string | null;
    occasion?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    stockQuantity?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    collectionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JewelleryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumJewelleryTypeFieldUpdateOperationsInput | $Enums.JewelleryType;
    material?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stoneDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JewelleryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumJewelleryTypeFieldUpdateOperationsInput | $Enums.JewelleryType;
    material?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stoneDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    collectionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JewelleryListRelationFilter = {
    every?: Prisma.JewelleryWhereInput;
    some?: Prisma.JewelleryWhereInput;
    none?: Prisma.JewelleryWhereInput;
};
export type JewelleryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JewelleryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    stoneDetails?: Prisma.SortOrder;
    occasion?: Prisma.SortOrder;
    rentalPricePerDay?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    originalPrice?: Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    pickupAvailable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    collectionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JewelleryAvgOrderByAggregateInput = {
    rentalPricePerDay?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    originalPrice?: Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
};
export type JewelleryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    stoneDetails?: Prisma.SortOrder;
    occasion?: Prisma.SortOrder;
    rentalPricePerDay?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    originalPrice?: Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    pickupAvailable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    collectionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JewelleryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    stoneDetails?: Prisma.SortOrder;
    occasion?: Prisma.SortOrder;
    rentalPricePerDay?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    originalPrice?: Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    pickupAvailable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    collectionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JewellerySumOrderByAggregateInput = {
    rentalPricePerDay?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    originalPrice?: Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
};
export type JewelleryScalarRelationFilter = {
    is?: Prisma.JewelleryWhereInput;
    isNot?: Prisma.JewelleryWhereInput;
};
export type JewelleryNullableScalarRelationFilter = {
    is?: Prisma.JewelleryWhereInput | null;
    isNot?: Prisma.JewelleryWhereInput | null;
};
export type JewelleryCreateNestedManyWithoutCollectionInput = {
    create?: Prisma.XOR<Prisma.JewelleryCreateWithoutCollectionInput, Prisma.JewelleryUncheckedCreateWithoutCollectionInput> | Prisma.JewelleryCreateWithoutCollectionInput[] | Prisma.JewelleryUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?: Prisma.JewelleryCreateOrConnectWithoutCollectionInput | Prisma.JewelleryCreateOrConnectWithoutCollectionInput[];
    createMany?: Prisma.JewelleryCreateManyCollectionInputEnvelope;
    connect?: Prisma.JewelleryWhereUniqueInput | Prisma.JewelleryWhereUniqueInput[];
};
export type JewelleryUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: Prisma.XOR<Prisma.JewelleryCreateWithoutCollectionInput, Prisma.JewelleryUncheckedCreateWithoutCollectionInput> | Prisma.JewelleryCreateWithoutCollectionInput[] | Prisma.JewelleryUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?: Prisma.JewelleryCreateOrConnectWithoutCollectionInput | Prisma.JewelleryCreateOrConnectWithoutCollectionInput[];
    createMany?: Prisma.JewelleryCreateManyCollectionInputEnvelope;
    connect?: Prisma.JewelleryWhereUniqueInput | Prisma.JewelleryWhereUniqueInput[];
};
export type JewelleryUpdateManyWithoutCollectionNestedInput = {
    create?: Prisma.XOR<Prisma.JewelleryCreateWithoutCollectionInput, Prisma.JewelleryUncheckedCreateWithoutCollectionInput> | Prisma.JewelleryCreateWithoutCollectionInput[] | Prisma.JewelleryUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?: Prisma.JewelleryCreateOrConnectWithoutCollectionInput | Prisma.JewelleryCreateOrConnectWithoutCollectionInput[];
    upsert?: Prisma.JewelleryUpsertWithWhereUniqueWithoutCollectionInput | Prisma.JewelleryUpsertWithWhereUniqueWithoutCollectionInput[];
    createMany?: Prisma.JewelleryCreateManyCollectionInputEnvelope;
    set?: Prisma.JewelleryWhereUniqueInput | Prisma.JewelleryWhereUniqueInput[];
    disconnect?: Prisma.JewelleryWhereUniqueInput | Prisma.JewelleryWhereUniqueInput[];
    delete?: Prisma.JewelleryWhereUniqueInput | Prisma.JewelleryWhereUniqueInput[];
    connect?: Prisma.JewelleryWhereUniqueInput | Prisma.JewelleryWhereUniqueInput[];
    update?: Prisma.JewelleryUpdateWithWhereUniqueWithoutCollectionInput | Prisma.JewelleryUpdateWithWhereUniqueWithoutCollectionInput[];
    updateMany?: Prisma.JewelleryUpdateManyWithWhereWithoutCollectionInput | Prisma.JewelleryUpdateManyWithWhereWithoutCollectionInput[];
    deleteMany?: Prisma.JewelleryScalarWhereInput | Prisma.JewelleryScalarWhereInput[];
};
export type JewelleryUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: Prisma.XOR<Prisma.JewelleryCreateWithoutCollectionInput, Prisma.JewelleryUncheckedCreateWithoutCollectionInput> | Prisma.JewelleryCreateWithoutCollectionInput[] | Prisma.JewelleryUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?: Prisma.JewelleryCreateOrConnectWithoutCollectionInput | Prisma.JewelleryCreateOrConnectWithoutCollectionInput[];
    upsert?: Prisma.JewelleryUpsertWithWhereUniqueWithoutCollectionInput | Prisma.JewelleryUpsertWithWhereUniqueWithoutCollectionInput[];
    createMany?: Prisma.JewelleryCreateManyCollectionInputEnvelope;
    set?: Prisma.JewelleryWhereUniqueInput | Prisma.JewelleryWhereUniqueInput[];
    disconnect?: Prisma.JewelleryWhereUniqueInput | Prisma.JewelleryWhereUniqueInput[];
    delete?: Prisma.JewelleryWhereUniqueInput | Prisma.JewelleryWhereUniqueInput[];
    connect?: Prisma.JewelleryWhereUniqueInput | Prisma.JewelleryWhereUniqueInput[];
    update?: Prisma.JewelleryUpdateWithWhereUniqueWithoutCollectionInput | Prisma.JewelleryUpdateWithWhereUniqueWithoutCollectionInput[];
    updateMany?: Prisma.JewelleryUpdateManyWithWhereWithoutCollectionInput | Prisma.JewelleryUpdateManyWithWhereWithoutCollectionInput[];
    deleteMany?: Prisma.JewelleryScalarWhereInput | Prisma.JewelleryScalarWhereInput[];
};
export type EnumJewelleryTypeFieldUpdateOperationsInput = {
    set?: $Enums.JewelleryType;
};
export type JewelleryCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.JewelleryCreateWithoutImagesInput, Prisma.JewelleryUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.JewelleryCreateOrConnectWithoutImagesInput;
    connect?: Prisma.JewelleryWhereUniqueInput;
};
export type JewelleryUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.JewelleryCreateWithoutImagesInput, Prisma.JewelleryUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.JewelleryCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.JewelleryUpsertWithoutImagesInput;
    connect?: Prisma.JewelleryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JewelleryUpdateToOneWithWhereWithoutImagesInput, Prisma.JewelleryUpdateWithoutImagesInput>, Prisma.JewelleryUncheckedUpdateWithoutImagesInput>;
};
export type JewelleryCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.JewelleryCreateWithoutOrderItemsInput, Prisma.JewelleryUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.JewelleryCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.JewelleryWhereUniqueInput;
};
export type JewelleryUpdateOneWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.JewelleryCreateWithoutOrderItemsInput, Prisma.JewelleryUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.JewelleryCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.JewelleryUpsertWithoutOrderItemsInput;
    disconnect?: Prisma.JewelleryWhereInput | boolean;
    delete?: Prisma.JewelleryWhereInput | boolean;
    connect?: Prisma.JewelleryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JewelleryUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.JewelleryUpdateWithoutOrderItemsInput>, Prisma.JewelleryUncheckedUpdateWithoutOrderItemsInput>;
};
export type JewelleryCreateWithoutCollectionInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    type?: $Enums.JewelleryType;
    material?: string | null;
    color?: string | null;
    finish?: string | null;
    stoneDetails?: string | null;
    occasion?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    stockQuantity?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.JewelleryImageCreateNestedManyWithoutJewelleryInput;
    orderItems?: Prisma.RentalOrderItemCreateNestedManyWithoutJewelleryInput;
};
export type JewelleryUncheckedCreateWithoutCollectionInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    type?: $Enums.JewelleryType;
    material?: string | null;
    color?: string | null;
    finish?: string | null;
    stoneDetails?: string | null;
    occasion?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    stockQuantity?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.JewelleryImageUncheckedCreateNestedManyWithoutJewelleryInput;
    orderItems?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutJewelleryInput;
};
export type JewelleryCreateOrConnectWithoutCollectionInput = {
    where: Prisma.JewelleryWhereUniqueInput;
    create: Prisma.XOR<Prisma.JewelleryCreateWithoutCollectionInput, Prisma.JewelleryUncheckedCreateWithoutCollectionInput>;
};
export type JewelleryCreateManyCollectionInputEnvelope = {
    data: Prisma.JewelleryCreateManyCollectionInput | Prisma.JewelleryCreateManyCollectionInput[];
    skipDuplicates?: boolean;
};
export type JewelleryUpsertWithWhereUniqueWithoutCollectionInput = {
    where: Prisma.JewelleryWhereUniqueInput;
    update: Prisma.XOR<Prisma.JewelleryUpdateWithoutCollectionInput, Prisma.JewelleryUncheckedUpdateWithoutCollectionInput>;
    create: Prisma.XOR<Prisma.JewelleryCreateWithoutCollectionInput, Prisma.JewelleryUncheckedCreateWithoutCollectionInput>;
};
export type JewelleryUpdateWithWhereUniqueWithoutCollectionInput = {
    where: Prisma.JewelleryWhereUniqueInput;
    data: Prisma.XOR<Prisma.JewelleryUpdateWithoutCollectionInput, Prisma.JewelleryUncheckedUpdateWithoutCollectionInput>;
};
export type JewelleryUpdateManyWithWhereWithoutCollectionInput = {
    where: Prisma.JewelleryScalarWhereInput;
    data: Prisma.XOR<Prisma.JewelleryUpdateManyMutationInput, Prisma.JewelleryUncheckedUpdateManyWithoutCollectionInput>;
};
export type JewelleryScalarWhereInput = {
    AND?: Prisma.JewelleryScalarWhereInput | Prisma.JewelleryScalarWhereInput[];
    OR?: Prisma.JewelleryScalarWhereInput[];
    NOT?: Prisma.JewelleryScalarWhereInput | Prisma.JewelleryScalarWhereInput[];
    id?: Prisma.StringFilter<"Jewellery"> | string;
    name?: Prisma.StringFilter<"Jewellery"> | string;
    slug?: Prisma.StringFilter<"Jewellery"> | string;
    sku?: Prisma.StringFilter<"Jewellery"> | string;
    shortDescription?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    description?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    type?: Prisma.EnumJewelleryTypeFilter<"Jewellery"> | $Enums.JewelleryType;
    material?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    color?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    finish?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    stoneDetails?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    occasion?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    rentalPricePerDay?: Prisma.DecimalFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalNullableFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.DecimalNullableFilter<"Jewellery"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFilter<"Jewellery"> | number;
    stockQuantity?: Prisma.IntFilter<"Jewellery"> | number;
    pickupAvailable?: Prisma.BoolFilter<"Jewellery"> | boolean;
    status?: Prisma.EnumProductStatusFilter<"Jewellery"> | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFilter<"Jewellery"> | boolean;
    collectionId?: Prisma.StringNullableFilter<"Jewellery"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Jewellery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Jewellery"> | Date | string;
};
export type JewelleryCreateWithoutImagesInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    type?: $Enums.JewelleryType;
    material?: string | null;
    color?: string | null;
    finish?: string | null;
    stoneDetails?: string | null;
    occasion?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    stockQuantity?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    collection?: Prisma.CollectionCreateNestedOneWithoutJewelleryItemsInput;
    orderItems?: Prisma.RentalOrderItemCreateNestedManyWithoutJewelleryInput;
};
export type JewelleryUncheckedCreateWithoutImagesInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    type?: $Enums.JewelleryType;
    material?: string | null;
    color?: string | null;
    finish?: string | null;
    stoneDetails?: string | null;
    occasion?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    stockQuantity?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    collectionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutJewelleryInput;
};
export type JewelleryCreateOrConnectWithoutImagesInput = {
    where: Prisma.JewelleryWhereUniqueInput;
    create: Prisma.XOR<Prisma.JewelleryCreateWithoutImagesInput, Prisma.JewelleryUncheckedCreateWithoutImagesInput>;
};
export type JewelleryUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.JewelleryUpdateWithoutImagesInput, Prisma.JewelleryUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.JewelleryCreateWithoutImagesInput, Prisma.JewelleryUncheckedCreateWithoutImagesInput>;
    where?: Prisma.JewelleryWhereInput;
};
export type JewelleryUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.JewelleryWhereInput;
    data: Prisma.XOR<Prisma.JewelleryUpdateWithoutImagesInput, Prisma.JewelleryUncheckedUpdateWithoutImagesInput>;
};
export type JewelleryUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumJewelleryTypeFieldUpdateOperationsInput | $Enums.JewelleryType;
    material?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stoneDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: Prisma.CollectionUpdateOneWithoutJewelleryItemsNestedInput;
    orderItems?: Prisma.RentalOrderItemUpdateManyWithoutJewelleryNestedInput;
};
export type JewelleryUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumJewelleryTypeFieldUpdateOperationsInput | $Enums.JewelleryType;
    material?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stoneDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    collectionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutJewelleryNestedInput;
};
export type JewelleryCreateWithoutOrderItemsInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    type?: $Enums.JewelleryType;
    material?: string | null;
    color?: string | null;
    finish?: string | null;
    stoneDetails?: string | null;
    occasion?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    stockQuantity?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    collection?: Prisma.CollectionCreateNestedOneWithoutJewelleryItemsInput;
    images?: Prisma.JewelleryImageCreateNestedManyWithoutJewelleryInput;
};
export type JewelleryUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    type?: $Enums.JewelleryType;
    material?: string | null;
    color?: string | null;
    finish?: string | null;
    stoneDetails?: string | null;
    occasion?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    stockQuantity?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    collectionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.JewelleryImageUncheckedCreateNestedManyWithoutJewelleryInput;
};
export type JewelleryCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.JewelleryWhereUniqueInput;
    create: Prisma.XOR<Prisma.JewelleryCreateWithoutOrderItemsInput, Prisma.JewelleryUncheckedCreateWithoutOrderItemsInput>;
};
export type JewelleryUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.JewelleryUpdateWithoutOrderItemsInput, Prisma.JewelleryUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.JewelleryCreateWithoutOrderItemsInput, Prisma.JewelleryUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.JewelleryWhereInput;
};
export type JewelleryUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.JewelleryWhereInput;
    data: Prisma.XOR<Prisma.JewelleryUpdateWithoutOrderItemsInput, Prisma.JewelleryUncheckedUpdateWithoutOrderItemsInput>;
};
export type JewelleryUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumJewelleryTypeFieldUpdateOperationsInput | $Enums.JewelleryType;
    material?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stoneDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: Prisma.CollectionUpdateOneWithoutJewelleryItemsNestedInput;
    images?: Prisma.JewelleryImageUpdateManyWithoutJewelleryNestedInput;
};
export type JewelleryUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumJewelleryTypeFieldUpdateOperationsInput | $Enums.JewelleryType;
    material?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stoneDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    collectionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.JewelleryImageUncheckedUpdateManyWithoutJewelleryNestedInput;
};
export type JewelleryCreateManyCollectionInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    type?: $Enums.JewelleryType;
    material?: string | null;
    color?: string | null;
    finish?: string | null;
    stoneDetails?: string | null;
    occasion?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    stockQuantity?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JewelleryUpdateWithoutCollectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumJewelleryTypeFieldUpdateOperationsInput | $Enums.JewelleryType;
    material?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stoneDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.JewelleryImageUpdateManyWithoutJewelleryNestedInput;
    orderItems?: Prisma.RentalOrderItemUpdateManyWithoutJewelleryNestedInput;
};
export type JewelleryUncheckedUpdateWithoutCollectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumJewelleryTypeFieldUpdateOperationsInput | $Enums.JewelleryType;
    material?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stoneDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.JewelleryImageUncheckedUpdateManyWithoutJewelleryNestedInput;
    orderItems?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutJewelleryNestedInput;
};
export type JewelleryUncheckedUpdateManyWithoutCollectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumJewelleryTypeFieldUpdateOperationsInput | $Enums.JewelleryType;
    material?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stoneDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type JewelleryCountOutputType
 */
export type JewelleryCountOutputType = {
    images: number;
    orderItems: number;
};
export type JewelleryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | JewelleryCountOutputTypeCountImagesArgs;
    orderItems?: boolean | JewelleryCountOutputTypeCountOrderItemsArgs;
};
/**
 * JewelleryCountOutputType without action
 */
export type JewelleryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JewelleryCountOutputType
     */
    select?: Prisma.JewelleryCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * JewelleryCountOutputType without action
 */
export type JewelleryCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JewelleryImageWhereInput;
};
/**
 * JewelleryCountOutputType without action
 */
export type JewelleryCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RentalOrderItemWhereInput;
};
export type JewellerySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    sku?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    type?: boolean;
    material?: boolean;
    color?: boolean;
    finish?: boolean;
    stoneDetails?: boolean;
    occasion?: boolean;
    rentalPricePerDay?: boolean;
    securityDeposit?: boolean;
    originalPrice?: boolean;
    minimumRentalDays?: boolean;
    stockQuantity?: boolean;
    pickupAvailable?: boolean;
    status?: boolean;
    isFeatured?: boolean;
    collectionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    collection?: boolean | Prisma.Jewellery$collectionArgs<ExtArgs>;
    images?: boolean | Prisma.Jewellery$imagesArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Jewellery$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.JewelleryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jewellery"]>;
export type JewellerySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    sku?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    type?: boolean;
    material?: boolean;
    color?: boolean;
    finish?: boolean;
    stoneDetails?: boolean;
    occasion?: boolean;
    rentalPricePerDay?: boolean;
    securityDeposit?: boolean;
    originalPrice?: boolean;
    minimumRentalDays?: boolean;
    stockQuantity?: boolean;
    pickupAvailable?: boolean;
    status?: boolean;
    isFeatured?: boolean;
    collectionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    collection?: boolean | Prisma.Jewellery$collectionArgs<ExtArgs>;
}, ExtArgs["result"]["jewellery"]>;
export type JewellerySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    sku?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    type?: boolean;
    material?: boolean;
    color?: boolean;
    finish?: boolean;
    stoneDetails?: boolean;
    occasion?: boolean;
    rentalPricePerDay?: boolean;
    securityDeposit?: boolean;
    originalPrice?: boolean;
    minimumRentalDays?: boolean;
    stockQuantity?: boolean;
    pickupAvailable?: boolean;
    status?: boolean;
    isFeatured?: boolean;
    collectionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    collection?: boolean | Prisma.Jewellery$collectionArgs<ExtArgs>;
}, ExtArgs["result"]["jewellery"]>;
export type JewellerySelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    sku?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    type?: boolean;
    material?: boolean;
    color?: boolean;
    finish?: boolean;
    stoneDetails?: boolean;
    occasion?: boolean;
    rentalPricePerDay?: boolean;
    securityDeposit?: boolean;
    originalPrice?: boolean;
    minimumRentalDays?: boolean;
    stockQuantity?: boolean;
    pickupAvailable?: boolean;
    status?: boolean;
    isFeatured?: boolean;
    collectionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type JewelleryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "sku" | "shortDescription" | "description" | "type" | "material" | "color" | "finish" | "stoneDetails" | "occasion" | "rentalPricePerDay" | "securityDeposit" | "originalPrice" | "minimumRentalDays" | "stockQuantity" | "pickupAvailable" | "status" | "isFeatured" | "collectionId" | "createdAt" | "updatedAt", ExtArgs["result"]["jewellery"]>;
export type JewelleryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    collection?: boolean | Prisma.Jewellery$collectionArgs<ExtArgs>;
    images?: boolean | Prisma.Jewellery$imagesArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Jewellery$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.JewelleryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type JewelleryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    collection?: boolean | Prisma.Jewellery$collectionArgs<ExtArgs>;
};
export type JewelleryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    collection?: boolean | Prisma.Jewellery$collectionArgs<ExtArgs>;
};
export type $JewelleryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Jewellery";
    objects: {
        collection: Prisma.$CollectionPayload<ExtArgs> | null;
        images: Prisma.$JewelleryImagePayload<ExtArgs>[];
        orderItems: Prisma.$RentalOrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        sku: string;
        shortDescription: string | null;
        description: string | null;
        type: $Enums.JewelleryType;
        material: string | null;
        color: string | null;
        finish: string | null;
        stoneDetails: string | null;
        occasion: string | null;
        rentalPricePerDay: runtime.Decimal;
        securityDeposit: runtime.Decimal | null;
        originalPrice: runtime.Decimal | null;
        minimumRentalDays: number;
        stockQuantity: number;
        pickupAvailable: boolean;
        status: $Enums.ProductStatus;
        isFeatured: boolean;
        collectionId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["jewellery"]>;
    composites: {};
};
export type JewelleryGetPayload<S extends boolean | null | undefined | JewelleryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JewelleryPayload, S>;
export type JewelleryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JewelleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JewelleryCountAggregateInputType | true;
};
export interface JewelleryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Jewellery'];
        meta: {
            name: 'Jewellery';
        };
    };
    /**
     * Find zero or one Jewellery that matches the filter.
     * @param {JewelleryFindUniqueArgs} args - Arguments to find a Jewellery
     * @example
     * // Get one Jewellery
     * const jewellery = await prisma.jewellery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JewelleryFindUniqueArgs>(args: Prisma.SelectSubset<T, JewelleryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JewelleryClient<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Jewellery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JewelleryFindUniqueOrThrowArgs} args - Arguments to find a Jewellery
     * @example
     * // Get one Jewellery
     * const jewellery = await prisma.jewellery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JewelleryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JewelleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JewelleryClient<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Jewellery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryFindFirstArgs} args - Arguments to find a Jewellery
     * @example
     * // Get one Jewellery
     * const jewellery = await prisma.jewellery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JewelleryFindFirstArgs>(args?: Prisma.SelectSubset<T, JewelleryFindFirstArgs<ExtArgs>>): Prisma.Prisma__JewelleryClient<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Jewellery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryFindFirstOrThrowArgs} args - Arguments to find a Jewellery
     * @example
     * // Get one Jewellery
     * const jewellery = await prisma.jewellery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JewelleryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JewelleryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JewelleryClient<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Jewelleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jewelleries
     * const jewelleries = await prisma.jewellery.findMany()
     *
     * // Get first 10 Jewelleries
     * const jewelleries = await prisma.jewellery.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jewelleryWithIdOnly = await prisma.jewellery.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JewelleryFindManyArgs>(args?: Prisma.SelectSubset<T, JewelleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Jewellery.
     * @param {JewelleryCreateArgs} args - Arguments to create a Jewellery.
     * @example
     * // Create one Jewellery
     * const Jewellery = await prisma.jewellery.create({
     *   data: {
     *     // ... data to create a Jewellery
     *   }
     * })
     *
     */
    create<T extends JewelleryCreateArgs>(args: Prisma.SelectSubset<T, JewelleryCreateArgs<ExtArgs>>): Prisma.Prisma__JewelleryClient<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Jewelleries.
     * @param {JewelleryCreateManyArgs} args - Arguments to create many Jewelleries.
     * @example
     * // Create many Jewelleries
     * const jewellery = await prisma.jewellery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JewelleryCreateManyArgs>(args?: Prisma.SelectSubset<T, JewelleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Jewelleries and returns the data saved in the database.
     * @param {JewelleryCreateManyAndReturnArgs} args - Arguments to create many Jewelleries.
     * @example
     * // Create many Jewelleries
     * const jewellery = await prisma.jewellery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Jewelleries and only return the `id`
     * const jewelleryWithIdOnly = await prisma.jewellery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JewelleryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JewelleryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Jewellery.
     * @param {JewelleryDeleteArgs} args - Arguments to delete one Jewellery.
     * @example
     * // Delete one Jewellery
     * const Jewellery = await prisma.jewellery.delete({
     *   where: {
     *     // ... filter to delete one Jewellery
     *   }
     * })
     *
     */
    delete<T extends JewelleryDeleteArgs>(args: Prisma.SelectSubset<T, JewelleryDeleteArgs<ExtArgs>>): Prisma.Prisma__JewelleryClient<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Jewellery.
     * @param {JewelleryUpdateArgs} args - Arguments to update one Jewellery.
     * @example
     * // Update one Jewellery
     * const jewellery = await prisma.jewellery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JewelleryUpdateArgs>(args: Prisma.SelectSubset<T, JewelleryUpdateArgs<ExtArgs>>): Prisma.Prisma__JewelleryClient<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Jewelleries.
     * @param {JewelleryDeleteManyArgs} args - Arguments to filter Jewelleries to delete.
     * @example
     * // Delete a few Jewelleries
     * const { count } = await prisma.jewellery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JewelleryDeleteManyArgs>(args?: Prisma.SelectSubset<T, JewelleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Jewelleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jewelleries
     * const jewellery = await prisma.jewellery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JewelleryUpdateManyArgs>(args: Prisma.SelectSubset<T, JewelleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Jewelleries and returns the data updated in the database.
     * @param {JewelleryUpdateManyAndReturnArgs} args - Arguments to update many Jewelleries.
     * @example
     * // Update many Jewelleries
     * const jewellery = await prisma.jewellery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Jewelleries and only return the `id`
     * const jewelleryWithIdOnly = await prisma.jewellery.updateManyAndReturn({
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
    updateManyAndReturn<T extends JewelleryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JewelleryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Jewellery.
     * @param {JewelleryUpsertArgs} args - Arguments to update or create a Jewellery.
     * @example
     * // Update or create a Jewellery
     * const jewellery = await prisma.jewellery.upsert({
     *   create: {
     *     // ... data to create a Jewellery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jewellery we want to update
     *   }
     * })
     */
    upsert<T extends JewelleryUpsertArgs>(args: Prisma.SelectSubset<T, JewelleryUpsertArgs<ExtArgs>>): Prisma.Prisma__JewelleryClient<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Jewelleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryCountArgs} args - Arguments to filter Jewelleries to count.
     * @example
     * // Count the number of Jewelleries
     * const count = await prisma.jewellery.count({
     *   where: {
     *     // ... the filter for the Jewelleries we want to count
     *   }
     * })
    **/
    count<T extends JewelleryCountArgs>(args?: Prisma.Subset<T, JewelleryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JewelleryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Jewellery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JewelleryAggregateArgs>(args: Prisma.Subset<T, JewelleryAggregateArgs>): Prisma.PrismaPromise<GetJewelleryAggregateType<T>>;
    /**
     * Group by Jewellery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends JewelleryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JewelleryGroupByArgs['orderBy'];
    } : {
        orderBy?: JewelleryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JewelleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJewelleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Jewellery model
     */
    readonly fields: JewelleryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Jewellery.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__JewelleryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    collection<T extends Prisma.Jewellery$collectionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Jewellery$collectionArgs<ExtArgs>>): Prisma.Prisma__CollectionClient<runtime.Types.Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    images<T extends Prisma.Jewellery$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Jewellery$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItems<T extends Prisma.Jewellery$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Jewellery$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Jewellery model
 */
export interface JewelleryFieldRefs {
    readonly id: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly name: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly slug: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly sku: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly shortDescription: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly description: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly type: Prisma.FieldRef<"Jewellery", 'JewelleryType'>;
    readonly material: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly color: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly finish: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly stoneDetails: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly occasion: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly rentalPricePerDay: Prisma.FieldRef<"Jewellery", 'Decimal'>;
    readonly securityDeposit: Prisma.FieldRef<"Jewellery", 'Decimal'>;
    readonly originalPrice: Prisma.FieldRef<"Jewellery", 'Decimal'>;
    readonly minimumRentalDays: Prisma.FieldRef<"Jewellery", 'Int'>;
    readonly stockQuantity: Prisma.FieldRef<"Jewellery", 'Int'>;
    readonly pickupAvailable: Prisma.FieldRef<"Jewellery", 'Boolean'>;
    readonly status: Prisma.FieldRef<"Jewellery", 'ProductStatus'>;
    readonly isFeatured: Prisma.FieldRef<"Jewellery", 'Boolean'>;
    readonly collectionId: Prisma.FieldRef<"Jewellery", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Jewellery", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Jewellery", 'DateTime'>;
}
/**
 * Jewellery findUnique
 */
export type JewelleryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryInclude<ExtArgs> | null;
    /**
     * Filter, which Jewellery to fetch.
     */
    where: Prisma.JewelleryWhereUniqueInput;
};
/**
 * Jewellery findUniqueOrThrow
 */
export type JewelleryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryInclude<ExtArgs> | null;
    /**
     * Filter, which Jewellery to fetch.
     */
    where: Prisma.JewelleryWhereUniqueInput;
};
/**
 * Jewellery findFirst
 */
export type JewelleryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryInclude<ExtArgs> | null;
    /**
     * Filter, which Jewellery to fetch.
     */
    where?: Prisma.JewelleryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jewelleries to fetch.
     */
    orderBy?: Prisma.JewelleryOrderByWithRelationInput | Prisma.JewelleryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jewelleries.
     */
    cursor?: Prisma.JewelleryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jewelleries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jewelleries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jewelleries.
     */
    distinct?: Prisma.JewelleryScalarFieldEnum | Prisma.JewelleryScalarFieldEnum[];
};
/**
 * Jewellery findFirstOrThrow
 */
export type JewelleryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryInclude<ExtArgs> | null;
    /**
     * Filter, which Jewellery to fetch.
     */
    where?: Prisma.JewelleryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jewelleries to fetch.
     */
    orderBy?: Prisma.JewelleryOrderByWithRelationInput | Prisma.JewelleryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jewelleries.
     */
    cursor?: Prisma.JewelleryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jewelleries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jewelleries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jewelleries.
     */
    distinct?: Prisma.JewelleryScalarFieldEnum | Prisma.JewelleryScalarFieldEnum[];
};
/**
 * Jewellery findMany
 */
export type JewelleryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryInclude<ExtArgs> | null;
    /**
     * Filter, which Jewelleries to fetch.
     */
    where?: Prisma.JewelleryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jewelleries to fetch.
     */
    orderBy?: Prisma.JewelleryOrderByWithRelationInput | Prisma.JewelleryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Jewelleries.
     */
    cursor?: Prisma.JewelleryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jewelleries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jewelleries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jewelleries.
     */
    distinct?: Prisma.JewelleryScalarFieldEnum | Prisma.JewelleryScalarFieldEnum[];
};
/**
 * Jewellery create
 */
export type JewelleryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Jewellery.
     */
    data: Prisma.XOR<Prisma.JewelleryCreateInput, Prisma.JewelleryUncheckedCreateInput>;
};
/**
 * Jewellery createMany
 */
export type JewelleryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jewelleries.
     */
    data: Prisma.JewelleryCreateManyInput | Prisma.JewelleryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Jewellery createManyAndReturn
 */
export type JewelleryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * The data used to create many Jewelleries.
     */
    data: Prisma.JewelleryCreateManyInput | Prisma.JewelleryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Jewellery update
 */
export type JewelleryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Jewellery.
     */
    data: Prisma.XOR<Prisma.JewelleryUpdateInput, Prisma.JewelleryUncheckedUpdateInput>;
    /**
     * Choose, which Jewellery to update.
     */
    where: Prisma.JewelleryWhereUniqueInput;
};
/**
 * Jewellery updateMany
 */
export type JewelleryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Jewelleries.
     */
    data: Prisma.XOR<Prisma.JewelleryUpdateManyMutationInput, Prisma.JewelleryUncheckedUpdateManyInput>;
    /**
     * Filter which Jewelleries to update
     */
    where?: Prisma.JewelleryWhereInput;
    /**
     * Limit how many Jewelleries to update.
     */
    limit?: number;
};
/**
 * Jewellery updateManyAndReturn
 */
export type JewelleryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * The data used to update Jewelleries.
     */
    data: Prisma.XOR<Prisma.JewelleryUpdateManyMutationInput, Prisma.JewelleryUncheckedUpdateManyInput>;
    /**
     * Filter which Jewelleries to update
     */
    where?: Prisma.JewelleryWhereInput;
    /**
     * Limit how many Jewelleries to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Jewellery upsert
 */
export type JewelleryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Jewellery to update in case it exists.
     */
    where: Prisma.JewelleryWhereUniqueInput;
    /**
     * In case the Jewellery found by the `where` argument doesn't exist, create a new Jewellery with this data.
     */
    create: Prisma.XOR<Prisma.JewelleryCreateInput, Prisma.JewelleryUncheckedCreateInput>;
    /**
     * In case the Jewellery was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.JewelleryUpdateInput, Prisma.JewelleryUncheckedUpdateInput>;
};
/**
 * Jewellery delete
 */
export type JewelleryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryInclude<ExtArgs> | null;
    /**
     * Filter which Jewellery to delete.
     */
    where: Prisma.JewelleryWhereUniqueInput;
};
/**
 * Jewellery deleteMany
 */
export type JewelleryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Jewelleries to delete
     */
    where?: Prisma.JewelleryWhereInput;
    /**
     * Limit how many Jewelleries to delete.
     */
    limit?: number;
};
/**
 * Jewellery.collection
 */
export type Jewellery$collectionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: Prisma.CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: Prisma.CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CollectionInclude<ExtArgs> | null;
    where?: Prisma.CollectionWhereInput;
};
/**
 * Jewellery.images
 */
export type Jewellery$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JewelleryImage
     */
    select?: Prisma.JewelleryImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JewelleryImage
     */
    omit?: Prisma.JewelleryImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryImageInclude<ExtArgs> | null;
    where?: Prisma.JewelleryImageWhereInput;
    orderBy?: Prisma.JewelleryImageOrderByWithRelationInput | Prisma.JewelleryImageOrderByWithRelationInput[];
    cursor?: Prisma.JewelleryImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JewelleryImageScalarFieldEnum | Prisma.JewelleryImageScalarFieldEnum[];
};
/**
 * Jewellery.orderItems
 */
export type Jewellery$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: Prisma.RentalOrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: Prisma.RentalOrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemInclude<ExtArgs> | null;
    where?: Prisma.RentalOrderItemWhereInput;
    orderBy?: Prisma.RentalOrderItemOrderByWithRelationInput | Prisma.RentalOrderItemOrderByWithRelationInput[];
    cursor?: Prisma.RentalOrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RentalOrderItemScalarFieldEnum | Prisma.RentalOrderItemScalarFieldEnum[];
};
/**
 * Jewellery without action
 */
export type JewelleryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jewellery
     */
    select?: Prisma.JewellerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jewellery
     */
    omit?: Prisma.JewelleryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryInclude<ExtArgs> | null;
};
//# sourceMappingURL=Jewellery.d.ts.map