import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { randomUUID } from "node:crypto";
import { env } from "../config/env.js";
import { AppError } from "./app-error.js";
import { getCatalogImageUrl, normalizeCatalogImageUrl } from "./catalog-image-url.js";
const s3Client = new S3Client({
    region: env.awsRegion,
    credentials: {
        accessKeyId: env.awsAccessKeyId,
        secretAccessKey: env.awsSecretAccessKey,
    },
});
const dataUrlPattern = /^data:(?<mime>[-\w.+/]+);base64,(?<payload>.+)$/;
function sanitizeSegment(value) {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "uncategorized";
}
function getExtensionFromMimeType(mimeType) {
    switch (mimeType.toLowerCase()) {
        case "image/jpeg":
            return "jpg";
        case "image/png":
            return "png";
        case "image/webp":
            return "webp";
        case "image/gif":
            return "gif";
        case "image/avif":
            return "avif";
        default:
            return mimeType.split("/")[1] || "bin";
    }
}
export async function uploadCatalogImageBuffer(input) {
    try {
        await s3Client.send(new PutObjectCommand({
            Bucket: env.s3BucketName,
            Key: input.key,
            Body: input.buffer,
            ContentType: input.contentType,
            CacheControl: "public, max-age=31536000, immutable",
            ContentDisposition: "inline",
        }));
    }
    catch (error) {
        console.error("S3 catalog image upload failed", error);
        throw new AppError("Image upload failed. Please try again.", 502);
    }
    return getCatalogImageUrl(input.key);
}
async function uploadDataUrlImage(dataUrl, context, sortOrder) {
    const match = dataUrl.match(dataUrlPattern);
    if (!match?.groups?.mime || !match.groups.payload) {
        throw new AppError("Invalid image payload", 400);
    }
    const mimeType = match.groups.mime;
    if (!mimeType.startsWith("image/")) {
        throw new AppError("Only image uploads are supported", 400);
    }
    const buffer = Buffer.from(match.groups.payload, "base64");
    if (buffer.byteLength === 0) {
        throw new AppError("Uploaded image is empty", 400);
    }
    const extension = getExtensionFromMimeType(mimeType);
    const key = [
        "catalog",
        sanitizeSegment(context.categorySlug ?? "uncategorized"),
        context.category,
        sanitizeSegment(context.productSlug),
        `${String(sortOrder + 1).padStart(2, "0")}-${randomUUID()}.${extension}`,
    ].join("/");
    return uploadCatalogImageBuffer({
        buffer,
        contentType: mimeType,
        key,
    });
}
export async function uploadCatalogImages(images, context) {
    return Promise.all(images.map(async (image, index) => ({
        ...image,
        imageUrl: image.imageUrl.startsWith("data:")
            ? await uploadDataUrlImage(image.imageUrl, context, index)
            : normalizeCatalogImageUrl(image.imageUrl),
    })));
}
//# sourceMappingURL=s3-upload.js.map