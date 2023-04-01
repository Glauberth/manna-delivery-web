import { Address } from "./Address";
import { CartItem } from "./CartItem";

export type Order = {
  codvenda: number;
  status: "pending" | "preparing" | "sent" | "delivered";
  orderDate: string;
  codcliente: string;
  shippingAddress: Address;
  shippingPrice: number;
  paymentType: "money" | "card";
  paymentChange?: number;
  cupom?: string;
  cupomDiscount?: number;
  products: CartItem[];
  subtotal: number;
  total: number;
};
