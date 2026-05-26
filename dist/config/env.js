import { config } from "dotenv";
config();
function getRequiredEnv(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}
function getFirstRequiredEnv(...names) {
    for (const name of names) {
        const value = process.env[name];
        if (value) {
            return value;
        }
    }
    throw new Error(`Missing required environment variable: ${names.join(" or ")}`);
}
function getNumberEnv(name, fallback) {
    const rawValue = process.env[name];
    if (!rawValue) {
        return fallback;
    }
    const parsedValue = Number(rawValue);
    if (Number.isNaN(parsedValue)) {
        throw new Error(`Environment variable ${name} must be a valid number`);
    }
    return parsedValue;
}
export const env = {
    nodeEnv: process.env.NODE_ENV ?? "development",
    port: getNumberEnv("PORT", 4000),
    databaseUrl: getRequiredEnv("DATABASE_URL"),
    jwtSecret: getRequiredEnv("JWT_SECRET"),
    jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
    razorpayKeyId: process.env.RAZORPAY_KEY_ID ?? "",
    razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET ?? "",
    awsAccessKeyId: getRequiredEnv("AWS_ACCESS_KEY_ID"),
    awsSecretAccessKey: getFirstRequiredEnv("AWS_SECRET_ACCESS_KEY", "AWS_SECRET_KEY_ID"),
    awsRegion: getRequiredEnv("AWS_REGION"),
    s3BucketName: getRequiredEnv("S3_BUCKET_NAME"),
};
//# sourceMappingURL=env.js.map