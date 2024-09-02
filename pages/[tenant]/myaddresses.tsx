import { getCookie, setCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useAppContext } from "../../contexts/app";
// import { useAuthContext } from "../../contexts/auth";

import { useFormatter } from "../../libs/useFormatter";
import { AddressItem } from "../../src/components/AddressItem";
import { Button } from "../../src/components/Button";
import { Header } from "../../src/components/Header";
import { Address } from "../../src/types/Address";
// import { CartItem } from "../../src/types/CartItem";
import { Tenant } from "../../src/types/Tenent";
import { User } from "../../src/types/User";
import styles from "../../styles/MyAddresses.module.css";
import { autorizeToken } from "../../src/services/hooks/useToken";
import { deleteAddress, getAllAddress, getShippingPrice } from "../../src/services/hooks/useAddress";
import { getTenant } from "../../src/services/hooks/useTenant";
import { useTenantStore } from "../../src/store/TenantStore";

const MyAddresses = (data: Props) => {
  // const { user, setToken, setUser } = useAuthContext();
  // const { tenant, setTenant, setShippingAddress, setShippingPrice } = useAppContext();

  const [tenant, setTenant, user, setUser, setToken, setShippingAddress, setShippingPrice] = useTenantStore((state) => [
    state.tenant,
    state.setTenant,
    state.user,
    state.setUser,
    state.setToken,
    state.setShippingAddress,
    state.setShippingPrice,
  ]);

  useEffect(() => {
    setTenant(data.tenant);
    setToken(data.token);
    if (data.user) setUser(data.user);
  }, []);

  const formatter = useFormatter();
  const router = useRouter();

  const handleAddressSelect = async (address: Address) => {
    const price = await getShippingPrice(address);

    if (price) {
      //Salvar no contexto
      //Endereço e Frete
      setShippingAddress(address);
      setShippingPrice(price);
    }

    router.push(`/${data.tenant.slug}/checkout`);
  };

  const handleNewAddress = () => {
    router.push(`/${data.tenant.slug}/address/new`);
  };

  const handleAddressEdit = (id: number) => {
    router.push(`/${data.tenant.slug}/address/${id}`);
  };

  const handleAddressDelete = async (id: number) => {
    await deleteAddress(id);
    router.reload();
  };

  //Menu Events
  const [menuOpened, setMenuOpened] = useState(0);
  const handleMenuEvent = (event: MouseEvent) => {
    const tagName = (event.target as Element).tagName;

    console.log({ tagName });

    if (!["path", "svg"].includes(tagName)) {
      setMenuOpened(0);
    }
  };

  useEffect(() => {
    window.removeEventListener("click", handleMenuEvent);
    window.addEventListener("click", handleMenuEvent);
    return () => window.removeEventListener("click", handleMenuEvent);
  }, [menuOpened]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Meus Endereços | ${data.tenant.name}`}</title>
      </Head>

      <Header backHref={`/${data.tenant.slug}/checkout`} color={data.tenant.mainColor} title="Meus Endereços" />

      <div className={styles.list}>
        {data.addresses.map((item, index) => (
          <AddressItem
            key={index}
            color={data.tenant.mainColor}
            address={item}
            onSelect={handleAddressSelect}
            onEdit={handleAddressEdit}
            onDelete={handleAddressDelete}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
        ))}
      </div>

      <div className={styles.btnArea}>
        <Button color={data.tenant.mainColor} label="Novo Endereço" onClick={handleNewAddress} fill />
      </div>
    </div>
  );
};

export default MyAddresses;

type Props = {
  tenant: Tenant;
  token: string;
  user: User | null;
  addresses: Address[];
  // codvenda: number;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

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

  //GET LOGGED USER
  //const token = context.req.cookies.token; //Também posso usar assim pra pegar o cookie

  let token = getCookie("token", context);
  if (token === undefined) {
    token = null;
  }

  // console.log("Token: " + token);
  const user = await autorizeToken(token as string);
  if (!user) {
    return {
      redirect: {
        destination: `login`,
        permanent: false,
      },
    };
  }

  //GET ADDRESSES FROM LOGGED USER
  const addresses = await getAllAddress(user.email);

  return {
    props: { tenant, user, token, addresses },
  };
};
