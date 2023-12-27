import { Product } from "../../src/types/Products";
import { api } from "../api";

export async function getProdutos(tenantSlug: string) {
  const products = await api.get(`products/${tenantSlug}`);

  let prods: Product[] = [];

  const produtos = await api
    .get(`/products/${tenantSlug}`)
    .then((res) => {
      console.log(res.data);

      res.data.forEach((item: any) => {
        prods.push({
          id: item.CODPRODUTO,
          // image: item.URLIMAGE,
          image: item.URLIMAGE ? item.URLIMAGE : "/assets/img/sem-foto.png",
          //image: imgValid,
          categoryId: item.CODGRUPO,
          categoryName: item.NOME,
          name: item.DESCRICAO,
          description: item.OBSERVACAO,
          price: item.PRECOVENDA,
        });
      });

      return prods;
    })
    .catch((err) => {
      return console.log(`Erro Get Products by Manná: ${err}`);
    });

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
