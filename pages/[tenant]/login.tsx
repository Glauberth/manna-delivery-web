import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/app";
import { UseApi } from "../../libs/useApi";
import { Button } from "../../src/components/Button";
import { Header } from "../../src/components/Header";
import { InputField } from "../../src/components/InputField";
import { Tenant } from "../../src/types/Tenent";
import styles from "../../styles/Login.module.css";

const Login = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleSubmit() {}

  function handleSignUp() {
    router.push(`/${data.tenant.slug}/signup`);
  }

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        {/* esse Head é do Next mesmo, ai ele muda essas coisas de acordo com pag  */}
        <title> Login | {data.tenant.name} </title>
        <link rel="icon" href={data.tenant.logo} />
      </Head>

      <Header
        color={data.tenant.mainColor as string}
        backHref={`/${data.tenant.slug}`}
      />

      <div className={styles.header}>{data.tenant.name}</div>

      <div
        className={styles.subtitle}
        style={{
          borderBottomColor: data.tenant.mainColor,
        }}
      >
        Use suas credencias para realizar o login.
      </div>

      <div className={styles.line}></div>

      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <InputField
            color={data.tenant.mainColor}
            placeholder="Digite seu E-mail"
            value={email}
            onChange={setEmail}
          />
        </div>

        <div className={styles.inputArea}>
          <InputField
            color={data.tenant.mainColor}
            placeholder="Digite sua Senha"
            value={password}
            onChange={setPassword}
            password
          />
        </div>

        <div className={styles.inputArea}>
          <Button
            color={data.tenant.mainColor}
            label="Entrar"
            onClick={handleSubmit}
            fill
          />
        </div>
      </div>

      <div
        className={styles.forgetArea}
        style={{ borderBottomColor: data.tenant.mainColor }}
      >
        Esqueceu sua senha?
        <Link href={`/${data.tenant.slug}/forget`}>
          <a style={{ color: data.tenant.mainColor }}> Clique aqui </a>
        </Link>
      </div>

      <div className={styles.line}></div>

      <div className={styles.signupArea}>
        <Button
          color={data.tenant.mainColor}
          label="Quero me Cadastrar"
          onClick={handleSignUp}
        />
      </div>
    </div>
  );
};

export default Login;

type Props = {
  tenant: Tenant;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

  const api = UseApi(tenantSlug as string);

  //GET Tenant
  const tenant = await api.getTenant();

  if (!tenant) {
    return {
      redirect: {
        destination: "https://www.mannatech.com.br",
        permanent: false,
      },
    };
  }

  return {
    props: { tenant },
  };
};
