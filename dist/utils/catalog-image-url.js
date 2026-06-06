import { env } from "../config/env.js";
function getCloudFrontBaseUrl() {
    return env.cloudfrontDomain?.replace(/\/$/, "");
}
export function getCatalogImageUrl(key) {
    const cloudFrontBaseUrl = getCloudFrontBaseUrl();
    if (!cloudFrontBaseUrl) {
        return `https://${env.s3BucketName}.s3.${env.awsRegion}.amazonaws.com/${key}`;
    }
    return `${cloudFrontBaseUrl}/${key.replace(/^\/+/, "")}`;
}
export function normalizeCatalogImageUrl(imageUrl) {
    const cloudFrontBaseUrl = getCloudFrontBaseUrl();
    if (!cloudFrontBaseUrl || imageUrl.startsWith("data:") || imageUrl.startsWith("blob:")) {
        return imageUrl;
    }
    if (imageUrl.startsWith(`${cloudFrontBaseUrl}/`) || imageUrl === cloudFrontBaseUrl) {
        return imageUrl;
    }
    try {
        const url = new URL(imageUrl);
        const bucketHostnames = new Set([
            `${env.s3BucketName}.s3.${env.awsRegion}.amazonaws.com`,
            `${env.s3BucketName}.s3.amazonaws.com`,
        ]);
        if (bucketHostnames.has(url.hostname)) {
            return `${cloudFrontBaseUrl}${url.pathname}`;
        }
        if ((url.hostname === `s3.${env.awsRegion}.amazonaws.com` || url.hostname === "s3.amazonaws.com") &&
            url.pathname.startsWith(`/${env.s3BucketName}/`)) {
            return `${cloudFrontBaseUrl}/${url.pathname.slice(env.s3BucketName.length + 2)}`;
        }
    }
    catch {
        return imageUrl;
    }
    return imageUrl;
}
export function normalizeCatalogImageUrls(value) {
    if (Array.isArray(value)) {
        return value.map((entry) => normalizeCatalogImageUrls(entry));
    }
    if (!value || typeof value !== "object" || Object.getPrototypeOf(value) !== Object.prototype) {
        return value;
    }
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [
        key,
        key === "imageUrl" && typeof entry === "string"
            ? normalizeCatalogImageUrl(entry)
            : normalizeCatalogImageUrls(entry),
    ]));
}
//# sourceMappingURL=catalog-image-url.js.map