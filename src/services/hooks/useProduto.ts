import { useQuery } from "react-query";
import { Product } from "../../../src/types/Products";
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
  // console.log("requisitou Api Produtos");

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
        console.log(`${dataAtual} Erro no map do getProdutos Products by Manná:  ${(error as Error).message}`);
      }

      return prods;
    })
    .catch((error) => {
      console.log(` ${dataAtual} - ${tenantSlug} - Erro Get Products by Manná: ${(error as Error).message}`);
      return [];
    });

  // console.log(new Date());

  return produtos ? produtos : [];
}

export async function getOneProduct(tenantSlug: string, idProduct: number): Promise<Product | null> {
  console.log("requisitou Api Produto");
  const dataAtual = new Date().toLocaleDateString("pt-Br", dateConfig);

  const result: Product | null = await api
    .get<Product>(`/products/${tenantSlug}/${idProduct}`)
    .then((res) => {
      try {
        return res.data;
      } catch (error) {
        console.log(` ${dataAtual} - ${tenantSlug} - Erro Get one Product by Manná: ${(error as Error).message}`);
        return null;
      }
    })
    .catch((error) => {
      console.log(` ${dataAtual} - ${tenantSlug} - Erro Get One Product by Manná: ${(error as Error).message}`);
      return null;
    });

  // console.log(result);

  return result;
}

export function useProducts(tenantSlug: string) {
  return useQuery(["produtos", 1], () => getProdutos(tenantSlug), {
    staleTime: 1000 * 30,
  });
}

export function useProduct(tenantSlug: string, idProduct: number) {
  return useQuery(["produto", idProduct], () => getOneProduct(tenantSlug, idProduct), {
    staleTime: 1000 * 30,
  });
}
