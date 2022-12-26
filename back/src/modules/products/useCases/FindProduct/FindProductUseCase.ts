import { prisma } from "../../../../database/prismaClient";
import { sql } from "./sql";

export class FindProductUseCase {
  async execute(nomebanco: string, codproduto: string) {
    const product = await prisma(sql(codproduto), nomebanco);
    return product;
  }
}
