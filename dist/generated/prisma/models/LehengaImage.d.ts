import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LehengaImage
 *
 */
export type LehengaImageModel = runtime.Types.Result.DefaultSelection<Prisma.$LehengaImagePayload>;
export type AggregateLehengaImage = {
    _count: LehengaImageCountAggregateOutputType | null;
    _avg: LehengaImageAvgAggregateOutputType | null;
    _sum: LehengaImageSumAggregateOutputType | null;
    _min: LehengaImageMinAggregateOutputType | null;
    _max: LehengaImageMaxAggregateOutputType | null;
};
export type LehengaImageAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type LehengaImageSumAggregateOutputType = {
    sortOrder: number | null;
};
export type LehengaImageMinAggregateOutputType = {
    id: string | null;
    lehengaId: string | null;
    imageUrl: string | null;
    altText: string | null;
    isPrimary: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type LehengaImageMaxAggregateOutputType = {
    id: string | null;
    lehengaId: string | null;
    imageUrl: string | null;
    altText: string | null;
    isPrimary: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type LehengaImageCountAggregateOutputType = {
    id: number;
    lehengaId: number;
    imageUrl: number;
    altText: number;
    isPrimary: number;
    sortOrder: number;
    createdAt: number;
    _all: number;
};
export type LehengaImageAvgAggregateInputType = {
    sortOrder?: true;
};
export type LehengaImageSumAggregateInputType = {
    sortOrder?: true;
};
export type LehengaImageMinAggregateInputType = {
    id?: true;
    lehengaId?: true;
    imageUrl?: true;
    altText?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type LehengaImageMaxAggregateInputType = {
    id?: true;
    lehengaId?: true;
    imageUrl?: true;
    altText?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type LehengaImageCountAggregateInputType = {
    id?: true;
    lehengaId?: true;
    imageUrl?: true;
    altText?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
    _all?: true;
};
export type LehengaImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LehengaImage to aggregate.
     */
    where?: Prisma.LehengaImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LehengaImages to fetch.
     */
    orderBy?: Prisma.LehengaImageOrderByWithRelationInput | Prisma.LehengaImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LehengaImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LehengaImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LehengaImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LehengaImages
    **/
    _count?: true | LehengaImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LehengaImageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LehengaImageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LehengaImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LehengaImageMaxAggregateInputType;
};
export type GetLehengaImageAggregateType<T extends LehengaImageAggregateArgs> = {
    [P in keyof T & keyof AggregateLehengaImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLehengaImage[P]> : Prisma.GetScalarType<T[P], AggregateLehengaImage[P]>;
};
export type LehengaImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LehengaImageWhereInput;
    orderBy?: Prisma.LehengaImageOrderByWithAggregationInput | Prisma.LehengaImageOrderByWithAggregationInput[];
    by: Prisma.LehengaImageScalarFieldEnum[] | Prisma.LehengaImageScalarFieldEnum;
    having?: Prisma.LehengaImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LehengaImageCountAggregateInputType | true;
    _avg?: LehengaImageAvgAggregateInputType;
    _sum?: LehengaImageSumAggregateInputType;
    _min?: LehengaImageMinAggregateInputType;
    _max?: LehengaImageMaxAggregateInputType;
};
export type LehengaImageGroupByOutputType = {
    id: string;
    lehengaId: string;
    imageUrl: string;
    altText: string | null;
    isPrimary: boolean;
    sortOrder: number;
    createdAt: Date;
    _count: LehengaImageCountAggregateOutputType | null;
    _avg: LehengaImageAvgAggregateOutputType | null;
    _sum: LehengaImageSumAggregateOutputType | null;
    _min: LehengaImageMinAggregateOutputType | null;
    _max: LehengaImageMaxAggregateOutputType | null;
};
export type GetLehengaImageGroupByPayload<T extends LehengaImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LehengaImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LehengaImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LehengaImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LehengaImageGroupByOutputType[P]>;
}>>;
export type LehengaImageWhereInput = {
    AND?: Prisma.LehengaImageWhereInput | Prisma.LehengaImageWhereInput[];
    OR?: Prisma.LehengaImageWhereInput[];
    NOT?: Prisma.LehengaImageWhereInput | Prisma.LehengaImageWhereInput[];
    id?: Prisma.StringFilter<"LehengaImage"> | string;
    lehengaId?: Prisma.StringFilter<"LehengaImage"> | string;
    imageUrl?: Prisma.StringFilter<"LehengaImage"> | string;
    altText?: Prisma.StringNullableFilter<"LehengaImage"> | string | null;
    isPrimary?: Prisma.BoolFilter<"LehengaImage"> | boolean;
    sortOrder?: Prisma.IntFilter<"LehengaImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"LehengaImage"> | Date | string;
    lehenga?: Prisma.XOR<Prisma.LehengaScalarRelationFilter, Prisma.LehengaWhereInput>;
};
export type LehengaImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    altText?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lehenga?: Prisma.LehengaOrderByWithRelationInput;
};
export type LehengaImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LehengaImageWhereInput | Prisma.LehengaImageWhereInput[];
    OR?: Prisma.LehengaImageWhereInput[];
    NOT?: Prisma.LehengaImageWhereInput | Prisma.LehengaImageWhereInput[];
    lehengaId?: Prisma.StringFilter<"LehengaImage"> | string;
    imageUrl?: Prisma.StringFilter<"LehengaImage"> | string;
    altText?: Prisma.StringNullableFilter<"LehengaImage"> | string | null;
    isPrimary?: Prisma.BoolFilter<"LehengaImage"> | boolean;
    sortOrder?: Prisma.IntFilter<"LehengaImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"LehengaImage"> | Date | string;
    lehenga?: Prisma.XOR<Prisma.LehengaScalarRelationFilter, Prisma.LehengaWhereInput>;
}, "id">;
export type LehengaImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    altText?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LehengaImageCountOrderByAggregateInput;
    _avg?: Prisma.LehengaImageAvgOrderByAggregateInput;
    _max?: Prisma.LehengaImageMaxOrderByAggregateInput;
    _min?: Prisma.LehengaImageMinOrderByAggregateInput;
    _sum?: Prisma.LehengaImageSumOrderByAggregateInput;
};
export type LehengaImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.LehengaImageScalarWhereWithAggregatesInput | Prisma.LehengaImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.LehengaImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LehengaImageScalarWhereWithAggregatesInput | Prisma.LehengaImageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LehengaImage"> | string;
    lehengaId?: Prisma.StringWithAggregatesFilter<"LehengaImage"> | string;
    imageUrl?: Prisma.StringWithAggregatesFilter<"LehengaImage"> | string;
    altText?: Prisma.StringNullableWithAggregatesFilter<"LehengaImage"> | string | null;
    isPrimary?: Prisma.BoolWithAggregatesFilter<"LehengaImage"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"LehengaImage"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LehengaImage"> | Date | string;
};
export type LehengaImageCreateInput = {
    id?: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    lehenga: Prisma.LehengaCreateNestedOneWithoutImagesInput;
};
export type LehengaImageUncheckedCreateInput = {
    id?: string;
    lehengaId: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type LehengaImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lehenga?: Prisma.LehengaUpdateOneRequiredWithoutImagesNestedInput;
};
export type LehengaImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lehengaId?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LehengaImageCreateManyInput = {
    id?: string;
    lehengaId: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type LehengaImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LehengaImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lehengaId?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LehengaImageListRelationFilter = {
    every?: Prisma.LehengaImageWhereInput;
    some?: Prisma.LehengaImageWhereInput;
    none?: Prisma.LehengaImageWhereInput;
};
export type LehengaImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LehengaImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LehengaImageAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type LehengaImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LehengaImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LehengaImageSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type LehengaImageCreateNestedManyWithoutLehengaInput = {
    create?: Prisma.XOR<Prisma.LehengaImageCreateWithoutLehengaInput, Prisma.LehengaImageUncheckedCreateWithoutLehengaInput> | Prisma.LehengaImageCreateWithoutLehengaInput[] | Prisma.LehengaImageUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.LehengaImageCreateOrConnectWithoutLehengaInput | Prisma.LehengaImageCreateOrConnectWithoutLehengaInput[];
    createMany?: Prisma.LehengaImageCreateManyLehengaInputEnvelope;
    connect?: Prisma.LehengaImageWhereUniqueInput | Prisma.LehengaImageWhereUniqueInput[];
};
export type LehengaImageUncheckedCreateNestedManyWithoutLehengaInput = {
    create?: Prisma.XOR<Prisma.LehengaImageCreateWithoutLehengaInput, Prisma.LehengaImageUncheckedCreateWithoutLehengaInput> | Prisma.LehengaImageCreateWithoutLehengaInput[] | Prisma.LehengaImageUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.LehengaImageCreateOrConnectWithoutLehengaInput | Prisma.LehengaImageCreateOrConnectWithoutLehengaInput[];
    createMany?: Prisma.LehengaImageCreateManyLehengaInputEnvelope;
    connect?: Prisma.LehengaImageWhereUniqueInput | Prisma.LehengaImageWhereUniqueInput[];
};
export type LehengaImageUpdateManyWithoutLehengaNestedInput = {
    create?: Prisma.XOR<Prisma.LehengaImageCreateWithoutLehengaInput, Prisma.LehengaImageUncheckedCreateWithoutLehengaInput> | Prisma.LehengaImageCreateWithoutLehengaInput[] | Prisma.LehengaImageUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.LehengaImageCreateOrConnectWithoutLehengaInput | Prisma.LehengaImageCreateOrConnectWithoutLehengaInput[];
    upsert?: Prisma.LehengaImageUpsertWithWhereUniqueWithoutLehengaInput | Prisma.LehengaImageUpsertWithWhereUniqueWithoutLehengaInput[];
    createMany?: Prisma.LehengaImageCreateManyLehengaInputEnvelope;
    set?: Prisma.LehengaImageWhereUniqueInput | Prisma.LehengaImageWhereUniqueInput[];
    disconnect?: Prisma.LehengaImageWhereUniqueInput | Prisma.LehengaImageWhereUniqueInput[];
    delete?: Prisma.LehengaImageWhereUniqueInput | Prisma.LehengaImageWhereUniqueInput[];
    connect?: Prisma.LehengaImageWhereUniqueInput | Prisma.LehengaImageWhereUniqueInput[];
    update?: Prisma.LehengaImageUpdateWithWhereUniqueWithoutLehengaInput | Prisma.LehengaImageUpdateWithWhereUniqueWithoutLehengaInput[];
    updateMany?: Prisma.LehengaImageUpdateManyWithWhereWithoutLehengaInput | Prisma.LehengaImageUpdateManyWithWhereWithoutLehengaInput[];
    deleteMany?: Prisma.LehengaImageScalarWhereInput | Prisma.LehengaImageScalarWhereInput[];
};
export type LehengaImageUncheckedUpdateManyWithoutLehengaNestedInput = {
    create?: Prisma.XOR<Prisma.LehengaImageCreateWithoutLehengaInput, Prisma.LehengaImageUncheckedCreateWithoutLehengaInput> | Prisma.LehengaImageCreateWithoutLehengaInput[] | Prisma.LehengaImageUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.LehengaImageCreateOrConnectWithoutLehengaInput | Prisma.LehengaImageCreateOrConnectWithoutLehengaInput[];
    upsert?: Prisma.LehengaImageUpsertWithWhereUniqueWithoutLehengaInput | Prisma.LehengaImageUpsertWithWhereUniqueWithoutLehengaInput[];
    createMany?: Prisma.LehengaImageCreateManyLehengaInputEnvelope;
    set?: Prisma.LehengaImageWhereUniqueInput | Prisma.LehengaImageWhereUniqueInput[];
    disconnect?: Prisma.LehengaImageWhereUniqueInput | Prisma.LehengaImageWhereUniqueInput[];
    delete?: Prisma.LehengaImageWhereUniqueInput | Prisma.LehengaImageWhereUniqueInput[];
    connect?: Prisma.LehengaImageWhereUniqueInput | Prisma.LehengaImageWhereUniqueInput[];
    update?: Prisma.LehengaImageUpdateWithWhereUniqueWithoutLehengaInput | Prisma.LehengaImageUpdateWithWhereUniqueWithoutLehengaInput[];
    updateMany?: Prisma.LehengaImageUpdateManyWithWhereWithoutLehengaInput | Prisma.LehengaImageUpdateManyWithWhereWithoutLehengaInput[];
    deleteMany?: Prisma.LehengaImageScalarWhereInput | Prisma.LehengaImageScalarWhereInput[];
};
export type LehengaImageCreateWithoutLehengaInput = {
    id?: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type LehengaImageUncheckedCreateWithoutLehengaInput = {
    id?: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type LehengaImageCreateOrConnectWithoutLehengaInput = {
    where: Prisma.LehengaImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.LehengaImageCreateWithoutLehengaInput, Prisma.LehengaImageUncheckedCreateWithoutLehengaInput>;
};
export type LehengaImageCreateManyLehengaInputEnvelope = {
    data: Prisma.LehengaImageCreateManyLehengaInput | Prisma.LehengaImageCreateManyLehengaInput[];
    skipDuplicates?: boolean;
};
export type LehengaImageUpsertWithWhereUniqueWithoutLehengaInput = {
    where: Prisma.LehengaImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.LehengaImageUpdateWithoutLehengaInput, Prisma.LehengaImageUncheckedUpdateWithoutLehengaInput>;
    create: Prisma.XOR<Prisma.LehengaImageCreateWithoutLehengaInput, Prisma.LehengaImageUncheckedCreateWithoutLehengaInput>;
};
export type LehengaImageUpdateWithWhereUniqueWithoutLehengaInput = {
    where: Prisma.LehengaImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.LehengaImageUpdateWithoutLehengaInput, Prisma.LehengaImageUncheckedUpdateWithoutLehengaInput>;
};
export type LehengaImageUpdateManyWithWhereWithoutLehengaInput = {
    where: Prisma.LehengaImageScalarWhereInput;
    data: Prisma.XOR<Prisma.LehengaImageUpdateManyMutationInput, Prisma.LehengaImageUncheckedUpdateManyWithoutLehengaInput>;
};
export type LehengaImageScalarWhereInput = {
    AND?: Prisma.LehengaImageScalarWhereInput | Prisma.LehengaImageScalarWhereInput[];
    OR?: Prisma.LehengaImageScalarWhereInput[];
    NOT?: Prisma.LehengaImageScalarWhereInput | Prisma.LehengaImageScalarWhereInput[];
    id?: Prisma.StringFilter<"LehengaImage"> | string;
    lehengaId?: Prisma.StringFilter<"LehengaImage"> | string;
    imageUrl?: Prisma.StringFilter<"LehengaImage"> | string;
    altText?: Prisma.StringNullableFilter<"LehengaImage"> | string | null;
    isPrimary?: Prisma.BoolFilter<"LehengaImage"> | boolean;
    sortOrder?: Prisma.IntFilter<"LehengaImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"LehengaImage"> | Date | string;
};
export type LehengaImageCreateManyLehengaInput = {
    id?: string;
    imageUrl: string;
    altText?: string | null;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type LehengaImageUpdateWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LehengaImageUncheckedUpdateWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LehengaImageUncheckedUpdateManyWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LehengaImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lehengaId?: boolean;
    imageUrl?: boolean;
    altText?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lehengaImage"]>;
export type LehengaImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lehengaId?: boolean;
    imageUrl?: boolean;
    altText?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lehengaImage"]>;
export type LehengaImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lehengaId?: boolean;
    imageUrl?: boolean;
    altText?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lehengaImage"]>;
export type LehengaImageSelectScalar = {
    id?: boolean;
    lehengaId?: boolean;
    imageUrl?: boolean;
    altText?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
};
export type LehengaImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lehengaId" | "imageUrl" | "altText" | "isPrimary" | "sortOrder" | "createdAt", ExtArgs["result"]["lehengaImage"]>;
export type LehengaImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
};
export type LehengaImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
};
export type LehengaImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
};
export type $LehengaImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LehengaImage";
    objects: {
        lehenga: Prisma.$LehengaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lehengaId: string;
        imageUrl: string;
        altText: string | null;
        isPrimary: boolean;
        sortOrder: number;
        createdAt: Date;
    }, ExtArgs["result"]["lehengaImage"]>;
    composites: {};
};
export type LehengaImageGetPayload<S extends boolean | null | undefined | LehengaImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload, S>;
export type LehengaImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LehengaImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LehengaImageCountAggregateInputType | true;
};
export interface LehengaImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LehengaImage'];
        meta: {
            name: 'LehengaImage';
        };
    };
    /**
     * Find zero or one LehengaImage that matches the filter.
     * @param {LehengaImageFindUniqueArgs} args - Arguments to find a LehengaImage
     * @example
     * // Get one LehengaImage
     * const lehengaImage = await prisma.lehengaImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LehengaImageFindUniqueArgs>(args: Prisma.SelectSubset<T, LehengaImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LehengaImageClient<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LehengaImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LehengaImageFindUniqueOrThrowArgs} args - Arguments to find a LehengaImage
     * @example
     * // Get one LehengaImage
     * const lehengaImage = await prisma.lehengaImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LehengaImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LehengaImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LehengaImageClient<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LehengaImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaImageFindFirstArgs} args - Arguments to find a LehengaImage
     * @example
     * // Get one LehengaImage
     * const lehengaImage = await prisma.lehengaImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LehengaImageFindFirstArgs>(args?: Prisma.SelectSubset<T, LehengaImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__LehengaImageClient<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LehengaImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaImageFindFirstOrThrowArgs} args - Arguments to find a LehengaImage
     * @example
     * // Get one LehengaImage
     * const lehengaImage = await prisma.lehengaImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LehengaImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LehengaImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LehengaImageClient<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LehengaImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LehengaImages
     * const lehengaImages = await prisma.lehengaImage.findMany()
     *
     * // Get first 10 LehengaImages
     * const lehengaImages = await prisma.lehengaImage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lehengaImageWithIdOnly = await prisma.lehengaImage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LehengaImageFindManyArgs>(args?: Prisma.SelectSubset<T, LehengaImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LehengaImage.
     * @param {LehengaImageCreateArgs} args - Arguments to create a LehengaImage.
     * @example
     * // Create one LehengaImage
     * const LehengaImage = await prisma.lehengaImage.create({
     *   data: {
     *     // ... data to create a LehengaImage
     *   }
     * })
     *
     */
    create<T extends LehengaImageCreateArgs>(args: Prisma.SelectSubset<T, LehengaImageCreateArgs<ExtArgs>>): Prisma.Prisma__LehengaImageClient<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LehengaImages.
     * @param {LehengaImageCreateManyArgs} args - Arguments to create many LehengaImages.
     * @example
     * // Create many LehengaImages
     * const lehengaImage = await prisma.lehengaImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LehengaImageCreateManyArgs>(args?: Prisma.SelectSubset<T, LehengaImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LehengaImages and returns the data saved in the database.
     * @param {LehengaImageCreateManyAndReturnArgs} args - Arguments to create many LehengaImages.
     * @example
     * // Create many LehengaImages
     * const lehengaImage = await prisma.lehengaImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LehengaImages and only return the `id`
     * const lehengaImageWithIdOnly = await prisma.lehengaImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LehengaImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LehengaImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LehengaImage.
     * @param {LehengaImageDeleteArgs} args - Arguments to delete one LehengaImage.
     * @example
     * // Delete one LehengaImage
     * const LehengaImage = await prisma.lehengaImage.delete({
     *   where: {
     *     // ... filter to delete one LehengaImage
     *   }
     * })
     *
     */
    delete<T extends LehengaImageDeleteArgs>(args: Prisma.SelectSubset<T, LehengaImageDeleteArgs<ExtArgs>>): Prisma.Prisma__LehengaImageClient<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LehengaImage.
     * @param {LehengaImageUpdateArgs} args - Arguments to update one LehengaImage.
     * @example
     * // Update one LehengaImage
     * const lehengaImage = await prisma.lehengaImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LehengaImageUpdateArgs>(args: Prisma.SelectSubset<T, LehengaImageUpdateArgs<ExtArgs>>): Prisma.Prisma__LehengaImageClient<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LehengaImages.
     * @param {LehengaImageDeleteManyArgs} args - Arguments to filter LehengaImages to delete.
     * @example
     * // Delete a few LehengaImages
     * const { count } = await prisma.lehengaImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LehengaImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, LehengaImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LehengaImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LehengaImages
     * const lehengaImage = await prisma.lehengaImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LehengaImageUpdateManyArgs>(args: Prisma.SelectSubset<T, LehengaImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LehengaImages and returns the data updated in the database.
     * @param {LehengaImageUpdateManyAndReturnArgs} args - Arguments to update many LehengaImages.
     * @example
     * // Update many LehengaImages
     * const lehengaImage = await prisma.lehengaImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LehengaImages and only return the `id`
     * const lehengaImageWithIdOnly = await prisma.lehengaImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends LehengaImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LehengaImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LehengaImage.
     * @param {LehengaImageUpsertArgs} args - Arguments to update or create a LehengaImage.
     * @example
     * // Update or create a LehengaImage
     * const lehengaImage = await prisma.lehengaImage.upsert({
     *   create: {
     *     // ... data to create a LehengaImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LehengaImage we want to update
     *   }
     * })
     */
    upsert<T extends LehengaImageUpsertArgs>(args: Prisma.SelectSubset<T, LehengaImageUpsertArgs<ExtArgs>>): Prisma.Prisma__LehengaImageClient<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LehengaImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaImageCountArgs} args - Arguments to filter LehengaImages to count.
     * @example
     * // Count the number of LehengaImages
     * const count = await prisma.lehengaImage.count({
     *   where: {
     *     // ... the filter for the LehengaImages we want to count
     *   }
     * })
    **/
    count<T extends LehengaImageCountArgs>(args?: Prisma.Subset<T, LehengaImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LehengaImageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LehengaImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LehengaImageAggregateArgs>(args: Prisma.Subset<T, LehengaImageAggregateArgs>): Prisma.PrismaPromise<GetLehengaImageAggregateType<T>>;
    /**
     * Group by LehengaImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaImageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LehengaImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LehengaImageGroupByArgs['orderBy'];
    } : {
        orderBy?: LehengaImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LehengaImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLehengaImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LehengaImage model
     */
    readonly fields: LehengaImageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LehengaImage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LehengaImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lehenga<T extends Prisma.LehengaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LehengaDefaultArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LehengaImage model
 */
export interface LehengaImageFieldRefs {
    readonly id: Prisma.FieldRef<"LehengaImage", 'String'>;
    readonly lehengaId: Prisma.FieldRef<"LehengaImage", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"LehengaImage", 'String'>;
    readonly altText: Prisma.FieldRef<"LehengaImage", 'String'>;
    readonly isPrimary: Prisma.FieldRef<"LehengaImage", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"LehengaImage", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"LehengaImage", 'DateTime'>;
}
/**
 * LehengaImage findUnique
 */
export type LehengaImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageInclude<ExtArgs> | null;
    /**
     * Filter, which LehengaImage to fetch.
     */
    where: Prisma.LehengaImageWhereUniqueInput;
};
/**
 * LehengaImage findUniqueOrThrow
 */
export type LehengaImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageInclude<ExtArgs> | null;
    /**
     * Filter, which LehengaImage to fetch.
     */
    where: Prisma.LehengaImageWhereUniqueInput;
};
/**
 * LehengaImage findFirst
 */
export type LehengaImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageInclude<ExtArgs> | null;
    /**
     * Filter, which LehengaImage to fetch.
     */
    where?: Prisma.LehengaImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LehengaImages to fetch.
     */
    orderBy?: Prisma.LehengaImageOrderByWithRelationInput | Prisma.LehengaImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LehengaImages.
     */
    cursor?: Prisma.LehengaImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LehengaImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LehengaImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LehengaImages.
     */
    distinct?: Prisma.LehengaImageScalarFieldEnum | Prisma.LehengaImageScalarFieldEnum[];
};
/**
 * LehengaImage findFirstOrThrow
 */
export type LehengaImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageInclude<ExtArgs> | null;
    /**
     * Filter, which LehengaImage to fetch.
     */
    where?: Prisma.LehengaImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LehengaImages to fetch.
     */
    orderBy?: Prisma.LehengaImageOrderByWithRelationInput | Prisma.LehengaImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LehengaImages.
     */
    cursor?: Prisma.LehengaImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LehengaImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LehengaImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LehengaImages.
     */
    distinct?: Prisma.LehengaImageScalarFieldEnum | Prisma.LehengaImageScalarFieldEnum[];
};
/**
 * LehengaImage findMany
 */
export type LehengaImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageInclude<ExtArgs> | null;
    /**
     * Filter, which LehengaImages to fetch.
     */
    where?: Prisma.LehengaImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LehengaImages to fetch.
     */
    orderBy?: Prisma.LehengaImageOrderByWithRelationInput | Prisma.LehengaImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LehengaImages.
     */
    cursor?: Prisma.LehengaImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LehengaImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LehengaImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LehengaImages.
     */
    distinct?: Prisma.LehengaImageScalarFieldEnum | Prisma.LehengaImageScalarFieldEnum[];
};
/**
 * LehengaImage create
 */
export type LehengaImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageInclude<ExtArgs> | null;
    /**
     * The data needed to create a LehengaImage.
     */
    data: Prisma.XOR<Prisma.LehengaImageCreateInput, Prisma.LehengaImageUncheckedCreateInput>;
};
/**
 * LehengaImage createMany
 */
export type LehengaImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LehengaImages.
     */
    data: Prisma.LehengaImageCreateManyInput | Prisma.LehengaImageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LehengaImage createManyAndReturn
 */
export type LehengaImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * The data used to create many LehengaImages.
     */
    data: Prisma.LehengaImageCreateManyInput | Prisma.LehengaImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LehengaImage update
 */
export type LehengaImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageInclude<ExtArgs> | null;
    /**
     * The data needed to update a LehengaImage.
     */
    data: Prisma.XOR<Prisma.LehengaImageUpdateInput, Prisma.LehengaImageUncheckedUpdateInput>;
    /**
     * Choose, which LehengaImage to update.
     */
    where: Prisma.LehengaImageWhereUniqueInput;
};
/**
 * LehengaImage updateMany
 */
export type LehengaImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LehengaImages.
     */
    data: Prisma.XOR<Prisma.LehengaImageUpdateManyMutationInput, Prisma.LehengaImageUncheckedUpdateManyInput>;
    /**
     * Filter which LehengaImages to update
     */
    where?: Prisma.LehengaImageWhereInput;
    /**
     * Limit how many LehengaImages to update.
     */
    limit?: number;
};
/**
 * LehengaImage updateManyAndReturn
 */
export type LehengaImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * The data used to update LehengaImages.
     */
    data: Prisma.XOR<Prisma.LehengaImageUpdateManyMutationInput, Prisma.LehengaImageUncheckedUpdateManyInput>;
    /**
     * Filter which LehengaImages to update
     */
    where?: Prisma.LehengaImageWhereInput;
    /**
     * Limit how many LehengaImages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LehengaImage upsert
 */
export type LehengaImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageInclude<ExtArgs> | null;
    /**
     * The filter to search for the LehengaImage to update in case it exists.
     */
    where: Prisma.LehengaImageWhereUniqueInput;
    /**
     * In case the LehengaImage found by the `where` argument doesn't exist, create a new LehengaImage with this data.
     */
    create: Prisma.XOR<Prisma.LehengaImageCreateInput, Prisma.LehengaImageUncheckedCreateInput>;
    /**
     * In case the LehengaImage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LehengaImageUpdateInput, Prisma.LehengaImageUncheckedUpdateInput>;
};
/**
 * LehengaImage delete
 */
export type LehengaImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageInclude<ExtArgs> | null;
    /**
     * Filter which LehengaImage to delete.
     */
    where: Prisma.LehengaImageWhereUniqueInput;
};
/**
 * LehengaImage deleteMany
 */
export type LehengaImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LehengaImages to delete
     */
    where?: Prisma.LehengaImageWhereInput;
    /**
     * Limit how many LehengaImages to delete.
     */
    limit?: number;
};
/**
 * LehengaImage without action
 */
export type LehengaImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageInclude<ExtArgs> | null;
};
//# sourceMappingURL=LehengaImage.d.ts.map