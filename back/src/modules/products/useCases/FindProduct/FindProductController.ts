import { Request, Response } from "express";
import { FindProductUseCase } from "./FindProductUseCase";

export class FindProductController {
  async handle(req: Request, res: Response) {
    const { nomebanco, codproduto } = req.params;

    const findProductsUseCases = new FindProductUseCase();

    const products = await findProductsUseCases.execute(nomebanco, codproduto);

    return res.json(products);
  }
}
