import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import { useAppContext } from "../../contexts/app";
import { Button } from "../../src/components/Button";
import { Header } from "../../src/components/Header";
import { Icon } from "../../src/components/Icon/Icon";
import { Tenant } from "../../src/types/Tenent";
import styles from "../../styles/ForgetSuccess.module.css";
import { getTenant } from "../../src/services/hooks/useTenant";
import { useTenantStore } from "../../src/store/TenantStore";

const ForguetSuccess = (data: Props) => {
  // const { tenant, setTenant } = useAppContext();
  const [tenant, setTenant] = useTenantStore((state) => [state.tenant, state.setTenant]);

  const router = useRouter();

  function handleSubmit() {
    router.push(`/${data.tenant.slug}/login`);
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

      <Header color={data.tenant.mainColor as string} backHref={`/${data.tenant.slug}/forget`} />

      <div className={styles.iconArea}>
        <Icon icon="mailSent" color={data.tenant.mainColor} width={99} height={81} />
      </div>

      <div className={styles.title}>Verifique seu Email</div>

      <div className={styles.subtitle}>Enviamos as instruções para recuperação de senha para o seu e-mail.</div>

      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <Button color={data.tenant.mainColor} label="Fazer login" onClick={handleSubmit} fill />
        </div>
      </div>
    </div>
  );
};

export default ForguetSuccess;

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
