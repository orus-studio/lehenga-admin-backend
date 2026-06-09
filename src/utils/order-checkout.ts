import { RentalItemType } from "../generated/prisma/enums.js";
import { getItemAvailability } from "../lib/availability.js";
import { prisma } from "../lib/prisma.js";
import { AppError } from "./app-error.js";
import { ensureObject, getOptionalNumber, getOptionalString, getRequiredArray, getRequiredString } from "./validation.js";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export type ItemMeasurements = {
  upper?: string;
  chest?: string;
  waist?: string;
  armHole?: string;
  mori?: string;
  notes?: string;
};

export type CheckoutInputItem =
  | {
      itemType: typeof RentalItemType.LEHENGA;
      quantity: number;
      lehengaId: string;
      lehengaSizeId?: string;
      rentalStartDate: Date;
      rentalEndDate: Date;
      measurements?: ItemMeasurements;
    }
  | {
      itemType: typeof RentalItemType.JEWELLERY;
      quantity: number;
      jewelleryId: string;
      rentalStartDate: Date;
      rentalEndDate: Date;
    };

export type PreparedCheckoutItem = {
  itemType: typeof RentalItemType.LEHENGA | typeof RentalItemType.JEWELLERY;
  quantity: number;
  productNameSnapshot: string;
  skuSnapshot: string;
  pricePerDay: number;
  rentalStartDate: Date;
  rentalEndDate: Date;
  rentalDays: number;
  lineTotal: number;
  depositAmount: number;
  sizeLabelSnapshot?: string;
  lehengaId?: string;
  lehengaSizeId?: string;
  jewelleryId?: string;
  measurements?: ItemMeasurements;
};

type ExistingEditableOrder = {
  id: string;
  items: Array<{
    id: string;
    quantity: number;
    lehengaSizeId: string | null;
    jewelleryId: string | null;
  }>;
};

export function parseDateValue(value: string, key: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new AppError(`${key} must be a valid date`, 400);
  }

  return date;
}

export function getRentalDays(startDate: Date, endDate: Date) {
  const diff = endDate.getTime() - startDate.getTime();

  if (diff < 0) {
    throw new AppError("rentalEndDate must be on or after rentalStartDate", 400);
  }

  return Math.floor(diff / ONE_DAY_MS) + 1;
}

export function parseCheckoutItems(value: unknown): CheckoutInputItem[] {
  const items = getRequiredArray({ items: value }, "items");

  return items.map((entry, index) => {
    const item = ensureObject(entry, `items[${index}] must be an object`);
    const itemType = getRequiredString(item, "itemType");
    const quantity = getOptionalNumber(item, "quantity") ?? 1;
    const rentalStartDate = parseDateValue(
      getRequiredString(item, "rentalStartDate"),
      `items[${index}].rentalStartDate`,
    );
    const rentalEndDate = parseDateValue(
      getRequiredString(item, "rentalEndDate"),
      `items[${index}].rentalEndDate`,
    );

    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new AppError(`items[${index}].quantity must be a positive integer`, 400);
    }

    if (itemType === RentalItemType.LEHENGA) {
      const measurementsObject =
        item.measurements && typeof item.measurements === "object" ? ensureObject(item.measurements) : null;
      const parsedMeasurements: ItemMeasurements = {};

      if (measurementsObject) {
        const upper = getOptionalString(measurementsObject, "upper");
        const chest = getOptionalString(measurementsObject, "chest");
        const waist = getOptionalString(measurementsObject, "waist");
        const armHole = getOptionalString(measurementsObject, "armHole");
        const mori = getOptionalString(measurementsObject, "mori");
        const notes = getOptionalString(measurementsObject, "notes");

        if (upper) parsedMeasurements.upper = upper;
        if (chest) parsedMeasurements.chest = chest;
        if (waist) parsedMeasurements.waist = waist;
        if (armHole) parsedMeasurements.armHole = armHole;
        if (mori) parsedMeasurements.mori = mori;
        if (notes) parsedMeasurements.notes = notes;
      }

      return {
        itemType,
        quantity,
        lehengaId: getRequiredString(item, "lehengaId"),
        ...(getOptionalString(item, "lehengaSizeId")
          ? { lehengaSizeId: getOptionalString(item, "lehengaSizeId") as string }
          : {}),
        rentalStartDate,
        rentalEndDate,
        ...(Object.keys(parsedMeasurements).length > 0
          ? {
              measurements: parsedMeasurements,
            }
          : {}),
      };
    }

    if (itemType === RentalItemType.JEWELLERY) {
      return {
        itemType,
        quantity,
        jewelleryId: getRequiredString(item, "jewelleryId"),
        rentalStartDate,
        rentalEndDate,
      };
    }

    throw new AppError(`items[${index}].itemType must be LEHENGA or JEWELLERY`, 400);
  });
}

export async function prepareCheckoutItems(items: CheckoutInputItem[], existingOrder?: ExistingEditableOrder) {
  const lehengaItems = items.filter((item) => item.itemType === RentalItemType.LEHENGA);
  const jewelleryItems = items.filter((item) => item.itemType === RentalItemType.JEWELLERY);

  const [lehengas, jewelleryProducts] = await Promise.all([
    lehengaItems.length
      ? prisma.lehenga.findMany({
          where: {
            id: {
              in: lehengaItems.map((item) => item.lehengaId),
            },
          },
          include: {
            sizes: true,
          },
        })
      : Promise.resolve([]),
    jewelleryItems.length
      ? prisma.jewellery.findMany({
          where: {
            id: {
              in: jewelleryItems.map((item) => item.jewelleryId),
            },
          },
        })
      : Promise.resolve([]),
  ]);

  if (lehengas.length !== lehengaItems.length) {
    throw new AppError("One or more selected lehengas were not found", 404);
  }

  if (jewelleryProducts.length !== jewelleryItems.length) {
    throw new AppError("One or more selected jewellery items were not found", 404);
  }

  const lehengasById = new Map(lehengas.map((lehenga) => [lehenga.id, lehenga]));
  const jewelleryById = new Map(jewelleryProducts.map((jewellery) => [jewellery.id, jewellery]));

  return Promise.all(items.map<Promise<PreparedCheckoutItem>>(async (item) => {
    const rentalDays = getRentalDays(item.rentalStartDate, item.rentalEndDate);

    if (item.itemType === RentalItemType.LEHENGA) {
      const lehenga = lehengasById.get(item.lehengaId);

      if (!lehenga) {
        throw new AppError("Selected lehenga was not found", 404);
      }

      const selectedSize =
        (item.lehengaSizeId ? lehenga.sizes.find((size) => size.id === item.lehengaSizeId) : lehenga.sizes[0]) ?? null;

      if (!selectedSize) {
        throw new AppError(`No size is available for ${lehenga.name}`, 400);
      }

      const availability = await getItemAvailability({
        itemType: RentalItemType.LEHENGA,
        productId: lehenga.id,
        sizeId: selectedSize.id,
        startDate: item.rentalStartDate,
        endDate: item.rentalEndDate,
        ...(existingOrder ? { excludeOrderId: existingOrder.id } : {}),
        useCache: false,
      });

      if (item.quantity > availability.quantityAvailable) {
        throw new AppError(
          `${lehenga.name} is not available in the selected size for these rental dates`,
          409,
        );
      }

      const pricePerDay = Number(lehenga.rentalPricePerDay);
      const depositAmount = Number(lehenga.securityDeposit ?? 0);

      return {
        itemType: item.itemType,
        quantity: item.quantity,
        productNameSnapshot: lehenga.name,
        skuSnapshot: lehenga.sku,
        pricePerDay,
        rentalStartDate: item.rentalStartDate,
        rentalEndDate: item.rentalEndDate,
        rentalDays,
        lineTotal: pricePerDay * rentalDays * item.quantity,
        depositAmount: depositAmount * item.quantity,
        sizeLabelSnapshot: selectedSize.sizeLabel,
        lehengaId: lehenga.id,
        lehengaSizeId: selectedSize.id,
        ...(item.measurements ? { measurements: item.measurements } : {}),
      };
    }

    const jewellery = jewelleryById.get(item.jewelleryId);

    if (!jewellery) {
      throw new AppError("Selected jewellery item was not found", 404);
    }

    const availability = await getItemAvailability({
      itemType: RentalItemType.JEWELLERY,
      productId: jewellery.id,
      startDate: item.rentalStartDate,
      endDate: item.rentalEndDate,
      ...(existingOrder ? { excludeOrderId: existingOrder.id } : {}),
      useCache: false,
    });

    if (item.quantity > availability.quantityAvailable) {
      throw new AppError(`${jewellery.name} is not available for these rental dates`, 409);
    }

    const pricePerDay = Number(jewellery.rentalPricePerDay);
    const depositAmount = Number(jewellery.securityDeposit ?? 0);

    return {
      itemType: item.itemType,
      quantity: item.quantity,
      productNameSnapshot: jewellery.name,
      skuSnapshot: jewellery.sku,
      pricePerDay,
      rentalStartDate: item.rentalStartDate,
      rentalEndDate: item.rentalEndDate,
      rentalDays,
      lineTotal: pricePerDay * rentalDays * item.quantity,
      depositAmount: depositAmount * item.quantity,
      jewelleryId: jewellery.id,
    };
  }));
}

export function summarizePreparedCheckout(preparedItems: PreparedCheckoutItem[]) {
  const subtotalAmount = preparedItems.reduce((sum, item) => sum + item.lineTotal, 0);
  const securityDeposit = preparedItems.reduce((sum, item) => sum + item.depositAmount, 0);
  const totalAmount = subtotalAmount + securityDeposit;
  const startTimes = preparedItems.map((item) => item.rentalStartDate.getTime());
  const endTimes = preparedItems.map((item) => item.rentalEndDate.getTime());

  return {
    subtotalAmount,
    securityDeposit,
    totalAmount,
    rentalStartDate: new Date(Math.min(...startTimes)),
    rentalEndDate: new Date(Math.max(...endTimes)),
  };
}

export function buildOrderItemCreates(items: PreparedCheckoutItem[]) {
  return items.map((item) => ({
    itemType: item.itemType,
    ...(item.lehengaId
      ? {
          lehenga: {
            connect: { id: item.lehengaId },
          },
        }
      : {}),
    ...(item.lehengaSizeId
      ? {
          lehengaSize: {
            connect: { id: item.lehengaSizeId },
          },
        }
      : {}),
    ...(item.jewelleryId
      ? {
          jewellery: {
            connect: { id: item.jewelleryId },
          },
        }
      : {}),
    productNameSnapshot: item.productNameSnapshot,
    skuSnapshot: item.skuSnapshot,
    ...(item.sizeLabelSnapshot ? { sizeLabelSnapshot: item.sizeLabelSnapshot } : {}),
    quantity: item.quantity,
    rentalStartDate: item.rentalStartDate,
    rentalEndDate: item.rentalEndDate,
    pricePerDay: item.pricePerDay,
    rentalDays: item.rentalDays,
    lineTotal: item.lineTotal,
    depositAmount: item.depositAmount,
    ...(item.measurements
      ? {
          measurementUpper: item.measurements.upper ?? null,
          measurementChest: item.measurements.chest ?? null,
          measurementWaist: item.measurements.waist ?? null,
          measurementArmHole: item.measurements.armHole ?? null,
          measurementMori: item.measurements.mori ?? null,
          measurementNotes: item.measurements.notes ?? null,
        }
      : {}),
  }));
}

export function buildInventoryApplyOperations(items: PreparedCheckoutItem[]) {
  void items;
  return [];
}

export function buildInventoryRevertOperations(existingOrder: ExistingEditableOrder) {
  void existingOrder;
  return [];
}
