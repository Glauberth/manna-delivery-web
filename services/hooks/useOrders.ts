import { Address } from "../../src/types/Address";
import { CartItem } from "../../src/types/CartItem";
import { Order } from "../../src/types/Order";
import { Product } from "../../src/types/Products";

const TEMPORARYonProduct: Product = {
  id: 1,
  image: "", //"https://www.mannatech.com.br/velhojohn/imgappdelivery/58.png", //"/tmp/burguer.png",
  categoryId: 0,
  categoryName: "HAMBURGUER",
  description:
    "O Hamburguer Mais suculento do Brasil, com duas carnes, queijo, cebola, picles e pão com gegilin",
  name: "BURGUER AC/DC",
  price: 25.5,
};

const TEMPORARYorder: Order = {
  codvenda: 101,
  status: "sent",
  orderDate: "2023-03-31",
  codcliente: "1",
  shippingAddress: {
    id: 1,
    cep: "65110000",
    endereco: "Rua 123",
    numero: "123",
    bairro: "Liberdade",
    complemento: "",
    estado: "SP",
    cidade: "São Luís",
  },
  shippingPrice: 9.14,
  paymentType: "card",
  cupom: "CHAMA",
  cupomDiscount: 14.3,
  products: [
    {
      product: {
        ...TEMPORARYonProduct,
        id: 1,
        image: "", //"https://www.mannatech.com.br/velhojohn/imgappdelivery/101.png",
        name: "CHOPP PILSEN/ 475 ML",
        price: 13,
      },
      qt: 1,
    },
    { product: { ...TEMPORARYonProduct, id: 2 }, qt: 2 },
    // { product: { ...TEMPORARYonProduct, id: 3 }, qt: 1 },
  ],
  subtotal: 204,
  total: 198.84,
};

export async function getOneOrder(orderid: number) {
  return TEMPORARYorder;
}

export async function newOrder(
  address: Address,
  paymentType: "money" | "card",
  paymentChange: number,
  cupom: string,
  cart: CartItem[]
) {
  return TEMPORARYorder;
}
