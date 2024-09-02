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
import styles from "../../styles/Forget.module.css";
import { getTenant } from "../../src/services/hooks/useTenant";
import { useTenantStore } from "../../src/store/TenantStore";

const Forguet = (data: Props) => {
  // const { tenant, setTenant } = useAppContext();
  const [tenant, setTenant] = useTenantStore((state) => [state.tenant, state.setTenant]);

  const [email, setEmail] = useState("");

  const router = useRouter();

  function handleSubmit() {
    router.push(`/${data.tenant.slug}/forget-success`);
  }

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        {/* esse Head é do Next mesmo, ai ele muda essas coisas de acordo com pag  */}
        <title> Esqueci a senha | {data.tenant.name} </title>
        <link rel="icon" href={data.tenant.logo} />
      </Head>

      <Header color={data.tenant.mainColor as string} backHref={`/${data.tenant.slug}/login`} />

      <div className={styles.header}>{data.tenant.name}</div>

      <div className={styles.title}>Esqueceu sua Senha ?</div>

      <div
        className={styles.subtitle}
        style={{
          borderBottomColor: data.tenant.mainColor,
        }}
      >
        Preencha o campo com seu e-mail e receba as instruções necessárias para redefinir a sua senha.
      </div>

      <div className={styles.line}></div>

      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <InputField color={data.tenant.mainColor} placeholder="Digite seu E-mail" value={email} onChange={setEmail} />
        </div>

        <div className={styles.inputArea}>
          <Button color={data.tenant.mainColor} label="Enviar" onClick={handleSubmit} fill />
        </div>
      </div>
    </div>
  );
};

export default Forguet;

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
