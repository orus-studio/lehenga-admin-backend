import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model JewelleryImage
 *
 */
export type JewelleryImageModel = runtime.Types.Result.DefaultSelection<Prisma.$JewelleryImagePayload>;
export type AggregateJewelleryImage = {
    _count: JewelleryImageCountAggregateOutputType | null;
    _avg: JewelleryImageAvgAggregateOutputType | null;
    _sum: JewelleryImageSumAggregateOutputType | null;
    _min: JewelleryImageMinAggregateOutputType | null;
    _max: JewelleryImageMaxAggregateOutputType | null;
};
export type JewelleryImageAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type JewelleryImageSumAggregateOutputType = {
    sortOrder: number | null;
};
export type JewelleryImageMinAggregateOutputType = {
    id: string | null;
    jewelleryId: string | null;
    imageUrl: string | null;
    altText: string | null;
    isPrimary: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type JewelleryImageMaxAggregateOutputType = {
    id: string | null;
    jewelleryId: string | null;
    imageUrl: string | null;
    altText: string | null;
    isPrimary: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type JewelleryImageCountAggregateOutputType = {
    id: number;
    jewelleryId: number;
    imageUrl: number;
    altText: number;
    isPrimary: number;
    sortOrder: number;
    createdAt: number;
    _all: number;
};
export type JewelleryImageAvgAggregateInputType = {
    sortOrder?: true;
};
export type JewelleryImageSumAggregateInputType = {
    sortOrder?: true;
};
export type JewelleryImageMinAggregateInputType = {
    id?: true;
    jewelleryId?: true;
    imageUrl?: true;
    altText?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type JewelleryImageMaxAggregateInputType = {
    id?: true;
    jewelleryId?: true;
    imageUrl?: true;
    altText?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type JewelleryImageCountAggregateInputType = {
    id?: true;
    jewelleryId?: true;
    imageUrl?: true;
    altText?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
    _all?: true;
};
export type JewelleryImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JewelleryImage to aggregate.
     */
    where?: Prisma.JewelleryImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JewelleryImages to fetch.
     */
    orderBy?: Prisma.JewelleryImageOrderByWithRelationInput | Prisma.JewelleryImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.JewelleryImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JewelleryImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JewelleryImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JewelleryImages
    **/
    _count?: true | JewelleryImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: JewelleryImageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: JewelleryImageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JewelleryImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JewelleryImageMaxAggregateInputType;
};
export type GetJewelleryImageAggregateType<T extends JewelleryImageAggregateArgs> = {
    [P in keyof T & keyof AggregateJewelleryImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJewelleryImage[P]> : Prisma.GetScalarType<T[P], AggregateJewelleryImage[P]>;
};
export type JewelleryImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JewelleryImageWhereInput;
    orderBy?: Prisma.JewelleryImageOrderByWithAggregationInput | Prisma.JewelleryImageOrderByWithAggregationInput[];
    by: Prisma.JewelleryImageScalarFieldEnum[] | Prisma.JewelleryImageScalarFieldEnum;
    having?: Prisma.JewelleryImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JewelleryImageCountAggregateInputType | true;
    _avg?: JewelleryImageAvgAggregateInputType;
    _sum?: JewelleryImageSumAggregateInputType;
    _min?: JewelleryImageMinAggregateInputType;
    _max?: JewelleryImageMaxAggregateInputType;
};
export type JewelleryImageGroupByOutputType = {
    id: string;
    jewelleryId: string;
    imageUrl: string;
    altText: string | null;
    isPrimary: boolean;
    sortOrder: number;
    createdAt: Date;
    _count: JewelleryImageCountAggregateOutputType | null;
    _avg: JewelleryImageAvgAggregateOutputType | null;
    _sum: JewelleryImageSumAggregateOutputType | null;
    _min: JewelleryImageMinAggregateOutputType | null;
    _max: JewelleryImageMaxAggregateOutputType | null;
};
export type GetJewelleryImageGroupByPayload<T extends JewelleryImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JewelleryImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JewelleryImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JewelleryImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JewelleryImageGroupByOutputType[P]>;
}>>;
export type JewelleryImageWhereInput = {
    AND?: Prisma.JewelleryImageWhereInput | Prisma.JewelleryImageWhereInput[];
    OR?: Prisma.JewelleryImageWhereInput[];
    NOT?: Prisma.JewelleryImageWhereInput | Prisma.JewelleryImageWhereInput[];
    id?: Prisma.StringFilter<"JewelleryImage"> | string;
    jewelleryId?: Prisma.StringFilter<"JewelleryImage"> | string;
    imageUrl?: Prisma.StringFilter<"JewelleryImage"> | string;
    altText?: Prisma.StringNullableFilter<"JewelleryImage"> | string | null;
    isPrimary?: Prisma.BoolFilter<"JewelleryImage"> | boolean;
    sortOrder?: Prisma.IntFilter<"JewelleryImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"JewelleryImage"> | Date | string;
    jewellery?: Prisma.XOR<Prisma.JewelleryScalarRelationFilter, Prisma.JewelleryWhereInput>;
};
export type JewelleryImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    altText?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    jewellery?: Prisma.JewelleryOrderByWithRelationInput;
};
export type JewelleryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.JewelleryImageWhereInput | Prisma.JewelleryImageWhereInput[];
    OR?: Prisma.JewelleryImageWhereInput[];
    NOT?: Prisma.JewelleryImageWhereInput | Prisma.JewelleryImageWhereInput[];
    jewelleryId?: Prisma.StringFilter<"JewelleryImage"> | string;
    imageUrl?: Prisma.StringFilter<"JewelleryImage"> | string;
    altText?: Prisma.StringNullableFilter<"JewelleryImage"> | string | null;
    isPrimary?: Prisma.BoolFilter<"JewelleryImage"> | boolean;
    sortOrder?: Prisma.IntFilter<"JewelleryImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"JewelleryImage"> | Date | string;
    jewellery?: Prisma.XOR<Prisma.JewelleryScalarRelationFilter, Prisma.JewelleryWhereInput>;
}, "id">;
export type JewelleryImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    altText?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.JewelleryImageCountOrderByAggregateInput;
    _avg?: Prisma.JewelleryImageAvgOrderByAggregateInput;
    _max?: Prisma.JewelleryImageMaxOrderByAggregateInput;
    _min?: Prisma.JewelleryImageMinOrderByAggregateInput;
    _sum?: Prisma.JewelleryImageSumOrderByAggregateInput;
};
export type JewelleryImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.JewelleryImageScalarWhereWithAggregatesInput | Prisma.JewelleryImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.JewelleryImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JewelleryImageScalarWhereWithAggregatesInput | Prisma.JewelleryImageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"JewelleryImage"> | string;
    jewelleryId?: Prisma.StringWithAggregatesFilter<"JewelleryImage"> | string;
    imageUrl?: Prisma.StringWithAggregatesFilter<"JewelleryImage"> | string;
    altText?: Prisma.StringNullableWithAggregatesFilter<"JewelleryImage"> | string | null;
    isPrimary?: Prisma.BoolWithAggregatesFilter<"JewelleryImage"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"JewelleryImage"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"JewelleryImage"> | Date | string;
};
export type JewelleryImageCreateInput = {
    id?: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    jewellery: Prisma.JewelleryCreateNestedOneWithoutImagesInput;
};
export type JewelleryImageUncheckedCreateInput = {
    id?: string;
    jewelleryId: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type JewelleryImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jewellery?: Prisma.JewelleryUpdateOneRequiredWithoutImagesNestedInput;
};
export type JewelleryImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jewelleryId?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JewelleryImageCreateManyInput = {
    id?: string;
    jewelleryId: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type JewelleryImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JewelleryImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jewelleryId?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JewelleryImageListRelationFilter = {
    every?: Prisma.JewelleryImageWhereInput;
    some?: Prisma.JewelleryImageWhereInput;
    none?: Prisma.JewelleryImageWhereInput;
};
export type JewelleryImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JewelleryImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JewelleryImageAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type JewelleryImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JewelleryImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jewelleryId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JewelleryImageSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type JewelleryImageCreateNestedManyWithoutJewelleryInput = {
    create?: Prisma.XOR<Prisma.JewelleryImageCreateWithoutJewelleryInput, Prisma.JewelleryImageUncheckedCreateWithoutJewelleryInput> | Prisma.JewelleryImageCreateWithoutJewelleryInput[] | Prisma.JewelleryImageUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.JewelleryImageCreateOrConnectWithoutJewelleryInput | Prisma.JewelleryImageCreateOrConnectWithoutJewelleryInput[];
    createMany?: Prisma.JewelleryImageCreateManyJewelleryInputEnvelope;
    connect?: Prisma.JewelleryImageWhereUniqueInput | Prisma.JewelleryImageWhereUniqueInput[];
};
export type JewelleryImageUncheckedCreateNestedManyWithoutJewelleryInput = {
    create?: Prisma.XOR<Prisma.JewelleryImageCreateWithoutJewelleryInput, Prisma.JewelleryImageUncheckedCreateWithoutJewelleryInput> | Prisma.JewelleryImageCreateWithoutJewelleryInput[] | Prisma.JewelleryImageUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.JewelleryImageCreateOrConnectWithoutJewelleryInput | Prisma.JewelleryImageCreateOrConnectWithoutJewelleryInput[];
    createMany?: Prisma.JewelleryImageCreateManyJewelleryInputEnvelope;
    connect?: Prisma.JewelleryImageWhereUniqueInput | Prisma.JewelleryImageWhereUniqueInput[];
};
export type JewelleryImageUpdateManyWithoutJewelleryNestedInput = {
    create?: Prisma.XOR<Prisma.JewelleryImageCreateWithoutJewelleryInput, Prisma.JewelleryImageUncheckedCreateWithoutJewelleryInput> | Prisma.JewelleryImageCreateWithoutJewelleryInput[] | Prisma.JewelleryImageUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.JewelleryImageCreateOrConnectWithoutJewelleryInput | Prisma.JewelleryImageCreateOrConnectWithoutJewelleryInput[];
    upsert?: Prisma.JewelleryImageUpsertWithWhereUniqueWithoutJewelleryInput | Prisma.JewelleryImageUpsertWithWhereUniqueWithoutJewelleryInput[];
    createMany?: Prisma.JewelleryImageCreateManyJewelleryInputEnvelope;
    set?: Prisma.JewelleryImageWhereUniqueInput | Prisma.JewelleryImageWhereUniqueInput[];
    disconnect?: Prisma.JewelleryImageWhereUniqueInput | Prisma.JewelleryImageWhereUniqueInput[];
    delete?: Prisma.JewelleryImageWhereUniqueInput | Prisma.JewelleryImageWhereUniqueInput[];
    connect?: Prisma.JewelleryImageWhereUniqueInput | Prisma.JewelleryImageWhereUniqueInput[];
    update?: Prisma.JewelleryImageUpdateWithWhereUniqueWithoutJewelleryInput | Prisma.JewelleryImageUpdateWithWhereUniqueWithoutJewelleryInput[];
    updateMany?: Prisma.JewelleryImageUpdateManyWithWhereWithoutJewelleryInput | Prisma.JewelleryImageUpdateManyWithWhereWithoutJewelleryInput[];
    deleteMany?: Prisma.JewelleryImageScalarWhereInput | Prisma.JewelleryImageScalarWhereInput[];
};
export type JewelleryImageUncheckedUpdateManyWithoutJewelleryNestedInput = {
    create?: Prisma.XOR<Prisma.JewelleryImageCreateWithoutJewelleryInput, Prisma.JewelleryImageUncheckedCreateWithoutJewelleryInput> | Prisma.JewelleryImageCreateWithoutJewelleryInput[] | Prisma.JewelleryImageUncheckedCreateWithoutJewelleryInput[];
    connectOrCreate?: Prisma.JewelleryImageCreateOrConnectWithoutJewelleryInput | Prisma.JewelleryImageCreateOrConnectWithoutJewelleryInput[];
    upsert?: Prisma.JewelleryImageUpsertWithWhereUniqueWithoutJewelleryInput | Prisma.JewelleryImageUpsertWithWhereUniqueWithoutJewelleryInput[];
    createMany?: Prisma.JewelleryImageCreateManyJewelleryInputEnvelope;
    set?: Prisma.JewelleryImageWhereUniqueInput | Prisma.JewelleryImageWhereUniqueInput[];
    disconnect?: Prisma.JewelleryImageWhereUniqueInput | Prisma.JewelleryImageWhereUniqueInput[];
    delete?: Prisma.JewelleryImageWhereUniqueInput | Prisma.JewelleryImageWhereUniqueInput[];
    connect?: Prisma.JewelleryImageWhereUniqueInput | Prisma.JewelleryImageWhereUniqueInput[];
    update?: Prisma.JewelleryImageUpdateWithWhereUniqueWithoutJewelleryInput | Prisma.JewelleryImageUpdateWithWhereUniqueWithoutJewelleryInput[];
    updateMany?: Prisma.JewelleryImageUpdateManyWithWhereWithoutJewelleryInput | Prisma.JewelleryImageUpdateManyWithWhereWithoutJewelleryInput[];
    deleteMany?: Prisma.JewelleryImageScalarWhereInput | Prisma.JewelleryImageScalarWhereInput[];
};
export type JewelleryImageCreateWithoutJewelleryInput = {
    id?: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type JewelleryImageUncheckedCreateWithoutJewelleryInput = {
    id?: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type JewelleryImageCreateOrConnectWithoutJewelleryInput = {
    where: Prisma.JewelleryImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.JewelleryImageCreateWithoutJewelleryInput, Prisma.JewelleryImageUncheckedCreateWithoutJewelleryInput>;
};
export type JewelleryImageCreateManyJewelleryInputEnvelope = {
    data: Prisma.JewelleryImageCreateManyJewelleryInput | Prisma.JewelleryImageCreateManyJewelleryInput[];
    skipDuplicates?: boolean;
};
export type JewelleryImageUpsertWithWhereUniqueWithoutJewelleryInput = {
    where: Prisma.JewelleryImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.JewelleryImageUpdateWithoutJewelleryInput, Prisma.JewelleryImageUncheckedUpdateWithoutJewelleryInput>;
    create: Prisma.XOR<Prisma.JewelleryImageCreateWithoutJewelleryInput, Prisma.JewelleryImageUncheckedCreateWithoutJewelleryInput>;
};
export type JewelleryImageUpdateWithWhereUniqueWithoutJewelleryInput = {
    where: Prisma.JewelleryImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.JewelleryImageUpdateWithoutJewelleryInput, Prisma.JewelleryImageUncheckedUpdateWithoutJewelleryInput>;
};
export type JewelleryImageUpdateManyWithWhereWithoutJewelleryInput = {
    where: Prisma.JewelleryImageScalarWhereInput;
    data: Prisma.XOR<Prisma.JewelleryImageUpdateManyMutationInput, Prisma.JewelleryImageUncheckedUpdateManyWithoutJewelleryInput>;
};
export type JewelleryImageScalarWhereInput = {
    AND?: Prisma.JewelleryImageScalarWhereInput | Prisma.JewelleryImageScalarWhereInput[];
    OR?: Prisma.JewelleryImageScalarWhereInput[];
    NOT?: Prisma.JewelleryImageScalarWhereInput | Prisma.JewelleryImageScalarWhereInput[];
    id?: Prisma.StringFilter<"JewelleryImage"> | string;
    jewelleryId?: Prisma.StringFilter<"JewelleryImage"> | string;
    imageUrl?: Prisma.StringFilter<"JewelleryImage"> | string;
    altText?: Prisma.StringNullableFilter<"JewelleryImage"> | string | null;
    isPrimary?: Prisma.BoolFilter<"JewelleryImage"> | boolean;
    sortOrder?: Prisma.IntFilter<"JewelleryImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"JewelleryImage"> | Date | string;
};
export type JewelleryImageCreateManyJewelleryInput = {
    id?: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type JewelleryImageUpdateWithoutJewelleryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JewelleryImageUncheckedUpdateWithoutJewelleryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JewelleryImageUncheckedUpdateManyWithoutJewelleryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JewelleryImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jewelleryId?: boolean;
    imageUrl?: boolean;
    altText?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    jewellery?: boolean | Prisma.JewelleryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jewelleryImage"]>;
export type JewelleryImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jewelleryId?: boolean;
    imageUrl?: boolean;
    altText?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    jewellery?: boolean | Prisma.JewelleryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jewelleryImage"]>;
export type JewelleryImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jewelleryId?: boolean;
    imageUrl?: boolean;
    altText?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    jewellery?: boolean | Prisma.JewelleryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jewelleryImage"]>;
export type JewelleryImageSelectScalar = {
    id?: boolean;
    jewelleryId?: boolean;
    imageUrl?: boolean;
    altText?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
};
export type JewelleryImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "jewelleryId" | "imageUrl" | "altText" | "isPrimary" | "sortOrder" | "createdAt", ExtArgs["result"]["jewelleryImage"]>;
export type JewelleryImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jewellery?: boolean | Prisma.JewelleryDefaultArgs<ExtArgs>;
};
export type JewelleryImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jewellery?: boolean | Prisma.JewelleryDefaultArgs<ExtArgs>;
};
export type JewelleryImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jewellery?: boolean | Prisma.JewelleryDefaultArgs<ExtArgs>;
};
export type $JewelleryImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JewelleryImage";
    objects: {
        jewellery: Prisma.$JewelleryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        jewelleryId: string;
        imageUrl: string;
        altText: string | null;
        isPrimary: boolean;
        sortOrder: number;
        createdAt: Date;
    }, ExtArgs["result"]["jewelleryImage"]>;
    composites: {};
};
export type JewelleryImageGetPayload<S extends boolean | null | undefined | JewelleryImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload, S>;
export type JewelleryImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JewelleryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JewelleryImageCountAggregateInputType | true;
};
export interface JewelleryImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JewelleryImage'];
        meta: {
            name: 'JewelleryImage';
        };
    };
    /**
     * Find zero or one JewelleryImage that matches the filter.
     * @param {JewelleryImageFindUniqueArgs} args - Arguments to find a JewelleryImage
     * @example
     * // Get one JewelleryImage
     * const jewelleryImage = await prisma.jewelleryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JewelleryImageFindUniqueArgs>(args: Prisma.SelectSubset<T, JewelleryImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JewelleryImageClient<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one JewelleryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JewelleryImageFindUniqueOrThrowArgs} args - Arguments to find a JewelleryImage
     * @example
     * // Get one JewelleryImage
     * const jewelleryImage = await prisma.jewelleryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JewelleryImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JewelleryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JewelleryImageClient<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JewelleryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryImageFindFirstArgs} args - Arguments to find a JewelleryImage
     * @example
     * // Get one JewelleryImage
     * const jewelleryImage = await prisma.jewelleryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JewelleryImageFindFirstArgs>(args?: Prisma.SelectSubset<T, JewelleryImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__JewelleryImageClient<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first JewelleryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryImageFindFirstOrThrowArgs} args - Arguments to find a JewelleryImage
     * @example
     * // Get one JewelleryImage
     * const jewelleryImage = await prisma.jewelleryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JewelleryImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JewelleryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JewelleryImageClient<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more JewelleryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JewelleryImages
     * const jewelleryImages = await prisma.jewelleryImage.findMany()
     *
     * // Get first 10 JewelleryImages
     * const jewelleryImages = await prisma.jewelleryImage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jewelleryImageWithIdOnly = await prisma.jewelleryImage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JewelleryImageFindManyArgs>(args?: Prisma.SelectSubset<T, JewelleryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a JewelleryImage.
     * @param {JewelleryImageCreateArgs} args - Arguments to create a JewelleryImage.
     * @example
     * // Create one JewelleryImage
     * const JewelleryImage = await prisma.jewelleryImage.create({
     *   data: {
     *     // ... data to create a JewelleryImage
     *   }
     * })
     *
     */
    create<T extends JewelleryImageCreateArgs>(args: Prisma.SelectSubset<T, JewelleryImageCreateArgs<ExtArgs>>): Prisma.Prisma__JewelleryImageClient<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many JewelleryImages.
     * @param {JewelleryImageCreateManyArgs} args - Arguments to create many JewelleryImages.
     * @example
     * // Create many JewelleryImages
     * const jewelleryImage = await prisma.jewelleryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JewelleryImageCreateManyArgs>(args?: Prisma.SelectSubset<T, JewelleryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many JewelleryImages and returns the data saved in the database.
     * @param {JewelleryImageCreateManyAndReturnArgs} args - Arguments to create many JewelleryImages.
     * @example
     * // Create many JewelleryImages
     * const jewelleryImage = await prisma.jewelleryImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JewelleryImages and only return the `id`
     * const jewelleryImageWithIdOnly = await prisma.jewelleryImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JewelleryImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JewelleryImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a JewelleryImage.
     * @param {JewelleryImageDeleteArgs} args - Arguments to delete one JewelleryImage.
     * @example
     * // Delete one JewelleryImage
     * const JewelleryImage = await prisma.jewelleryImage.delete({
     *   where: {
     *     // ... filter to delete one JewelleryImage
     *   }
     * })
     *
     */
    delete<T extends JewelleryImageDeleteArgs>(args: Prisma.SelectSubset<T, JewelleryImageDeleteArgs<ExtArgs>>): Prisma.Prisma__JewelleryImageClient<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one JewelleryImage.
     * @param {JewelleryImageUpdateArgs} args - Arguments to update one JewelleryImage.
     * @example
     * // Update one JewelleryImage
     * const jewelleryImage = await prisma.jewelleryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JewelleryImageUpdateArgs>(args: Prisma.SelectSubset<T, JewelleryImageUpdateArgs<ExtArgs>>): Prisma.Prisma__JewelleryImageClient<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more JewelleryImages.
     * @param {JewelleryImageDeleteManyArgs} args - Arguments to filter JewelleryImages to delete.
     * @example
     * // Delete a few JewelleryImages
     * const { count } = await prisma.jewelleryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JewelleryImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, JewelleryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JewelleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JewelleryImages
     * const jewelleryImage = await prisma.jewelleryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JewelleryImageUpdateManyArgs>(args: Prisma.SelectSubset<T, JewelleryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more JewelleryImages and returns the data updated in the database.
     * @param {JewelleryImageUpdateManyAndReturnArgs} args - Arguments to update many JewelleryImages.
     * @example
     * // Update many JewelleryImages
     * const jewelleryImage = await prisma.jewelleryImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more JewelleryImages and only return the `id`
     * const jewelleryImageWithIdOnly = await prisma.jewelleryImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends JewelleryImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JewelleryImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one JewelleryImage.
     * @param {JewelleryImageUpsertArgs} args - Arguments to update or create a JewelleryImage.
     * @example
     * // Update or create a JewelleryImage
     * const jewelleryImage = await prisma.jewelleryImage.upsert({
     *   create: {
     *     // ... data to create a JewelleryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JewelleryImage we want to update
     *   }
     * })
     */
    upsert<T extends JewelleryImageUpsertArgs>(args: Prisma.SelectSubset<T, JewelleryImageUpsertArgs<ExtArgs>>): Prisma.Prisma__JewelleryImageClient<runtime.Types.Result.GetResult<Prisma.$JewelleryImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of JewelleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryImageCountArgs} args - Arguments to filter JewelleryImages to count.
     * @example
     * // Count the number of JewelleryImages
     * const count = await prisma.jewelleryImage.count({
     *   where: {
     *     // ... the filter for the JewelleryImages we want to count
     *   }
     * })
    **/
    count<T extends JewelleryImageCountArgs>(args?: Prisma.Subset<T, JewelleryImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JewelleryImageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a JewelleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JewelleryImageAggregateArgs>(args: Prisma.Subset<T, JewelleryImageAggregateArgs>): Prisma.PrismaPromise<GetJewelleryImageAggregateType<T>>;
    /**
     * Group by JewelleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JewelleryImageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends JewelleryImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JewelleryImageGroupByArgs['orderBy'];
    } : {
        orderBy?: JewelleryImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JewelleryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJewelleryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the JewelleryImage model
     */
    readonly fields: JewelleryImageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for JewelleryImage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__JewelleryImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    jewellery<T extends Prisma.JewelleryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JewelleryDefaultArgs<ExtArgs>>): Prisma.Prisma__JewelleryClient<runtime.Types.Result.GetResult<Prisma.$JewelleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the JewelleryImage model
 */
export interface JewelleryImageFieldRefs {
    readonly id: Prisma.FieldRef<"JewelleryImage", 'String'>;
    readonly jewelleryId: Prisma.FieldRef<"JewelleryImage", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"JewelleryImage", 'String'>;
    readonly altText: Prisma.FieldRef<"JewelleryImage", 'String'>;
    readonly isPrimary: Prisma.FieldRef<"JewelleryImage", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"JewelleryImage", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"JewelleryImage", 'DateTime'>;
}
/**
 * JewelleryImage findUnique
 */
export type JewelleryImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JewelleryImage to fetch.
     */
    where: Prisma.JewelleryImageWhereUniqueInput;
};
/**
 * JewelleryImage findUniqueOrThrow
 */
export type JewelleryImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JewelleryImage to fetch.
     */
    where: Prisma.JewelleryImageWhereUniqueInput;
};
/**
 * JewelleryImage findFirst
 */
export type JewelleryImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JewelleryImage to fetch.
     */
    where?: Prisma.JewelleryImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JewelleryImages to fetch.
     */
    orderBy?: Prisma.JewelleryImageOrderByWithRelationInput | Prisma.JewelleryImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JewelleryImages.
     */
    cursor?: Prisma.JewelleryImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JewelleryImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JewelleryImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JewelleryImages.
     */
    distinct?: Prisma.JewelleryImageScalarFieldEnum | Prisma.JewelleryImageScalarFieldEnum[];
};
/**
 * JewelleryImage findFirstOrThrow
 */
export type JewelleryImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JewelleryImage to fetch.
     */
    where?: Prisma.JewelleryImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JewelleryImages to fetch.
     */
    orderBy?: Prisma.JewelleryImageOrderByWithRelationInput | Prisma.JewelleryImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JewelleryImages.
     */
    cursor?: Prisma.JewelleryImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JewelleryImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JewelleryImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JewelleryImages.
     */
    distinct?: Prisma.JewelleryImageScalarFieldEnum | Prisma.JewelleryImageScalarFieldEnum[];
};
/**
 * JewelleryImage findMany
 */
export type JewelleryImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which JewelleryImages to fetch.
     */
    where?: Prisma.JewelleryImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JewelleryImages to fetch.
     */
    orderBy?: Prisma.JewelleryImageOrderByWithRelationInput | Prisma.JewelleryImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JewelleryImages.
     */
    cursor?: Prisma.JewelleryImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JewelleryImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JewelleryImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JewelleryImages.
     */
    distinct?: Prisma.JewelleryImageScalarFieldEnum | Prisma.JewelleryImageScalarFieldEnum[];
};
/**
 * JewelleryImage create
 */
export type JewelleryImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a JewelleryImage.
     */
    data: Prisma.XOR<Prisma.JewelleryImageCreateInput, Prisma.JewelleryImageUncheckedCreateInput>;
};
/**
 * JewelleryImage createMany
 */
export type JewelleryImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many JewelleryImages.
     */
    data: Prisma.JewelleryImageCreateManyInput | Prisma.JewelleryImageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * JewelleryImage createManyAndReturn
 */
export type JewelleryImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JewelleryImage
     */
    select?: Prisma.JewelleryImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JewelleryImage
     */
    omit?: Prisma.JewelleryImageOmit<ExtArgs> | null;
    /**
     * The data used to create many JewelleryImages.
     */
    data: Prisma.JewelleryImageCreateManyInput | Prisma.JewelleryImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * JewelleryImage update
 */
export type JewelleryImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a JewelleryImage.
     */
    data: Prisma.XOR<Prisma.JewelleryImageUpdateInput, Prisma.JewelleryImageUncheckedUpdateInput>;
    /**
     * Choose, which JewelleryImage to update.
     */
    where: Prisma.JewelleryImageWhereUniqueInput;
};
/**
 * JewelleryImage updateMany
 */
export type JewelleryImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update JewelleryImages.
     */
    data: Prisma.XOR<Prisma.JewelleryImageUpdateManyMutationInput, Prisma.JewelleryImageUncheckedUpdateManyInput>;
    /**
     * Filter which JewelleryImages to update
     */
    where?: Prisma.JewelleryImageWhereInput;
    /**
     * Limit how many JewelleryImages to update.
     */
    limit?: number;
};
/**
 * JewelleryImage updateManyAndReturn
 */
export type JewelleryImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JewelleryImage
     */
    select?: Prisma.JewelleryImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JewelleryImage
     */
    omit?: Prisma.JewelleryImageOmit<ExtArgs> | null;
    /**
     * The data used to update JewelleryImages.
     */
    data: Prisma.XOR<Prisma.JewelleryImageUpdateManyMutationInput, Prisma.JewelleryImageUncheckedUpdateManyInput>;
    /**
     * Filter which JewelleryImages to update
     */
    where?: Prisma.JewelleryImageWhereInput;
    /**
     * Limit how many JewelleryImages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JewelleryImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * JewelleryImage upsert
 */
export type JewelleryImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the JewelleryImage to update in case it exists.
     */
    where: Prisma.JewelleryImageWhereUniqueInput;
    /**
     * In case the JewelleryImage found by the `where` argument doesn't exist, create a new JewelleryImage with this data.
     */
    create: Prisma.XOR<Prisma.JewelleryImageCreateInput, Prisma.JewelleryImageUncheckedCreateInput>;
    /**
     * In case the JewelleryImage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.JewelleryImageUpdateInput, Prisma.JewelleryImageUncheckedUpdateInput>;
};
/**
 * JewelleryImage delete
 */
export type JewelleryImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which JewelleryImage to delete.
     */
    where: Prisma.JewelleryImageWhereUniqueInput;
};
/**
 * JewelleryImage deleteMany
 */
export type JewelleryImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which JewelleryImages to delete
     */
    where?: Prisma.JewelleryImageWhereInput;
    /**
     * Limit how many JewelleryImages to delete.
     */
    limit?: number;
};
/**
 * JewelleryImage without action
 */
export type JewelleryImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=JewelleryImage.d.ts.map