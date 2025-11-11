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

export async function updateProduct(tenantSlug: string, idProduct: number, urlImage: string): Promise<Product | null> {
  console.log("requisitou Api Produto");
  console.log(tenantSlug, idProduct, urlImage);
  const dataAtual = new Date().toLocaleDateString("pt-Br", dateConfig);

  const result: Product | null = await api
    .put<Product>(`/products/${tenantSlug}/${idProduct}`, { urlImage })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(` ${dataAtual} - ${tenantSlug} - Erro ao Gravar a Url da Imagem do Produto:  ${(error as Error).message}`);
      return null;
    });

  return result;
}

// Upload externo da imagem para o servidor público e retorna a URL pública
export async function uploadProductImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("doc", file);

  const response = await fetch("https://fileupload.mannatech.com.br/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Falha no upload (${response.status})`);
  }

  const json = (await response.json()) as { fileName?: string };
  if (!json?.fileName) {
    throw new Error("Resposta inválida do servidor de upload");
  }

  return `https://fileupload.mannatech.com.br/files/${json.fileName}`;
}

// Remove a imagem (persiste string vazia)
export async function removeProductImage(tenantSlug: string, idProduct: number): Promise<Product | null> {
  return await updateProduct(tenantSlug, idProduct, "");
}

export async function getProductsDestaque(tenantSlug: string): Promise<Product[]> {
  const dataAtual = new Date().toLocaleDateString("pt-Br", dateConfig);

  let prods: Product[] = [];

  const produtos: Product[] = await api
    .get(`/products/destaque/${tenantSlug}`)
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

  return produtos ? produtos : [];
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

export function useProductsDestaque(tenantSlug: string) {
  return useQuery(["produtosDestaque", tenantSlug], () => getProductsDestaque(tenantSlug), {
    staleTime: 1000 * 30,
  });
}
