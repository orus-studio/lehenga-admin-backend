import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LehengaSize
 *
 */
export type LehengaSizeModel = runtime.Types.Result.DefaultSelection<Prisma.$LehengaSizePayload>;
export type AggregateLehengaSize = {
    _count: LehengaSizeCountAggregateOutputType | null;
    _avg: LehengaSizeAvgAggregateOutputType | null;
    _sum: LehengaSizeSumAggregateOutputType | null;
    _min: LehengaSizeMinAggregateOutputType | null;
    _max: LehengaSizeMaxAggregateOutputType | null;
};
export type LehengaSizeAvgAggregateOutputType = {
    waistInInches: runtime.Decimal | null;
    bustInInches: runtime.Decimal | null;
    hipInInches: runtime.Decimal | null;
    lengthInInches: runtime.Decimal | null;
    quantityTotal: number | null;
    quantityReserved: number | null;
};
export type LehengaSizeSumAggregateOutputType = {
    waistInInches: runtime.Decimal | null;
    bustInInches: runtime.Decimal | null;
    hipInInches: runtime.Decimal | null;
    lengthInInches: runtime.Decimal | null;
    quantityTotal: number | null;
    quantityReserved: number | null;
};
export type LehengaSizeMinAggregateOutputType = {
    id: string | null;
    lehengaId: string | null;
    sizeLabel: string | null;
    blouseSize: string | null;
    waistInInches: runtime.Decimal | null;
    bustInInches: runtime.Decimal | null;
    hipInInches: runtime.Decimal | null;
    lengthInInches: runtime.Decimal | null;
    quantityTotal: number | null;
    quantityReserved: number | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LehengaSizeMaxAggregateOutputType = {
    id: string | null;
    lehengaId: string | null;
    sizeLabel: string | null;
    blouseSize: string | null;
    waistInInches: runtime.Decimal | null;
    bustInInches: runtime.Decimal | null;
    hipInInches: runtime.Decimal | null;
    lengthInInches: runtime.Decimal | null;
    quantityTotal: number | null;
    quantityReserved: number | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LehengaSizeCountAggregateOutputType = {
    id: number;
    lehengaId: number;
    sizeLabel: number;
    blouseSize: number;
    waistInInches: number;
    bustInInches: number;
    hipInInches: number;
    lengthInInches: number;
    quantityTotal: number;
    quantityReserved: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LehengaSizeAvgAggregateInputType = {
    waistInInches?: true;
    bustInInches?: true;
    hipInInches?: true;
    lengthInInches?: true;
    quantityTotal?: true;
    quantityReserved?: true;
};
export type LehengaSizeSumAggregateInputType = {
    waistInInches?: true;
    bustInInches?: true;
    hipInInches?: true;
    lengthInInches?: true;
    quantityTotal?: true;
    quantityReserved?: true;
};
export type LehengaSizeMinAggregateInputType = {
    id?: true;
    lehengaId?: true;
    sizeLabel?: true;
    blouseSize?: true;
    waistInInches?: true;
    bustInInches?: true;
    hipInInches?: true;
    lengthInInches?: true;
    quantityTotal?: true;
    quantityReserved?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LehengaSizeMaxAggregateInputType = {
    id?: true;
    lehengaId?: true;
    sizeLabel?: true;
    blouseSize?: true;
    waistInInches?: true;
    bustInInches?: true;
    hipInInches?: true;
    lengthInInches?: true;
    quantityTotal?: true;
    quantityReserved?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LehengaSizeCountAggregateInputType = {
    id?: true;
    lehengaId?: true;
    sizeLabel?: true;
    blouseSize?: true;
    waistInInches?: true;
    bustInInches?: true;
    hipInInches?: true;
    lengthInInches?: true;
    quantityTotal?: true;
    quantityReserved?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LehengaSizeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LehengaSize to aggregate.
     */
    where?: Prisma.LehengaSizeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LehengaSizes to fetch.
     */
    orderBy?: Prisma.LehengaSizeOrderByWithRelationInput | Prisma.LehengaSizeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LehengaSizeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LehengaSizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LehengaSizes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LehengaSizes
    **/
    _count?: true | LehengaSizeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LehengaSizeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LehengaSizeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LehengaSizeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LehengaSizeMaxAggregateInputType;
};
export type GetLehengaSizeAggregateType<T extends LehengaSizeAggregateArgs> = {
    [P in keyof T & keyof AggregateLehengaSize]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLehengaSize[P]> : Prisma.GetScalarType<T[P], AggregateLehengaSize[P]>;
};
export type LehengaSizeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LehengaSizeWhereInput;
    orderBy?: Prisma.LehengaSizeOrderByWithAggregationInput | Prisma.LehengaSizeOrderByWithAggregationInput[];
    by: Prisma.LehengaSizeScalarFieldEnum[] | Prisma.LehengaSizeScalarFieldEnum;
    having?: Prisma.LehengaSizeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LehengaSizeCountAggregateInputType | true;
    _avg?: LehengaSizeAvgAggregateInputType;
    _sum?: LehengaSizeSumAggregateInputType;
    _min?: LehengaSizeMinAggregateInputType;
    _max?: LehengaSizeMaxAggregateInputType;
};
export type LehengaSizeGroupByOutputType = {
    id: string;
    lehengaId: string;
    sizeLabel: string;
    blouseSize: string | null;
    waistInInches: runtime.Decimal | null;
    bustInInches: runtime.Decimal | null;
    hipInInches: runtime.Decimal | null;
    lengthInInches: runtime.Decimal | null;
    quantityTotal: number;
    quantityReserved: number;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LehengaSizeCountAggregateOutputType | null;
    _avg: LehengaSizeAvgAggregateOutputType | null;
    _sum: LehengaSizeSumAggregateOutputType | null;
    _min: LehengaSizeMinAggregateOutputType | null;
    _max: LehengaSizeMaxAggregateOutputType | null;
};
export type GetLehengaSizeGroupByPayload<T extends LehengaSizeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LehengaSizeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LehengaSizeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LehengaSizeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LehengaSizeGroupByOutputType[P]>;
}>>;
export type LehengaSizeWhereInput = {
    AND?: Prisma.LehengaSizeWhereInput | Prisma.LehengaSizeWhereInput[];
    OR?: Prisma.LehengaSizeWhereInput[];
    NOT?: Prisma.LehengaSizeWhereInput | Prisma.LehengaSizeWhereInput[];
    id?: Prisma.StringFilter<"LehengaSize"> | string;
    lehengaId?: Prisma.StringFilter<"LehengaSize"> | string;
    sizeLabel?: Prisma.StringFilter<"LehengaSize"> | string;
    blouseSize?: Prisma.StringNullableFilter<"LehengaSize"> | string | null;
    waistInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFilter<"LehengaSize"> | number;
    quantityReserved?: Prisma.IntFilter<"LehengaSize"> | number;
    notes?: Prisma.StringNullableFilter<"LehengaSize"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LehengaSize"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LehengaSize"> | Date | string;
    lehenga?: Prisma.XOR<Prisma.LehengaScalarRelationFilter, Prisma.LehengaWhereInput>;
    orderItems?: Prisma.RentalOrderItemListRelationFilter;
};
export type LehengaSizeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    sizeLabel?: Prisma.SortOrder;
    blouseSize?: Prisma.SortOrderInput | Prisma.SortOrder;
    waistInInches?: Prisma.SortOrderInput | Prisma.SortOrder;
    bustInInches?: Prisma.SortOrderInput | Prisma.SortOrder;
    hipInInches?: Prisma.SortOrderInput | Prisma.SortOrder;
    lengthInInches?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantityTotal?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lehenga?: Prisma.LehengaOrderByWithRelationInput;
    orderItems?: Prisma.RentalOrderItemOrderByRelationAggregateInput;
};
export type LehengaSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    lehengaId_sizeLabel?: Prisma.LehengaSizeLehengaIdSizeLabelCompoundUniqueInput;
    AND?: Prisma.LehengaSizeWhereInput | Prisma.LehengaSizeWhereInput[];
    OR?: Prisma.LehengaSizeWhereInput[];
    NOT?: Prisma.LehengaSizeWhereInput | Prisma.LehengaSizeWhereInput[];
    lehengaId?: Prisma.StringFilter<"LehengaSize"> | string;
    sizeLabel?: Prisma.StringFilter<"LehengaSize"> | string;
    blouseSize?: Prisma.StringNullableFilter<"LehengaSize"> | string | null;
    waistInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFilter<"LehengaSize"> | number;
    quantityReserved?: Prisma.IntFilter<"LehengaSize"> | number;
    notes?: Prisma.StringNullableFilter<"LehengaSize"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LehengaSize"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LehengaSize"> | Date | string;
    lehenga?: Prisma.XOR<Prisma.LehengaScalarRelationFilter, Prisma.LehengaWhereInput>;
    orderItems?: Prisma.RentalOrderItemListRelationFilter;
}, "id" | "lehengaId_sizeLabel">;
export type LehengaSizeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    sizeLabel?: Prisma.SortOrder;
    blouseSize?: Prisma.SortOrderInput | Prisma.SortOrder;
    waistInInches?: Prisma.SortOrderInput | Prisma.SortOrder;
    bustInInches?: Prisma.SortOrderInput | Prisma.SortOrder;
    hipInInches?: Prisma.SortOrderInput | Prisma.SortOrder;
    lengthInInches?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantityTotal?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LehengaSizeCountOrderByAggregateInput;
    _avg?: Prisma.LehengaSizeAvgOrderByAggregateInput;
    _max?: Prisma.LehengaSizeMaxOrderByAggregateInput;
    _min?: Prisma.LehengaSizeMinOrderByAggregateInput;
    _sum?: Prisma.LehengaSizeSumOrderByAggregateInput;
};
export type LehengaSizeScalarWhereWithAggregatesInput = {
    AND?: Prisma.LehengaSizeScalarWhereWithAggregatesInput | Prisma.LehengaSizeScalarWhereWithAggregatesInput[];
    OR?: Prisma.LehengaSizeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LehengaSizeScalarWhereWithAggregatesInput | Prisma.LehengaSizeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LehengaSize"> | string;
    lehengaId?: Prisma.StringWithAggregatesFilter<"LehengaSize"> | string;
    sizeLabel?: Prisma.StringWithAggregatesFilter<"LehengaSize"> | string;
    blouseSize?: Prisma.StringNullableWithAggregatesFilter<"LehengaSize"> | string | null;
    waistInInches?: Prisma.DecimalNullableWithAggregatesFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.DecimalNullableWithAggregatesFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.DecimalNullableWithAggregatesFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.DecimalNullableWithAggregatesFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntWithAggregatesFilter<"LehengaSize"> | number;
    quantityReserved?: Prisma.IntWithAggregatesFilter<"LehengaSize"> | number;
    notes?: Prisma.StringNullableWithAggregatesFilter<"LehengaSize"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LehengaSize"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LehengaSize"> | Date | string;
};
export type LehengaSizeCreateInput = {
    id?: string;
    sizeLabel: string;
    blouseSize?: string | null;
    waistInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: number;
    quantityReserved?: number;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lehenga: Prisma.LehengaCreateNestedOneWithoutSizesInput;
    orderItems?: Prisma.RentalOrderItemCreateNestedManyWithoutLehengaSizeInput;
};
export type LehengaSizeUncheckedCreateInput = {
    id?: string;
    lehengaId: string;
    sizeLabel: string;
    blouseSize?: string | null;
    waistInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: number;
    quantityReserved?: number;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutLehengaSizeInput;
};
export type LehengaSizeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    blouseSize?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waistInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lehenga?: Prisma.LehengaUpdateOneRequiredWithoutSizesNestedInput;
    orderItems?: Prisma.RentalOrderItemUpdateManyWithoutLehengaSizeNestedInput;
};
export type LehengaSizeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lehengaId?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    blouseSize?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waistInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutLehengaSizeNestedInput;
};
export type LehengaSizeCreateManyInput = {
    id?: string;
    lehengaId: string;
    sizeLabel: string;
    blouseSize?: string | null;
    waistInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: number;
    quantityReserved?: number;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LehengaSizeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    blouseSize?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waistInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LehengaSizeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lehengaId?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    blouseSize?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waistInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LehengaSizeListRelationFilter = {
    every?: Prisma.LehengaSizeWhereInput;
    some?: Prisma.LehengaSizeWhereInput;
    none?: Prisma.LehengaSizeWhereInput;
};
export type LehengaSizeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LehengaSizeLehengaIdSizeLabelCompoundUniqueInput = {
    lehengaId: string;
    sizeLabel: string;
};
export type LehengaSizeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    sizeLabel?: Prisma.SortOrder;
    blouseSize?: Prisma.SortOrder;
    waistInInches?: Prisma.SortOrder;
    bustInInches?: Prisma.SortOrder;
    hipInInches?: Prisma.SortOrder;
    lengthInInches?: Prisma.SortOrder;
    quantityTotal?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LehengaSizeAvgOrderByAggregateInput = {
    waistInInches?: Prisma.SortOrder;
    bustInInches?: Prisma.SortOrder;
    hipInInches?: Prisma.SortOrder;
    lengthInInches?: Prisma.SortOrder;
    quantityTotal?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
};
export type LehengaSizeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    sizeLabel?: Prisma.SortOrder;
    blouseSize?: Prisma.SortOrder;
    waistInInches?: Prisma.SortOrder;
    bustInInches?: Prisma.SortOrder;
    hipInInches?: Prisma.SortOrder;
    lengthInInches?: Prisma.SortOrder;
    quantityTotal?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LehengaSizeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lehengaId?: Prisma.SortOrder;
    sizeLabel?: Prisma.SortOrder;
    blouseSize?: Prisma.SortOrder;
    waistInInches?: Prisma.SortOrder;
    bustInInches?: Prisma.SortOrder;
    hipInInches?: Prisma.SortOrder;
    lengthInInches?: Prisma.SortOrder;
    quantityTotal?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LehengaSizeSumOrderByAggregateInput = {
    waistInInches?: Prisma.SortOrder;
    bustInInches?: Prisma.SortOrder;
    hipInInches?: Prisma.SortOrder;
    lengthInInches?: Prisma.SortOrder;
    quantityTotal?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
};
export type LehengaSizeNullableScalarRelationFilter = {
    is?: Prisma.LehengaSizeWhereInput | null;
    isNot?: Prisma.LehengaSizeWhereInput | null;
};
export type LehengaSizeCreateNestedManyWithoutLehengaInput = {
    create?: Prisma.XOR<Prisma.LehengaSizeCreateWithoutLehengaInput, Prisma.LehengaSizeUncheckedCreateWithoutLehengaInput> | Prisma.LehengaSizeCreateWithoutLehengaInput[] | Prisma.LehengaSizeUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.LehengaSizeCreateOrConnectWithoutLehengaInput | Prisma.LehengaSizeCreateOrConnectWithoutLehengaInput[];
    createMany?: Prisma.LehengaSizeCreateManyLehengaInputEnvelope;
    connect?: Prisma.LehengaSizeWhereUniqueInput | Prisma.LehengaSizeWhereUniqueInput[];
};
export type LehengaSizeUncheckedCreateNestedManyWithoutLehengaInput = {
    create?: Prisma.XOR<Prisma.LehengaSizeCreateWithoutLehengaInput, Prisma.LehengaSizeUncheckedCreateWithoutLehengaInput> | Prisma.LehengaSizeCreateWithoutLehengaInput[] | Prisma.LehengaSizeUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.LehengaSizeCreateOrConnectWithoutLehengaInput | Prisma.LehengaSizeCreateOrConnectWithoutLehengaInput[];
    createMany?: Prisma.LehengaSizeCreateManyLehengaInputEnvelope;
    connect?: Prisma.LehengaSizeWhereUniqueInput | Prisma.LehengaSizeWhereUniqueInput[];
};
export type LehengaSizeUpdateManyWithoutLehengaNestedInput = {
    create?: Prisma.XOR<Prisma.LehengaSizeCreateWithoutLehengaInput, Prisma.LehengaSizeUncheckedCreateWithoutLehengaInput> | Prisma.LehengaSizeCreateWithoutLehengaInput[] | Prisma.LehengaSizeUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.LehengaSizeCreateOrConnectWithoutLehengaInput | Prisma.LehengaSizeCreateOrConnectWithoutLehengaInput[];
    upsert?: Prisma.LehengaSizeUpsertWithWhereUniqueWithoutLehengaInput | Prisma.LehengaSizeUpsertWithWhereUniqueWithoutLehengaInput[];
    createMany?: Prisma.LehengaSizeCreateManyLehengaInputEnvelope;
    set?: Prisma.LehengaSizeWhereUniqueInput | Prisma.LehengaSizeWhereUniqueInput[];
    disconnect?: Prisma.LehengaSizeWhereUniqueInput | Prisma.LehengaSizeWhereUniqueInput[];
    delete?: Prisma.LehengaSizeWhereUniqueInput | Prisma.LehengaSizeWhereUniqueInput[];
    connect?: Prisma.LehengaSizeWhereUniqueInput | Prisma.LehengaSizeWhereUniqueInput[];
    update?: Prisma.LehengaSizeUpdateWithWhereUniqueWithoutLehengaInput | Prisma.LehengaSizeUpdateWithWhereUniqueWithoutLehengaInput[];
    updateMany?: Prisma.LehengaSizeUpdateManyWithWhereWithoutLehengaInput | Prisma.LehengaSizeUpdateManyWithWhereWithoutLehengaInput[];
    deleteMany?: Prisma.LehengaSizeScalarWhereInput | Prisma.LehengaSizeScalarWhereInput[];
};
export type LehengaSizeUncheckedUpdateManyWithoutLehengaNestedInput = {
    create?: Prisma.XOR<Prisma.LehengaSizeCreateWithoutLehengaInput, Prisma.LehengaSizeUncheckedCreateWithoutLehengaInput> | Prisma.LehengaSizeCreateWithoutLehengaInput[] | Prisma.LehengaSizeUncheckedCreateWithoutLehengaInput[];
    connectOrCreate?: Prisma.LehengaSizeCreateOrConnectWithoutLehengaInput | Prisma.LehengaSizeCreateOrConnectWithoutLehengaInput[];
    upsert?: Prisma.LehengaSizeUpsertWithWhereUniqueWithoutLehengaInput | Prisma.LehengaSizeUpsertWithWhereUniqueWithoutLehengaInput[];
    createMany?: Prisma.LehengaSizeCreateManyLehengaInputEnvelope;
    set?: Prisma.LehengaSizeWhereUniqueInput | Prisma.LehengaSizeWhereUniqueInput[];
    disconnect?: Prisma.LehengaSizeWhereUniqueInput | Prisma.LehengaSizeWhereUniqueInput[];
    delete?: Prisma.LehengaSizeWhereUniqueInput | Prisma.LehengaSizeWhereUniqueInput[];
    connect?: Prisma.LehengaSizeWhereUniqueInput | Prisma.LehengaSizeWhereUniqueInput[];
    update?: Prisma.LehengaSizeUpdateWithWhereUniqueWithoutLehengaInput | Prisma.LehengaSizeUpdateWithWhereUniqueWithoutLehengaInput[];
    updateMany?: Prisma.LehengaSizeUpdateManyWithWhereWithoutLehengaInput | Prisma.LehengaSizeUpdateManyWithWhereWithoutLehengaInput[];
    deleteMany?: Prisma.LehengaSizeScalarWhereInput | Prisma.LehengaSizeScalarWhereInput[];
};
export type LehengaSizeCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.LehengaSizeCreateWithoutOrderItemsInput, Prisma.LehengaSizeUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.LehengaSizeCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.LehengaSizeWhereUniqueInput;
};
export type LehengaSizeUpdateOneWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.LehengaSizeCreateWithoutOrderItemsInput, Prisma.LehengaSizeUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.LehengaSizeCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.LehengaSizeUpsertWithoutOrderItemsInput;
    disconnect?: Prisma.LehengaSizeWhereInput | boolean;
    delete?: Prisma.LehengaSizeWhereInput | boolean;
    connect?: Prisma.LehengaSizeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LehengaSizeUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.LehengaSizeUpdateWithoutOrderItemsInput>, Prisma.LehengaSizeUncheckedUpdateWithoutOrderItemsInput>;
};
export type LehengaSizeCreateWithoutLehengaInput = {
    id?: string;
    sizeLabel: string;
    blouseSize?: string | null;
    waistInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: number;
    quantityReserved?: number;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.RentalOrderItemCreateNestedManyWithoutLehengaSizeInput;
};
export type LehengaSizeUncheckedCreateWithoutLehengaInput = {
    id?: string;
    sizeLabel: string;
    blouseSize?: string | null;
    waistInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: number;
    quantityReserved?: number;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutLehengaSizeInput;
};
export type LehengaSizeCreateOrConnectWithoutLehengaInput = {
    where: Prisma.LehengaSizeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LehengaSizeCreateWithoutLehengaInput, Prisma.LehengaSizeUncheckedCreateWithoutLehengaInput>;
};
export type LehengaSizeCreateManyLehengaInputEnvelope = {
    data: Prisma.LehengaSizeCreateManyLehengaInput | Prisma.LehengaSizeCreateManyLehengaInput[];
    skipDuplicates?: boolean;
};
export type LehengaSizeUpsertWithWhereUniqueWithoutLehengaInput = {
    where: Prisma.LehengaSizeWhereUniqueInput;
    update: Prisma.XOR<Prisma.LehengaSizeUpdateWithoutLehengaInput, Prisma.LehengaSizeUncheckedUpdateWithoutLehengaInput>;
    create: Prisma.XOR<Prisma.LehengaSizeCreateWithoutLehengaInput, Prisma.LehengaSizeUncheckedCreateWithoutLehengaInput>;
};
export type LehengaSizeUpdateWithWhereUniqueWithoutLehengaInput = {
    where: Prisma.LehengaSizeWhereUniqueInput;
    data: Prisma.XOR<Prisma.LehengaSizeUpdateWithoutLehengaInput, Prisma.LehengaSizeUncheckedUpdateWithoutLehengaInput>;
};
export type LehengaSizeUpdateManyWithWhereWithoutLehengaInput = {
    where: Prisma.LehengaSizeScalarWhereInput;
    data: Prisma.XOR<Prisma.LehengaSizeUpdateManyMutationInput, Prisma.LehengaSizeUncheckedUpdateManyWithoutLehengaInput>;
};
export type LehengaSizeScalarWhereInput = {
    AND?: Prisma.LehengaSizeScalarWhereInput | Prisma.LehengaSizeScalarWhereInput[];
    OR?: Prisma.LehengaSizeScalarWhereInput[];
    NOT?: Prisma.LehengaSizeScalarWhereInput | Prisma.LehengaSizeScalarWhereInput[];
    id?: Prisma.StringFilter<"LehengaSize"> | string;
    lehengaId?: Prisma.StringFilter<"LehengaSize"> | string;
    sizeLabel?: Prisma.StringFilter<"LehengaSize"> | string;
    blouseSize?: Prisma.StringNullableFilter<"LehengaSize"> | string | null;
    waistInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.DecimalNullableFilter<"LehengaSize"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFilter<"LehengaSize"> | number;
    quantityReserved?: Prisma.IntFilter<"LehengaSize"> | number;
    notes?: Prisma.StringNullableFilter<"LehengaSize"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LehengaSize"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LehengaSize"> | Date | string;
};
export type LehengaSizeCreateWithoutOrderItemsInput = {
    id?: string;
    sizeLabel: string;
    blouseSize?: string | null;
    waistInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: number;
    quantityReserved?: number;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lehenga: Prisma.LehengaCreateNestedOneWithoutSizesInput;
};
export type LehengaSizeUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    lehengaId: string;
    sizeLabel: string;
    blouseSize?: string | null;
    waistInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: number;
    quantityReserved?: number;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LehengaSizeCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.LehengaSizeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LehengaSizeCreateWithoutOrderItemsInput, Prisma.LehengaSizeUncheckedCreateWithoutOrderItemsInput>;
};
export type LehengaSizeUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.LehengaSizeUpdateWithoutOrderItemsInput, Prisma.LehengaSizeUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.LehengaSizeCreateWithoutOrderItemsInput, Prisma.LehengaSizeUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.LehengaSizeWhereInput;
};
export type LehengaSizeUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.LehengaSizeWhereInput;
    data: Prisma.XOR<Prisma.LehengaSizeUpdateWithoutOrderItemsInput, Prisma.LehengaSizeUncheckedUpdateWithoutOrderItemsInput>;
};
export type LehengaSizeUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    blouseSize?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waistInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lehenga?: Prisma.LehengaUpdateOneRequiredWithoutSizesNestedInput;
};
export type LehengaSizeUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lehengaId?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    blouseSize?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waistInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LehengaSizeCreateManyLehengaInput = {
    id?: string;
    sizeLabel: string;
    blouseSize?: string | null;
    waistInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: number;
    quantityReserved?: number;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LehengaSizeUpdateWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    blouseSize?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waistInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.RentalOrderItemUpdateManyWithoutLehengaSizeNestedInput;
};
export type LehengaSizeUncheckedUpdateWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    blouseSize?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waistInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutLehengaSizeNestedInput;
};
export type LehengaSizeUncheckedUpdateManyWithoutLehengaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    blouseSize?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    waistInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bustInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    hipInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lengthInInches?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantityTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type LehengaSizeCountOutputType
 */
export type LehengaSizeCountOutputType = {
    orderItems: number;
};
export type LehengaSizeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderItems?: boolean | LehengaSizeCountOutputTypeCountOrderItemsArgs;
};
/**
 * LehengaSizeCountOutputType without action
 */
export type LehengaSizeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaSizeCountOutputType
     */
    select?: Prisma.LehengaSizeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LehengaSizeCountOutputType without action
 */
export type LehengaSizeCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RentalOrderItemWhereInput;
};
export type LehengaSizeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lehengaId?: boolean;
    sizeLabel?: boolean;
    blouseSize?: boolean;
    waistInInches?: boolean;
    bustInInches?: boolean;
    hipInInches?: boolean;
    lengthInInches?: boolean;
    quantityTotal?: boolean;
    quantityReserved?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
    orderItems?: boolean | Prisma.LehengaSize$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.LehengaSizeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lehengaSize"]>;
export type LehengaSizeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lehengaId?: boolean;
    sizeLabel?: boolean;
    blouseSize?: boolean;
    waistInInches?: boolean;
    bustInInches?: boolean;
    hipInInches?: boolean;
    lengthInInches?: boolean;
    quantityTotal?: boolean;
    quantityReserved?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lehengaSize"]>;
export type LehengaSizeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lehengaId?: boolean;
    sizeLabel?: boolean;
    blouseSize?: boolean;
    waistInInches?: boolean;
    bustInInches?: boolean;
    hipInInches?: boolean;
    lengthInInches?: boolean;
    quantityTotal?: boolean;
    quantityReserved?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lehengaSize"]>;
export type LehengaSizeSelectScalar = {
    id?: boolean;
    lehengaId?: boolean;
    sizeLabel?: boolean;
    blouseSize?: boolean;
    waistInInches?: boolean;
    bustInInches?: boolean;
    hipInInches?: boolean;
    lengthInInches?: boolean;
    quantityTotal?: boolean;
    quantityReserved?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LehengaSizeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lehengaId" | "sizeLabel" | "blouseSize" | "waistInInches" | "bustInInches" | "hipInInches" | "lengthInInches" | "quantityTotal" | "quantityReserved" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["lehengaSize"]>;
export type LehengaSizeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
    orderItems?: boolean | Prisma.LehengaSize$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.LehengaSizeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LehengaSizeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
};
export type LehengaSizeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lehenga?: boolean | Prisma.LehengaDefaultArgs<ExtArgs>;
};
export type $LehengaSizePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LehengaSize";
    objects: {
        lehenga: Prisma.$LehengaPayload<ExtArgs>;
        orderItems: Prisma.$RentalOrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lehengaId: string;
        sizeLabel: string;
        blouseSize: string | null;
        waistInInches: runtime.Decimal | null;
        bustInInches: runtime.Decimal | null;
        hipInInches: runtime.Decimal | null;
        lengthInInches: runtime.Decimal | null;
        quantityTotal: number;
        quantityReserved: number;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lehengaSize"]>;
    composites: {};
};
export type LehengaSizeGetPayload<S extends boolean | null | undefined | LehengaSizeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload, S>;
export type LehengaSizeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LehengaSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LehengaSizeCountAggregateInputType | true;
};
export interface LehengaSizeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LehengaSize'];
        meta: {
            name: 'LehengaSize';
        };
    };
    /**
     * Find zero or one LehengaSize that matches the filter.
     * @param {LehengaSizeFindUniqueArgs} args - Arguments to find a LehengaSize
     * @example
     * // Get one LehengaSize
     * const lehengaSize = await prisma.lehengaSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LehengaSizeFindUniqueArgs>(args: Prisma.SelectSubset<T, LehengaSizeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LehengaSizeClient<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LehengaSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LehengaSizeFindUniqueOrThrowArgs} args - Arguments to find a LehengaSize
     * @example
     * // Get one LehengaSize
     * const lehengaSize = await prisma.lehengaSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LehengaSizeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LehengaSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LehengaSizeClient<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LehengaSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaSizeFindFirstArgs} args - Arguments to find a LehengaSize
     * @example
     * // Get one LehengaSize
     * const lehengaSize = await prisma.lehengaSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LehengaSizeFindFirstArgs>(args?: Prisma.SelectSubset<T, LehengaSizeFindFirstArgs<ExtArgs>>): Prisma.Prisma__LehengaSizeClient<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LehengaSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaSizeFindFirstOrThrowArgs} args - Arguments to find a LehengaSize
     * @example
     * // Get one LehengaSize
     * const lehengaSize = await prisma.lehengaSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LehengaSizeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LehengaSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LehengaSizeClient<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LehengaSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LehengaSizes
     * const lehengaSizes = await prisma.lehengaSize.findMany()
     *
     * // Get first 10 LehengaSizes
     * const lehengaSizes = await prisma.lehengaSize.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lehengaSizeWithIdOnly = await prisma.lehengaSize.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LehengaSizeFindManyArgs>(args?: Prisma.SelectSubset<T, LehengaSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LehengaSize.
     * @param {LehengaSizeCreateArgs} args - Arguments to create a LehengaSize.
     * @example
     * // Create one LehengaSize
     * const LehengaSize = await prisma.lehengaSize.create({
     *   data: {
     *     // ... data to create a LehengaSize
     *   }
     * })
     *
     */
    create<T extends LehengaSizeCreateArgs>(args: Prisma.SelectSubset<T, LehengaSizeCreateArgs<ExtArgs>>): Prisma.Prisma__LehengaSizeClient<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LehengaSizes.
     * @param {LehengaSizeCreateManyArgs} args - Arguments to create many LehengaSizes.
     * @example
     * // Create many LehengaSizes
     * const lehengaSize = await prisma.lehengaSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LehengaSizeCreateManyArgs>(args?: Prisma.SelectSubset<T, LehengaSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LehengaSizes and returns the data saved in the database.
     * @param {LehengaSizeCreateManyAndReturnArgs} args - Arguments to create many LehengaSizes.
     * @example
     * // Create many LehengaSizes
     * const lehengaSize = await prisma.lehengaSize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LehengaSizes and only return the `id`
     * const lehengaSizeWithIdOnly = await prisma.lehengaSize.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LehengaSizeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LehengaSizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LehengaSize.
     * @param {LehengaSizeDeleteArgs} args - Arguments to delete one LehengaSize.
     * @example
     * // Delete one LehengaSize
     * const LehengaSize = await prisma.lehengaSize.delete({
     *   where: {
     *     // ... filter to delete one LehengaSize
     *   }
     * })
     *
     */
    delete<T extends LehengaSizeDeleteArgs>(args: Prisma.SelectSubset<T, LehengaSizeDeleteArgs<ExtArgs>>): Prisma.Prisma__LehengaSizeClient<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LehengaSize.
     * @param {LehengaSizeUpdateArgs} args - Arguments to update one LehengaSize.
     * @example
     * // Update one LehengaSize
     * const lehengaSize = await prisma.lehengaSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LehengaSizeUpdateArgs>(args: Prisma.SelectSubset<T, LehengaSizeUpdateArgs<ExtArgs>>): Prisma.Prisma__LehengaSizeClient<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LehengaSizes.
     * @param {LehengaSizeDeleteManyArgs} args - Arguments to filter LehengaSizes to delete.
     * @example
     * // Delete a few LehengaSizes
     * const { count } = await prisma.lehengaSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LehengaSizeDeleteManyArgs>(args?: Prisma.SelectSubset<T, LehengaSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LehengaSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LehengaSizes
     * const lehengaSize = await prisma.lehengaSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LehengaSizeUpdateManyArgs>(args: Prisma.SelectSubset<T, LehengaSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LehengaSizes and returns the data updated in the database.
     * @param {LehengaSizeUpdateManyAndReturnArgs} args - Arguments to update many LehengaSizes.
     * @example
     * // Update many LehengaSizes
     * const lehengaSize = await prisma.lehengaSize.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LehengaSizes and only return the `id`
     * const lehengaSizeWithIdOnly = await prisma.lehengaSize.updateManyAndReturn({
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
    updateManyAndReturn<T extends LehengaSizeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LehengaSizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LehengaSize.
     * @param {LehengaSizeUpsertArgs} args - Arguments to update or create a LehengaSize.
     * @example
     * // Update or create a LehengaSize
     * const lehengaSize = await prisma.lehengaSize.upsert({
     *   create: {
     *     // ... data to create a LehengaSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LehengaSize we want to update
     *   }
     * })
     */
    upsert<T extends LehengaSizeUpsertArgs>(args: Prisma.SelectSubset<T, LehengaSizeUpsertArgs<ExtArgs>>): Prisma.Prisma__LehengaSizeClient<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LehengaSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaSizeCountArgs} args - Arguments to filter LehengaSizes to count.
     * @example
     * // Count the number of LehengaSizes
     * const count = await prisma.lehengaSize.count({
     *   where: {
     *     // ... the filter for the LehengaSizes we want to count
     *   }
     * })
    **/
    count<T extends LehengaSizeCountArgs>(args?: Prisma.Subset<T, LehengaSizeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LehengaSizeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LehengaSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LehengaSizeAggregateArgs>(args: Prisma.Subset<T, LehengaSizeAggregateArgs>): Prisma.PrismaPromise<GetLehengaSizeAggregateType<T>>;
    /**
     * Group by LehengaSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaSizeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LehengaSizeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LehengaSizeGroupByArgs['orderBy'];
    } : {
        orderBy?: LehengaSizeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LehengaSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLehengaSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LehengaSize model
     */
    readonly fields: LehengaSizeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LehengaSize.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LehengaSizeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lehenga<T extends Prisma.LehengaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LehengaDefaultArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orderItems<T extends Prisma.LehengaSize$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LehengaSize$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the LehengaSize model
 */
export interface LehengaSizeFieldRefs {
    readonly id: Prisma.FieldRef<"LehengaSize", 'String'>;
    readonly lehengaId: Prisma.FieldRef<"LehengaSize", 'String'>;
    readonly sizeLabel: Prisma.FieldRef<"LehengaSize", 'String'>;
    readonly blouseSize: Prisma.FieldRef<"LehengaSize", 'String'>;
    readonly waistInInches: Prisma.FieldRef<"LehengaSize", 'Decimal'>;
    readonly bustInInches: Prisma.FieldRef<"LehengaSize", 'Decimal'>;
    readonly hipInInches: Prisma.FieldRef<"LehengaSize", 'Decimal'>;
    readonly lengthInInches: Prisma.FieldRef<"LehengaSize", 'Decimal'>;
    readonly quantityTotal: Prisma.FieldRef<"LehengaSize", 'Int'>;
    readonly quantityReserved: Prisma.FieldRef<"LehengaSize", 'Int'>;
    readonly notes: Prisma.FieldRef<"LehengaSize", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LehengaSize", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LehengaSize", 'DateTime'>;
}
/**
 * LehengaSize findUnique
 */
export type LehengaSizeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LehengaSize to fetch.
     */
    where: Prisma.LehengaSizeWhereUniqueInput;
};
/**
 * LehengaSize findUniqueOrThrow
 */
export type LehengaSizeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LehengaSize to fetch.
     */
    where: Prisma.LehengaSizeWhereUniqueInput;
};
/**
 * LehengaSize findFirst
 */
export type LehengaSizeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LehengaSize to fetch.
     */
    where?: Prisma.LehengaSizeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LehengaSizes to fetch.
     */
    orderBy?: Prisma.LehengaSizeOrderByWithRelationInput | Prisma.LehengaSizeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LehengaSizes.
     */
    cursor?: Prisma.LehengaSizeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LehengaSizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LehengaSizes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LehengaSizes.
     */
    distinct?: Prisma.LehengaSizeScalarFieldEnum | Prisma.LehengaSizeScalarFieldEnum[];
};
/**
 * LehengaSize findFirstOrThrow
 */
export type LehengaSizeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LehengaSize to fetch.
     */
    where?: Prisma.LehengaSizeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LehengaSizes to fetch.
     */
    orderBy?: Prisma.LehengaSizeOrderByWithRelationInput | Prisma.LehengaSizeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LehengaSizes.
     */
    cursor?: Prisma.LehengaSizeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LehengaSizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LehengaSizes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LehengaSizes.
     */
    distinct?: Prisma.LehengaSizeScalarFieldEnum | Prisma.LehengaSizeScalarFieldEnum[];
};
/**
 * LehengaSize findMany
 */
export type LehengaSizeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LehengaSizes to fetch.
     */
    where?: Prisma.LehengaSizeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LehengaSizes to fetch.
     */
    orderBy?: Prisma.LehengaSizeOrderByWithRelationInput | Prisma.LehengaSizeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LehengaSizes.
     */
    cursor?: Prisma.LehengaSizeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LehengaSizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LehengaSizes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LehengaSizes.
     */
    distinct?: Prisma.LehengaSizeScalarFieldEnum | Prisma.LehengaSizeScalarFieldEnum[];
};
/**
 * LehengaSize create
 */
export type LehengaSizeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a LehengaSize.
     */
    data: Prisma.XOR<Prisma.LehengaSizeCreateInput, Prisma.LehengaSizeUncheckedCreateInput>;
};
/**
 * LehengaSize createMany
 */
export type LehengaSizeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LehengaSizes.
     */
    data: Prisma.LehengaSizeCreateManyInput | Prisma.LehengaSizeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LehengaSize createManyAndReturn
 */
export type LehengaSizeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaSize
     */
    select?: Prisma.LehengaSizeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaSize
     */
    omit?: Prisma.LehengaSizeOmit<ExtArgs> | null;
    /**
     * The data used to create many LehengaSizes.
     */
    data: Prisma.LehengaSizeCreateManyInput | Prisma.LehengaSizeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaSizeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LehengaSize update
 */
export type LehengaSizeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a LehengaSize.
     */
    data: Prisma.XOR<Prisma.LehengaSizeUpdateInput, Prisma.LehengaSizeUncheckedUpdateInput>;
    /**
     * Choose, which LehengaSize to update.
     */
    where: Prisma.LehengaSizeWhereUniqueInput;
};
/**
 * LehengaSize updateMany
 */
export type LehengaSizeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LehengaSizes.
     */
    data: Prisma.XOR<Prisma.LehengaSizeUpdateManyMutationInput, Prisma.LehengaSizeUncheckedUpdateManyInput>;
    /**
     * Filter which LehengaSizes to update
     */
    where?: Prisma.LehengaSizeWhereInput;
    /**
     * Limit how many LehengaSizes to update.
     */
    limit?: number;
};
/**
 * LehengaSize updateManyAndReturn
 */
export type LehengaSizeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaSize
     */
    select?: Prisma.LehengaSizeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaSize
     */
    omit?: Prisma.LehengaSizeOmit<ExtArgs> | null;
    /**
     * The data used to update LehengaSizes.
     */
    data: Prisma.XOR<Prisma.LehengaSizeUpdateManyMutationInput, Prisma.LehengaSizeUncheckedUpdateManyInput>;
    /**
     * Filter which LehengaSizes to update
     */
    where?: Prisma.LehengaSizeWhereInput;
    /**
     * Limit how many LehengaSizes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaSizeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LehengaSize upsert
 */
export type LehengaSizeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the LehengaSize to update in case it exists.
     */
    where: Prisma.LehengaSizeWhereUniqueInput;
    /**
     * In case the LehengaSize found by the `where` argument doesn't exist, create a new LehengaSize with this data.
     */
    create: Prisma.XOR<Prisma.LehengaSizeCreateInput, Prisma.LehengaSizeUncheckedCreateInput>;
    /**
     * In case the LehengaSize was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LehengaSizeUpdateInput, Prisma.LehengaSizeUncheckedUpdateInput>;
};
/**
 * LehengaSize delete
 */
export type LehengaSizeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which LehengaSize to delete.
     */
    where: Prisma.LehengaSizeWhereUniqueInput;
};
/**
 * LehengaSize deleteMany
 */
export type LehengaSizeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LehengaSizes to delete
     */
    where?: Prisma.LehengaSizeWhereInput;
    /**
     * Limit how many LehengaSizes to delete.
     */
    limit?: number;
};
/**
 * LehengaSize.orderItems
 */
export type LehengaSize$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * LehengaSize without action
 */
export type LehengaSizeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=LehengaSize.d.ts.map