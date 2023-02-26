import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/app";
import { UseApi } from "../../libs/useApi";
import Banner from "../../src/components/Banner";
import Grupo from "../../src/components/Grupo";
import ProductItem from "../../src/components/ProductItem";
import SearchInput from "../../src/components/SearchInput";
import { Group } from "../../src/types/Group";
import { Product } from "../../src/types/Products";
import { Tenant } from "../../src/types/Tenent";
import styles from "../../styles/Home.module.css";

const Home = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  const [dados, setDados] = useState<Product[]>(data.products);

  const [products, setProducts] = useState<Product[]>(data.products);

  const [grupos, setGrupos] = useState<Group[]>(data.grupos);

  function getProducts(category: string) {
    const prodCategory = products.filter((res) => res.categoryName == category);
    // setProducts(prodCategory);
    return prodCategory;
  }

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  function handlerClick(searchValue: string) {
    let prodFiltrado = dados;

    const results = prodFiltrado.filter((itens) =>
      itens.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    results ? setProducts(results) : setProducts(dados);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Produtos | {data.tenant.name} </title>
      </Head>

      <header className={styles.header}>
        <div className={styles.imgLogo}>
          <img src={data.tenant.logo} alt="" />
        </div>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo (a) 👋</div>
            <div className={styles.headerSubTitle}>O que deseja pra hoje?</div>
          </div>

          <div className={styles.headerTopRight}>
            <div className={styles.menuButtom}>
              <div
                className={styles.menuButtomLine}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
              <div
                className={styles.menuButtomLine}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
              <div
                className={styles.menuButtomLine}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
            </div>
          </div>
        </div>
        {/* <div className={styles.headerBottom}>
          <SearchInput onSearch={handlerClick} />
        </div> */}
      </header>

      {/* <Banner /> */}

      <Grupo data={grupos} />

      <div className={styles.grid2}>
        {grupos.map((item, index) => (
          <>
            <div
              key={index}
              className={styles.categoryName}
              style={{ backgroundColor: tenant?.mainColor }}
            >
              {item.NOMEGRUPOAPP}
            </div>

            {getProducts(item.NOME).map((item, index) => (
              <ProductItem key={index} data={item} />
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;

type Props = {
  tenant: Tenant;
  products: Product[];
  grupos: Group[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

  const api = UseApi(tenantSlug as string);

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

  //GET PRODUTOS
  const products = await api.getallProducts();
  const grupos = await api.getGrupo();

  return {
    props: { tenant, products, grupos },
  };
};
