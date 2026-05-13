import { Router } from "express";

import { ProductStatus } from "../generated/prisma/enums.js";
import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";
import { asyncHandler } from "../utils/async-handler.js";
import { AppError } from "../utils/app-error.js";
import { uploadCatalogImages } from "../utils/s3-upload.js";
import { slugify } from "../utils/slug.js";
import {
  ensureObject,
  getRouteParam,
  getOptionalBoolean,
  getOptionalEnum,
  getOptionalNumber,
  getOptionalString,
  getRequiredNumber,
  getRequiredString,
  parseImageArray,
  parseLehengaSizeArray,
} from "../utils/validation.js";

const lehengaInclude = {
  collection: true,
  images: {
    orderBy: {
      sortOrder: "asc" as const,
    },
  },
  sizes: {
    orderBy: {
      createdAt: "asc" as const,
    },
  },
};

export const lehengasRouter = Router();

async function getCollectionSlug(collectionId?: string) {
  if (!collectionId) {
    return undefined;
  }

  const collection = await prisma.collection.findUnique({
    where: { id: collectionId },
    select: { slug: true },
  });

  if (!collection) {
    throw new AppError("Collection not found", 404);
  }

  return collection.slug;
}

lehengasRouter.get(
  "/",
  asyncHandler(async (_request, response) => {
    const lehengas = await prisma.lehenga.findMany({
      orderBy: { createdAt: "desc" },
      include: lehengaInclude,
    });

    response.json({
      success: true,
      data: lehengas,
    });
  }),
);

lehengasRouter.post(
  "/",
  asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const name = getRequiredString(body, "name");
    const slug = slugify(getOptionalString(body, "slug") ?? name);
    const rawImages = parseImageArray(body.images);
    const sizes = parseLehengaSizeArray(body.sizes);
    const collectionId = getOptionalString(body, "collectionId");
    const collectionSlug = await getCollectionSlug(collectionId);
    const images = await uploadCatalogImages(rawImages, {
      category: "lehengas",
      collectionSlug,
      productSlug: slug,
    });
    const data: Prisma.LehengaCreateInput = {
      name,
      slug,
      sku: getRequiredString(body, "sku"),
      rentalPricePerDay: getRequiredNumber(body, "rentalPricePerDay"),
      minimumRentalDays: getOptionalNumber(body, "minimumRentalDays") ?? 1,
      pickupAvailable: getOptionalBoolean(body, "pickupAvailable") ?? true,
      status: getOptionalEnum(body, "status", Object.values(ProductStatus)) ?? ProductStatus.DRAFT,
      isFeatured: getOptionalBoolean(body, "isFeatured") ?? false,
      images: {
        create: images,
      },
      sizes: {
        create: sizes,
      },
    };

    const shortDescription = getOptionalString(body, "shortDescription");
    const description = getOptionalString(body, "description");
    const designer = getOptionalString(body, "designer");
    const color = getOptionalString(body, "color");
    const fabric = getOptionalString(body, "fabric");
    const embroideryDetails = getOptionalString(body, "embroideryDetails");
    const occasion = getOptionalString(body, "occasion");
    const setIncludes = getOptionalString(body, "setIncludes");
    const careInstructions = getOptionalString(body, "careInstructions");
    const securityDeposit = getOptionalNumber(body, "securityDeposit");
    const originalPrice = getOptionalNumber(body, "originalPrice");

    if (shortDescription !== undefined) data.shortDescription = shortDescription;
    if (description !== undefined) data.description = description;
    if (designer !== undefined) data.designer = designer;
    if (color !== undefined) data.color = color;
    if (fabric !== undefined) data.fabric = fabric;
    if (embroideryDetails !== undefined) data.embroideryDetails = embroideryDetails;
    if (occasion !== undefined) data.occasion = occasion;
    if (setIncludes !== undefined) data.setIncludes = setIncludes;
    if (careInstructions !== undefined) data.careInstructions = careInstructions;
    if (securityDeposit !== undefined) data.securityDeposit = securityDeposit;
    if (originalPrice !== undefined) data.originalPrice = originalPrice;
    if (collectionId) {
      data.collection = {
        connect: { id: collectionId },
      };
    }

    const lehenga = await prisma.lehenga.create({
      data,
      include: lehengaInclude,
    });

    response.status(201).json({
      success: true,
      message: "Lehenga created successfully",
      data: lehenga,
    });
  }),
);

lehengasRouter.get(
  "/:id",
  asyncHandler(async (request, response) => {
    const lehengaId = getRouteParam(request.params.id, "id");

    const lehenga = await prisma.lehenga.findUnique({
      where: { id: lehengaId },
      include: lehengaInclude,
    });

    if (!lehenga) {
      throw new AppError("Lehenga not found", 404);
    }

    response.json({
      success: true,
      data: lehenga,
    });
  }),
);

lehengasRouter.patch(
  "/:id",
  asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const name = getOptionalString(body, "name");
    const slugValue = getOptionalString(body, "slug");
    const rawImages = body.images === undefined ? undefined : parseImageArray(body.images);
    const sizes = body.sizes === undefined ? undefined : parseLehengaSizeArray(body.sizes);
    const lehengaId = getRouteParam(request.params.id, "id");
    const existingLehenga =
      rawImages !== undefined || Object.prototype.hasOwnProperty.call(body, "collectionId") || name || slugValue
        ? await prisma.lehenga.findUnique({
            where: { id: lehengaId },
            select: {
              name: true,
              slug: true,
              collection: {
                select: {
                  slug: true,
                },
              },
            },
          })
        : null;
    const data: Prisma.LehengaUpdateInput = {};

    if ((rawImages !== undefined || name || slugValue) && !existingLehenga) {
      throw new AppError("Lehenga not found", 404);
    }

    if (name !== undefined) data.name = name;
    if (slugValue) {
      data.slug = slugify(slugValue);
    } else if (name) {
      data.slug = slugify(name);
    }

    const sku = getOptionalString(body, "sku");
    const shortDescription = getOptionalString(body, "shortDescription");
    const description = getOptionalString(body, "description");
    const designer = getOptionalString(body, "designer");
    const color = getOptionalString(body, "color");
    const fabric = getOptionalString(body, "fabric");
    const embroideryDetails = getOptionalString(body, "embroideryDetails");
    const occasion = getOptionalString(body, "occasion");
    const setIncludes = getOptionalString(body, "setIncludes");
    const careInstructions = getOptionalString(body, "careInstructions");
    const rentalPricePerDay = getOptionalNumber(body, "rentalPricePerDay");
    const securityDeposit = getOptionalNumber(body, "securityDeposit");
    const originalPrice = getOptionalNumber(body, "originalPrice");
    const minimumRentalDays = getOptionalNumber(body, "minimumRentalDays");
    const pickupAvailable = getOptionalBoolean(body, "pickupAvailable");
    const status = getOptionalEnum(body, "status", Object.values(ProductStatus));
    const isFeatured = getOptionalBoolean(body, "isFeatured");

    if (sku !== undefined) data.sku = sku;
    if (shortDescription !== undefined) data.shortDescription = shortDescription;
    if (description !== undefined) data.description = description;
    if (designer !== undefined) data.designer = designer;
    if (color !== undefined) data.color = color;
    if (fabric !== undefined) data.fabric = fabric;
    if (embroideryDetails !== undefined) data.embroideryDetails = embroideryDetails;
    if (occasion !== undefined) data.occasion = occasion;
    if (setIncludes !== undefined) data.setIncludes = setIncludes;
    if (careInstructions !== undefined) data.careInstructions = careInstructions;
    if (rentalPricePerDay !== undefined) data.rentalPricePerDay = rentalPricePerDay;
    if (securityDeposit !== undefined) data.securityDeposit = securityDeposit;
    if (originalPrice !== undefined) data.originalPrice = originalPrice;
    if (minimumRentalDays !== undefined) data.minimumRentalDays = minimumRentalDays;
    if (pickupAvailable !== undefined) data.pickupAvailable = pickupAvailable;
    if (status !== undefined) data.status = status;
    if (isFeatured !== undefined) data.isFeatured = isFeatured;

    if (Object.prototype.hasOwnProperty.call(body, "collectionId")) {
      const collectionId = getOptionalString(body, "collectionId");
      data.collection = collectionId
        ? { connect: { id: collectionId } }
        : { disconnect: true };
    }

    if (rawImages) {
      const nextCollectionId = Object.prototype.hasOwnProperty.call(body, "collectionId")
        ? getOptionalString(body, "collectionId")
        : undefined;
      const collectionSlug =
        nextCollectionId !== undefined
          ? await getCollectionSlug(nextCollectionId)
          : existingLehenga?.collection?.slug;
      const nextSlug = slugify(slugValue ?? name ?? existingLehenga?.slug ?? existingLehenga?.name ?? "lehenga");
      const images = await uploadCatalogImages(rawImages, {
        category: "lehengas",
        collectionSlug,
        productSlug: nextSlug,
      });

      data.images = {
        deleteMany: {},
        create: images,
      };
    }

    if (sizes) {
      data.sizes = {
        deleteMany: {},
        create: sizes,
      };
    }

    const lehenga = await prisma.lehenga.update({
      where: { id: lehengaId },
      data,
      include: lehengaInclude,
    });

    response.json({
      success: true,
      message: "Lehenga updated successfully",
      data: lehenga,
    });
  }),
);

lehengasRouter.delete(
  "/:id",
  asyncHandler(async (request, response) => {
    const lehengaId = getRouteParam(request.params.id, "id");

    await prisma.lehenga.delete({
      where: { id: lehengaId },
    });

    response.json({
      success: true,
      message: "Lehenga deleted successfully",
    });
  }),
);
