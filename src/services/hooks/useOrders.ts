import { AxiosError } from "axios";
import { Address } from "../../../src/types/Address";
import { CartItem } from "../../../src/types/CartItem";
import { Order } from "../../../src/types/Order";
import { Product } from "../../../src/types/Products";
import { DadosNewVenda } from "../../types/NewVenda";
import { api } from "../api";

const dateConfig: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const dataAtual = new Date().toLocaleDateString("pt-Br", dateConfig);

const TEMPORARYonProduct: Product = {
  CODBARRA: "1",
  CODPRODUTO: 1,
  URLIMAGE: "", //"https://www.mannatech.com.br/velhojohn/imgappdelivery/58.png", //"/tmp/burguer.png",
  CODGRUPO: 0,
  NOME: "HAMBURGUER",
  OBSERVACAO: "O Hamburguer Mais suculento do Brasil, com duas carnes, queijo, cebola, picles e pão com gegilin",
  DESCRICAO: "BURGUER AC/DC",
  PRECOVENDA: 25.5,
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
        CODPRODUTO: 1,
        URLIMAGE: "", //"https://www.mannatech.com.br/velhojohn/imgappdelivery/101.png",
        DESCRICAO: "CHOPP PILSEN/ 475 ML",
        PRECOVENDA: 13,
      },
      qt: 1,
    },
    { product: { ...TEMPORARYonProduct, CODPRODUTO: 2 }, qt: 2 },
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

export async function addOrderProduct(tenantSlug: string, dados: DadosNewVenda) {
  // Interface para o erro do Axios
  interface AxiosCustomError extends AxiosError {
    response?: AxiosError["response"] & {
      data?: {
        message?: string;
      };
    };
  }

  const result: DadosNewVenda[] | any = await api
    .post(`/vendas/${tenantSlug}`, dados)
    .then((res) => {
      return res;
    })
    .catch((error: AxiosCustomError) => {
      const errorMessage = error.response?.data?.message || error.message;
      console.log(`${dataAtual} - ${tenantSlug} - Erro Post new Venda by Manná: ${errorMessage}`);
      throw new Error(errorMessage);
    });

  return result ? result : [];
}
