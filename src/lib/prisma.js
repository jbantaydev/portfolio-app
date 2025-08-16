import { PrismaClient } from '@prisma/client';

/**
 * Global Prisma Client instance.
 * Reused in development to avoid exhausting the connection limit.
 */
const globalForPrisma = globalThis;
if (!globalForPrisma._prisma) {
  globalForPrisma._prisma = new PrismaClient(
    process.env.NODE_ENV !== 'production'
      ? { log: ['error', 'warn'] } // add 'query' if you need debugging
      : undefined
  );
}

const prisma = globalForPrisma._prisma;
export default prisma;
