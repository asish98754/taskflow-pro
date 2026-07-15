import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL must be defined in .env");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
  log: [
    "query",
    "error",
    "warn",
  ],
});

export default prisma;
