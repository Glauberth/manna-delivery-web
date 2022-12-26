import { prisma } from "../../../../database/prismaClient";
import { sql } from "./sql";

export class FindProductsUseCases {
  async execute(nomebanco: string) {
    const product = await prisma(sql, nomebanco);
    return product;
  }
}
