import { env } from "./config/env.js";
import { prisma } from "./lib/prisma.js";
import { app } from "./app.js";

async function startServer(): Promise<void> {
  try {
    await prisma.$connect();

    app.listen(env.port, () => {
      console.log(`Lehenga admin backend running on port ${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

await startServer();
