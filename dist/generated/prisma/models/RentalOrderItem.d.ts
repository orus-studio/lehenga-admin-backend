import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model RentalOrderItem
 *
 */
export type RentalOrderItemModel = runtime.Types.Result.DefaultSelection<Prisma.$RentalOrderItemPayload>;
export type AggregateRentalOrderItem = {
    _count: RentalOrderItemCountAggregateOutputType | null;
    _avg: RentalOrderItemAvgAggregateOutputType | null;
    _sum: RentalOrderItemSumAggregateOutputType | null;
    _min: RentalOrderItemMinAggregateOutputType | null;
    _max: RentalOrderItemMaxAggregateOutputType | null;
};
export type RentalOrderItemAvgAggregateOutputType = {
    quantity: number | null;
    pricePerDay: runtime.Decimal | null;
    rentalDays: number | null;
    lineTotal: runtime.Decimal | null;
    depositAmount: runtime.Decimal | null;
};
export type RentalOrderItemSumAggregateOutputType = {
    quantity: number | null;
    pricePerDay: runtime.Decimal | null;
    rentalDays: number | null;
    lineTotal: runtime.Decimal | null;
    depositAmount: runtime.Decimal | null;
};
export type RentalOrderItemMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    itemType: $Enums.RentalItemType | null;
    lehengaId: string | null;
    lehengaSizeId: string | null;
    jewelleryId: string | null;
    productNameSnapshot: string | null;
    skuSnapshot: string | null;
    sizeLabelSnapshot: string | null;
    quantity: number | null;
    rentalStartDate: Date | null;
    rentalEndDate: Date | null;
    pricePerDay: runtime.Decimal | null;
    rentalDays: number | null;
    lineTotal: runtime.Decimal | null;
    depositAmount: runtime.Decimal | null;
    measurementUpper: string | null;
    measurementChest: string | null;
    measurementWaist: string | null;
    measurementArmHole: string | null;
    measurementMori: string | null;
    measurementNotes: string | null;
    createdAt: Date | null;
};
export type RentalOrderItemMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    itemType: $Enums.RentalItemType | null;
    lehengaId: string | null;
    lehengaSizeId: string | null;
    jewelleryId: string | null;
    productNameSnapshot: string | null;
    skuSnapshot: string | null;
    sizeLabelSnapshot: string | null;
    quantity: number | null;
    rentalStartDate: Date | null;
    rentalEndDate: Date | null;
    pricePerDay: runtime.Decimal | null;
    rentalDays: number | null;
    lineTotal: runtime.Decimal | null;
    depositAmount: runtime.Decimal | null;
    measurementUpper: string | null;
    measurementChest: string | null;
    measurementWaist: string | null;
    measurementArmHole: string | null;
    measurementMori: string | null;
    measurementNotes: string | null;
    createdAt: Date | null;
};
export type RentalOrderItemCountAggregateOutputType = {
    id: number;
    orderId: number;
    itemType: number;
    lehengaId: number;
    lehengaSizeId: number;
    jewelleryId: number;
    productNameSnapshot: number;
    skuSnapshot: number;
    sizeLabelSnapshot: number;
    quantity: number;
    rentalStartDate: number;
    rentalEndDate: number;
    pricePerDay: number;
    rentalDays: number;
    lineTotal: number;
    depositAmount: number;
    measurementUpper: number;
    measurementChest: number;
    measurementWaist: number;
    measurementArmHole: number;
    measurementMori: number;
    measurementNotes: number;
    createdAt: number;
    _all: number;
};
export type RentalOrderItemAvgAggregateInputType = {
    quantity?: true;
    pricePerDay?: true;
    rentalDays?: true;
    lineTotal?: true;
    depositAmount?: true;
};
export type RentalOrderItemSumAggregateInputType = {
    quantity?: true;
    pricePerDay?: true;
    rentalDays?: true;
    lineTotal?: true;
    depositAmount?: true;
};
export type RentalOrderItemMinAggregateInputType = {
    id?: true;
    orderId?: true;
    itemType?: true;
    lehengaId?: true;
    lehengaSizeId?: true;
    jewelleryId?: true;
    productNameSnapshot?: true;
    skuSnapshot?: true;
    sizeLabelSnapshot?: true;
    quantity?: true;
    rentalStartDate?: true;
    rentalEndDate?: true;
    pricePerDay?: true;
    rentalDays?: true;
    lineTotal?: true;
    depositAmount?: true;
    measurementUpper?: true;
    measurementChest?: true;
    measurementWaist?: true;
    measurementArmHole?: true;
    measurementMori?: true;
    measurementNotes?: true;
    createdAt?: true;
};
export type RentalOrderItemMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    itemType?: true;
    lehengaId?: true;
    lehengaSizeId?: true;
    jewelleryId?: true;
    productNameSnapshot?: true;
    skuSnapshot?: true;
    sizeLabelSnapshot?: true;
    quantity?: true;
    rentalStartDate?: true;
    rentalEndDate?: true;
    pricePerDay?: true;
    rentalDays?: true;
    lineTotal?: true;
    depositAmount?: true;
    measurementUpper?: true;
    measurementChest?: true;
    measurementWaist?: true;
    measurementArmHole?: true;
    measurementMori?: true;
    measurementNotes?: true;
    createdAt?: true;
};
export type RentalOrderItemCountAggregateInputType = {
    id?: true;
    orderId?: true;
    itemType?: true;
    lehengaId?: true;
    lehengaSizeId?: true;
    jewelleryId?: true;
    productNameSnapshot?: true;
    skuSnapshot?: true;
    sizeLabelSnapshot?: true;
    quantity?: true;
    rentalStartDate?: true;
    rentalEndDate?: true;
    pricePerDay?: true;
    rentalDays?: true;
    lineTotal?: true;
    depositAmount?: true;
    measurementUpper?: true;
    measurementChest?: true;
    measurementWaist?: true;
    measurementArmHole?: true;
    measurementMori?: true;
    measurementNotes?: true;
    createdAt?: true;
    _all?: true;
};
export type RentalOrderItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RentalOrderItem to aggregate.
     */
    where?: Prisma.RentalOrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: Prisma.RentalOrderItemOrderByWithRelationInput | Prisma.RentalOrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RentalOrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RentalOrderItems
    **/
    _count?: true | RentalOrderItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RentalOrderItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RentalOrderItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RentalOrderItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RentalOrderItemMaxAggregateInputType;
};
export type GetRentalOrderItemAggregateType<T extends RentalOrderItemAggregateArgs> = {
    [P in keyof T & keyof AggregateRentalOrderItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRentalOrderItem[P]> : Prisma.GetScalarType<T[P], AggregateRentalOrderItem[P]>;
};
export type RentalOrderItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RentalOrderItemWhereInput;
    orderBy?: Prisma.RentalOrderItemOrderByWithAggregationInput | Prisma.RentalOrderItemOrderByWithAggregationInput[];
    by: Prisma.RentalOrderItemScalarFieldEnum[] | Prisma.RentalOrderItemScalarFieldEnum;
    having?: Prisma.RentalOrderItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalOrderItemCountAggregateInputType | true;
    _avg?: RentalOrderItemAvgAggregateInputType;
    _sum?: RentalOrderItemSumAggregateInputType;
    _min?: RentalOrderItemMinAggregateInputType;
    _max?: RentalOrderItemMaxAggregateInputType;
};
export type RentalOrderItemGroupByOutputType = {
    id: string;
    orderId: string;
    itemType: $Enums.RentalItemType;
    lehengaId: string | null;
    lehengaSizeId: string | null;
    jewelleryId: string | null;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot: string | null;
    quantity: number;
    rentalStartDate: Date;
    rentalEndDate: Date;
    pricePerDay: runtime.Decimal;
    rentalDays: number;
    lineTotal: runtime.Decimal;
    depositAmount: runtime.Decimal;
    measurementUpper: string | null;
    measurementChest: string | null;
    measurementWaist: string | null;
    measurementArmHole: string | null;
    measurementMori: string | null;
    measurementNotes: string | null;
    createdAt: Date;
    _count: RentalOrderItemCountAggregateOutputType | null;
    _avg: RentalOrderItemAvgAggregateOutputType | null;
    _sum: RentalOrderItemSumAggregateOutputType | null;
    _min: RentalOrderItemMinAggregateOutputType | null;
    _max: RentalOrderItemMaxAggregateOutputType | null;
};
export type GetRentalOrderItemGroupByPayload<T extends RentalOrderItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RentalOrderItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RentalOrderItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RentalOrderItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RentalOrderItemGroupByOutputType[P]>;
}>>;
export type RentalOrderItemWhereInput = {
    AND?: Prisma.RentalOrderItemWhereInput | Prisma.RentalOrderItemWhereInput[];
    OR?: Prisma.RentalOrderItemWhereInput[];
    NOT?: Prisma.RentalOrderItemWhereInput | Prisma.RentalOrderItemWhereInput[];
    id?: Prisma.StringFilter<"RentalOrderItem"> | string;
    orderId?: Prisma.StringFilter<"RentalOrderItem"> | string;
    itemType?: Prisma.EnumRentalItemTypeFilter<"RentalOrderItem"> | $Enums.RentalItemType;
    lehengaId?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    lehengaSizeId?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    jewelleryId?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    productNameSnapshot?: Prisma.StringFilter<"RentalOrderItem"> | string;
    skuSnapshot?: Prisma.StringFilter<"RentalOrderItem"> | string;
    sizeLabelSnapshot?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    quantity?: Prisma.IntFilter<"RentalOrderItem"> | number;
    rentalStartDate?: Prisma.DateTimeFilter<"RentalOrderItem"> | Date | string;
    rentalEndDate?: Prisma.DateTimeFilter<"RentalOrderItem"> | Date | string;
    pricePerDay?: Prisma.DecimalFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFilter<"RentalOrderItem"> | number;
    lineTotal?: Prisma.DecimalFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementChest?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementWaist?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementArmHole?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementMori?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementNotes?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RentalOrderItem"> | Date | string;
    order?: Prisma.XOR<Prisma.RentalOrderScalarRelationFilter, Prisma.RentalOrderWhereInput>;
    lehenga?: Prisma.XOR<Prisma.LehengaNullableScalarRelationFilter, Prisma.LehengaWhereInput> | null;
    lehengaSize?: Prisma.XOR<Prisma.LehengaSizeNullableScalarRelationFilter, Prisma.LehengaSizeWhereInput> | null;
    jewellery?: Prisma.XOR<Prisma.JewelleryNullableScalarRelationFilter, Prisma.JewelleryWhereInput> | null;
};
export type RentalOrderItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lehengaSizeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    productNameSnapshot?: Prisma.SortOrder;
    skuSnapshot?: Prisma.SortOrder;
    sizeLabelSnapshot?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    rentalStartDate?: Prisma.SortOrder;
    rentalEndDate?: Prisma.SortOrder;
    pricePerDay?: Prisma.SortOrder;
    rentalDays?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
    measurementUpper?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementChest?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementWaist?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementArmHole?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementMori?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.RentalOrderOrderByWithRelationInput;
    lehenga?: Prisma.LehengaOrderByWithRelationInput;
    lehengaSize?: Prisma.LehengaSizeOrderByWithRelationInput;
    jewellery?: Prisma.JewelleryOrderByWithRelationInput;
};
export type RentalOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RentalOrderItemWhereInput | Prisma.RentalOrderItemWhereInput[];
    OR?: Prisma.RentalOrderItemWhereInput[];
    NOT?: Prisma.RentalOrderItemWhereInput | Prisma.RentalOrderItemWhereInput[];
    orderId?: Prisma.StringFilter<"RentalOrderItem"> | string;
    itemType?: Prisma.EnumRentalItemTypeFilter<"RentalOrderItem"> | $Enums.RentalItemType;
    lehengaId?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    lehengaSizeId?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    jewelleryId?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    productNameSnapshot?: Prisma.StringFilter<"RentalOrderItem"> | string;
    skuSnapshot?: Prisma.StringFilter<"RentalOrderItem"> | string;
    sizeLabelSnapshot?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    quantity?: Prisma.IntFilter<"RentalOrderItem"> | number;
    rentalStartDate?: Prisma.DateTimeFilter<"RentalOrderItem"> | Date | string;
    rentalEndDate?: Prisma.DateTimeFilter<"RentalOrderItem"> | Date | string;
    pricePerDay?: Prisma.DecimalFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFilter<"RentalOrderItem"> | number;
    lineTotal?: Prisma.DecimalFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementChest?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementWaist?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementArmHole?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementMori?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementNotes?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RentalOrderItem"> | Date | string;
    order?: Prisma.XOR<Prisma.RentalOrderScalarRelationFilter, Prisma.RentalOrderWhereInput>;
    lehenga?: Prisma.XOR<Prisma.LehengaNullableScalarRelationFilter, Prisma.LehengaWhereInput> | null;
    lehengaSize?: Prisma.XOR<Prisma.LehengaSizeNullableScalarRelationFilter, Prisma.LehengaSizeWhereInput> | null;
    jewellery?: Prisma.XOR<Prisma.JewelleryNullableScalarRelationFilter, Prisma.JewelleryWhereInput> | null;
}, "id">;
export type RentalOrderItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lehengaSizeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    productNameSnapshot?: Prisma.SortOrder;
    skuSnapshot?: Prisma.SortOrder;
    sizeLabelSnapshot?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    rentalStartDate?: Prisma.SortOrder;
    rentalEndDate?: Prisma.SortOrder;
    pricePerDay?: Prisma.SortOrder;
    rentalDays?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
    measurementUpper?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementChest?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementWaist?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementArmHole?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementMori?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurementNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RentalOrderItemCountOrderByAggregateInput;
    _avg?: Prisma.RentalOrderItemAvgOrderByAggregateInput;
    _max?: Prisma.RentalOrderItemMaxOrderByAggregateInput;
    _min?: Prisma.RentalOrderItemMinOrderByAggregateInput;
    _sum?: Prisma.RentalOrderItemSumOrderByAggregateInput;
};
export type RentalOrderItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.RentalOrderItemScalarWhereWithAggregatesInput | Prisma.RentalOrderItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.RentalOrderItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RentalOrderItemScalarWhereWithAggregatesInput | Prisma.RentalOrderItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RentalOrderItem"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"RentalOrderItem"> | string;
    itemType?: Prisma.EnumRentalItemTypeWithAggregatesFilter<"RentalOrderItem"> | $Enums.RentalItemType;
    lehengaId?: Prisma.StringNullableWithAggregatesFilter<"RentalOrderItem"> | string | null;
    lehengaSizeId?: Prisma.StringNullableWithAggregatesFilter<"RentalOrderItem"> | string | null;
    jewelleryId?: Prisma.StringNullableWithAggregatesFilter<"RentalOrderItem"> | string | null;
    productNameSnapshot?: Prisma.StringWithAggregatesFilter<"RentalOrderItem"> | string;
    skuSnapshot?: Prisma.StringWithAggregatesFilter<"RentalOrderItem"> | string;
    sizeLabelSnapshot?: Prisma.StringNullableWithAggregatesFilter<"RentalOrderItem"> | string | null;
    quantity?: Prisma.IntWithAggregatesFilter<"RentalOrderItem"> | number;
    rentalStartDate?: Prisma.DateTimeWithAggregatesFilter<"RentalOrderItem"> | Date | string;
    rentalEndDate?: Prisma.DateTimeWithAggregatesFilter<"RentalOrderItem"> | Date | string;
    pricePerDay?: Prisma.DecimalWithAggregatesFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntWithAggregatesFilter<"RentalOrderItem"> | number;
    lineTotal?: Prisma.DecimalWithAggregatesFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalWithAggregatesFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.StringNullableWithAggregatesFilter<"RentalOrderItem"> | string | null;
    measurementChest?: Prisma.StringNullableWithAggregatesFilter<"RentalOrderItem"> | string | null;
    measurementWaist?: Prisma.StringNullableWithAggregatesFilter<"RentalOrderItem"> | string | null;
    measurementArmHole?: Prisma.StringNullableWithAggregatesFilter<"RentalOrderItem"> | string | null;
    measurementMori?: Prisma.StringNullableWithAggregatesFilter<"RentalOrderItem"> | string | null;
    measurementNotes?: Prisma.StringNullableWithAggregatesFilter<"RentalOrderItem"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RentalOrderItem"> | Date | string;
};
export type RentalOrderItemCreateInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
    order: Prisma.RentalOrderCreateNestedOneWithoutItemsInput;
    lehenga?: Prisma.LehengaCreateNestedOneWithoutOrderItemsInput;
    lehengaSize?: Prisma.LehengaSizeCreateNestedOneWithoutOrderItemsInput;
    jewellery?: Prisma.JewelleryCreateNestedOneWithoutOrderItemsInput;
};
export type RentalOrderItemUncheckedCreateInput = {
    id?: string;
    orderId: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    lehengaSizeId?: string | null;
    jewelleryId?: string | null;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
};
export type RentalOrderItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.RentalOrderUpdateOneRequiredWithoutItemsNestedInput;
    lehenga?: Prisma.LehengaUpdateOneWithoutOrderItemsNestedInput;
    lehengaSize?: Prisma.LehengaSizeUpdateOneWithoutOrderItemsNestedInput;
    jewellery?: Prisma.JewelleryUpdateOneWithoutOrderItemsNestedInput;
};
export type RentalOrderItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lehengaSizeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemCreateManyInput = {
    id?: string;
    orderId: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    lehengaSizeId?: string | null;
    jewelleryId?: string | null;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
};
export type RentalOrderItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lehengaSizeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemListRelationFilter = {
    every?: Prisma.RentalOrderItemWhereInput;
    some?: Prisma.RentalOrderItemWhereInput;
    none?: Prisma.RentalOrderItemWhereInput;
};
export type RentalOrderItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RentalOrderItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    lehengaSizeId?: Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrder;
    productNameSnapshot?: Prisma.SortOrder;
    skuSnapshot?: Prisma.SortOrder;
    sizeLabelSnapshot?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    rentalStartDate?: Prisma.SortOrder;
    rentalEndDate?: Prisma.SortOrder;
    pricePerDay?: Prisma.SortOrder;
    rentalDays?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
    measurementUpper?: Prisma.SortOrder;
    measurementChest?: Prisma.SortOrder;
    measurementWaist?: Prisma.SortOrder;
    measurementArmHole?: Prisma.SortOrder;
    measurementMori?: Prisma.SortOrder;
    measurementNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RentalOrderItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    pricePerDay?: Prisma.SortOrder;
    rentalDays?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
};
export type RentalOrderItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    lehengaSizeId?: Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrder;
    productNameSnapshot?: Prisma.SortOrder;
    skuSnapshot?: Prisma.SortOrder;
    sizeLabelSnapshot?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    rentalStartDate?: Prisma.SortOrder;
    rentalEndDate?: Prisma.SortOrder;
    pricePerDay?: Prisma.SortOrder;
    rentalDays?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
    measurementUpper?: Prisma.SortOrder;
    measurementChest?: Prisma.SortOrder;
    measurementWaist?: Prisma.SortOrder;
    measurementArmHole?: Prisma.SortOrder;
    measurementMori?: Prisma.SortOrder;
    measurementNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RentalOrderItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    lehengaSizeId?: Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrder;
    productNameSnapshot?: Prisma.SortOrder;
    skuSnapshot?: Prisma.SortOrder;
    sizeLabelSnapshot?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    rentalStartDate?: Prisma.SortOrder;
    rentalEndDate?: Prisma.SortOrder;
    pricePerDay?: Prisma.SortOrder;
    rentalDays?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
    measurementUpper?: Prisma.SortOrder;
    measurementChest?: Prisma.SortOrder;
    measurementWaist?: Prisma.SortOrder;
    measurementArmHole?: Prisma.SortOrder;
    measurementMori?: Prisma.SortOrder;
    measurementNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RentalOrderItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    pricePerDay?: Prisma.SortOrder;
    rentalDays?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    depositAmount?: Prisma.SortOrder;
};
export type RentalOrderItemCreateNestedManyWithoutLehengaInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaInput> | Prisma.RentalOrderItemCreateWithoutLehengaInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutLehengaInput | Prisma.RentalOrderItemCreateOrConnectWithoutLehengaInput[];
    createMany?: Prisma.RentalOrderItemCreateManyLehengaInputEnvelope;
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
};
export type RentalOrderItemUncheckedCreateNestedManyWithoutLehengaInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaInput> | Prisma.RentalOrderItemCreateWithoutLehengaInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutLehengaInput | Prisma.RentalOrderItemCreateOrConnectWithoutLehengaInput[];
    createMany?: Prisma.RentalOrderItemCreateManyLehengaInputEnvelope;
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
};
export type RentalOrderItemUpdateManyWithoutLehengaNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaInput> | Prisma.RentalOrderItemCreateWithoutLehengaInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutLehengaInput | Prisma.RentalOrderItemCreateOrConnectWithoutLehengaInput[];
    upsert?: Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutLehengaInput | Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutLehengaInput[];
    createMany?: Prisma.RentalOrderItemCreateManyLehengaInputEnvelope;
    set?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    update?: Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutLehengaInput | Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutLehengaInput[];
    updateMany?: Prisma.RentalOrderItemUpdateManyWithWhereWithoutLehengaInput | Prisma.RentalOrderItemUpdateManyWithWhereWithoutLehengaInput[];
    deleteMany?: Prisma.RentalOrderItemScalarWhereInput | Prisma.RentalOrderItemScalarWhereInput[];
};
export type RentalOrderItemUncheckedUpdateManyWithoutLehengaNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaInput> | Prisma.RentalOrderItemCreateWithoutLehengaInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutLehengaInput | Prisma.RentalOrderItemCreateOrConnectWithoutLehengaInput[];
    upsert?: Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutLehengaInput | Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutLehengaInput[];
    createMany?: Prisma.RentalOrderItemCreateManyLehengaInputEnvelope;
    set?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    update?: Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutLehengaInput | Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutLehengaInput[];
    updateMany?: Prisma.RentalOrderItemUpdateManyWithWhereWithoutLehengaInput | Prisma.RentalOrderItemUpdateManyWithWhereWithoutLehengaInput[];
    deleteMany?: Prisma.RentalOrderItemScalarWhereInput | Prisma.RentalOrderItemScalarWhereInput[];
};
export type RentalOrderItemCreateNestedManyWithoutLehengaSizeInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaSizeInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaSizeInput> | Prisma.RentalOrderItemCreateWithoutLehengaSizeInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutLehengaSizeInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutLehengaSizeInput | Prisma.RentalOrderItemCreateOrConnectWithoutLehengaSizeInput[];
    createMany?: Prisma.RentalOrderItemCreateManyLehengaSizeInputEnvelope;
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
};
export type RentalOrderItemUncheckedCreateNestedManyWithoutLehengaSizeInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaSizeInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaSizeInput> | Prisma.RentalOrderItemCreateWithoutLehengaSizeInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutLehengaSizeInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutLehengaSizeInput | Prisma.RentalOrderItemCreateOrConnectWithoutLehengaSizeInput[];
    createMany?: Prisma.RentalOrderItemCreateManyLehengaSizeInputEnvelope;
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
};
export type RentalOrderItemUpdateManyWithoutLehengaSizeNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaSizeInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaSizeInput> | Prisma.RentalOrderItemCreateWithoutLehengaSizeInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutLehengaSizeInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutLehengaSizeInput | Prisma.RentalOrderItemCreateOrConnectWithoutLehengaSizeInput[];
    upsert?: Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutLehengaSizeInput | Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutLehengaSizeInput[];
    createMany?: Prisma.RentalOrderItemCreateManyLehengaSizeInputEnvelope;
    set?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    update?: Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutLehengaSizeInput | Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutLehengaSizeInput[];
    updateMany?: Prisma.RentalOrderItemUpdateManyWithWhereWithoutLehengaSizeInput | Prisma.RentalOrderItemUpdateManyWithWhereWithoutLehengaSizeInput[];
    deleteMany?: Prisma.RentalOrderItemScalarWhereInput | Prisma.RentalOrderItemScalarWhereInput[];
};
export type RentalOrderItemUncheckedUpdateManyWithoutLehengaSizeNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaSizeInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaSizeInput> | Prisma.RentalOrderItemCreateWithoutLehengaSizeInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutLehengaSizeInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutLehengaSizeInput | Prisma.RentalOrderItemCreateOrConnectWithoutLehengaSizeInput[];
    upsert?: Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutLehengaSizeInput | Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutLehengaSizeInput[];
    createMany?: Prisma.RentalOrderItemCreateManyLehengaSizeInputEnvelope;
    set?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    update?: Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutLehengaSizeInput | Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutLehengaSizeInput[];
    updateMany?: Prisma.RentalOrderItemUpdateManyWithWhereWithoutLehengaSizeInput | Prisma.RentalOrderItemUpdateManyWithWhereWithoutLehengaSizeInput[];
    deleteMany?: Prisma.RentalOrderItemScalarWhereInput | Prisma.RentalOrderItemScalarWhereInput[];
};
export type RentalOrderItemCreateNestedManyWithoutJewelleryInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutJewelleryInput, Prisma.RentalOrderItemUncheckedCreateWithoutJewelleryInput> | Prisma.RentalOrderItemCreateWithoutJewelleryInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutJewelleryInput | Prisma.RentalOrderItemCreateOrConnectWithoutJewelleryInput[];
    createMany?: Prisma.RentalOrderItemCreateManyJewelleryInputEnvelope;
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
};
export type RentalOrderItemUncheckedCreateNestedManyWithoutJewelleryInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutJewelleryInput, Prisma.RentalOrderItemUncheckedCreateWithoutJewelleryInput> | Prisma.RentalOrderItemCreateWithoutJewelleryInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutJewelleryInput | Prisma.RentalOrderItemCreateOrConnectWithoutJewelleryInput[];
    createMany?: Prisma.RentalOrderItemCreateManyJewelleryInputEnvelope;
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
};
export type RentalOrderItemUpdateManyWithoutJewelleryNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutJewelleryInput, Prisma.RentalOrderItemUncheckedCreateWithoutJewelleryInput> | Prisma.RentalOrderItemCreateWithoutJewelleryInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutJewelleryInput | Prisma.RentalOrderItemCreateOrConnectWithoutJewelleryInput[];
    upsert?: Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutJewelleryInput | Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutJewelleryInput[];
    createMany?: Prisma.RentalOrderItemCreateManyJewelleryInputEnvelope;
    set?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    update?: Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutJewelleryInput | Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutJewelleryInput[];
    updateMany?: Prisma.RentalOrderItemUpdateManyWithWhereWithoutJewelleryInput | Prisma.RentalOrderItemUpdateManyWithWhereWithoutJewelleryInput[];
    deleteMany?: Prisma.RentalOrderItemScalarWhereInput | Prisma.RentalOrderItemScalarWhereInput[];
};
export type RentalOrderItemUncheckedUpdateManyWithoutJewelleryNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutJewelleryInput, Prisma.RentalOrderItemUncheckedCreateWithoutJewelleryInput> | Prisma.RentalOrderItemCreateWithoutJewelleryInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutJewelleryInput | Prisma.RentalOrderItemCreateOrConnectWithoutJewelleryInput[];
    upsert?: Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutJewelleryInput | Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutJewelleryInput[];
    createMany?: Prisma.RentalOrderItemCreateManyJewelleryInputEnvelope;
    set?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    update?: Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutJewelleryInput | Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutJewelleryInput[];
    updateMany?: Prisma.RentalOrderItemUpdateManyWithWhereWithoutJewelleryInput | Prisma.RentalOrderItemUpdateManyWithWhereWithoutJewelleryInput[];
    deleteMany?: Prisma.RentalOrderItemScalarWhereInput | Prisma.RentalOrderItemScalarWhereInput[];
};
export type RentalOrderItemCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutOrderInput, Prisma.RentalOrderItemUncheckedCreateWithoutOrderInput> | Prisma.RentalOrderItemCreateWithoutOrderInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutOrderInput | Prisma.RentalOrderItemCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.RentalOrderItemCreateManyOrderInputEnvelope;
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
};
export type RentalOrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutOrderInput, Prisma.RentalOrderItemUncheckedCreateWithoutOrderInput> | Prisma.RentalOrderItemCreateWithoutOrderInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutOrderInput | Prisma.RentalOrderItemCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.RentalOrderItemCreateManyOrderInputEnvelope;
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
};
export type RentalOrderItemUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutOrderInput, Prisma.RentalOrderItemUncheckedCreateWithoutOrderInput> | Prisma.RentalOrderItemCreateWithoutOrderInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutOrderInput | Prisma.RentalOrderItemCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutOrderInput | Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.RentalOrderItemCreateManyOrderInputEnvelope;
    set?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    update?: Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutOrderInput | Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.RentalOrderItemUpdateManyWithWhereWithoutOrderInput | Prisma.RentalOrderItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.RentalOrderItemScalarWhereInput | Prisma.RentalOrderItemScalarWhereInput[];
};
export type RentalOrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutOrderInput, Prisma.RentalOrderItemUncheckedCreateWithoutOrderInput> | Prisma.RentalOrderItemCreateWithoutOrderInput[] | Prisma.RentalOrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RentalOrderItemCreateOrConnectWithoutOrderInput | Prisma.RentalOrderItemCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutOrderInput | Prisma.RentalOrderItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.RentalOrderItemCreateManyOrderInputEnvelope;
    set?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemWhereUniqueInput | Prisma.RentalOrderItemWhereUniqueInput[];
    update?: Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutOrderInput | Prisma.RentalOrderItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.RentalOrderItemUpdateManyWithWhereWithoutOrderInput | Prisma.RentalOrderItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.RentalOrderItemScalarWhereInput | Prisma.RentalOrderItemScalarWhereInput[];
};
export type EnumRentalItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.RentalItemType;
};
export type RentalOrderItemCreateWithoutLehengaInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
    order: Prisma.RentalOrderCreateNestedOneWithoutItemsInput;
    lehengaSize?: Prisma.LehengaSizeCreateNestedOneWithoutOrderItemsInput;
    jewellery?: Prisma.JewelleryCreateNestedOneWithoutOrderItemsInput;
};
export type RentalOrderItemUncheckedCreateWithoutLehengaInput = {
    id?: string;
    orderId: string;
    itemType: $Enums.RentalItemType;
    lehengaSizeId?: string | null;
    jewelleryId?: string | null;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
};
export type RentalOrderItemCreateOrConnectWithoutLehengaInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaInput>;
};
export type RentalOrderItemCreateManyLehengaInputEnvelope = {
    data: Prisma.RentalOrderItemCreateManyLehengaInput | Prisma.RentalOrderItemCreateManyLehengaInput[];
    skipDuplicates?: boolean;
};
export type RentalOrderItemUpsertWithWhereUniqueWithoutLehengaInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalOrderItemUpdateWithoutLehengaInput, Prisma.RentalOrderItemUncheckedUpdateWithoutLehengaInput>;
    create: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaInput>;
};
export type RentalOrderItemUpdateWithWhereUniqueWithoutLehengaInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalOrderItemUpdateWithoutLehengaInput, Prisma.RentalOrderItemUncheckedUpdateWithoutLehengaInput>;
};
export type RentalOrderItemUpdateManyWithWhereWithoutLehengaInput = {
    where: Prisma.RentalOrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderItemUpdateManyMutationInput, Prisma.RentalOrderItemUncheckedUpdateManyWithoutLehengaInput>;
};
export type RentalOrderItemScalarWhereInput = {
    AND?: Prisma.RentalOrderItemScalarWhereInput | Prisma.RentalOrderItemScalarWhereInput[];
    OR?: Prisma.RentalOrderItemScalarWhereInput[];
    NOT?: Prisma.RentalOrderItemScalarWhereInput | Prisma.RentalOrderItemScalarWhereInput[];
    id?: Prisma.StringFilter<"RentalOrderItem"> | string;
    orderId?: Prisma.StringFilter<"RentalOrderItem"> | string;
    itemType?: Prisma.EnumRentalItemTypeFilter<"RentalOrderItem"> | $Enums.RentalItemType;
    lehengaId?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    lehengaSizeId?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    jewelleryId?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    productNameSnapshot?: Prisma.StringFilter<"RentalOrderItem"> | string;
    skuSnapshot?: Prisma.StringFilter<"RentalOrderItem"> | string;
    sizeLabelSnapshot?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    quantity?: Prisma.IntFilter<"RentalOrderItem"> | number;
    rentalStartDate?: Prisma.DateTimeFilter<"RentalOrderItem"> | Date | string;
    rentalEndDate?: Prisma.DateTimeFilter<"RentalOrderItem"> | Date | string;
    pricePerDay?: Prisma.DecimalFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFilter<"RentalOrderItem"> | number;
    lineTotal?: Prisma.DecimalFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFilter<"RentalOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementChest?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementWaist?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementArmHole?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementMori?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    measurementNotes?: Prisma.StringNullableFilter<"RentalOrderItem"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RentalOrderItem"> | Date | string;
};
export type RentalOrderItemCreateWithoutLehengaSizeInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
    order: Prisma.RentalOrderCreateNestedOneWithoutItemsInput;
    lehenga?: Prisma.LehengaCreateNestedOneWithoutOrderItemsInput;
    jewellery?: Prisma.JewelleryCreateNestedOneWithoutOrderItemsInput;
};
export type RentalOrderItemUncheckedCreateWithoutLehengaSizeInput = {
    id?: string;
    orderId: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    jewelleryId?: string | null;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
};
export type RentalOrderItemCreateOrConnectWithoutLehengaSizeInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaSizeInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaSizeInput>;
};
export type RentalOrderItemCreateManyLehengaSizeInputEnvelope = {
    data: Prisma.RentalOrderItemCreateManyLehengaSizeInput | Prisma.RentalOrderItemCreateManyLehengaSizeInput[];
    skipDuplicates?: boolean;
};
export type RentalOrderItemUpsertWithWhereUniqueWithoutLehengaSizeInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalOrderItemUpdateWithoutLehengaSizeInput, Prisma.RentalOrderItemUncheckedUpdateWithoutLehengaSizeInput>;
    create: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutLehengaSizeInput, Prisma.RentalOrderItemUncheckedCreateWithoutLehengaSizeInput>;
};
export type RentalOrderItemUpdateWithWhereUniqueWithoutLehengaSizeInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalOrderItemUpdateWithoutLehengaSizeInput, Prisma.RentalOrderItemUncheckedUpdateWithoutLehengaSizeInput>;
};
export type RentalOrderItemUpdateManyWithWhereWithoutLehengaSizeInput = {
    where: Prisma.RentalOrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderItemUpdateManyMutationInput, Prisma.RentalOrderItemUncheckedUpdateManyWithoutLehengaSizeInput>;
};
export type RentalOrderItemCreateWithoutJewelleryInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
    order: Prisma.RentalOrderCreateNestedOneWithoutItemsInput;
    lehenga?: Prisma.LehengaCreateNestedOneWithoutOrderItemsInput;
    lehengaSize?: Prisma.LehengaSizeCreateNestedOneWithoutOrderItemsInput;
};
export type RentalOrderItemUncheckedCreateWithoutJewelleryInput = {
    id?: string;
    orderId: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    lehengaSizeId?: string | null;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
};
export type RentalOrderItemCreateOrConnectWithoutJewelleryInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutJewelleryInput, Prisma.RentalOrderItemUncheckedCreateWithoutJewelleryInput>;
};
export type RentalOrderItemCreateManyJewelleryInputEnvelope = {
    data: Prisma.RentalOrderItemCreateManyJewelleryInput | Prisma.RentalOrderItemCreateManyJewelleryInput[];
    skipDuplicates?: boolean;
};
export type RentalOrderItemUpsertWithWhereUniqueWithoutJewelleryInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalOrderItemUpdateWithoutJewelleryInput, Prisma.RentalOrderItemUncheckedUpdateWithoutJewelleryInput>;
    create: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutJewelleryInput, Prisma.RentalOrderItemUncheckedCreateWithoutJewelleryInput>;
};
export type RentalOrderItemUpdateWithWhereUniqueWithoutJewelleryInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalOrderItemUpdateWithoutJewelleryInput, Prisma.RentalOrderItemUncheckedUpdateWithoutJewelleryInput>;
};
export type RentalOrderItemUpdateManyWithWhereWithoutJewelleryInput = {
    where: Prisma.RentalOrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderItemUpdateManyMutationInput, Prisma.RentalOrderItemUncheckedUpdateManyWithoutJewelleryInput>;
};
export type RentalOrderItemCreateWithoutOrderInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
    lehenga?: Prisma.LehengaCreateNestedOneWithoutOrderItemsInput;
    lehengaSize?: Prisma.LehengaSizeCreateNestedOneWithoutOrderItemsInput;
    jewellery?: Prisma.JewelleryCreateNestedOneWithoutOrderItemsInput;
};
export type RentalOrderItemUncheckedCreateWithoutOrderInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    lehengaSizeId?: string | null;
    jewelleryId?: string | null;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
};
export type RentalOrderItemCreateOrConnectWithoutOrderInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutOrderInput, Prisma.RentalOrderItemUncheckedCreateWithoutOrderInput>;
};
export type RentalOrderItemCreateManyOrderInputEnvelope = {
    data: Prisma.RentalOrderItemCreateManyOrderInput | Prisma.RentalOrderItemCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type RentalOrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalOrderItemUpdateWithoutOrderInput, Prisma.RentalOrderItemUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.RentalOrderItemCreateWithoutOrderInput, Prisma.RentalOrderItemUncheckedCreateWithoutOrderInput>;
};
export type RentalOrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.RentalOrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalOrderItemUpdateWithoutOrderInput, Prisma.RentalOrderItemUncheckedUpdateWithoutOrderInput>;
};
export type RentalOrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.RentalOrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderItemUpdateManyMutationInput, Prisma.RentalOrderItemUncheckedUpdateManyWithoutOrderInput>;
};
export type RentalOrderItemCreateManyLehengaInput = {
    id?: string;
    orderId: string;
    itemType: $Enums.RentalItemType;
    lehengaSizeId?: string | null;
    jewelleryId?: string | null;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
};
export type RentalOrderItemUpdateWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.RentalOrderUpdateOneRequiredWithoutItemsNestedInput;
    lehengaSize?: Prisma.LehengaSizeUpdateOneWithoutOrderItemsNestedInput;
    jewellery?: Prisma.JewelleryUpdateOneWithoutOrderItemsNestedInput;
};
export type RentalOrderItemUncheckedUpdateWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaSizeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemUncheckedUpdateManyWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaSizeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemCreateManyLehengaSizeInput = {
    id?: string;
    orderId: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    jewelleryId?: string | null;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
};
export type RentalOrderItemUpdateWithoutLehengaSizeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.RentalOrderUpdateOneRequiredWithoutItemsNestedInput;
    lehenga?: Prisma.LehengaUpdateOneWithoutOrderItemsNestedInput;
    jewellery?: Prisma.JewelleryUpdateOneWithoutOrderItemsNestedInput;
};
export type RentalOrderItemUncheckedUpdateWithoutLehengaSizeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemUncheckedUpdateManyWithoutLehengaSizeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemCreateManyJewelleryInput = {
    id?: string;
    orderId: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    lehengaSizeId?: string | null;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
};
export type RentalOrderItemUpdateWithoutJewelleryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.RentalOrderUpdateOneRequiredWithoutItemsNestedInput;
    lehenga?: Prisma.LehengaUpdateOneWithoutOrderItemsNestedInput;
    lehengaSize?: Prisma.LehengaSizeUpdateOneWithoutOrderItemsNestedInput;
};
export type RentalOrderItemUncheckedUpdateWithoutJewelleryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lehengaSizeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemUncheckedUpdateManyWithoutJewelleryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lehengaSizeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemCreateManyOrderInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    lehengaSizeId?: string | null;
    jewelleryId?: string | null;
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity?: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays: number;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: string | null;
    measurementChest?: string | null;
    measurementWaist?: string | null;
    measurementArmHole?: string | null;
    measurementMori?: string | null;
    measurementNotes?: string | null;
    createdAt?: Date | string;
};
export type RentalOrderItemUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lehenga?: Prisma.LehengaUpdateOneWithoutOrderItemsNestedInput;
    lehengaSize?: Prisma.LehengaSizeUpdateOneWithoutOrderItemsNestedInput;
    jewellery?: Prisma.JewelleryUpdateOneWithoutOrderItemsNestedInput;
};
export type RentalOrderItemUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lehengaSizeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lehengaSizeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    productNameSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    skuSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabelSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    measurementUpper?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementChest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementWaist?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementArmHole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementMori?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    measurementNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    itemType?: boolean;
    lehengaId?: boolean;
    lehengaSizeId?: boolean;
    jewelleryId?: boolean;
    productNameSnapshot?: boolean;
    skuSnapshot?: boolean;
    sizeLabelSnapshot?: boolean;
    quantity?: boolean;
    rentalStartDate?: boolean;
    rentalEndDate?: boolean;
    pricePerDay?: boolean;
    rentalDays?: boolean;
    lineTotal?: boolean;
    depositAmount?: boolean;
    measurementUpper?: boolean;
    measurementChest?: boolean;
    measurementWaist?: boolean;
    measurementArmHole?: boolean;
    measurementMori?: boolean;
    measurementNotes?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.RentalOrderItem$lehengaArgs<ExtArgs>;
    lehengaSize?: boolean | Prisma.RentalOrderItem$lehengaSizeArgs<ExtArgs>;
    jewellery?: boolean | Prisma.RentalOrderItem$jewelleryArgs<ExtArgs>;
}, ExtArgs["result"]["rentalOrderItem"]>;
export type RentalOrderItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    itemType?: boolean;
    lehengaId?: boolean;
    lehengaSizeId?: boolean;
    jewelleryId?: boolean;
    productNameSnapshot?: boolean;
    skuSnapshot?: boolean;
    sizeLabelSnapshot?: boolean;
    quantity?: boolean;
    rentalStartDate?: boolean;
    rentalEndDate?: boolean;
    pricePerDay?: boolean;
    rentalDays?: boolean;
    lineTotal?: boolean;
    depositAmount?: boolean;
    measurementUpper?: boolean;
    measurementChest?: boolean;
    measurementWaist?: boolean;
    measurementArmHole?: boolean;
    measurementMori?: boolean;
    measurementNotes?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.RentalOrderItem$lehengaArgs<ExtArgs>;
    lehengaSize?: boolean | Prisma.RentalOrderItem$lehengaSizeArgs<ExtArgs>;
    jewellery?: boolean | Prisma.RentalOrderItem$jewelleryArgs<ExtArgs>;
}, ExtArgs["result"]["rentalOrderItem"]>;
export type RentalOrderItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    itemType?: boolean;
    lehengaId?: boolean;
    lehengaSizeId?: boolean;
    jewelleryId?: boolean;
    productNameSnapshot?: boolean;
    skuSnapshot?: boolean;
    sizeLabelSnapshot?: boolean;
    quantity?: boolean;
    rentalStartDate?: boolean;
    rentalEndDate?: boolean;
    pricePerDay?: boolean;
    rentalDays?: boolean;
    lineTotal?: boolean;
    depositAmount?: boolean;
    measurementUpper?: boolean;
    measurementChest?: boolean;
    measurementWaist?: boolean;
    measurementArmHole?: boolean;
    measurementMori?: boolean;
    measurementNotes?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.RentalOrderItem$lehengaArgs<ExtArgs>;
    lehengaSize?: boolean | Prisma.RentalOrderItem$lehengaSizeArgs<ExtArgs>;
    jewellery?: boolean | Prisma.RentalOrderItem$jewelleryArgs<ExtArgs>;
}, ExtArgs["result"]["rentalOrderItem"]>;
export type RentalOrderItemSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    itemType?: boolean;
    lehengaId?: boolean;
    lehengaSizeId?: boolean;
    jewelleryId?: boolean;
    productNameSnapshot?: boolean;
    skuSnapshot?: boolean;
    sizeLabelSnapshot?: boolean;
    quantity?: boolean;
    rentalStartDate?: boolean;
    rentalEndDate?: boolean;
    pricePerDay?: boolean;
    rentalDays?: boolean;
    lineTotal?: boolean;
    depositAmount?: boolean;
    measurementUpper?: boolean;
    measurementChest?: boolean;
    measurementWaist?: boolean;
    measurementArmHole?: boolean;
    measurementMori?: boolean;
    measurementNotes?: boolean;
    createdAt?: boolean;
};
export type RentalOrderItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "itemType" | "lehengaId" | "lehengaSizeId" | "jewelleryId" | "productNameSnapshot" | "skuSnapshot" | "sizeLabelSnapshot" | "quantity" | "rentalStartDate" | "rentalEndDate" | "pricePerDay" | "rentalDays" | "lineTotal" | "depositAmount" | "measurementUpper" | "measurementChest" | "measurementWaist" | "measurementArmHole" | "measurementMori" | "measurementNotes" | "createdAt", ExtArgs["result"]["rentalOrderItem"]>;
export type RentalOrderItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.RentalOrderItem$lehengaArgs<ExtArgs>;
    lehengaSize?: boolean | Prisma.RentalOrderItem$lehengaSizeArgs<ExtArgs>;
    jewellery?: boolean | Prisma.RentalOrderItem$jewelleryArgs<ExtArgs>;
};
export type RentalOrderItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.RentalOrderItem$lehengaArgs<ExtArgs>;
    lehengaSize?: boolean | Prisma.RentalOrderItem$lehengaSizeArgs<ExtArgs>;
    jewellery?: boolean | Prisma.RentalOrderItem$jewelleryArgs<ExtArgs>;
};
export type RentalOrderItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.RentalOrderItem$lehengaArgs<ExtArgs>;
    lehengaSize?: boolean | Prisma.RentalOrderItem$lehengaSizeArgs<ExtArgs>;
    jewellery?: boolean | Prisma.RentalOrderItem$jewelleryArgs<ExtArgs>;
};
export type $RentalOrderItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RentalOrderItem";
    objects: {
        order: Prisma.$RentalOrderPayload<ExtArgs>;
        lehenga: Prisma.$LehengaPayload<ExtArgs> | null;
        lehengaSize: Prisma.$LehengaSizePayload<ExtArgs> | null;
        jewellery: Prisma.$JewelleryPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        itemType: $Enums.RentalItemType;
        lehengaId: string | null;
        lehengaSizeId: string | null;
        jewelleryId: string | null;
        productNameSnapshot: string;
        skuSnapshot: string;
        sizeLabelSnapshot: string | null;
        quantity: number;
        rentalStartDate: Date;
        rentalEndDate: Date;
        pricePerDay: runtime.Decimal;
        rentalDays: number;
        lineTotal: runtime.Decimal;
        depositAmount: runtime.Decimal;
        measurementUpper: string | null;
        measurementChest: string | null;
        measurementWaist: string | null;
        measurementArmHole: string | null;
        measurementMori: string | null;
        measurementNotes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["rentalOrderItem"]>;
    composites: {};
};
export type RentalOrderItemGetPayload<S extends boolean | null | undefined | RentalOrderItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload, S>;
export type RentalOrderItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RentalOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RentalOrderItemCountAggregateInputType | true;
};
export interface RentalOrderItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RentalOrderItem'];
        meta: {
            name: 'RentalOrderItem';
        };
    };
    /**
     * Find zero or one RentalOrderItem that matches the filter.
     * @param {RentalOrderItemFindUniqueArgs} args - Arguments to find a RentalOrderItem
     * @example
     * // Get one RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalOrderItemFindUniqueArgs>(args: Prisma.SelectSubset<T, RentalOrderItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RentalOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalOrderItemFindUniqueOrThrowArgs} args - Arguments to find a RentalOrderItem
     * @example
     * // Get one RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalOrderItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RentalOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RentalOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemFindFirstArgs} args - Arguments to find a RentalOrderItem
     * @example
     * // Get one RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalOrderItemFindFirstArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RentalOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemFindFirstOrThrowArgs} args - Arguments to find a RentalOrderItem
     * @example
     * // Get one RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalOrderItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RentalOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItem.findMany()
     *
     * // Get first 10 RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rentalOrderItemWithIdOnly = await prisma.rentalOrderItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RentalOrderItemFindManyArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RentalOrderItem.
     * @param {RentalOrderItemCreateArgs} args - Arguments to create a RentalOrderItem.
     * @example
     * // Create one RentalOrderItem
     * const RentalOrderItem = await prisma.rentalOrderItem.create({
     *   data: {
     *     // ... data to create a RentalOrderItem
     *   }
     * })
     *
     */
    create<T extends RentalOrderItemCreateArgs>(args: Prisma.SelectSubset<T, RentalOrderItemCreateArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RentalOrderItems.
     * @param {RentalOrderItemCreateManyArgs} args - Arguments to create many RentalOrderItems.
     * @example
     * // Create many RentalOrderItems
     * const rentalOrderItem = await prisma.rentalOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RentalOrderItemCreateManyArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RentalOrderItems and returns the data saved in the database.
     * @param {RentalOrderItemCreateManyAndReturnArgs} args - Arguments to create many RentalOrderItems.
     * @example
     * // Create many RentalOrderItems
     * const rentalOrderItem = await prisma.rentalOrderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RentalOrderItems and only return the `id`
     * const rentalOrderItemWithIdOnly = await prisma.rentalOrderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RentalOrderItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RentalOrderItem.
     * @param {RentalOrderItemDeleteArgs} args - Arguments to delete one RentalOrderItem.
     * @example
     * // Delete one RentalOrderItem
     * const RentalOrderItem = await prisma.rentalOrderItem.delete({
     *   where: {
     *     // ... filter to delete one RentalOrderItem
     *   }
     * })
     *
     */
    delete<T extends RentalOrderItemDeleteArgs>(args: Prisma.SelectSubset<T, RentalOrderItemDeleteArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RentalOrderItem.
     * @param {RentalOrderItemUpdateArgs} args - Arguments to update one RentalOrderItem.
     * @example
     * // Update one RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RentalOrderItemUpdateArgs>(args: Prisma.SelectSubset<T, RentalOrderItemUpdateArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RentalOrderItems.
     * @param {RentalOrderItemDeleteManyArgs} args - Arguments to filter RentalOrderItems to delete.
     * @example
     * // Delete a few RentalOrderItems
     * const { count } = await prisma.rentalOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RentalOrderItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RentalOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalOrderItems
     * const rentalOrderItem = await prisma.rentalOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RentalOrderItemUpdateManyArgs>(args: Prisma.SelectSubset<T, RentalOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RentalOrderItems and returns the data updated in the database.
     * @param {RentalOrderItemUpdateManyAndReturnArgs} args - Arguments to update many RentalOrderItems.
     * @example
     * // Update many RentalOrderItems
     * const rentalOrderItem = await prisma.rentalOrderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RentalOrderItems and only return the `id`
     * const rentalOrderItemWithIdOnly = await prisma.rentalOrderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends RentalOrderItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RentalOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RentalOrderItem.
     * @param {RentalOrderItemUpsertArgs} args - Arguments to update or create a RentalOrderItem.
     * @example
     * // Update or create a RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.upsert({
     *   create: {
     *     // ... data to create a RentalOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends RentalOrderItemUpsertArgs>(args: Prisma.SelectSubset<T, RentalOrderItemUpsertArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RentalOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemCountArgs} args - Arguments to filter RentalOrderItems to count.
     * @example
     * // Count the number of RentalOrderItems
     * const count = await prisma.rentalOrderItem.count({
     *   where: {
     *     // ... the filter for the RentalOrderItems we want to count
     *   }
     * })
    **/
    count<T extends RentalOrderItemCountArgs>(args?: Prisma.Subset<T, RentalOrderItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RentalOrderItemCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RentalOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalOrderItemAggregateArgs>(args: Prisma.Subset<T, RentalOrderItemAggregateArgs>): Prisma.PrismaPromise<GetRentalOrderItemAggregateType<T>>;
    /**
     * Group by RentalOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RentalOrderItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RentalOrderItemGroupByArgs['orderBy'];
    } : {
        orderBy?: RentalOrderItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RentalOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RentalOrderItem model
     */
    readonly fields: RentalOrderItemFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RentalOrderItem.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RentalOrderItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.RentalOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RentalOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__RentalOrderClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lehenga<T extends Prisma.RentalOrderItem$lehengaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RentalOrderItem$lehengaArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lehengaSize<T extends Prisma.RentalOrderItem$lehengaSizeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RentalOrderItem$lehengaSizeArgs<ExtArgs>>): Prisma.Prisma__LehengaSizeClient<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    jewellery<T extends Prisma.RentalOrderItem$jewelleryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RentalOrderItem$jewelleryArgs<ExtArgs>>): Prisma.Prisma__JewelleryClient<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the RentalOrderItem model
 */
export interface RentalOrderItemFieldRefs {
    readonly id: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly orderId: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly itemType: Prisma.FieldRef<"RentalOrderItem", 'RentalItemType'>;
    readonly lehengaId: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly lehengaSizeId: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly jewelleryId: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly productNameSnapshot: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly skuSnapshot: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly sizeLabelSnapshot: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"RentalOrderItem", 'Int'>;
    readonly rentalStartDate: Prisma.FieldRef<"RentalOrderItem", 'DateTime'>;
    readonly rentalEndDate: Prisma.FieldRef<"RentalOrderItem", 'DateTime'>;
    readonly pricePerDay: Prisma.FieldRef<"RentalOrderItem", 'Decimal'>;
    readonly rentalDays: Prisma.FieldRef<"RentalOrderItem", 'Int'>;
    readonly lineTotal: Prisma.FieldRef<"RentalOrderItem", 'Decimal'>;
    readonly depositAmount: Prisma.FieldRef<"RentalOrderItem", 'Decimal'>;
    readonly measurementUpper: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly measurementChest: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly measurementWaist: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly measurementArmHole: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly measurementMori: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly measurementNotes: Prisma.FieldRef<"RentalOrderItem", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RentalOrderItem", 'DateTime'>;
}
/**
 * RentalOrderItem findUnique
 */
export type RentalOrderItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RentalOrderItem to fetch.
     */
    where: Prisma.RentalOrderItemWhereUniqueInput;
};
/**
 * RentalOrderItem findUniqueOrThrow
 */
export type RentalOrderItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RentalOrderItem to fetch.
     */
    where: Prisma.RentalOrderItemWhereUniqueInput;
};
/**
 * RentalOrderItem findFirst
 */
export type RentalOrderItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RentalOrderItem to fetch.
     */
    where?: Prisma.RentalOrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: Prisma.RentalOrderItemOrderByWithRelationInput | Prisma.RentalOrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RentalOrderItems.
     */
    cursor?: Prisma.RentalOrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalOrderItems.
     */
    distinct?: Prisma.RentalOrderItemScalarFieldEnum | Prisma.RentalOrderItemScalarFieldEnum[];
};
/**
 * RentalOrderItem findFirstOrThrow
 */
export type RentalOrderItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RentalOrderItem to fetch.
     */
    where?: Prisma.RentalOrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: Prisma.RentalOrderItemOrderByWithRelationInput | Prisma.RentalOrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RentalOrderItems.
     */
    cursor?: Prisma.RentalOrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalOrderItems.
     */
    distinct?: Prisma.RentalOrderItemScalarFieldEnum | Prisma.RentalOrderItemScalarFieldEnum[];
};
/**
 * RentalOrderItem findMany
 */
export type RentalOrderItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RentalOrderItems to fetch.
     */
    where?: Prisma.RentalOrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: Prisma.RentalOrderItemOrderByWithRelationInput | Prisma.RentalOrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RentalOrderItems.
     */
    cursor?: Prisma.RentalOrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalOrderItems.
     */
    distinct?: Prisma.RentalOrderItemScalarFieldEnum | Prisma.RentalOrderItemScalarFieldEnum[];
};
/**
 * RentalOrderItem create
 */
export type RentalOrderItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a RentalOrderItem.
     */
    data: Prisma.XOR<Prisma.RentalOrderItemCreateInput, Prisma.RentalOrderItemUncheckedCreateInput>;
};
/**
 * RentalOrderItem createMany
 */
export type RentalOrderItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalOrderItems.
     */
    data: Prisma.RentalOrderItemCreateManyInput | Prisma.RentalOrderItemCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RentalOrderItem createManyAndReturn
 */
export type RentalOrderItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: Prisma.RentalOrderItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: Prisma.RentalOrderItemOmit<ExtArgs> | null;
    /**
     * The data used to create many RentalOrderItems.
     */
    data: Prisma.RentalOrderItemCreateManyInput | Prisma.RentalOrderItemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * RentalOrderItem update
 */
export type RentalOrderItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a RentalOrderItem.
     */
    data: Prisma.XOR<Prisma.RentalOrderItemUpdateInput, Prisma.RentalOrderItemUncheckedUpdateInput>;
    /**
     * Choose, which RentalOrderItem to update.
     */
    where: Prisma.RentalOrderItemWhereUniqueInput;
};
/**
 * RentalOrderItem updateMany
 */
export type RentalOrderItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalOrderItems.
     */
    data: Prisma.XOR<Prisma.RentalOrderItemUpdateManyMutationInput, Prisma.RentalOrderItemUncheckedUpdateManyInput>;
    /**
     * Filter which RentalOrderItems to update
     */
    where?: Prisma.RentalOrderItemWhereInput;
    /**
     * Limit how many RentalOrderItems to update.
     */
    limit?: number;
};
/**
 * RentalOrderItem updateManyAndReturn
 */
export type RentalOrderItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: Prisma.RentalOrderItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: Prisma.RentalOrderItemOmit<ExtArgs> | null;
    /**
     * The data used to update RentalOrderItems.
     */
    data: Prisma.XOR<Prisma.RentalOrderItemUpdateManyMutationInput, Prisma.RentalOrderItemUncheckedUpdateManyInput>;
    /**
     * Filter which RentalOrderItems to update
     */
    where?: Prisma.RentalOrderItemWhereInput;
    /**
     * Limit how many RentalOrderItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * RentalOrderItem upsert
 */
export type RentalOrderItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the RentalOrderItem to update in case it exists.
     */
    where: Prisma.RentalOrderItemWhereUniqueInput;
    /**
     * In case the RentalOrderItem found by the `where` argument doesn't exist, create a new RentalOrderItem with this data.
     */
    create: Prisma.XOR<Prisma.RentalOrderItemCreateInput, Prisma.RentalOrderItemUncheckedCreateInput>;
    /**
     * In case the RentalOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RentalOrderItemUpdateInput, Prisma.RentalOrderItemUncheckedUpdateInput>;
};
/**
 * RentalOrderItem delete
 */
export type RentalOrderItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which RentalOrderItem to delete.
     */
    where: Prisma.RentalOrderItemWhereUniqueInput;
};
/**
 * RentalOrderItem deleteMany
 */
export type RentalOrderItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RentalOrderItems to delete
     */
    where?: Prisma.RentalOrderItemWhereInput;
    /**
     * Limit how many RentalOrderItems to delete.
     */
    limit?: number;
};
/**
 * RentalOrderItem.lehenga
 */
export type RentalOrderItem$lehengaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaInclude<ExtArgs> | null;
    where?: Prisma.LehengaWhereInput;
};
/**
 * RentalOrderItem.lehengaSize
 */
export type RentalOrderItem$lehengaSizeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaSize
     */
    select?: Prisma.LehengaSizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaSize
     */
    omit?: Prisma.LehengaSizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaSizeInclude<ExtArgs> | null;
    where?: Prisma.LehengaSizeWhereInput;
};
/**
 * RentalOrderItem.jewellery
 */
export type RentalOrderItem$jewelleryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.JewelleryWhereInput;
};
/**
 * RentalOrderItem without action
 */
export type RentalOrderItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=RentalOrderItem.d.ts.map