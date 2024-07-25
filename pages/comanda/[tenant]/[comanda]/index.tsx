"use client";

import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { getTenant } from "../../../../src/services/hooks/useTenant";
import { useEffect, useState } from "react";
export default function Comanda(data: Props) {
  // const [isValid, setValid] = useState(false);
  const router = useRouter();
  const { "manna.tenant": cookieTenant } = parseCookies();
  const { "manna.comanda": cookieComanda } = parseCookies();

  let isValid = false;

  if (cookieTenant !== data.tenant) {
    destroyCookie(undefined, "manna.tenant");
    destroyCookie(undefined, "manna.comanda");
  }

  if (cookieComanda && cookieTenant) {
    isValid = true;
  } else if (data.comanda && data.tenant) {
    setCookie(undefined, "manna.tenant", data.tenant, {
      maxAge: 60 * 60 * 24 * 1, //1 Dia
      path: "/", //quais caminhos da aplicação vão ter acesso a esse cookie, qualquer rota
    });
    setCookie(undefined, "manna.comanda", data.comanda, {
      maxAge: 60 * 60 * 24 * 1, //1 Dia
      path: "/", //quais caminhos da aplicação vão ter acesso a esse cookie, qualquer rota
    });

    isValid = true;
  }

  useEffect(() => {
    isValid ? router.push(`/${data.tenant}`) : alert("Não Encontrado!");
  }, []);

  return (
    <h1>
      {data.tenant} {data.comanda}
    </h1>
  );
}

type Props = {
  tenant: string;
  comanda: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { comanda, tenant } = context.query;

  console.log({ tenant, comanda });
  // console.log(context.query);

  return {
    props: { tenant, comanda },
  };
};
