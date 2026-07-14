// import { PrismaClient } from "./generated/prisma";
// import { PrismaNeon } from "@prisma/adapter-neon";

// const adapter = new PrismaNeon({
//   connectionString: process.env.DATABASE_URL,
// });

// export const prisma = new PrismaClient({ adapter });


import { PrismaClient } from "./generated/prisma";
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
