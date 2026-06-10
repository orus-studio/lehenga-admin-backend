import { Router } from "express";

import { JewelleryType, ProductStatus } from "../generated/prisma/enums.js";
import { Prisma } from "../generated/prisma/client.js";
import { sendCachedAdminResponse } from "../lib/catalog-cache.js";
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
} from "../utils/validation.js";

const jewelleryInclude = {
  category: true,
  images: {
    orderBy: {
      sortOrder: "asc" as const,
    },
  },
};

export const jewelleryRouter = Router();

async function getCategorySlug(categoryId?: string) {
  if (!categoryId) {
    return undefined;
  }

  const category = await prisma.category.findUnique({
    where: { id: categoryId },
    select: { slug: true },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category.slug;
}

jewelleryRouter.get(
  "/",
  asyncHandler(async (_request, response) => {
    await sendCachedAdminResponse(response, ["jewellery", "all"], () =>
      prisma.jewellery.findMany({
        orderBy: { createdAt: "desc" },
        include: jewelleryInclude,
      }),
    );
  }),
);

jewelleryRouter.post(
  "/",
  asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const name = getRequiredString(body, "name");
    const slug = slugify(getOptionalString(body, "slug") ?? name);
    const rawImages = parseImageArray(body.images);
    const categoryId = getOptionalString(body, "categoryId");
    const categorySlug = await getCategorySlug(categoryId);
    const images = await uploadCatalogImages(rawImages, {
      category: "jewellery",
      categorySlug,
      productSlug: slug,
    });
    const data: Prisma.JewelleryCreateInput = {
      name,
      slug,
      sku: getRequiredString(body, "sku"),
      type: getOptionalEnum(body, "type", Object.values(JewelleryType)) ?? JewelleryType.OTHER,
      rentalPricePerDay: getRequiredNumber(body, "rentalPricePerDay"),
      minimumRentalDays: getOptionalNumber(body, "minimumRentalDays") ?? 1,
      stockQuantity: getOptionalNumber(body, "stockQuantity") ?? 1,
      pickupAvailable: getOptionalBoolean(body, "pickupAvailable") ?? true,
      status: getOptionalEnum(body, "status", Object.values(ProductStatus)) ?? ProductStatus.DRAFT,
      isFeatured: getOptionalBoolean(body, "isFeatured") ?? false,
      images: {
        create: images,
      },
    };

    const shortDescription = getOptionalString(body, "shortDescription");
    const description = getOptionalString(body, "description");
    const material = getOptionalString(body, "material");
    const color = getOptionalString(body, "color");
    const finish = getOptionalString(body, "finish");
    const stoneDetails = getOptionalString(body, "stoneDetails");
    const occasion = getOptionalString(body, "occasion");
    const securityDeposit = getOptionalNumber(body, "securityDeposit");
    const originalPrice = getOptionalNumber(body, "originalPrice");

    if (shortDescription !== undefined) data.shortDescription = shortDescription;
    if (description !== undefined) data.description = description;
    if (material !== undefined) data.material = material;
    if (color !== undefined) data.color = color;
    if (finish !== undefined) data.finish = finish;
    if (stoneDetails !== undefined) data.stoneDetails = stoneDetails;
    if (occasion !== undefined) data.occasion = occasion;
    if (securityDeposit !== undefined) data.securityDeposit = securityDeposit;
    if (originalPrice !== undefined) data.originalPrice = originalPrice;
    if (categoryId) {
      data.category = {
        connect: { id: categoryId },
      };
    }

    const jewellery = await prisma.jewellery.create({
      data,
      include: jewelleryInclude,
    });

    response.status(201).json({
      success: true,
      message: "Jewellery created successfully",
      data: jewellery,
    });
  }),
);

jewelleryRouter.get(
  "/:id",
  asyncHandler(async (request, response) => {
    const jewelleryId = getRouteParam(request.params.id, "id");

    const jewellery = await prisma.jewellery.findUnique({
      where: { id: jewelleryId },
      include: jewelleryInclude,
    });

    if (!jewellery) {
      throw new AppError("Jewellery not found", 404);
    }

    response.json({
      success: true,
      data: jewellery,
    });
  }),
);

jewelleryRouter.patch(
  "/:id",
  asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const name = getOptionalString(body, "name");
    const slugValue = getOptionalString(body, "slug");
    const rawImages = body.images === undefined ? undefined : parseImageArray(body.images);
    const jewelleryId = getRouteParam(request.params.id, "id");
    const existingJewellery =
      rawImages !== undefined || Object.prototype.hasOwnProperty.call(body, "categoryId") || name || slugValue
        ? await prisma.jewellery.findUnique({
            where: { id: jewelleryId },
            select: {
              name: true,
              slug: true,
              category: {
                select: {
                  slug: true,
                },
              },
            },
          })
        : null;
    const data: Prisma.JewelleryUpdateInput = {};

    if ((rawImages !== undefined || name || slugValue) && !existingJewellery) {
      throw new AppError("Jewellery not found", 404);
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
    const type = getOptionalEnum(body, "type", Object.values(JewelleryType));
    const material = getOptionalString(body, "material");
    const color = getOptionalString(body, "color");
    const finish = getOptionalString(body, "finish");
    const stoneDetails = getOptionalString(body, "stoneDetails");
    const occasion = getOptionalString(body, "occasion");
    const rentalPricePerDay = getOptionalNumber(body, "rentalPricePerDay");
    const securityDeposit = getOptionalNumber(body, "securityDeposit");
    const originalPrice = getOptionalNumber(body, "originalPrice");
    const minimumRentalDays = getOptionalNumber(body, "minimumRentalDays");
    const stockQuantity = getOptionalNumber(body, "stockQuantity");
    const pickupAvailable = getOptionalBoolean(body, "pickupAvailable");
    const status = getOptionalEnum(body, "status", Object.values(ProductStatus));
    const isFeatured = getOptionalBoolean(body, "isFeatured");

    if (sku !== undefined) data.sku = sku;
    if (shortDescription !== undefined) data.shortDescription = shortDescription;
    if (description !== undefined) data.description = description;
    if (type !== undefined) data.type = type;
    if (material !== undefined) data.material = material;
    if (color !== undefined) data.color = color;
    if (finish !== undefined) data.finish = finish;
    if (stoneDetails !== undefined) data.stoneDetails = stoneDetails;
    if (occasion !== undefined) data.occasion = occasion;
    if (rentalPricePerDay !== undefined) data.rentalPricePerDay = rentalPricePerDay;
    if (securityDeposit !== undefined) data.securityDeposit = securityDeposit;
    if (originalPrice !== undefined) data.originalPrice = originalPrice;
    if (minimumRentalDays !== undefined) data.minimumRentalDays = minimumRentalDays;
    if (stockQuantity !== undefined) data.stockQuantity = stockQuantity;
    if (pickupAvailable !== undefined) data.pickupAvailable = pickupAvailable;
    if (status !== undefined) data.status = status;
    if (isFeatured !== undefined) data.isFeatured = isFeatured;

    if (Object.prototype.hasOwnProperty.call(body, "categoryId")) {
      const categoryId = getOptionalString(body, "categoryId");
      data.category = categoryId
        ? { connect: { id: categoryId } }
        : { disconnect: true };
    }

    if (rawImages) {
      const nextCategoryId = Object.prototype.hasOwnProperty.call(body, "categoryId")
        ? getOptionalString(body, "categoryId")
        : undefined;
      const categorySlug =
        nextCategoryId !== undefined
          ? await getCategorySlug(nextCategoryId)
          : existingJewellery?.category?.slug;
      const nextSlug = slugify(
        slugValue ?? name ?? existingJewellery?.slug ?? existingJewellery?.name ?? "jewellery",
      );
      const images = await uploadCatalogImages(rawImages, {
        category: "jewellery",
        categorySlug,
        productSlug: nextSlug,
      });

      data.images = {
        deleteMany: {},
        create: images,
      };
    }

    const jewellery = await prisma.jewellery.update({
      where: { id: jewelleryId },
      data,
      include: jewelleryInclude,
    });

    response.json({
      success: true,
      message: "Jewellery updated successfully",
      data: jewellery,
    });
  }),
);

jewelleryRouter.delete(
  "/:id",
  asyncHandler(async (request, response) => {
    const jewelleryId = getRouteParam(request.params.id, "id");

    await prisma.jewellery.delete({
      where: { id: jewelleryId },
    });

    response.json({
      success: true,
      message: "Jewellery deleted successfully",
    });
  }),
);
