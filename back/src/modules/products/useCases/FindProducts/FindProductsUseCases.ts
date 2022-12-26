import { prisma } from "../../../../database/prismaClient";
import { sql } from "./sql";

export class FindProductsUseCases {
  async execute(nomebanco: string) {
    const product = prisma(sql, nomebanco);

    return product;
  }
}
