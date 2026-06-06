type UploadContext = {
    category: "lehengas" | "jewellery";
    categorySlug: string | undefined;
    productSlug: string;
};
type InputImage = {
    imageUrl: string;
    altText?: string;
    isPrimary: boolean;
    sortOrder: number;
};
type OutputImage = InputImage;
export declare function uploadCatalogImageBuffer(input: {
    buffer: Buffer;
    contentType: string;
    key: string;
}): Promise<string>;
export declare function uploadCatalogImages(images: InputImage[], context: UploadContext): Promise<OutputImage[]>;
export {};
//# sourceMappingURL=s3-upload.d.ts.map