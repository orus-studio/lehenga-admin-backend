import { Router } from "express";
import { Audience, CollectionSeason } from "../generated/prisma/enums.js";
import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";
import { asyncHandler } from "../utils/async-handler.js";
import { AppError } from "../utils/app-error.js";
import { slugify } from "../utils/slug.js";
import { ensureObject, getRouteParam, getOptionalBoolean, getOptionalEnum, getOptionalNumber, getOptionalString, getRequiredString, } from "../utils/validation.js";
export const collectionsRouter = Router();
collectionsRouter.get("/", asyncHandler(async (_request, response) => {
    const collections = await prisma.collection.findMany({
        orderBy: [{ displayOrder: "asc" }, { createdAt: "desc" }],
        include: {
            _count: {
                select: {
                    lehengas: true,
                    jewelleryItems: true,
                },
            },
        },
    });
    response.json({
        success: true,
        data: collections,
    });
}));
collectionsRouter.post("/", asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const name = getRequiredString(body, "name");
    const description = getOptionalString(body, "description");
    const slug = slugify(getOptionalString(body, "slug") ?? name);
    const season = getOptionalEnum(body, "season", Object.values(CollectionSeason));
    const audience = getOptionalEnum(body, "audience", Object.values(Audience));
    const isFeatured = getOptionalBoolean(body, "isFeatured");
    const displayOrder = getOptionalNumber(body, "displayOrder");
    const data = {
        name,
        slug,
    };
    if (description !== undefined) {
        data.description = description;
    }
    if (season !== undefined) {
        data.season = season;
    }
    if (audience !== undefined) {
        data.audience = audience;
    }
    if (isFeatured !== undefined) {
        data.isFeatured = isFeatured;
    }
    if (displayOrder !== undefined) {
        data.displayOrder = displayOrder;
    }
    const collection = await prisma.collection.create({
        data,
    });
    response.status(201).json({
        success: true,
        message: "Collection created successfully",
        data: collection,
    });
}));
collectionsRouter.get("/:id", asyncHandler(async (request, response) => {
    const collectionId = getRouteParam(request.params.id, "id");
    const collection = await prisma.collection.findUnique({
        where: { id: collectionId },
        include: {
            lehengas: {
                orderBy: { createdAt: "desc" },
                include: {
                    images: {
                        orderBy: { sortOrder: "asc" },
                    },
                },
            },
            jewelleryItems: {
                orderBy: { createdAt: "desc" },
                include: {
                    images: {
                        orderBy: { sortOrder: "asc" },
                    },
                },
            },
        },
    });
    if (!collection) {
        throw new AppError("Collection not found", 404);
    }
    response.json({
        success: true,
        data: collection,
    });
}));
collectionsRouter.patch("/:id", asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const name = getOptionalString(body, "name");
    const slugValue = getOptionalString(body, "slug");
    const collectionId = getRouteParam(request.params.id, "id");
    const data = {};
    if (name !== undefined) {
        data.name = name;
    }
    if (slugValue) {
        data.slug = slugify(slugValue);
    }
    else if (name) {
        data.slug = slugify(name);
    }
    const description = getOptionalString(body, "description");
    const season = getOptionalEnum(body, "season", Object.values(CollectionSeason));
    const audience = getOptionalEnum(body, "audience", Object.values(Audience));
    const isFeatured = getOptionalBoolean(body, "isFeatured");
    const displayOrder = getOptionalNumber(body, "displayOrder");
    if (description !== undefined) {
        data.description = description;
    }
    if (season !== undefined) {
        data.season = season;
    }
    if (audience !== undefined) {
        data.audience = audience;
    }
    if (isFeatured !== undefined) {
        data.isFeatured = isFeatured;
    }
    if (displayOrder !== undefined) {
        data.displayOrder = displayOrder;
    }
    const collection = await prisma.collection.update({
        where: { id: collectionId },
        data,
    });
    response.json({
        success: true,
        message: "Collection updated successfully",
        data: collection,
    });
}));
collectionsRouter.delete("/:id", asyncHandler(async (request, response) => {
    const collectionId = getRouteParam(request.params.id, "id");
    await prisma.collection.delete({
        where: { id: collectionId },
    });
    response.json({
        success: true,
        message: "Collection deleted successfully",
    });
}));
//# sourceMappingURL=collections.routes.js.map