import { Combo } from "./Combo";

export type Product = {
  id: number;
  image: string;
  foto?: Buffer;
  categoryId: number;
  categoryName: string;
  name: string;
  description?: string;
  price: number;
  combo?: Combo[];
};
