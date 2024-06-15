import { useQuery } from "react-query";
import { Group } from "../../src/types/Group";
import { api } from "../api";

const dateConfig: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

export async function getAllGrupos(tenantSlug: string): Promise<Group[]> {
  const dataAtual = new Date().toLocaleDateString("pt-Br", dateConfig);
  console.log("requisitou Api Grupos");

  const grupos: Group[] = await api
    .get(`/grupo/${tenantSlug}`)
    .then((res) => {
      try {
        const grupo: Group[] = res.data.map((item: Group) => {
          return item;
        });

        return grupo;
      } catch (error) {
        console.log(` ${dataAtual} - ${tenantSlug} - Erro Get Grupos by Manná: ${(error as Error).message}`);
        return [];
      }
    })
    .catch((error) => {
      console.log(` ${dataAtual} - ${tenantSlug} - Erro Get Grupos by Manná: ${(error as Error).message}`);
      return [];
    });

  return grupos ? grupos : [];
}

export function useGrupos(tenantSlug: string) {
  return useQuery(["grupos", 1], () => getAllGrupos(tenantSlug), {
    staleTime: 1000 * 30,
  });
}
