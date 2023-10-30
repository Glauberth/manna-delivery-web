import { Combo } from "./Combo";

export type Product = {
  id: number;
  image: string;
  categoryId: number;
  categoryName: string;
  name: string;
  description?: string;
  price: number;
  combo?: Combo[];
};
