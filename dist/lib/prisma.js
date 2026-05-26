import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "../config/env.js";
import { PrismaClient } from "../generated/prisma/client.js";
function createPoolConfig(databaseUrl) {
    const parsedUrl = new URL(databaseUrl);
    const sslMode = parsedUrl.searchParams.get("sslmode");
    const schema = parsedUrl.searchParams.get("schema") ?? undefined;
    parsedUrl.searchParams.delete("channel_binding");
    parsedUrl.searchParams.delete("sslmode");
    parsedUrl.searchParams.delete("schema");
    const connectionString = parsedUrl.toString();
    return {
        connectionString,
        max: 3,
        idleTimeoutMillis: 30_000,
        connectionTimeoutMillis: 30_000,
        keepAlive: true,
        allowExitOnIdle: false,
        ssl: sslMode && sslMode !== "disable"
            ? {
                rejectUnauthorized: true,
            }
            : undefined,
        application_name: "lehenga-admin-backend",
        options: schema ? `--search_path=${schema}` : undefined,
    };
}
const pool = new pg.Pool({
    ...createPoolConfig(env.databaseUrl),
});
const adapter = new PrismaPg(pool, {
    disposeExternalPool: false,
    onPoolError: (error) => {
        console.error("Postgres pool error", error);
    },
    onConnectionError: (error) => {
        console.error("Postgres connection error", error);
    },
});
export const prisma = new PrismaClient({
    adapter,
});
//# sourceMappingURL=prisma.js.map