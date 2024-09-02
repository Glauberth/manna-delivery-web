import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useAppContext } from "../../contexts/app";
import { Button } from "../../src/components/Button";
import { Header } from "../../src/components/Header";
import { InputField } from "../../src/components/InputField";
import { Tenant } from "../../src/types/Tenent";
import styles from "../../styles/SignUp.module.css";
import { getTenant } from "../../src/services/hooks/useTenant";
import { useTenantStore } from "../../src/store/TenantStore";

const SignUp = (data: Props) => {
  // const { tenant, setTenant } = useAppContext();

  const [tenant, setTenant] = useTenantStore((state) => [data.tenant, state.setTenant]);

  const [name, setName] = useState("");
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
        <title> Cadastro | {data.tenant.name} </title>
        <link rel="icon" href={data.tenant.logo} />
      </Head>

      {/* Aqui é um componente normal criado da setinha */}
      <Header color={data.tenant.mainColor as string} backHref={`/${data.tenant.slug}/login`} />

      <div className={styles.header}>{data.tenant.name}</div>

      <div className={styles.title}>Esqueceu sua senha ?</div>

      <div
        className={styles.subtitle}
        style={{
          borderBottomColor: data.tenant.mainColor,
        }}
      >
        Preencha os campos para criar o seu cadastro.
      </div>

      <div className={styles.line}></div>

      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <InputField color={data.tenant.mainColor} placeholder="Digite seu Nome" value={name} onChange={setName} />
        </div>

        <div className={styles.inputArea}>
          <InputField color={data.tenant.mainColor} placeholder="Digite seu E-mail" value={email} onChange={setEmail} />
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
          <Button color={data.tenant.mainColor} label="Cadastrar" onClick={handleSubmit} fill />
        </div>
      </div>

      <div className={styles.forgetArea}>
        Já tem cadastro ?
        <Link href={`/${data.tenant.slug}/login`}>
          <a style={{ color: data.tenant.mainColor }}> Clique aqui </a>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

type Props = {
  tenant: Tenant;
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

  return {
    props: { tenant },
  };
};
