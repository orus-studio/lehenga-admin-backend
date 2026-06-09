import { OrderStatus, RentalItemType } from "../generated/prisma/enums.js";
import { cachedAvailabilityRead } from "./catalog-cache.js";
import { prisma } from "./prisma.js";

const blockingStatuses = [
  OrderStatus.PENDING,
  OrderStatus.CONFIRMED,
  OrderStatus.READY_FOR_PICKUP,
  OrderStatus.PICKED_UP,
];

type AvailabilityInput = {
  itemType: RentalItemType;
  productId: string;
  sizeId?: string;
  startDate: Date;
  endDate: Date;
  excludeOrderId?: string;
  useCache?: boolean;
};

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

export async function getItemAvailability(input: AvailabilityInput) {
  const loader = async () => {
      if (input.itemType === RentalItemType.LEHENGA) {
        const size = await prisma.lehengaSize.findFirst({
          where: {
            ...(input.sizeId ? { id: input.sizeId } : {}),
            lehengaId: input.productId,
          },
          select: {
            id: true,
            quantityTotal: true,
          },
        });

        if (!size) {
          return { available: false, quantityAvailable: 0 };
        }

        const aggregate = await prisma.rentalOrderItem.aggregate({
          where: {
            lehengaSizeId: size.id,
            rentalStartDate: { lte: input.endDate },
            rentalEndDate: { gte: input.startDate },
            order: {
              status: { in: blockingStatuses },
              ...(input.excludeOrderId ? { id: { not: input.excludeOrderId } } : {}),
            },
          },
          _sum: { quantity: true },
        });
        const quantityAvailable = Math.max(0, size.quantityTotal - (aggregate._sum.quantity ?? 0));

        return { available: quantityAvailable > 0, quantityAvailable };
      }

      const jewellery = await prisma.jewellery.findUnique({
        where: { id: input.productId },
        select: { stockQuantity: true },
      });

      if (!jewellery) {
        return { available: false, quantityAvailable: 0 };
      }

      const aggregate = await prisma.rentalOrderItem.aggregate({
        where: {
          jewelleryId: input.productId,
          rentalStartDate: { lte: input.endDate },
          rentalEndDate: { gte: input.startDate },
          order: {
            status: { in: blockingStatuses },
            ...(input.excludeOrderId ? { id: { not: input.excludeOrderId } } : {}),
          },
        },
        _sum: { quantity: true },
      });
      const quantityAvailable = Math.max(0, jewellery.stockQuantity - (aggregate._sum.quantity ?? 0));

      return { available: quantityAvailable > 0, quantityAvailable };
  };

  if (input.useCache === false) {
    return loader();
  }

  return cachedAvailabilityRead(
    [
      input.itemType,
      input.productId,
      input.sizeId,
      dateKey(input.startDate),
      dateKey(input.endDate),
      input.excludeOrderId,
    ],
    loader,
  );
}
