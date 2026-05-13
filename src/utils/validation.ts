import { AppError } from "./app-error.js";

type BodyObject = Record<string, unknown>;

function isPlainObject(value: unknown): value is BodyObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function ensureObject(value: unknown, message = "Request body must be an object"): BodyObject {
  if (!isPlainObject(value)) {
    throw new AppError(message, 400);
  }

  return value;
}

export function getRequiredString(body: BodyObject, key: string): string {
  const value = body[key];

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new AppError(`${key} is required`, 400);
  }

  return value.trim();
}

export function getOptionalString(body: BodyObject, key: string): string | undefined {
  const value = body[key];

  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value !== "string") {
    throw new AppError(`${key} must be a string`, 400);
  }

  return value.trim();
}

export function getRequiredNumber(body: BodyObject, key: string): number {
  const value = body[key];
  const parsedValue = Number(value);

  if (value === undefined || value === null || Number.isNaN(parsedValue)) {
    throw new AppError(`${key} must be a valid number`, 400);
  }

  return parsedValue;
}

export function getOptionalNumber(body: BodyObject, key: string): number | undefined {
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

export function getOptionalBoolean(body: BodyObject, key: string): boolean | undefined {
  const value = body[key];

  if (value === undefined || value === null) {
    return undefined;
  }

  if (typeof value !== "boolean") {
    throw new AppError(`${key} must be a boolean`, 400);
  }

  return value;
}

export function getRequiredArray(body: BodyObject, key: string): unknown[] {
  const value = body[key];

  if (!Array.isArray(value) || value.length === 0) {
    throw new AppError(`${key} must be a non-empty array`, 400);
  }

  return value;
}

export function getOptionalArray(body: BodyObject, key: string): unknown[] | undefined {
  const value = body[key];

  if (value === undefined) {
    return undefined;
  }

  if (!Array.isArray(value)) {
    throw new AppError(`${key} must be an array`, 400);
  }

  return value;
}

export function getOptionalEnum<T extends string>(
  body: BodyObject,
  key: string,
  allowedValues: readonly T[],
): T | undefined {
  const value = body[key];

  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value !== "string" || !allowedValues.includes(value as T)) {
    throw new AppError(`${key} must be one of: ${allowedValues.join(", ")}`, 400);
  }

  return value as T;
}

export function getRequiredEnum<T extends string>(
  body: BodyObject,
  key: string,
  allowedValues: readonly T[],
): T {
  const value = getOptionalEnum(body, key, allowedValues);

  if (!value) {
    throw new AppError(`${key} is required`, 400);
  }

  return value;
}

export function parseImageArray(value: unknown): Array<{
  imageUrl: string;
  altText?: string;
  isPrimary: boolean;
  sortOrder: number;
}> {
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

export function parseLehengaSizeArray(value: unknown): Array<{
  sizeLabel: string;
  blouseSize?: string;
  waistInInches?: number;
  bustInInches?: number;
  hipInInches?: number;
  lengthInInches?: number;
  quantityTotal: number;
  quantityReserved: number;
  notes?: string;
}> {
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

export function getRouteParam(value: unknown, key: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new AppError(`${key} route parameter is required`, 400);
  }

  return value.trim();
}
