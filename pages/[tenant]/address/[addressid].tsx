import { getCookie, setCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../contexts/app";
import { useAuthContext } from "../../../contexts/auth";
import { useApi } from "../../../libs/useApi";
import { useFormatter } from "../../../libs/useFormatter";
import { AddressItem } from "../../../src/components/AddressItem";
import { Button } from "../../../src/components/Button";
import { Header } from "../../../src/components/Header";
import { InputField } from "../../../src/components/InputField";
import { Address } from "../../../src/types/Address";
import { CartItem } from "../../../src/types/CartItem";
import { Tenant } from "../../../src/types/Tenent";
import { User } from "../../../src/types/User";
import styles from "../../../styles/NewAddress.module.css";

const EditAddress = (data: Props) => {
  const { user, setToken, setUser } = useAuthContext();
  const { tenant, setTenant, setShippingAddress, setShippingPrice } =
    useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
    setToken(data.token);
    if (data.user) setUser(data.user);
  }, []);

  const formatter = useFormatter();
  const router = useRouter();
  const api = useApi(data.tenant.slug);

  const [errorFields, setErrorFields] = useState<string[]>([]);

  const [address, setAddress] = useState<Address>(data.address);

  //o valor de field agora é uma das chaves do address
  const changeAddressField = (
    field: keyof Address,
    value: (typeof address)[keyof Address]
  ) => {
    setAddress({
      ...address,
      [field]: value,
    });
  };

  const verifyAddress = () => {
    let newErrorFields = [];
    let aproved = true;
    //esse replace ele remove tudo e deixa só números
    if (address.cep.replaceAll(/[^0-9]/g, "").length !== 8) {
      newErrorFields.push("cep");
      aproved = false;
    }
    if (address.endereco.length <= 2) {
      newErrorFields.push("endereco");
      aproved = false;
    }
    if (address.numero.length < 1) {
      newErrorFields.push("numero");
      aproved = false;
    }
    if (address.bairro.length <= 2) {
      newErrorFields.push("bairro");
      aproved = false;
    }
    if (address.cidade.length <= 2) {
      newErrorFields.push("cidade");
      aproved = false;
    }
    if (address.estado.length !== 2) {
      newErrorFields.push("estado");
      aproved = false;
    }

    setErrorFields(newErrorFields);

    return aproved;
  };

  const handleSaveAddress = async () => {
    if (verifyAddress()) {
      await api.editUserAddress(address);
      router.push(`/${data.tenant.slug}/myaddresses`);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Editar Endereço | ${data.tenant.name}`}</title>
      </Head>

      <Header
        backHref={`/${data.tenant.slug}/myaddresses`}
        color={data.tenant.mainColor}
        title="Editar Endereço"
      />

      <div className={styles.inputs}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.label}>CEP</div>
            <InputField
              color={data.tenant.mainColor}
              placeholder="Digite um CEP"
              value={address.cep}
              onChange={(value) => changeAddressField("cep", value)}
              warning={errorFields.includes("cep")}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.label}>Endereço</div>
            <InputField
              color={data.tenant.mainColor}
              placeholder="Digite um Endereço"
              value={address.endereco}
              onChange={(value) => changeAddressField("endereco", value)}
              warning={errorFields.includes("endereco")}
            />
          </div>
          <div className={styles.column}>
            <div className={styles.label}>Nº</div>
            <InputField
              color={data.tenant.mainColor}
              placeholder="Digite um Número"
              value={address.numero}
              onChange={(value) => changeAddressField("numero", value)}
              warning={errorFields.includes("numero")}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.label}>Bairro</div>
            <InputField
              color={data.tenant.mainColor}
              placeholder="Digite um Bairro"
              value={address.bairro}
              onChange={(value) => changeAddressField("bairro", value)}
              warning={errorFields.includes("bairro")}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.label}>Cidade</div>
            <InputField
              color={data.tenant.mainColor}
              placeholder="Digite uma Cidade"
              value={address.cidade}
              onChange={(value) => changeAddressField("cidade", value)}
              warning={errorFields.includes("cidade")}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.label}>Estado</div>
            <InputField
              color={data.tenant.mainColor}
              placeholder="Digite um Estado"
              value={address.estado}
              onChange={(value) => changeAddressField("estado", value)}
              warning={errorFields.includes("estado")}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.label}>Complemento</div>
            <InputField
              color={data.tenant.mainColor}
              placeholder="Digite um Complemento"
              value={address.complemento ?? ""}
              onChange={(value) => changeAddressField("complemento", value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.btnArea}>
        <Button
          color={data.tenant.mainColor}
          label="Atualizar"
          onClick={handleSaveAddress}
          fill
        />
      </div>
    </div>
  );
};

export default EditAddress;

type Props = {
  tenant: Tenant;
  token: string;
  user: User | null;
  address: Address;
  // codvenda: number;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug, addressid } = context.query;

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

  //GET LOGGED USER
  //const token = context.req.cookies.token; //Também posso usar assim pra pegar o cookie

  let token = getCookie("token", context);
  if (token === undefined) {
    token = null;
  }

  // console.log("Token: " + token);
  const user = await api.authorizeToken(token as string);
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  //GET ADDRESSES
  const address = await api.getUserAddress(parseInt(addressid as string));

  if (!address) {
    return {
      redirect: {
        destination: "/myaddresses",
        permanent: false,
      },
    };
  }
  return {
    props: { tenant, user, token, address },
  };
};
