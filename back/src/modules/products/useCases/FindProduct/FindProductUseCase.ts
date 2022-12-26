import { prisma } from "../../../../database/prismaClient";
import { sql } from "./sql";

export class FindProductUseCase {
  async execute(nomebanco: string, codproduto: string) {
    const product = prisma(sql(codproduto), nomebanco);

    return product;
  }
}
