import { AppError } from "./app-error.js";
function isPlainObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
export function ensureObject(value, message = "Request body must be an object") {
    if (!isPlainObject(value)) {
        throw new AppError(message, 400);
    }
    return value;
}
export function getRequiredString(body, key) {
    const value = body[key];
    if (typeof value !== "string" || value.trim().length === 0) {
        throw new AppError(`${key} is required`, 400);
    }
    return value.trim();
}
export function getOptionalString(body, key) {
    const value = body[key];
    if (value === undefined || value === null || value === "") {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new AppError(`${key} must be a string`, 400);
    }
    return value.trim();
}
export function getRequiredNumber(body, key) {
    const value = body[key];
    const parsedValue = Number(value);
    if (value === undefined || value === null || Number.isNaN(parsedValue)) {
        throw new AppError(`${key} must be a valid number`, 400);
    }
    return parsedValue;
}
export function getOptionalNumber(body, key) {
    const value = body[key];
    if (value === undefined || value === null || value === "") {
        return undefined;
    }
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) {
        throw new AppError(`${key} must be a valid number`, 400);
    }
    return parsedValue;
}
export function getOptionalBoolean(body, key) {
    const value = body[key];
    if (value === undefined || value === null) {
        return undefined;
    }
    if (typeof value !== "boolean") {
        throw new AppError(`${key} must be a boolean`, 400);
    }
    return value;
}
export function getRequiredArray(body, key) {
    const value = body[key];
    if (!Array.isArray(value) || value.length === 0) {
        throw new AppError(`${key} must be a non-empty array`, 400);
    }
    return value;
}
export function getOptionalArray(body, key) {
    const value = body[key];
    if (value === undefined) {
        return undefined;
    }
    if (!Array.isArray(value)) {
        throw new AppError(`${key} must be an array`, 400);
    }
    return value;
}
export function getOptionalEnum(body, key, allowedValues) {
    const value = body[key];
    if (value === undefined || value === null || value === "") {
        return undefined;
    }
    if (typeof value !== "string" || !allowedValues.includes(value)) {
        throw new AppError(`${key} must be one of: ${allowedValues.join(", ")}`, 400);
    }
    return value;
}
export function getRequiredEnum(body, key, allowedValues) {
    const value = getOptionalEnum(body, key, allowedValues);
    if (!value) {
        throw new AppError(`${key} is required`, 400);
    }
    return value;
}
export function parseImageArray(value) {
    if (!Array.isArray(value) || value.length === 0) {
        throw new AppError("images must be a non-empty array", 400);
    }
    return value.map((entry, index) => {
        const image = ensureObject(entry, `images[${index}] must be an object`);
        const imageUrl = getRequiredString(image, "imageUrl");
        const altText = getOptionalString(image, "altText");
        return {
            imageUrl,
            isPrimary: getOptionalBoolean(image, "isPrimary") ?? index === 0,
            sortOrder: getOptionalNumber(image, "sortOrder") ?? index,
            ...(altText ? { altText } : {}),
        };
    });
}
export function parseLehengaSizeArray(value) {
    if (!Array.isArray(value) || value.length === 0) {
        throw new AppError("sizes must be a non-empty array", 400);
    }
    return value.map((entry, index) => {
        const size = ensureObject(entry, `sizes[${index}] must be an object`);
        const blouseSize = getOptionalString(size, "blouseSize");
        const waistInInches = getOptionalNumber(size, "waistInInches");
        const bustInInches = getOptionalNumber(size, "bustInInches");
        const hipInInches = getOptionalNumber(size, "hipInInches");
        const lengthInInches = getOptionalNumber(size, "lengthInInches");
        const notes = getOptionalString(size, "notes");
        return {
            sizeLabel: getRequiredString(size, "sizeLabel"),
            quantityTotal: getOptionalNumber(size, "quantityTotal") ?? 1,
            quantityReserved: getOptionalNumber(size, "quantityReserved") ?? 0,
            ...(blouseSize ? { blouseSize } : {}),
            ...(waistInInches !== undefined ? { waistInInches } : {}),
            ...(bustInInches !== undefined ? { bustInInches } : {}),
            ...(hipInInches !== undefined ? { hipInInches } : {}),
            ...(lengthInInches !== undefined ? { lengthInInches } : {}),
            ...(notes ? { notes } : {}),
        };
    });
}
export function getRouteParam(value, key) {
    if (typeof value !== "string" || value.trim().length === 0) {
        throw new AppError(`${key} route parameter is required`, 400);
    }
    return value.trim();
}
//# sourceMappingURL=validation.js.map