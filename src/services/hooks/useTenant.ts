import { useQuery } from "react-query";
import { Tenant } from "../../../src/types/Tenent";
import { api } from "../api";

const dateConfig: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
export async function getTenant(tenantSlug: string): Promise<Tenant> {
  const dataAtual = new Date().toLocaleDateString("pt-Br", dateConfig);
  console.log(`${dataAtual} requisitou Api Tenants ${tenantSlug}`);

  const tenant: Tenant = await api
    .get(`/tenants/mannatec_clientes`)
    .then((res) => {
      try {
        const item: Tenant[] = res.data;

        if (item) {
          const resultado = item.find((item) => {
            if (item.slug == tenantSlug) {
              return true;
            }
          });

          return resultado
            ? resultado
            : {
                logo: "",
                slug: "",
                name: "",
                mainColor: "#bd8631",
                secondColor: "#1b1e23",
                isCatalogo: true,
              };
        } else {
          return {
            logo: "",
            slug: "",
            name: "",
            mainColor: "#bd8631",
            secondColor: "#1b1e23",
            isCatalogo: true,
          };
        }
      } catch (error) {
        console.log(`${dataAtual} Erro no getTenant by Manná:  ${(error as Error).message}`);
        return {
          logo: "",
          slug: "",
          name: "",
          mainColor: "#bd8631",
          secondColor: "#1b1e23",
          isCatalogo: true,
        };
      }
    })
    .catch((error) => {
      console.log(` ${dataAtual} - ${tenantSlug} - Erro Get getTenant by Manná: ${(error as Error).message}`);
      return {
        logo: "",
        slug: "",
        name: "",
        mainColor: "#bd8631",
        secondColor: "#1b1e23",
        isCatalogo: true,
      };
    });

  return tenant;
}

export async function getAllTenant(): Promise<Tenant[]> {
  const dataAtual = new Date().toLocaleDateString("pt-Br", dateConfig);

  const tenant: Tenant[] = await api
    .get(`/tenants/mannatec_clientes`)
    .then((res) => {
      const item: Tenant[] = res.data;
      return item;
    })
    .catch((error) => {
      console.log(` ${dataAtual} - Erro Get getTenants by Manná: ${(error as Error).message}`);
      return [];
    });

  return tenant;
}

export function useTenants() {
  return useQuery(["tenants", 1], () => getAllTenant(), {
    staleTime: 1000 * 30,
  });
}
