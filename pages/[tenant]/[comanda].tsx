import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Tenant } from "../../src/types/Tenent";
import { useAppContext } from "../../contexts/app";
import { getTenant } from "../../services/hooks/useTenant";

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

  //const api = UseApi(tenantSlug as string);

  //GET Tenant
  const tenant = await getTenant(tenantSlug as string);

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
