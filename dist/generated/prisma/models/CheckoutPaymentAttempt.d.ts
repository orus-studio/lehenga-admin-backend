import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CheckoutPaymentAttempt
 *
 */
export type CheckoutPaymentAttemptModel = runtime.Types.Result.DefaultSelection<Prisma.$CheckoutPaymentAttemptPayload>;
export type AggregateCheckoutPaymentAttempt = {
    _count: CheckoutPaymentAttemptCountAggregateOutputType | null;
    _avg: CheckoutPaymentAttemptAvgAggregateOutputType | null;
    _sum: CheckoutPaymentAttemptSumAggregateOutputType | null;
    _min: CheckoutPaymentAttemptMinAggregateOutputType | null;
    _max: CheckoutPaymentAttemptMaxAggregateOutputType | null;
};
export type CheckoutPaymentAttemptAvgAggregateOutputType = {
    paymentAmount: runtime.Decimal | null;
};
export type CheckoutPaymentAttemptSumAggregateOutputType = {
    paymentAmount: runtime.Decimal | null;
};
export type CheckoutPaymentAttemptMinAggregateOutputType = {
    id: string | null;
    paymentGatewayOrderId: string | null;
    paymentGatewayPaymentId: string | null;
    paymentMethod: $Enums.PaymentMethod | null;
    paymentAmount: runtime.Decimal | null;
    customerId: string | null;
    status: $Enums.CheckoutPaymentAttemptStatus | null;
    expiresAt: Date | null;
    rentalOrderId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CheckoutPaymentAttemptMaxAggregateOutputType = {
    id: string | null;
    paymentGatewayOrderId: string | null;
    paymentGatewayPaymentId: string | null;
    paymentMethod: $Enums.PaymentMethod | null;
    paymentAmount: runtime.Decimal | null;
    customerId: string | null;
    status: $Enums.CheckoutPaymentAttemptStatus | null;
    expiresAt: Date | null;
    rentalOrderId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CheckoutPaymentAttemptCountAggregateOutputType = {
    id: number;
    paymentGatewayOrderId: number;
    paymentGatewayPaymentId: number;
    paymentMethod: number;
    paymentAmount: number;
    checkoutPayload: number;
    customerId: number;
    status: number;
    expiresAt: number;
    rentalOrderId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CheckoutPaymentAttemptAvgAggregateInputType = {
    paymentAmount?: true;
};
export type CheckoutPaymentAttemptSumAggregateInputType = {
    paymentAmount?: true;
};
export type CheckoutPaymentAttemptMinAggregateInputType = {
    id?: true;
    paymentGatewayOrderId?: true;
    paymentGatewayPaymentId?: true;
    paymentMethod?: true;
    paymentAmount?: true;
    customerId?: true;
    status?: true;
    expiresAt?: true;
    rentalOrderId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CheckoutPaymentAttemptMaxAggregateInputType = {
    id?: true;
    paymentGatewayOrderId?: true;
    paymentGatewayPaymentId?: true;
    paymentMethod?: true;
    paymentAmount?: true;
    customerId?: true;
    status?: true;
    expiresAt?: true;
    rentalOrderId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CheckoutPaymentAttemptCountAggregateInputType = {
    id?: true;
    paymentGatewayOrderId?: true;
    paymentGatewayPaymentId?: true;
    paymentMethod?: true;
    paymentAmount?: true;
    checkoutPayload?: true;
    customerId?: true;
    status?: true;
    expiresAt?: true;
    rentalOrderId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CheckoutPaymentAttemptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CheckoutPaymentAttempt to aggregate.
     */
    where?: Prisma.CheckoutPaymentAttemptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckoutPaymentAttempts to fetch.
     */
    orderBy?: Prisma.CheckoutPaymentAttemptOrderByWithRelationInput | Prisma.CheckoutPaymentAttemptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckoutPaymentAttempts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckoutPaymentAttempts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CheckoutPaymentAttempts
    **/
    _count?: true | CheckoutPaymentAttemptCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CheckoutPaymentAttemptAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CheckoutPaymentAttemptSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CheckoutPaymentAttemptMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CheckoutPaymentAttemptMaxAggregateInputType;
};
export type GetCheckoutPaymentAttemptAggregateType<T extends CheckoutPaymentAttemptAggregateArgs> = {
    [P in keyof T & keyof AggregateCheckoutPaymentAttempt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCheckoutPaymentAttempt[P]> : Prisma.GetScalarType<T[P], AggregateCheckoutPaymentAttempt[P]>;
};
export type CheckoutPaymentAttemptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckoutPaymentAttemptWhereInput;
    orderBy?: Prisma.CheckoutPaymentAttemptOrderByWithAggregationInput | Prisma.CheckoutPaymentAttemptOrderByWithAggregationInput[];
    by: Prisma.CheckoutPaymentAttemptScalarFieldEnum[] | Prisma.CheckoutPaymentAttemptScalarFieldEnum;
    having?: Prisma.CheckoutPaymentAttemptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CheckoutPaymentAttemptCountAggregateInputType | true;
    _avg?: CheckoutPaymentAttemptAvgAggregateInputType;
    _sum?: CheckoutPaymentAttemptSumAggregateInputType;
    _min?: CheckoutPaymentAttemptMinAggregateInputType;
    _max?: CheckoutPaymentAttemptMaxAggregateInputType;
};
export type CheckoutPaymentAttemptGroupByOutputType = {
    id: string;
    paymentGatewayOrderId: string;
    paymentGatewayPaymentId: string | null;
    paymentMethod: $Enums.PaymentMethod;
    paymentAmount: runtime.Decimal;
    checkoutPayload: runtime.JsonValue;
    customerId: string | null;
    status: $Enums.CheckoutPaymentAttemptStatus;
    expiresAt: Date;
    rentalOrderId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CheckoutPaymentAttemptCountAggregateOutputType | null;
    _avg: CheckoutPaymentAttemptAvgAggregateOutputType | null;
    _sum: CheckoutPaymentAttemptSumAggregateOutputType | null;
    _min: CheckoutPaymentAttemptMinAggregateOutputType | null;
    _max: CheckoutPaymentAttemptMaxAggregateOutputType | null;
};
export type GetCheckoutPaymentAttemptGroupByPayload<T extends CheckoutPaymentAttemptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CheckoutPaymentAttemptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CheckoutPaymentAttemptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CheckoutPaymentAttemptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CheckoutPaymentAttemptGroupByOutputType[P]>;
}>>;
export type CheckoutPaymentAttemptWhereInput = {
    AND?: Prisma.CheckoutPaymentAttemptWhereInput | Prisma.CheckoutPaymentAttemptWhereInput[];
    OR?: Prisma.CheckoutPaymentAttemptWhereInput[];
    NOT?: Prisma.CheckoutPaymentAttemptWhereInput | Prisma.CheckoutPaymentAttemptWhereInput[];
    id?: Prisma.StringFilter<"CheckoutPaymentAttempt"> | string;
    paymentGatewayOrderId?: Prisma.StringFilter<"CheckoutPaymentAttempt"> | string;
    paymentGatewayPaymentId?: Prisma.StringNullableFilter<"CheckoutPaymentAttempt"> | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"CheckoutPaymentAttempt"> | $Enums.PaymentMethod;
    paymentAmount?: Prisma.DecimalFilter<"CheckoutPaymentAttempt"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload?: Prisma.JsonFilter<"CheckoutPaymentAttempt">;
    customerId?: Prisma.StringNullableFilter<"CheckoutPaymentAttempt"> | string | null;
    status?: Prisma.EnumCheckoutPaymentAttemptStatusFilter<"CheckoutPaymentAttempt"> | $Enums.CheckoutPaymentAttemptStatus;
    expiresAt?: Prisma.DateTimeFilter<"CheckoutPaymentAttempt"> | Date | string;
    rentalOrderId?: Prisma.StringNullableFilter<"CheckoutPaymentAttempt"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CheckoutPaymentAttempt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CheckoutPaymentAttempt"> | Date | string;
    rentalOrder?: Prisma.XOR<Prisma.RentalOrderNullableScalarRelationFilter, Prisma.RentalOrderWhereInput> | null;
};
export type CheckoutPaymentAttemptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    paymentGatewayOrderId?: Prisma.SortOrder;
    paymentGatewayPaymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paymentAmount?: Prisma.SortOrder;
    checkoutPayload?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    rentalOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rentalOrder?: Prisma.RentalOrderOrderByWithRelationInput;
};
export type CheckoutPaymentAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    paymentGatewayOrderId?: string;
    paymentGatewayPaymentId?: string;
    rentalOrderId?: string;
    AND?: Prisma.CheckoutPaymentAttemptWhereInput | Prisma.CheckoutPaymentAttemptWhereInput[];
    OR?: Prisma.CheckoutPaymentAttemptWhereInput[];
    NOT?: Prisma.CheckoutPaymentAttemptWhereInput | Prisma.CheckoutPaymentAttemptWhereInput[];
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"CheckoutPaymentAttempt"> | $Enums.PaymentMethod;
    paymentAmount?: Prisma.DecimalFilter<"CheckoutPaymentAttempt"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload?: Prisma.JsonFilter<"CheckoutPaymentAttempt">;
    customerId?: Prisma.StringNullableFilter<"CheckoutPaymentAttempt"> | string | null;
    status?: Prisma.EnumCheckoutPaymentAttemptStatusFilter<"CheckoutPaymentAttempt"> | $Enums.CheckoutPaymentAttemptStatus;
    expiresAt?: Prisma.DateTimeFilter<"CheckoutPaymentAttempt"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"CheckoutPaymentAttempt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CheckoutPaymentAttempt"> | Date | string;
    rentalOrder?: Prisma.XOR<Prisma.RentalOrderNullableScalarRelationFilter, Prisma.RentalOrderWhereInput> | null;
}, "id" | "paymentGatewayOrderId" | "paymentGatewayPaymentId" | "rentalOrderId">;
export type CheckoutPaymentAttemptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    paymentGatewayOrderId?: Prisma.SortOrder;
    paymentGatewayPaymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paymentAmount?: Prisma.SortOrder;
    checkoutPayload?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    rentalOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CheckoutPaymentAttemptCountOrderByAggregateInput;
    _avg?: Prisma.CheckoutPaymentAttemptAvgOrderByAggregateInput;
    _max?: Prisma.CheckoutPaymentAttemptMaxOrderByAggregateInput;
    _min?: Prisma.CheckoutPaymentAttemptMinOrderByAggregateInput;
    _sum?: Prisma.CheckoutPaymentAttemptSumOrderByAggregateInput;
};
export type CheckoutPaymentAttemptScalarWhereWithAggregatesInput = {
    AND?: Prisma.CheckoutPaymentAttemptScalarWhereWithAggregatesInput | Prisma.CheckoutPaymentAttemptScalarWhereWithAggregatesInput[];
    OR?: Prisma.CheckoutPaymentAttemptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CheckoutPaymentAttemptScalarWhereWithAggregatesInput | Prisma.CheckoutPaymentAttemptScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CheckoutPaymentAttempt"> | string;
    paymentGatewayOrderId?: Prisma.StringWithAggregatesFilter<"CheckoutPaymentAttempt"> | string;
    paymentGatewayPaymentId?: Prisma.StringNullableWithAggregatesFilter<"CheckoutPaymentAttempt"> | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodWithAggregatesFilter<"CheckoutPaymentAttempt"> | $Enums.PaymentMethod;
    paymentAmount?: Prisma.DecimalWithAggregatesFilter<"CheckoutPaymentAttempt"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload?: Prisma.JsonWithAggregatesFilter<"CheckoutPaymentAttempt">;
    customerId?: Prisma.StringNullableWithAggregatesFilter<"CheckoutPaymentAttempt"> | string | null;
    status?: Prisma.EnumCheckoutPaymentAttemptStatusWithAggregatesFilter<"CheckoutPaymentAttempt"> | $Enums.CheckoutPaymentAttemptStatus;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"CheckoutPaymentAttempt"> | Date | string;
    rentalOrderId?: Prisma.StringNullableWithAggregatesFilter<"CheckoutPaymentAttempt"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CheckoutPaymentAttempt"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CheckoutPaymentAttempt"> | Date | string;
};
export type CheckoutPaymentAttemptCreateInput = {
    id: string;
    paymentGatewayOrderId: string;
    paymentGatewayPaymentId?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    paymentAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customerId?: string | null;
    status?: $Enums.CheckoutPaymentAttemptStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rentalOrder?: Prisma.RentalOrderCreateNestedOneWithoutPaymentAttemptInput;
};
export type CheckoutPaymentAttemptUncheckedCreateInput = {
    id: string;
    paymentGatewayOrderId: string;
    paymentGatewayPaymentId?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    paymentAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customerId?: string | null;
    status?: $Enums.CheckoutPaymentAttemptStatus;
    expiresAt: Date | string;
    rentalOrderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckoutPaymentAttemptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paymentAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCheckoutPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.CheckoutPaymentAttemptStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalOrder?: Prisma.RentalOrderUpdateOneWithoutPaymentAttemptNestedInput;
};
export type CheckoutPaymentAttemptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paymentAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCheckoutPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.CheckoutPaymentAttemptStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckoutPaymentAttemptCreateManyInput = {
    id: string;
    paymentGatewayOrderId: string;
    paymentGatewayPaymentId?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    paymentAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customerId?: string | null;
    status?: $Enums.CheckoutPaymentAttemptStatus;
    expiresAt: Date | string;
    rentalOrderId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckoutPaymentAttemptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paymentAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCheckoutPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.CheckoutPaymentAttemptStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckoutPaymentAttemptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paymentAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCheckoutPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.CheckoutPaymentAttemptStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckoutPaymentAttemptNullableScalarRelationFilter = {
    is?: Prisma.CheckoutPaymentAttemptWhereInput | null;
    isNot?: Prisma.CheckoutPaymentAttemptWhereInput | null;
};
export type CheckoutPaymentAttemptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentGatewayOrderId?: Prisma.SortOrder;
    paymentGatewayPaymentId?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paymentAmount?: Prisma.SortOrder;
    checkoutPayload?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    rentalOrderId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckoutPaymentAttemptAvgOrderByAggregateInput = {
    paymentAmount?: Prisma.SortOrder;
};
export type CheckoutPaymentAttemptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentGatewayOrderId?: Prisma.SortOrder;
    paymentGatewayPaymentId?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paymentAmount?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    rentalOrderId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckoutPaymentAttemptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    paymentGatewayOrderId?: Prisma.SortOrder;
    paymentGatewayPaymentId?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    paymentAmount?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    rentalOrderId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CheckoutPaymentAttemptSumOrderByAggregateInput = {
    paymentAmount?: Prisma.SortOrder;
};
export type CheckoutPaymentAttemptCreateNestedOneWithoutRentalOrderInput = {
    create?: Prisma.XOR<Prisma.CheckoutPaymentAttemptCreateWithoutRentalOrderInput, Prisma.CheckoutPaymentAttemptUncheckedCreateWithoutRentalOrderInput>;
    connectOrCreate?: Prisma.CheckoutPaymentAttemptCreateOrConnectWithoutRentalOrderInput;
    connect?: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
};
export type CheckoutPaymentAttemptUncheckedCreateNestedOneWithoutRentalOrderInput = {
    create?: Prisma.XOR<Prisma.CheckoutPaymentAttemptCreateWithoutRentalOrderInput, Prisma.CheckoutPaymentAttemptUncheckedCreateWithoutRentalOrderInput>;
    connectOrCreate?: Prisma.CheckoutPaymentAttemptCreateOrConnectWithoutRentalOrderInput;
    connect?: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
};
export type CheckoutPaymentAttemptUpdateOneWithoutRentalOrderNestedInput = {
    create?: Prisma.XOR<Prisma.CheckoutPaymentAttemptCreateWithoutRentalOrderInput, Prisma.CheckoutPaymentAttemptUncheckedCreateWithoutRentalOrderInput>;
    connectOrCreate?: Prisma.CheckoutPaymentAttemptCreateOrConnectWithoutRentalOrderInput;
    upsert?: Prisma.CheckoutPaymentAttemptUpsertWithoutRentalOrderInput;
    disconnect?: Prisma.CheckoutPaymentAttemptWhereInput | boolean;
    delete?: Prisma.CheckoutPaymentAttemptWhereInput | boolean;
    connect?: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CheckoutPaymentAttemptUpdateToOneWithWhereWithoutRentalOrderInput, Prisma.CheckoutPaymentAttemptUpdateWithoutRentalOrderInput>, Prisma.CheckoutPaymentAttemptUncheckedUpdateWithoutRentalOrderInput>;
};
export type CheckoutPaymentAttemptUncheckedUpdateOneWithoutRentalOrderNestedInput = {
    create?: Prisma.XOR<Prisma.CheckoutPaymentAttemptCreateWithoutRentalOrderInput, Prisma.CheckoutPaymentAttemptUncheckedCreateWithoutRentalOrderInput>;
    connectOrCreate?: Prisma.CheckoutPaymentAttemptCreateOrConnectWithoutRentalOrderInput;
    upsert?: Prisma.CheckoutPaymentAttemptUpsertWithoutRentalOrderInput;
    disconnect?: Prisma.CheckoutPaymentAttemptWhereInput | boolean;
    delete?: Prisma.CheckoutPaymentAttemptWhereInput | boolean;
    connect?: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CheckoutPaymentAttemptUpdateToOneWithWhereWithoutRentalOrderInput, Prisma.CheckoutPaymentAttemptUpdateWithoutRentalOrderInput>, Prisma.CheckoutPaymentAttemptUncheckedUpdateWithoutRentalOrderInput>;
};
export type EnumCheckoutPaymentAttemptStatusFieldUpdateOperationsInput = {
    set?: $Enums.CheckoutPaymentAttemptStatus;
};
export type CheckoutPaymentAttemptCreateWithoutRentalOrderInput = {
    id: string;
    paymentGatewayOrderId: string;
    paymentGatewayPaymentId?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    paymentAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customerId?: string | null;
    status?: $Enums.CheckoutPaymentAttemptStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckoutPaymentAttemptUncheckedCreateWithoutRentalOrderInput = {
    id: string;
    paymentGatewayOrderId: string;
    paymentGatewayPaymentId?: string | null;
    paymentMethod: $Enums.PaymentMethod;
    paymentAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customerId?: string | null;
    status?: $Enums.CheckoutPaymentAttemptStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CheckoutPaymentAttemptCreateOrConnectWithoutRentalOrderInput = {
    where: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckoutPaymentAttemptCreateWithoutRentalOrderInput, Prisma.CheckoutPaymentAttemptUncheckedCreateWithoutRentalOrderInput>;
};
export type CheckoutPaymentAttemptUpsertWithoutRentalOrderInput = {
    update: Prisma.XOR<Prisma.CheckoutPaymentAttemptUpdateWithoutRentalOrderInput, Prisma.CheckoutPaymentAttemptUncheckedUpdateWithoutRentalOrderInput>;
    create: Prisma.XOR<Prisma.CheckoutPaymentAttemptCreateWithoutRentalOrderInput, Prisma.CheckoutPaymentAttemptUncheckedCreateWithoutRentalOrderInput>;
    where?: Prisma.CheckoutPaymentAttemptWhereInput;
};
export type CheckoutPaymentAttemptUpdateToOneWithWhereWithoutRentalOrderInput = {
    where?: Prisma.CheckoutPaymentAttemptWhereInput;
    data: Prisma.XOR<Prisma.CheckoutPaymentAttemptUpdateWithoutRentalOrderInput, Prisma.CheckoutPaymentAttemptUncheckedUpdateWithoutRentalOrderInput>;
};
export type CheckoutPaymentAttemptUpdateWithoutRentalOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paymentAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCheckoutPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.CheckoutPaymentAttemptStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckoutPaymentAttemptUncheckedUpdateWithoutRentalOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    paymentAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    checkoutPayload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCheckoutPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.CheckoutPaymentAttemptStatus;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckoutPaymentAttemptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentGatewayOrderId?: boolean;
    paymentGatewayPaymentId?: boolean;
    paymentMethod?: boolean;
    paymentAmount?: boolean;
    checkoutPayload?: boolean;
    customerId?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    rentalOrderId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    rentalOrder?: boolean | Prisma.CheckoutPaymentAttempt$rentalOrderArgs<ExtArgs>;
}, ExtArgs["result"]["checkoutPaymentAttempt"]>;
export type CheckoutPaymentAttemptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentGatewayOrderId?: boolean;
    paymentGatewayPaymentId?: boolean;
    paymentMethod?: boolean;
    paymentAmount?: boolean;
    checkoutPayload?: boolean;
    customerId?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    rentalOrderId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    rentalOrder?: boolean | Prisma.CheckoutPaymentAttempt$rentalOrderArgs<ExtArgs>;
}, ExtArgs["result"]["checkoutPaymentAttempt"]>;
export type CheckoutPaymentAttemptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    paymentGatewayOrderId?: boolean;
    paymentGatewayPaymentId?: boolean;
    paymentMethod?: boolean;
    paymentAmount?: boolean;
    checkoutPayload?: boolean;
    customerId?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    rentalOrderId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    rentalOrder?: boolean | Prisma.CheckoutPaymentAttempt$rentalOrderArgs<ExtArgs>;
}, ExtArgs["result"]["checkoutPaymentAttempt"]>;
export type CheckoutPaymentAttemptSelectScalar = {
    id?: boolean;
    paymentGatewayOrderId?: boolean;
    paymentGatewayPaymentId?: boolean;
    paymentMethod?: boolean;
    paymentAmount?: boolean;
    checkoutPayload?: boolean;
    customerId?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    rentalOrderId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CheckoutPaymentAttemptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "paymentGatewayOrderId" | "paymentGatewayPaymentId" | "paymentMethod" | "paymentAmount" | "checkoutPayload" | "customerId" | "status" | "expiresAt" | "rentalOrderId" | "createdAt" | "updatedAt", ExtArgs["result"]["checkoutPaymentAttempt"]>;
export type CheckoutPaymentAttemptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rentalOrder?: boolean | Prisma.CheckoutPaymentAttempt$rentalOrderArgs<ExtArgs>;
};
export type CheckoutPaymentAttemptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rentalOrder?: boolean | Prisma.CheckoutPaymentAttempt$rentalOrderArgs<ExtArgs>;
};
export type CheckoutPaymentAttemptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rentalOrder?: boolean | Prisma.CheckoutPaymentAttempt$rentalOrderArgs<ExtArgs>;
};
export type $CheckoutPaymentAttemptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CheckoutPaymentAttempt";
    objects: {
        rentalOrder: Prisma.$RentalOrderPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        paymentGatewayOrderId: string;
        paymentGatewayPaymentId: string | null;
        paymentMethod: $Enums.PaymentMethod;
        paymentAmount: runtime.Decimal;
        checkoutPayload: runtime.JsonValue;
        customerId: string | null;
        status: $Enums.CheckoutPaymentAttemptStatus;
        expiresAt: Date;
        rentalOrderId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["checkoutPaymentAttempt"]>;
    composites: {};
};
export type CheckoutPaymentAttemptGetPayload<S extends boolean | null | undefined | CheckoutPaymentAttemptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload, S>;
export type CheckoutPaymentAttemptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CheckoutPaymentAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CheckoutPaymentAttemptCountAggregateInputType | true;
};
export interface CheckoutPaymentAttemptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CheckoutPaymentAttempt'];
        meta: {
            name: 'CheckoutPaymentAttempt';
        };
    };
    /**
     * Find zero or one CheckoutPaymentAttempt that matches the filter.
     * @param {CheckoutPaymentAttemptFindUniqueArgs} args - Arguments to find a CheckoutPaymentAttempt
     * @example
     * // Get one CheckoutPaymentAttempt
     * const checkoutPaymentAttempt = await prisma.checkoutPaymentAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckoutPaymentAttemptFindUniqueArgs>(args: Prisma.SelectSubset<T, CheckoutPaymentAttemptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CheckoutPaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CheckoutPaymentAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckoutPaymentAttemptFindUniqueOrThrowArgs} args - Arguments to find a CheckoutPaymentAttempt
     * @example
     * // Get one CheckoutPaymentAttempt
     * const checkoutPaymentAttempt = await prisma.checkoutPaymentAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckoutPaymentAttemptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CheckoutPaymentAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckoutPaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CheckoutPaymentAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutPaymentAttemptFindFirstArgs} args - Arguments to find a CheckoutPaymentAttempt
     * @example
     * // Get one CheckoutPaymentAttempt
     * const checkoutPaymentAttempt = await prisma.checkoutPaymentAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckoutPaymentAttemptFindFirstArgs>(args?: Prisma.SelectSubset<T, CheckoutPaymentAttemptFindFirstArgs<ExtArgs>>): Prisma.Prisma__CheckoutPaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CheckoutPaymentAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutPaymentAttemptFindFirstOrThrowArgs} args - Arguments to find a CheckoutPaymentAttempt
     * @example
     * // Get one CheckoutPaymentAttempt
     * const checkoutPaymentAttempt = await prisma.checkoutPaymentAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckoutPaymentAttemptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CheckoutPaymentAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckoutPaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CheckoutPaymentAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutPaymentAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckoutPaymentAttempts
     * const checkoutPaymentAttempts = await prisma.checkoutPaymentAttempt.findMany()
     *
     * // Get first 10 CheckoutPaymentAttempts
     * const checkoutPaymentAttempts = await prisma.checkoutPaymentAttempt.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const checkoutPaymentAttemptWithIdOnly = await prisma.checkoutPaymentAttempt.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CheckoutPaymentAttemptFindManyArgs>(args?: Prisma.SelectSubset<T, CheckoutPaymentAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CheckoutPaymentAttempt.
     * @param {CheckoutPaymentAttemptCreateArgs} args - Arguments to create a CheckoutPaymentAttempt.
     * @example
     * // Create one CheckoutPaymentAttempt
     * const CheckoutPaymentAttempt = await prisma.checkoutPaymentAttempt.create({
     *   data: {
     *     // ... data to create a CheckoutPaymentAttempt
     *   }
     * })
     *
     */
    create<T extends CheckoutPaymentAttemptCreateArgs>(args: Prisma.SelectSubset<T, CheckoutPaymentAttemptCreateArgs<ExtArgs>>): Prisma.Prisma__CheckoutPaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CheckoutPaymentAttempts.
     * @param {CheckoutPaymentAttemptCreateManyArgs} args - Arguments to create many CheckoutPaymentAttempts.
     * @example
     * // Create many CheckoutPaymentAttempts
     * const checkoutPaymentAttempt = await prisma.checkoutPaymentAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CheckoutPaymentAttemptCreateManyArgs>(args?: Prisma.SelectSubset<T, CheckoutPaymentAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CheckoutPaymentAttempts and returns the data saved in the database.
     * @param {CheckoutPaymentAttemptCreateManyAndReturnArgs} args - Arguments to create many CheckoutPaymentAttempts.
     * @example
     * // Create many CheckoutPaymentAttempts
     * const checkoutPaymentAttempt = await prisma.checkoutPaymentAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CheckoutPaymentAttempts and only return the `id`
     * const checkoutPaymentAttemptWithIdOnly = await prisma.checkoutPaymentAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CheckoutPaymentAttemptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CheckoutPaymentAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CheckoutPaymentAttempt.
     * @param {CheckoutPaymentAttemptDeleteArgs} args - Arguments to delete one CheckoutPaymentAttempt.
     * @example
     * // Delete one CheckoutPaymentAttempt
     * const CheckoutPaymentAttempt = await prisma.checkoutPaymentAttempt.delete({
     *   where: {
     *     // ... filter to delete one CheckoutPaymentAttempt
     *   }
     * })
     *
     */
    delete<T extends CheckoutPaymentAttemptDeleteArgs>(args: Prisma.SelectSubset<T, CheckoutPaymentAttemptDeleteArgs<ExtArgs>>): Prisma.Prisma__CheckoutPaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CheckoutPaymentAttempt.
     * @param {CheckoutPaymentAttemptUpdateArgs} args - Arguments to update one CheckoutPaymentAttempt.
     * @example
     * // Update one CheckoutPaymentAttempt
     * const checkoutPaymentAttempt = await prisma.checkoutPaymentAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CheckoutPaymentAttemptUpdateArgs>(args: Prisma.SelectSubset<T, CheckoutPaymentAttemptUpdateArgs<ExtArgs>>): Prisma.Prisma__CheckoutPaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CheckoutPaymentAttempts.
     * @param {CheckoutPaymentAttemptDeleteManyArgs} args - Arguments to filter CheckoutPaymentAttempts to delete.
     * @example
     * // Delete a few CheckoutPaymentAttempts
     * const { count } = await prisma.checkoutPaymentAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CheckoutPaymentAttemptDeleteManyArgs>(args?: Prisma.SelectSubset<T, CheckoutPaymentAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CheckoutPaymentAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutPaymentAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckoutPaymentAttempts
     * const checkoutPaymentAttempt = await prisma.checkoutPaymentAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CheckoutPaymentAttemptUpdateManyArgs>(args: Prisma.SelectSubset<T, CheckoutPaymentAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CheckoutPaymentAttempts and returns the data updated in the database.
     * @param {CheckoutPaymentAttemptUpdateManyAndReturnArgs} args - Arguments to update many CheckoutPaymentAttempts.
     * @example
     * // Update many CheckoutPaymentAttempts
     * const checkoutPaymentAttempt = await prisma.checkoutPaymentAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CheckoutPaymentAttempts and only return the `id`
     * const checkoutPaymentAttemptWithIdOnly = await prisma.checkoutPaymentAttempt.updateManyAndReturn({
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
    updateManyAndReturn<T extends CheckoutPaymentAttemptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CheckoutPaymentAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CheckoutPaymentAttempt.
     * @param {CheckoutPaymentAttemptUpsertArgs} args - Arguments to update or create a CheckoutPaymentAttempt.
     * @example
     * // Update or create a CheckoutPaymentAttempt
     * const checkoutPaymentAttempt = await prisma.checkoutPaymentAttempt.upsert({
     *   create: {
     *     // ... data to create a CheckoutPaymentAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckoutPaymentAttempt we want to update
     *   }
     * })
     */
    upsert<T extends CheckoutPaymentAttemptUpsertArgs>(args: Prisma.SelectSubset<T, CheckoutPaymentAttemptUpsertArgs<ExtArgs>>): Prisma.Prisma__CheckoutPaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CheckoutPaymentAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutPaymentAttemptCountArgs} args - Arguments to filter CheckoutPaymentAttempts to count.
     * @example
     * // Count the number of CheckoutPaymentAttempts
     * const count = await prisma.checkoutPaymentAttempt.count({
     *   where: {
     *     // ... the filter for the CheckoutPaymentAttempts we want to count
     *   }
     * })
    **/
    count<T extends CheckoutPaymentAttemptCountArgs>(args?: Prisma.Subset<T, CheckoutPaymentAttemptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CheckoutPaymentAttemptCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CheckoutPaymentAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutPaymentAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckoutPaymentAttemptAggregateArgs>(args: Prisma.Subset<T, CheckoutPaymentAttemptAggregateArgs>): Prisma.PrismaPromise<GetCheckoutPaymentAttemptAggregateType<T>>;
    /**
     * Group by CheckoutPaymentAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutPaymentAttemptGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CheckoutPaymentAttemptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CheckoutPaymentAttemptGroupByArgs['orderBy'];
    } : {
        orderBy?: CheckoutPaymentAttemptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CheckoutPaymentAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckoutPaymentAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CheckoutPaymentAttempt model
     */
    readonly fields: CheckoutPaymentAttemptFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CheckoutPaymentAttempt.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CheckoutPaymentAttemptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rentalOrder<T extends Prisma.CheckoutPaymentAttempt$rentalOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CheckoutPaymentAttempt$rentalOrderArgs<ExtArgs>>): Prisma.Prisma__RentalOrderClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the CheckoutPaymentAttempt model
 */
export interface CheckoutPaymentAttemptFieldRefs {
    readonly id: Prisma.FieldRef<"CheckoutPaymentAttempt", 'String'>;
    readonly paymentGatewayOrderId: Prisma.FieldRef<"CheckoutPaymentAttempt", 'String'>;
    readonly paymentGatewayPaymentId: Prisma.FieldRef<"CheckoutPaymentAttempt", 'String'>;
    readonly paymentMethod: Prisma.FieldRef<"CheckoutPaymentAttempt", 'PaymentMethod'>;
    readonly paymentAmount: Prisma.FieldRef<"CheckoutPaymentAttempt", 'Decimal'>;
    readonly checkoutPayload: Prisma.FieldRef<"CheckoutPaymentAttempt", 'Json'>;
    readonly customerId: Prisma.FieldRef<"CheckoutPaymentAttempt", 'String'>;
    readonly status: Prisma.FieldRef<"CheckoutPaymentAttempt", 'CheckoutPaymentAttemptStatus'>;
    readonly expiresAt: Prisma.FieldRef<"CheckoutPaymentAttempt", 'DateTime'>;
    readonly rentalOrderId: Prisma.FieldRef<"CheckoutPaymentAttempt", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CheckoutPaymentAttempt", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CheckoutPaymentAttempt", 'DateTime'>;
}
/**
 * CheckoutPaymentAttempt findUnique
 */
export type CheckoutPaymentAttemptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptInclude<ExtArgs> | null;
    /**
     * Filter, which CheckoutPaymentAttempt to fetch.
     */
    where: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
};
/**
 * CheckoutPaymentAttempt findUniqueOrThrow
 */
export type CheckoutPaymentAttemptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptInclude<ExtArgs> | null;
    /**
     * Filter, which CheckoutPaymentAttempt to fetch.
     */
    where: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
};
/**
 * CheckoutPaymentAttempt findFirst
 */
export type CheckoutPaymentAttemptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptInclude<ExtArgs> | null;
    /**
     * Filter, which CheckoutPaymentAttempt to fetch.
     */
    where?: Prisma.CheckoutPaymentAttemptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckoutPaymentAttempts to fetch.
     */
    orderBy?: Prisma.CheckoutPaymentAttemptOrderByWithRelationInput | Prisma.CheckoutPaymentAttemptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CheckoutPaymentAttempts.
     */
    cursor?: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckoutPaymentAttempts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckoutPaymentAttempts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CheckoutPaymentAttempts.
     */
    distinct?: Prisma.CheckoutPaymentAttemptScalarFieldEnum | Prisma.CheckoutPaymentAttemptScalarFieldEnum[];
};
/**
 * CheckoutPaymentAttempt findFirstOrThrow
 */
export type CheckoutPaymentAttemptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptInclude<ExtArgs> | null;
    /**
     * Filter, which CheckoutPaymentAttempt to fetch.
     */
    where?: Prisma.CheckoutPaymentAttemptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckoutPaymentAttempts to fetch.
     */
    orderBy?: Prisma.CheckoutPaymentAttemptOrderByWithRelationInput | Prisma.CheckoutPaymentAttemptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CheckoutPaymentAttempts.
     */
    cursor?: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckoutPaymentAttempts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckoutPaymentAttempts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CheckoutPaymentAttempts.
     */
    distinct?: Prisma.CheckoutPaymentAttemptScalarFieldEnum | Prisma.CheckoutPaymentAttemptScalarFieldEnum[];
};
/**
 * CheckoutPaymentAttempt findMany
 */
export type CheckoutPaymentAttemptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptInclude<ExtArgs> | null;
    /**
     * Filter, which CheckoutPaymentAttempts to fetch.
     */
    where?: Prisma.CheckoutPaymentAttemptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckoutPaymentAttempts to fetch.
     */
    orderBy?: Prisma.CheckoutPaymentAttemptOrderByWithRelationInput | Prisma.CheckoutPaymentAttemptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CheckoutPaymentAttempts.
     */
    cursor?: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckoutPaymentAttempts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckoutPaymentAttempts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CheckoutPaymentAttempts.
     */
    distinct?: Prisma.CheckoutPaymentAttemptScalarFieldEnum | Prisma.CheckoutPaymentAttemptScalarFieldEnum[];
};
/**
 * CheckoutPaymentAttempt create
 */
export type CheckoutPaymentAttemptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptInclude<ExtArgs> | null;
    /**
     * The data needed to create a CheckoutPaymentAttempt.
     */
    data: Prisma.XOR<Prisma.CheckoutPaymentAttemptCreateInput, Prisma.CheckoutPaymentAttemptUncheckedCreateInput>;
};
/**
 * CheckoutPaymentAttempt createMany
 */
export type CheckoutPaymentAttemptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckoutPaymentAttempts.
     */
    data: Prisma.CheckoutPaymentAttemptCreateManyInput | Prisma.CheckoutPaymentAttemptCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CheckoutPaymentAttempt createManyAndReturn
 */
export type CheckoutPaymentAttemptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * The data used to create many CheckoutPaymentAttempts.
     */
    data: Prisma.CheckoutPaymentAttemptCreateManyInput | Prisma.CheckoutPaymentAttemptCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CheckoutPaymentAttempt update
 */
export type CheckoutPaymentAttemptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptInclude<ExtArgs> | null;
    /**
     * The data needed to update a CheckoutPaymentAttempt.
     */
    data: Prisma.XOR<Prisma.CheckoutPaymentAttemptUpdateInput, Prisma.CheckoutPaymentAttemptUncheckedUpdateInput>;
    /**
     * Choose, which CheckoutPaymentAttempt to update.
     */
    where: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
};
/**
 * CheckoutPaymentAttempt updateMany
 */
export type CheckoutPaymentAttemptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckoutPaymentAttempts.
     */
    data: Prisma.XOR<Prisma.CheckoutPaymentAttemptUpdateManyMutationInput, Prisma.CheckoutPaymentAttemptUncheckedUpdateManyInput>;
    /**
     * Filter which CheckoutPaymentAttempts to update
     */
    where?: Prisma.CheckoutPaymentAttemptWhereInput;
    /**
     * Limit how many CheckoutPaymentAttempts to update.
     */
    limit?: number;
};
/**
 * CheckoutPaymentAttempt updateManyAndReturn
 */
export type CheckoutPaymentAttemptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * The data used to update CheckoutPaymentAttempts.
     */
    data: Prisma.XOR<Prisma.CheckoutPaymentAttemptUpdateManyMutationInput, Prisma.CheckoutPaymentAttemptUncheckedUpdateManyInput>;
    /**
     * Filter which CheckoutPaymentAttempts to update
     */
    where?: Prisma.CheckoutPaymentAttemptWhereInput;
    /**
     * Limit how many CheckoutPaymentAttempts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CheckoutPaymentAttempt upsert
 */
export type CheckoutPaymentAttemptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptInclude<ExtArgs> | null;
    /**
     * The filter to search for the CheckoutPaymentAttempt to update in case it exists.
     */
    where: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
    /**
     * In case the CheckoutPaymentAttempt found by the `where` argument doesn't exist, create a new CheckoutPaymentAttempt with this data.
     */
    create: Prisma.XOR<Prisma.CheckoutPaymentAttemptCreateInput, Prisma.CheckoutPaymentAttemptUncheckedCreateInput>;
    /**
     * In case the CheckoutPaymentAttempt was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CheckoutPaymentAttemptUpdateInput, Prisma.CheckoutPaymentAttemptUncheckedUpdateInput>;
};
/**
 * CheckoutPaymentAttempt delete
 */
export type CheckoutPaymentAttemptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptInclude<ExtArgs> | null;
    /**
     * Filter which CheckoutPaymentAttempt to delete.
     */
    where: Prisma.CheckoutPaymentAttemptWhereUniqueInput;
};
/**
 * CheckoutPaymentAttempt deleteMany
 */
export type CheckoutPaymentAttemptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CheckoutPaymentAttempts to delete
     */
    where?: Prisma.CheckoutPaymentAttemptWhereInput;
    /**
     * Limit how many CheckoutPaymentAttempts to delete.
     */
    limit?: number;
};
/**
 * CheckoutPaymentAttempt.rentalOrder
 */
export type CheckoutPaymentAttempt$rentalOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * CheckoutPaymentAttempt without action
 */
export type CheckoutPaymentAttemptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptInclude<ExtArgs> | null;
};
//# sourceMappingURL=CheckoutPaymentAttempt.d.ts.map