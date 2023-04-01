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

const NewAddress = (data: Props) => {
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

  const [addressCep, SetAddressCep] = useState<string>("");
  const [addressEndereco, SetAddressEndereco] = useState<string>("");
  const [addressNumero, SetAddressNumero] = useState<string>("");
  const [addressBairro, SetAddressBairro] = useState<string>("");
  const [addressCidade, SetAddressCidade] = useState<string>("");
  const [addressEstado, SetAddressEstado] = useState<string>("");
  const [addressComplemento, SetAddressComplemento] = useState<string>("");

  const verifyAddress = () => {
    let newErrorFields = [];
    let aproved = true;
    //esse replace ele remove tudo e deixa só números
    if (addressCep.replaceAll(/[^0-9]/g, "").length !== 8) {
      newErrorFields.push("cep");
      aproved = false;
    }
    if (addressEndereco.length <= 2) {
      newErrorFields.push("endereco");
      aproved = false;
    }
    if (addressNumero.length < 1) {
      newErrorFields.push("numero");
      aproved = false;
    }
    if (addressBairro.length <= 2) {
      newErrorFields.push("bairro");
      aproved = false;
    }
    if (addressCidade.length <= 2) {
      newErrorFields.push("cidade");
      aproved = false;
    }
    if (addressEstado.length !== 2) {
      newErrorFields.push("estado");
      aproved = false;
    }

    setErrorFields(newErrorFields);

    return aproved;
  };

  const handleNewAddress = async () => {
    if (verifyAddress()) {
      let address: Address = {
        id: 0,
        cep: addressCep,
        endereco: addressEndereco,
        numero: addressNumero,
        bairro: addressBairro,
        cidade: addressCidade,
        estado: addressEstado,
        complemento: addressComplemento,
      };

      let newAddress = await api.addUserAddress(address);

      if (newAddress.id > 0) {
        router.push(`/${data.tenant.slug}/myaddresses`);
      } else {
        alert("Ocorreu um erro! Tente mais tarde.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Novo Endereço | ${data.tenant.name}`}</title>
      </Head>

      <Header
        backHref={`/${data.tenant.slug}/myaddresses`}
        color={data.tenant.mainColor}
        title="Novo Endereço"
      />

      <div className={styles.inputs}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.label}>CEP</div>
            <InputField
              color={data.tenant.mainColor}
              placeholder="Digite um CEP"
              value={addressCep}
              onChange={(value) => SetAddressCep(value)}
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
              value={addressEndereco}
              onChange={(value) => SetAddressEndereco(value)}
              warning={errorFields.includes("endereco")}
            />
          </div>
          <div className={styles.column}>
            <div className={styles.label}>Nº</div>
            <InputField
              color={data.tenant.mainColor}
              placeholder="Digite um Número"
              value={addressNumero}
              onChange={(value) => SetAddressNumero(value)}
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
              value={addressBairro}
              onChange={(value) => SetAddressBairro(value)}
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
              value={addressCidade}
              onChange={(value) => SetAddressCidade(value)}
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
              value={addressEstado}
              onChange={(value) => SetAddressEstado(value)}
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
              value={addressComplemento}
              onChange={(value) => SetAddressComplemento(value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.btnArea}>
        <Button
          color={data.tenant.mainColor}
          label="Salvar"
          onClick={handleNewAddress}
          fill
        />
      </div>
    </div>
  );
};

export default NewAddress;

type Props = {
  tenant: Tenant;
  token: string;
  user: User | null;
  addresses: Address[];
  // codvenda: number;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

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

  //GET ADDRESSES FROM LOGGED USER
  const addresses = await api.getUserAddresses(user.email);

  return {
    props: { tenant, user, token, addresses },
  };
};
