import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { randomUUID } from "node:crypto";

import { env } from "../config/env.js";
import { AppError } from "./app-error.js";

const s3Client = new S3Client({
  region: env.awsRegion,
  credentials: {
    accessKeyId: env.awsAccessKeyId,
    secretAccessKey: env.awsSecretAccessKey,
  },
});

const dataUrlPattern = /^data:(?<mime>[-\w.+/]+);base64,(?<payload>.+)$/;

function sanitizeSegment(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "uncategorized";
}

function getExtensionFromMimeType(mimeType: string) {
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

function getPublicUrl(key: string) {
  return `https://${env.s3BucketName}.s3.${env.awsRegion}.amazonaws.com/${key}`;
}

type UploadContext = {
  category: "lehengas" | "jewellery";
  collectionSlug: string | undefined;
  productSlug: string;
};

type InputImage = {
  imageUrl: string;
  altText?: string;
  isPrimary: boolean;
  sortOrder: number;
};

type OutputImage = InputImage;

async function uploadDataUrlImage(dataUrl: string, context: UploadContext, sortOrder: number) {
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
    sanitizeSegment(context.collectionSlug ?? "uncategorized"),
    context.category,
    sanitizeSegment(context.productSlug),
    `${String(sortOrder + 1).padStart(2, "0")}-${randomUUID()}.${extension}`,
  ].join("/");

  await s3Client.send(
    new PutObjectCommand({
      Bucket: env.s3BucketName,
      Key: key,
      Body: buffer,
      ContentType: mimeType,
    }),
  );

  return getPublicUrl(key);
}

export async function uploadCatalogImages(images: InputImage[], context: UploadContext): Promise<OutputImage[]> {
  return Promise.all(
    images.map(async (image, index) => {
      if (!image.imageUrl.startsWith("data:")) {
        return image;
      }

      let imageUrl = image.imageUrl;

      try {
        imageUrl = await uploadDataUrlImage(image.imageUrl, context, index);
      } catch (error) {
        if (error instanceof AppError) {
          throw error;
        }

        console.error("S3 upload failed, keeping inline image payload", error);
      }

      return {
        ...image,
        imageUrl,
      };
    }),
  );
}
