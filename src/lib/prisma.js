import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
  // In production, create a new PrismaClient instance
  prisma = new PrismaClient();
} else {
  // In development, reuse the same instance to avoid exhausting the connection limit
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
