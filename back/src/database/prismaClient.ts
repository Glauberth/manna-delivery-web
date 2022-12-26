import { PrismaClient } from "@prisma/client";

const prisma = (sql: string, nomeBanco?: string) => {
  const requestprisma = new PrismaClient({
    datasources: {
      db: {
        url: `mysql://sistema:gsap@manna@web.mannatech.com.br:3306/${nomeBanco}?schema=public`,
      },
    },
  });

  try {
    return requestprisma.$queryRawUnsafe(sql);
  } catch (error) {
    console.log(error);
  }
};

export { prisma };
