import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProductReview
 *
 */
export type ProductReviewModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductReviewPayload>;
export type AggregateProductReview = {
    _count: ProductReviewCountAggregateOutputType | null;
    _avg: ProductReviewAvgAggregateOutputType | null;
    _sum: ProductReviewSumAggregateOutputType | null;
    _min: ProductReviewMinAggregateOutputType | null;
    _max: ProductReviewMaxAggregateOutputType | null;
};
export type ProductReviewAvgAggregateOutputType = {
    rating: number | null;
};
export type ProductReviewSumAggregateOutputType = {
    rating: number | null;
};
export type ProductReviewMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    itemType: $Enums.RentalItemType | null;
    lehengaId: string | null;
    jewelleryId: string | null;
    rating: number | null;
    comment: string | null;
    isVisible: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductReviewMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    itemType: $Enums.RentalItemType | null;
    lehengaId: string | null;
    jewelleryId: string | null;
    rating: number | null;
    comment: string | null;
    isVisible: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductReviewCountAggregateOutputType = {
    id: number;
    customerId: number;
    itemType: number;
    lehengaId: number;
    jewelleryId: number;
    rating: number;
    comment: number;
    isVisible: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductReviewAvgAggregateInputType = {
    rating?: true;
};
export type ProductReviewSumAggregateInputType = {
    rating?: true;
};
export type ProductReviewMinAggregateInputType = {
    id?: true;
    customerId?: true;
    itemType?: true;
    lehengaId?: true;
    jewelleryId?: true;
    rating?: true;
    comment?: true;
    isVisible?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductReviewMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    itemType?: true;
    lehengaId?: true;
    jewelleryId?: true;
    rating?: true;
    comment?: true;
    isVisible?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductReviewCountAggregateInputType = {
    id?: true;
    customerId?: true;
    itemType?: true;
    lehengaId?: true;
    jewelleryId?: true;
    rating?: true;
    comment?: true;
    isVisible?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductReviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReview to aggregate.
     */
    where?: Prisma.ProductReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductReviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProductReviews
    **/
    _count?: true | ProductReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProductReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProductReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductReviewMaxAggregateInputType;
};
export type GetProductReviewAggregateType<T extends ProductReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateProductReview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductReview[P]> : Prisma.GetScalarType<T[P], AggregateProductReview[P]>;
};
export type ProductReviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithAggregationInput | Prisma.ProductReviewOrderByWithAggregationInput[];
    by: Prisma.ProductReviewScalarFieldEnum[] | Prisma.ProductReviewScalarFieldEnum;
    having?: Prisma.ProductReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductReviewCountAggregateInputType | true;
    _avg?: ProductReviewAvgAggregateInputType;
    _sum?: ProductReviewSumAggregateInputType;
    _min?: ProductReviewMinAggregateInputType;
    _max?: ProductReviewMaxAggregateInputType;
};
export type ProductReviewGroupByOutputType = {
    id: string;
    customerId: string;
    itemType: $Enums.RentalItemType;
    lehengaId: string | null;
    jewelleryId: string | null;
    rating: number;
    comment: string;
    isVisible: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductReviewCountAggregateOutputType | null;
    _avg: ProductReviewAvgAggregateOutputType | null;
    _sum: ProductReviewSumAggregateOutputType | null;
    _min: ProductReviewMinAggregateOutputType | null;
    _max: ProductReviewMaxAggregateOutputType | null;
};
export type GetProductReviewGroupByPayload<T extends ProductReviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductReviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductReviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductReviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductReviewGroupByOutputType[P]>;
}>>;
export type ProductReviewWhereInput = {
    AND?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    OR?: Prisma.ProductReviewWhereInput[];
    NOT?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    id?: Prisma.StringFilter<"ProductReview"> | string;
    customerId?: Prisma.StringFilter<"ProductReview"> | string;
    itemType?: Prisma.EnumRentalItemTypeFilter<"ProductReview"> | $Enums.RentalItemType;
    lehengaId?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    jewelleryId?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    rating?: Prisma.IntFilter<"ProductReview"> | number;
    comment?: Prisma.StringFilter<"ProductReview"> | string;
    isVisible?: Prisma.BoolFilter<"ProductReview"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    lehenga?: Prisma.XOR<Prisma.LehengaNullableScalarRelationFilter, Prisma.LehengaWhereInput> | null;
    jewellery?: Prisma.XOR<Prisma.JewelleryNullableScalarRelationFilter, Prisma.JewelleryWhereInput> | null;
};
export type ProductReviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    isVisible?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    lehenga?: Prisma.LehengaOrderByWithRelationInput;
    jewellery?: Prisma.JewelleryOrderByWithRelationInput;
};
export type ProductReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    OR?: Prisma.ProductReviewWhereInput[];
    NOT?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    customerId?: Prisma.StringFilter<"ProductReview"> | string;
    itemType?: Prisma.EnumRentalItemTypeFilter<"ProductReview"> | $Enums.RentalItemType;
    lehengaId?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    jewelleryId?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    rating?: Prisma.IntFilter<"ProductReview"> | number;
    comment?: Prisma.StringFilter<"ProductReview"> | string;
    isVisible?: Prisma.BoolFilter<"ProductReview"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    lehenga?: Prisma.XOR<Prisma.LehengaNullableScalarRelationFilter, Prisma.LehengaWhereInput> | null;
    jewellery?: Prisma.XOR<Prisma.JewelleryNullableScalarRelationFilter, Prisma.JewelleryWhereInput> | null;
}, "id">;
export type ProductReviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    isVisible?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductReviewCountOrderByAggregateInput;
    _avg?: Prisma.ProductReviewAvgOrderByAggregateInput;
    _max?: Prisma.ProductReviewMaxOrderByAggregateInput;
    _min?: Prisma.ProductReviewMinOrderByAggregateInput;
    _sum?: Prisma.ProductReviewSumOrderByAggregateInput;
};
export type ProductReviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductReviewScalarWhereWithAggregatesInput | Prisma.ProductReviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductReviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductReviewScalarWhereWithAggregatesInput | Prisma.ProductReviewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProductReview"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"ProductReview"> | string;
    itemType?: Prisma.EnumRentalItemTypeWithAggregatesFilter<"ProductReview"> | $Enums.RentalItemType;
    lehengaId?: Prisma.StringNullableWithAggregatesFilter<"ProductReview"> | string | null;
    jewelleryId?: Prisma.StringNullableWithAggregatesFilter<"ProductReview"> | string | null;
    rating?: Prisma.IntWithAggregatesFilter<"ProductReview"> | number;
    comment?: Prisma.StringWithAggregatesFilter<"ProductReview"> | string;
    isVisible?: Prisma.BoolWithAggregatesFilter<"ProductReview"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProductReview"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProductReview"> | Date | string;
};
export type ProductReviewCreateInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReviewsInput;
    lehenga?: Prisma.LehengaCreateNestedOneWithoutReviewsInput;
    jewellery?: Prisma.JewelleryCreateNestedOneWithoutReviewsInput;
};
export type ProductReviewUncheckedCreateInput = {
    id?: string;
    customerId: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    jewelleryId?: string | null;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductReviewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReviewsNestedInput;
    lehenga?: Prisma.LehengaUpdateOneWithoutReviewsNestedInput;
    jewellery?: Prisma.JewelleryUpdateOneWithoutReviewsNestedInput;
};
export type ProductReviewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewCreateManyInput = {
    id?: string;
    customerId: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    jewelleryId?: string | null;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductReviewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewListRelationFilter = {
    every?: Prisma.ProductReviewWhereInput;
    some?: Prisma.ProductReviewWhereInput;
    none?: Prisma.ProductReviewWhereInput;
};
export type ProductReviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductReviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    isVisible?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductReviewAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type ProductReviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    isVisible?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductReviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    itemType?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    isVisible?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductReviewSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type ProductReviewCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput> | Prisma.ProductReviewCreateWithoutCustomerInput[] | Prisma.ProductReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutCustomerInput | Prisma.ProductReviewCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ProductReviewCreateManyCustomerInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput> | Prisma.ProductReviewCreateWithoutCustomerInput[] | Prisma.ProductReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutCustomerInput | Prisma.ProductReviewCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ProductReviewCreateManyCustomerInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput> | Prisma.ProductReviewCreateWithoutCustomerInput[] | Prisma.ProductReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutCustomerInput | Prisma.ProductReviewCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ProductReviewCreateManyCustomerInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutCustomerInput | Prisma.ProductReviewUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput> | Prisma.ProductReviewCreateWithoutCustomerInput[] | Prisma.ProductReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutCustomerInput | Prisma.ProductReviewCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ProductReviewCreateManyCustomerInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutCustomerInput | Prisma.ProductReviewUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewCreateNestedManyWithoutLehengaInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutLehengaInput, Prisma.ProductReviewUncheckedCreateWithoutLehengaInput> | Prisma.ProductReviewCreateWithoutLehengaInput[] | Prisma.ProductReviewUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutLehengaInput | Prisma.ProductReviewCreateOrConnectWithoutLehengaInput[];
    createMany?: Prisma.ProductReviewCreateManyLehengaInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUncheckedCreateNestedManyWithoutLehengaInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutLehengaInput, Prisma.ProductReviewUncheckedCreateWithoutLehengaInput> | Prisma.ProductReviewCreateWithoutLehengaInput[] | Prisma.ProductReviewUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutLehengaInput | Prisma.ProductReviewCreateOrConnectWithoutLehengaInput[];
    createMany?: Prisma.ProductReviewCreateManyLehengaInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUpdateManyWithoutLehengaNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutLehengaInput, Prisma.ProductReviewUncheckedCreateWithoutLehengaInput> | Prisma.ProductReviewCreateWithoutLehengaInput[] | Prisma.ProductReviewUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutLehengaInput | Prisma.ProductReviewCreateOrConnectWithoutLehengaInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutLehengaInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutLehengaInput[];
    createMany?: Prisma.ProductReviewCreateManyLehengaInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutLehengaInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutLehengaInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutLehengaInput | Prisma.ProductReviewUpdateManyWithWhereWithoutLehengaInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewUncheckedUpdateManyWithoutLehengaNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutLehengaInput, Prisma.ProductReviewUncheckedCreateWithoutLehengaInput> | Prisma.ProductReviewCreateWithoutLehengaInput[] | Prisma.ProductReviewUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutLehengaInput | Prisma.ProductReviewCreateOrConnectWithoutLehengaInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutLehengaInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutLehengaInput[];
    createMany?: Prisma.ProductReviewCreateManyLehengaInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutLehengaInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutLehengaInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutLehengaInput | Prisma.ProductReviewUpdateManyWithWhereWithoutLehengaInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewCreateNestedManyWithoutJewelleryInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutJewelleryInput, Prisma.ProductReviewUncheckedCreateWithoutJewelleryInput> | Prisma.ProductReviewCreateWithoutJewelleryInput[] | Prisma.ProductReviewUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutJewelleryInput | Prisma.ProductReviewCreateOrConnectWithoutJewelleryInput[];
    createMany?: Prisma.ProductReviewCreateManyJewelleryInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUncheckedCreateNestedManyWithoutJewelleryInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutJewelleryInput, Prisma.ProductReviewUncheckedCreateWithoutJewelleryInput> | Prisma.ProductReviewCreateWithoutJewelleryInput[] | Prisma.ProductReviewUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutJewelleryInput | Prisma.ProductReviewCreateOrConnectWithoutJewelleryInput[];
    createMany?: Prisma.ProductReviewCreateManyJewelleryInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUpdateManyWithoutJewelleryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutJewelleryInput, Prisma.ProductReviewUncheckedCreateWithoutJewelleryInput> | Prisma.ProductReviewCreateWithoutJewelleryInput[] | Prisma.ProductReviewUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutJewelleryInput | Prisma.ProductReviewCreateOrConnectWithoutJewelleryInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutJewelleryInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutJewelleryInput[];
    createMany?: Prisma.ProductReviewCreateManyJewelleryInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutJewelleryInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutJewelleryInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutJewelleryInput | Prisma.ProductReviewUpdateManyWithWhereWithoutJewelleryInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewUncheckedUpdateManyWithoutJewelleryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutJewelleryInput, Prisma.ProductReviewUncheckedCreateWithoutJewelleryInput> | Prisma.ProductReviewCreateWithoutJewelleryInput[] | Prisma.ProductReviewUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutJewelleryInput | Prisma.ProductReviewCreateOrConnectWithoutJewelleryInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutJewelleryInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutJewelleryInput[];
    createMany?: Prisma.ProductReviewCreateManyJewelleryInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutJewelleryInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutJewelleryInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutJewelleryInput | Prisma.ProductReviewUpdateManyWithWhereWithoutJewelleryInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewCreateWithoutCustomerInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lehenga?: Prisma.LehengaCreateNestedOneWithoutReviewsInput;
    jewellery?: Prisma.JewelleryCreateNestedOneWithoutReviewsInput;
};
export type ProductReviewUncheckedCreateWithoutCustomerInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    jewelleryId?: string | null;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductReviewCreateOrConnectWithoutCustomerInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput>;
};
export type ProductReviewCreateManyCustomerInputEnvelope = {
    data: Prisma.ProductReviewCreateManyCustomerInput | Prisma.ProductReviewCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type ProductReviewUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductReviewUpdateWithoutCustomerInput, Prisma.ProductReviewUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput>;
};
export type ProductReviewUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateWithoutCustomerInput, Prisma.ProductReviewUncheckedUpdateWithoutCustomerInput>;
};
export type ProductReviewUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.ProductReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyWithoutCustomerInput>;
};
export type ProductReviewScalarWhereInput = {
    AND?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
    OR?: Prisma.ProductReviewScalarWhereInput[];
    NOT?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
    id?: Prisma.StringFilter<"ProductReview"> | string;
    customerId?: Prisma.StringFilter<"ProductReview"> | string;
    itemType?: Prisma.EnumRentalItemTypeFilter<"ProductReview"> | $Enums.RentalItemType;
    lehengaId?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    jewelleryId?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    rating?: Prisma.IntFilter<"ProductReview"> | number;
    comment?: Prisma.StringFilter<"ProductReview"> | string;
    isVisible?: Prisma.BoolFilter<"ProductReview"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
};
export type ProductReviewCreateWithoutLehengaInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReviewsInput;
    jewellery?: Prisma.JewelleryCreateNestedOneWithoutReviewsInput;
};
export type ProductReviewUncheckedCreateWithoutLehengaInput = {
    id?: string;
    customerId: string;
    itemType: $Enums.RentalItemType;
    jewelleryId?: string | null;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductReviewCreateOrConnectWithoutLehengaInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutLehengaInput, Prisma.ProductReviewUncheckedCreateWithoutLehengaInput>;
};
export type ProductReviewCreateManyLehengaInputEnvelope = {
    data: Prisma.ProductReviewCreateManyLehengaInput | Prisma.ProductReviewCreateManyLehengaInput[];
    skipDuplicates?: boolean;
};
export type ProductReviewUpsertWithWhereUniqueWithoutLehengaInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductReviewUpdateWithoutLehengaInput, Prisma.ProductReviewUncheckedUpdateWithoutLehengaInput>;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutLehengaInput, Prisma.ProductReviewUncheckedCreateWithoutLehengaInput>;
};
export type ProductReviewUpdateWithWhereUniqueWithoutLehengaInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateWithoutLehengaInput, Prisma.ProductReviewUncheckedUpdateWithoutLehengaInput>;
};
export type ProductReviewUpdateManyWithWhereWithoutLehengaInput = {
    where: Prisma.ProductReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyWithoutLehengaInput>;
};
export type ProductReviewCreateWithoutJewelleryInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReviewsInput;
    lehenga?: Prisma.LehengaCreateNestedOneWithoutReviewsInput;
};
export type ProductReviewUncheckedCreateWithoutJewelleryInput = {
    id?: string;
    customerId: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductReviewCreateOrConnectWithoutJewelleryInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutJewelleryInput, Prisma.ProductReviewUncheckedCreateWithoutJewelleryInput>;
};
export type ProductReviewCreateManyJewelleryInputEnvelope = {
    data: Prisma.ProductReviewCreateManyJewelleryInput | Prisma.ProductReviewCreateManyJewelleryInput[];
    skipDuplicates?: boolean;
};
export type ProductReviewUpsertWithWhereUniqueWithoutJewelleryInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductReviewUpdateWithoutJewelleryInput, Prisma.ProductReviewUncheckedUpdateWithoutJewelleryInput>;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutJewelleryInput, Prisma.ProductReviewUncheckedCreateWithoutJewelleryInput>;
};
export type ProductReviewUpdateWithWhereUniqueWithoutJewelleryInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateWithoutJewelleryInput, Prisma.ProductReviewUncheckedUpdateWithoutJewelleryInput>;
};
export type ProductReviewUpdateManyWithWhereWithoutJewelleryInput = {
    where: Prisma.ProductReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyWithoutJewelleryInput>;
};
export type ProductReviewCreateManyCustomerInput = {
    id?: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    jewelleryId?: string | null;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductReviewUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lehenga?: Prisma.LehengaUpdateOneWithoutReviewsNestedInput;
    jewellery?: Prisma.JewelleryUpdateOneWithoutReviewsNestedInput;
};
export type ProductReviewUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewCreateManyLehengaInput = {
    id?: string;
    customerId: string;
    itemType: $Enums.RentalItemType;
    jewelleryId?: string | null;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductReviewUpdateWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReviewsNestedInput;
    jewellery?: Prisma.JewelleryUpdateOneWithoutReviewsNestedInput;
};
export type ProductReviewUncheckedUpdateWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    jewelleryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewCreateManyJewelleryInput = {
    id?: string;
    customerId: string;
    itemType: $Enums.RentalItemType;
    lehengaId?: string | null;
    rating: number;
    comment: string;
    isVisible?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductReviewUpdateWithoutJewelleryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReviewsNestedInput;
    lehenga?: Prisma.LehengaUpdateOneWithoutReviewsNestedInput;
};
export type ProductReviewUncheckedUpdateWithoutJewelleryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyWithoutJewelleryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemType?: Prisma.EnumRentalItemTypeFieldUpdateOperationsInput | $Enums.RentalItemType;
    lehengaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.StringFieldUpdateOperationsInput | string;
    isVisible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    itemType?: boolean;
    lehengaId?: boolean;
    jewelleryId?: boolean;
    rating?: boolean;
    comment?: boolean;
    isVisible?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.ProductReview$lehengaArgs<ExtArgs>;
    jewellery?: boolean | Prisma.ProductReview$jewelleryArgs<ExtArgs>;
}, ExtArgs["result"]["productReview"]>;
export type ProductReviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    itemType?: boolean;
    lehengaId?: boolean;
    jewelleryId?: boolean;
    rating?: boolean;
    comment?: boolean;
    isVisible?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.ProductReview$lehengaArgs<ExtArgs>;
    jewellery?: boolean | Prisma.ProductReview$jewelleryArgs<ExtArgs>;
}, ExtArgs["result"]["productReview"]>;
export type ProductReviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    itemType?: boolean;
    lehengaId?: boolean;
    jewelleryId?: boolean;
    rating?: boolean;
    comment?: boolean;
    isVisible?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.ProductReview$lehengaArgs<ExtArgs>;
    jewellery?: boolean | Prisma.ProductReview$jewelleryArgs<ExtArgs>;
}, ExtArgs["result"]["productReview"]>;
export type ProductReviewSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    itemType?: boolean;
    lehengaId?: boolean;
    jewelleryId?: boolean;
    rating?: boolean;
    comment?: boolean;
    isVisible?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductReviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "itemType" | "lehengaId" | "jewelleryId" | "rating" | "comment" | "isVisible" | "createdAt" | "updatedAt", ExtArgs["result"]["productReview"]>;
export type ProductReviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.ProductReview$lehengaArgs<ExtArgs>;
    jewellery?: boolean | Prisma.ProductReview$jewelleryArgs<ExtArgs>;
};
export type ProductReviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.ProductReview$lehengaArgs<ExtArgs>;
    jewellery?: boolean | Prisma.ProductReview$jewelleryArgs<ExtArgs>;
};
export type ProductReviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    lehenga?: boolean | Prisma.ProductReview$lehengaArgs<ExtArgs>;
    jewellery?: boolean | Prisma.ProductReview$jewelleryArgs<ExtArgs>;
};
export type $ProductReviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductReview";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        lehenga: Prisma.$LehengaPayload<ExtArgs> | null;
        jewellery: Prisma.$JewelleryPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        itemType: $Enums.RentalItemType;
        lehengaId: string | null;
        jewelleryId: string | null;
        rating: number;
        comment: string;
        isVisible: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["productReview"]>;
    composites: {};
};
export type ProductReviewGetPayload<S extends boolean | null | undefined | ProductReviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload, S>;
export type ProductReviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductReviewCountAggregateInputType | true;
};
export interface ProductReviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductReview'];
        meta: {
            name: 'ProductReview';
        };
    };
    /**
     * Find zero or one ProductReview that matches the filter.
     * @param {ProductReviewFindUniqueArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductReviewFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductReviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProductReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductReviewFindUniqueOrThrowArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductReviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindFirstArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductReviewFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductReviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindFirstOrThrowArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductReviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProductReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductReviews
     * const productReviews = await prisma.productReview.findMany()
     *
     * // Get first 10 ProductReviews
     * const productReviews = await prisma.productReview.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productReviewWithIdOnly = await prisma.productReview.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductReviewFindManyArgs>(args?: Prisma.SelectSubset<T, ProductReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProductReview.
     * @param {ProductReviewCreateArgs} args - Arguments to create a ProductReview.
     * @example
     * // Create one ProductReview
     * const ProductReview = await prisma.productReview.create({
     *   data: {
     *     // ... data to create a ProductReview
     *   }
     * })
     *
     */
    create<T extends ProductReviewCreateArgs>(args: Prisma.SelectSubset<T, ProductReviewCreateArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProductReviews.
     * @param {ProductReviewCreateManyArgs} args - Arguments to create many ProductReviews.
     * @example
     * // Create many ProductReviews
     * const productReview = await prisma.productReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductReviewCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProductReviews and returns the data saved in the database.
     * @param {ProductReviewCreateManyAndReturnArgs} args - Arguments to create many ProductReviews.
     * @example
     * // Create many ProductReviews
     * const productReview = await prisma.productReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProductReviews and only return the `id`
     * const productReviewWithIdOnly = await prisma.productReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductReviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProductReview.
     * @param {ProductReviewDeleteArgs} args - Arguments to delete one ProductReview.
     * @example
     * // Delete one ProductReview
     * const ProductReview = await prisma.productReview.delete({
     *   where: {
     *     // ... filter to delete one ProductReview
     *   }
     * })
     *
     */
    delete<T extends ProductReviewDeleteArgs>(args: Prisma.SelectSubset<T, ProductReviewDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProductReview.
     * @param {ProductReviewUpdateArgs} args - Arguments to update one ProductReview.
     * @example
     * // Update one ProductReview
     * const productReview = await prisma.productReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductReviewUpdateArgs>(args: Prisma.SelectSubset<T, ProductReviewUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProductReviews.
     * @param {ProductReviewDeleteManyArgs} args - Arguments to filter ProductReviews to delete.
     * @example
     * // Delete a few ProductReviews
     * const { count } = await prisma.productReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductReviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductReviews
     * const productReview = await prisma.productReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductReviewUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductReviews and returns the data updated in the database.
     * @param {ProductReviewUpdateManyAndReturnArgs} args - Arguments to update many ProductReviews.
     * @example
     * // Update many ProductReviews
     * const productReview = await prisma.productReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProductReviews and only return the `id`
     * const productReviewWithIdOnly = await prisma.productReview.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductReviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProductReview.
     * @param {ProductReviewUpsertArgs} args - Arguments to update or create a ProductReview.
     * @example
     * // Update or create a ProductReview
     * const productReview = await prisma.productReview.upsert({
     *   create: {
     *     // ... data to create a ProductReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductReview we want to update
     *   }
     * })
     */
    upsert<T extends ProductReviewUpsertArgs>(args: Prisma.SelectSubset<T, ProductReviewUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProductReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewCountArgs} args - Arguments to filter ProductReviews to count.
     * @example
     * // Count the number of ProductReviews
     * const count = await prisma.productReview.count({
     *   where: {
     *     // ... the filter for the ProductReviews we want to count
     *   }
     * })
    **/
    count<T extends ProductReviewCountArgs>(args?: Prisma.Subset<T, ProductReviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductReviewCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProductReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductReviewAggregateArgs>(args: Prisma.Subset<T, ProductReviewAggregateArgs>): Prisma.PrismaPromise<GetProductReviewAggregateType<T>>;
    /**
     * Group by ProductReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProductReviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductReviewGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductReviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProductReview model
     */
    readonly fields: ProductReviewFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProductReview.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProductReviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lehenga<T extends Prisma.ProductReview$lehengaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductReview$lehengaArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    jewellery<T extends Prisma.ProductReview$jewelleryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductReview$jewelleryArgs<ExtArgs>>): Prisma.Prisma__JewelleryClient<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProductReview model
 */
export interface ProductReviewFieldRefs {
    readonly id: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly customerId: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly itemType: Prisma.FieldRef<"ProductReview", 'RentalItemType'>;
    readonly lehengaId: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly jewelleryId: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly rating: Prisma.FieldRef<"ProductReview", 'Int'>;
    readonly comment: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly isVisible: Prisma.FieldRef<"ProductReview", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ProductReview", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProductReview", 'DateTime'>;
}
/**
 * ProductReview findUnique
 */
export type ProductReviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    /**
     * Filter, which ProductReview to fetch.
     */
    where: Prisma.ProductReviewWhereUniqueInput;
};
/**
 * ProductReview findUniqueOrThrow
 */
export type ProductReviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    /**
     * Filter, which ProductReview to fetch.
     */
    where: Prisma.ProductReviewWhereUniqueInput;
};
/**
 * ProductReview findFirst
 */
export type ProductReviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    /**
     * Filter, which ProductReview to fetch.
     */
    where?: Prisma.ProductReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductReviews.
     */
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductReviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductReviews.
     */
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
/**
 * ProductReview findFirstOrThrow
 */
export type ProductReviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    /**
     * Filter, which ProductReview to fetch.
     */
    where?: Prisma.ProductReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductReviews.
     */
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductReviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductReviews.
     */
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
/**
 * ProductReview findMany
 */
export type ProductReviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    /**
     * Filter, which ProductReviews to fetch.
     */
    where?: Prisma.ProductReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProductReviews.
     */
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductReviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductReviews.
     */
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
/**
 * ProductReview create
 */
export type ProductReviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProductReview.
     */
    data: Prisma.XOR<Prisma.ProductReviewCreateInput, Prisma.ProductReviewUncheckedCreateInput>;
};
/**
 * ProductReview createMany
 */
export type ProductReviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductReviews.
     */
    data: Prisma.ProductReviewCreateManyInput | Prisma.ProductReviewCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProductReview createManyAndReturn
 */
export type ProductReviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * The data used to create many ProductReviews.
     */
    data: Prisma.ProductReviewCreateManyInput | Prisma.ProductReviewCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductReview update
 */
export type ProductReviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProductReview.
     */
    data: Prisma.XOR<Prisma.ProductReviewUpdateInput, Prisma.ProductReviewUncheckedUpdateInput>;
    /**
     * Choose, which ProductReview to update.
     */
    where: Prisma.ProductReviewWhereUniqueInput;
};
/**
 * ProductReview updateMany
 */
export type ProductReviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductReviews.
     */
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyInput>;
    /**
     * Filter which ProductReviews to update
     */
    where?: Prisma.ProductReviewWhereInput;
    /**
     * Limit how many ProductReviews to update.
     */
    limit?: number;
};
/**
 * ProductReview updateManyAndReturn
 */
export type ProductReviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * The data used to update ProductReviews.
     */
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyInput>;
    /**
     * Filter which ProductReviews to update
     */
    where?: Prisma.ProductReviewWhereInput;
    /**
     * Limit how many ProductReviews to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductReview upsert
 */
export type ProductReviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProductReview to update in case it exists.
     */
    where: Prisma.ProductReviewWhereUniqueInput;
    /**
     * In case the ProductReview found by the `where` argument doesn't exist, create a new ProductReview with this data.
     */
    create: Prisma.XOR<Prisma.ProductReviewCreateInput, Prisma.ProductReviewUncheckedCreateInput>;
    /**
     * In case the ProductReview was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProductReviewUpdateInput, Prisma.ProductReviewUncheckedUpdateInput>;
};
/**
 * ProductReview delete
 */
export type ProductReviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    /**
     * Filter which ProductReview to delete.
     */
    where: Prisma.ProductReviewWhereUniqueInput;
};
/**
 * ProductReview deleteMany
 */
export type ProductReviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReviews to delete
     */
    where?: Prisma.ProductReviewWhereInput;
    /**
     * Limit how many ProductReviews to delete.
     */
    limit?: number;
};
/**
 * ProductReview.lehenga
 */
export type ProductReview$lehengaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ProductReview.jewellery
 */
export type ProductReview$jewelleryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ProductReview without action
 */
export type ProductReviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
};
//# sourceMappingURL=ProductReview.d.ts.map