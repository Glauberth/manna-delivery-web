"use client";

import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";
import { setCookie, destroyCookie } from "nookies";
import { useEffect } from "react";
export default function Comanda(data: Props) {
  const router = useRouter();

  destroyCookie(undefined, "manna.tenant");
  destroyCookie(undefined, "manna.mesaobs");

  setCookie(undefined, "manna.tenant", data.tenant, {
    maxAge: 60 * 60 * 24 * 1, //1 Dia
    path: "/", //quais caminhos da aplicação vão ter acesso a esse cookie, qualquer rota
  });
  setCookie(undefined, "manna.mesaobs", data.mesaobs, {
    maxAge: 60 * 60 * 24 * 1, //1 Dia
    path: "/", //quais caminhos da aplicação vão ter acesso a esse cookie, qualquer rota
  });

  useEffect(() => {
    // isValid ?
    router.push(`/${data.tenant}`);
    //: alert("Não Encontrado!");
  }, []);

  return <h1>{`Carregando... Empresa: ${data.tenant} Mesa: ${data.mesaobs}`}</h1>;
}

type Props = {
  tenant: string;
  mesaobs: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { mesaobs, tenant } = context.query;

  //Cookies Server Side:
  // const cookies = parseCookies.get(ctx)

  // console.log({ tenant, comanda });
  // console.log(context.query);

  return {
    props: { tenant, mesaobs },
  };
};
