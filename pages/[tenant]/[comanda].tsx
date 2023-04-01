import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Tenant } from "../../src/types/Tenent";
import { useApi } from "../../libs/useApi";
import { useAppContext } from "../../contexts/app";

const Comanda = (data: Props) => {
  const router = useRouter();
  const { setComanda } = useAppContext();
  useEffect(() => {
    if (data.comanda) {
      console.log("numero comanda: " + data.comanda);
      setComanda(data.comanda);
      router.push(`/${data.tenant.slug}`);
    }
  }, [data]);
};
export default Comanda;

type Props = {
  tenant: Tenant;
  comanda: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug, comanda } = context.query;

  const api = useApi(tenantSlug as string);
  //GET Tenant
  const tenant = await api.getTenant();

  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { tenant, comanda },
  };
};
