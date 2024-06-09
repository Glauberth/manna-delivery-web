import { CartItem } from "../../src/types/CartItem";
import { Product } from "../../src/types/Products";
import { api } from "../api";

const dateConfig: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

export async function getProdutos(tenantSlug: string): Promise<Product[]> {
  //const products = await api.get(`products/${tenantSlug}`);

  const dataAtual = new Date().toLocaleDateString("pt-Br", dateConfig);

  let prods: Product[] = [];

  const produtos: Product[] = await api
    .get(`/products/${tenantSlug}`)
    .then((res) => {
      try {
        const product: Product[] = res.data.map((item: Product) => {
          return {
            ...item,
            URLIMAGE: item.URLIMAGE ? item.URLIMAGE : "/assets/img/sem-foto.png",
          };
        });

        return product;
      } catch (error) {
        console.log(`${dataAtual} Erro no forEach Products by Manná:  ${error}`);
      }

      return prods;
    })
    .catch((error) => {
      console.log(` ${dataAtual} - ${tenantSlug} - Erro Get Products by Manná: ${(error as Error).message}`);
      return [];
    });

  return produtos ? produtos : [];
}

export async function getOneProduct(tenantSlug: string, idProduct: number): Promise<Product | {}> {
  const result = await api
    .get<Product>(`/products/${tenantSlug}/${idProduct}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log((error as Error).message);
      return {};
    });

  return result;
}

export async function getCartProducts(tenantSlug: string, cartCookie: string) {
  let cart: CartItem[] = [];

  if (!cartCookie) return cart;

  const cartJson = JSON.parse(cartCookie);

  // console.log(cartJson);

  for (let i in cartJson) {
    if (cartJson[i].id && cartJson[i].id) {
      // const product = {
      //   ...TEMPORARYonProduct,
      //   id: cartJson[i].id,
      // };

      let productbd: Product;

      await api.get(`/products/${tenantSlug}/${cartJson[i].id}`).then((res) => {
        // console.log(res.data);
        const { CODPRODUTO, CODBARRA, DESCRICAO, PRECOVENDA, CODGRUPO, NOME, OBSERVACAO, URLIMAGE, FOTO } = res.data;

        productbd = {
          CODPRODUTO: CODPRODUTO,
          URLIMAGE: URLIMAGE ? URLIMAGE : "",
          CODGRUPO: CODGRUPO,
          NOME: NOME,
          OBSERVACAO: OBSERVACAO,
          DESCRICAO: DESCRICAO,
          PRECOVENDA: PRECOVENDA,
          COMBO: cartJson[i]?.combo,
        };

        cart.push({
          qt: cartJson[i].qt,
          product: productbd,
        });
      });
    }
  }

  return cart;
}
