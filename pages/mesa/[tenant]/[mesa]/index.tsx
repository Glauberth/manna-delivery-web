"use client";

import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";
import { setCookie, destroyCookie } from "nookies";
import { useEffect } from "react";
export default function Mesa(data: Props) {
  const router = useRouter();

  destroyCookie(undefined, "manna.tenant");
  destroyCookie(undefined, "manna.mesa");

  setCookie(undefined, "manna.tenant", data.tenant, {
    maxAge: 60 * 60 * 24 * 1, //1 Dia
    path: "/", //quais caminhos da aplicação vão ter acesso a esse cookie, qualquer rota
  });
  setCookie(undefined, "manna.mesa", data.mesa, {
    maxAge: 60 * 60 * 24 * 1, //1 Dia
    path: "/", //quais caminhos da aplicação vão ter acesso a esse cookie, qualquer rota
  });

  useEffect(() => {
    router.push(`/${data.tenant}`);
  }, []);

  return <h1>{`Carregando... Empresa: ${data.tenant} Mesa: ${data.mesa}`}</h1>;
}

type Props = {
  tenant: string;
  mesa: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { mesa, tenant } = context.query;

  //Cookies Server Side:
  // const cookies = parseCookies.get(ctx)

  // console.log({ tenant, comanda });
  // console.log(context.query);

  return {
    props: { tenant, mesa },
  };
};
