import { Router } from "express";
import { FindProductController } from "./modules/products/useCases/FindProduct/FindProductController";
import { FindProductsController } from "./modules/products/useCases/FindProducts/FindProductsController";

const routes = Router();

//----- Products -----//
const findProductsController = new FindProductsController();
const findProductController = new FindProductController();

routes.get("/api/v1/products/:nomebanco", findProductsController.handle);

routes.get(
  "/api/v1/products/:nomebanco/:codproduto",
  findProductController.handle
);

export { routes };
