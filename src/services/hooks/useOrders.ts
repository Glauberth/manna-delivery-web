import { AxiosError } from "axios";
// import { Address } from "../../../src/types/Address";
import { Order } from "../../../src/types/Order";
// import { Product } from "../../../src/types/Products";
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

interface AxiosCustomError extends AxiosError {
  response?: AxiosError["response"] & {
    data?: {
      message?: string;
    };
  };
}

const dataAtual = new Date().toLocaleDateString("pt-Br", dateConfig);

type Props = {
  tenantSlug: string;
  mesaComanda?: number;
  codVenda?: number;
};
export async function getOneOrder({ tenantSlug, mesaComanda, codVenda }: Props): Promise<Order> {
  if (!mesaComanda && !codVenda) {
    console.error(`Informe pelo menos a comanda ou o número da venda`);
    throw new Error(`Informe pelo menos a comanda ou o número da venda`);
  }

  const rota = mesaComanda ? `/vendas/${tenantSlug}/comanda/${mesaComanda}` : `/vendas/${tenantSlug}/codvenda/${codVenda}`;
  // console.log({ rota });
  const result: Order | any = await api
    .get(rota)
    .then((res) => {
      return res.data;
    })
    .catch((error: AxiosCustomError) => {
      const errorMessage = error.response?.data?.message || error.message;
      console.log(`${dataAtual} - ${tenantSlug} - Erro get Venda: ${errorMessage}`);
      throw new Error(errorMessage);
    });

  // console.log(result);

  return result;
}

export async function addOrderProduct(tenantSlug: string, dados: DadosNewVenda) {
  //
  const rota = dados.mesa ? `/vendas/mesacomanda/${tenantSlug}` : `/vendas/codvenda/${tenantSlug}`;

  const result: DadosNewVenda[] | any = await api
    .post(rota, dados)
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
