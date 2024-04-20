import { CartItem } from "../../src/types/CartItem";
import { Product } from "../../src/types/Products";
import { api } from "../api";

export async function getProdutos(tenantSlug: string) {
  //const products = await api.get(`products/${tenantSlug}`);

  const dataAtual = new Date().toLocaleDateString("pt-Br", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  let prods: Product[] = [];

  console.log(` ${dataAtual} ${tenantSlug} `);
  const produtos = await api
    .get(`/products/${tenantSlug}`)
    .then((res) => {
      try {
        res.data.forEach((item: any) => {
          // console.log(item);
          prods.push({
            id: item.CODPRODUTO,
            // image: item.URLIMAGE,
            image: item.URLIMAGE ? item.URLIMAGE : "/assets/img/sem-foto.png",
            foto: item.FOTO ? item.FOTO : "",
            //image: imgValid,
            categoryId: item.CODGRUPO,
            categoryName: item.NOME,
            name: item.DESCRICAO,
            description: item.OBSERVACAO,
            price: item.PRECOVENDA,
          });
        });
      } catch (error) {
        console.log(
          `${dataAtual} Erro no forEach Products by Manná:  ${error}`
        );
      }

      return prods;
    })
    .catch((err) => {
      console.log(` ${dataAtual} Erro Get Products by Manná: ${err}`);
      return prods;
    });
  // console.log(produtos);
  return produtos;
}

export async function getOneProduct(tenantSlug: string, idProduct: number) {
  let prod: Product[] = [];

  await api.get(`/products/${tenantSlug}/${idProduct}`).then((res) => {
    const {
      CODPRODUTO,
      CODBARRA,
      DESCRICAO,
      PRECOVENDA,
      CODGRUPO,
      NOME,
      OBSERVACAO,
      URLIMAGE,
      COMBO,
    } = res.data;

    prod = [
      {
        id: CODPRODUTO,
        image: URLIMAGE ? URLIMAGE : "",
        // image: URLIMAGE ? URLIMAGE : "/assets/img/no-foto.svg",
        categoryId: CODGRUPO,
        categoryName: NOME,
        description: OBSERVACAO,
        name: DESCRICAO,
        price: PRECOVENDA,
        combo: COMBO,
      },
    ];
  });

  return prod[0];
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
        const {
          CODPRODUTO,
          CODBARRA,
          DESCRICAO,
          PRECOVENDA,
          CODGRUPO,
          NOME,
          OBSERVACAO,
          URLIMAGE,
          FOTO,
        } = res.data;

        productbd = {
          id: CODPRODUTO,
          image: URLIMAGE ? URLIMAGE : "",
          foto: FOTO,
          // image: URLIMAGE ? URLIMAGE : "/assets/img/no-foto.svg",
          categoryId: CODGRUPO,
          categoryName: NOME,
          description: OBSERVACAO,
          name: DESCRICAO,
          price: PRECOVENDA,
          combo: cartJson[i]?.combo,
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
