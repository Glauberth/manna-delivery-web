import { PrismaClient } from "@prisma/client";

const prisma = (sql: string, nomeBanco?: string) => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: `mysql://sistema:gsap@manna@web.mannatech.com.br:3306/${nomeBanco}?schema=public`,
      },
    },
  });

  return prisma.$queryRawUnsafe(sql);
};
export { prisma };
