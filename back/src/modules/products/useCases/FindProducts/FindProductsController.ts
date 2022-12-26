import { Request, Response } from "express";
import { FindProductsUseCases } from "./FindProductsUseCases";

export class FindProductsController {
  async handle(req: Request, res: Response) {
    const { nomebanco } = req.params;

    const findProductsUseCases = new FindProductsUseCases();

    const products = await findProductsUseCases.execute(nomebanco);

    return res.json(products);
  }
}
