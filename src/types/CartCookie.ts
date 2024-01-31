import { Combo } from "./Combo";

export type CartCookie = {
  id: number;
  qt: number;
  preco: number;
  combo?: Combo[];
};
