import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";

import Head from "next/head";
import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/app";
import { useAuthContext } from "../../contexts/auth";
import Grupo from "../../src/components/Grupo";
import ProductItem from "../../src/components/ProductItem";
import SearchInput from "../../src/components/SearchInput";
import { Sidebar } from "../../src/components/Sidebar";
import { Group } from "../../src/types/Group";
import { Product } from "../../src/types/Products";
import { Tenant } from "../../src/types/Tenent";
import { User } from "../../src/types/User";
import { getProdutos } from "../../services/hooks/useProduto";
import { getAllGrupos } from "../../services/hooks/useGrupo";
import { autorizeToken } from "../../services/hooks/useToken";
import { getTenant } from "../../services/hooks/useTenant";
import styles from "../../styles/Home.module.css";
import NoItemsIcon from "./../../public/assets/noitems.svg";
import NextImage from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const FooterCart = dynamic(() => import("../../src/components/FooterCart"), {
  ssr: false,
});

const Home = (data: Props) => {
  const { tenant, comanda, setTenant } = useAppContext();
  const { user, setToken, setUser } = useAuthContext();

  useEffect(() => {
    setTenant(data.tenant);
    setToken(data.token);
    if (data.user) setUser(data.user);
  }, []);

  const [dados, setDados] = useState<Product[]>(data.products);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [products, setProducts] = useState<Product[]>(data.products);

  const [grupos, setGrupos] = useState<Group[]>(data.grupos);

  const router = useRouter();

  function getProducts(category: string) {
    const prodCategory = products.filter((res) => res.categoryName == category);

    return prodCategory;
  }

  function realoadPage() {
    //this will reload the page without doing SSR
    // router.replace(router.asPath);
    router.reload();
  }

  //Search New   --------------------------------------------------------------->
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const handleSearch = (value: string) => setSearchText(value);

  useEffect(() => {
    let newFilteredProducts: Product[] = [];

    for (let product of data.products) {
      if (
        product.name
          .toLocaleLowerCase()
          .indexOf(searchText.toLocaleLowerCase()) > -1
      ) {
        newFilteredProducts.push(product);
      }
    }

    setFilteredProducts(newFilteredProducts);
  }, [searchText]);
  //Fim Search new <---------------------------------------------------------------

  function handlerClick(searchValue: string) {
    let prodFiltrado = dados;

    const results = prodFiltrado.filter((itens) =>
      itens.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    results ? setProducts(results) : setProducts(dados);
  }

  // console.log(typeof dados);
  // console.log(typeof products);

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Produtos | ${data.tenant.name}`}</title>
      </Head>

      <header
        className={styles.header}
        style={{ backgroundColor: data.tenant.secondColor }}
      >
        <div>
          {/*  */}
          <p
            className={styles.obsHeader}
            style={{ color: data.tenant.mainColor }}
          >
            {data.tenant.obs}
          </p>
        </div>
        <div className={styles.imgLogo}>
          <NextImage
            width={150}
            height={150}
            src={data.tenant.logo}
            alt="logo"
            // quality={25}
            priority
          />
        </div>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo (a) 👋</div>
            <div className={styles.headerSubTitle}>
              O que deseja pra hoje
              <strong> {user?.name.toUpperCase()}</strong>?
            </div>
            <div>
              {comanda !== null || comanda !== null
                ? "Comanda Nº #" + comanda
                : ""}
            </div>
          </div>

          {/* 
                Não será exibido o icone do menu para o SR inverno, pois ele é só catalogo...
                */}
          {data.tenant.isCatalogo == false && (
            <div className={styles.headerTopRight}>
              <div
                className={styles.menuButtom}
                onClick={() => setSidebarOpen(true)}
              >
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

              <Sidebar
                tenant={data.tenant}
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
              />
            </div>
          )}
        </div>
        <div className={styles.headerBottom}>
          <SearchInput onSearch={handleSearch} />
        </div>
      </header>

      {/* <Banner /> */}

      {searchText && (
        <>
          <div className={styles.searchText}>
            Procurando por: <strong>{searchText}</strong>
          </div>

          {filteredProducts.length > 0 && (
            <div className={styles.grid2}>
              {filteredProducts.map((item, index) => (
                <ProductItem key={index} data={item} />
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className={styles.noProducts}>
              <NoItemsIcon color="#e0e0e0" />
              <div className={styles.noProductsText}>
                Ops! Não há itens com este nome!
              </div>
            </div>
          )}
        </>
      )}

      {!searchText && (
        <>
          {grupos.length > 0 ? (
            <>
              <Grupo data={grupos} />
              <div className={styles.grid2}>
                {grupos.map((item, index) => (
                  <div key={index}>
                    <div
                      className={styles.categoryName}
                      style={{ backgroundColor: tenant?.mainColor }}
                    >
                      {item.NOMEGRUPOAPP}
                    </div>
                    {getProducts(item.NOME).map(
                      (item, index) =>
                        item && <ProductItem key={index} data={item} />
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.noProducts}>
              <NoItemsIcon color="#e0e0e0" />
              <div className={styles.noProductsText}>
                Ops! Verifique sua conexão!
              </div>
              <div className={styles.clickReload} onClick={() => realoadPage()}>
                Clique aqui para recarregar!
              </div>
            </div>
          )}
        </>
      )}

      {data.tenant.isCatalogo == false && (
        <FooterCart tenantSlug={data.tenant.slug} />
      )}
    </div>
  );
};

export default Home;

type Props = {
  tenant: Tenant;
  products: Product[];
  grupos: Group[];
  token: string;
  user: User | null;
  comanda: string | null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  // console.log(context.query);

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

  //GET LOGGED USER
  //const token = context.req.cookies.token; //Também posso usar assim pra pegar o cookie

  let token = getCookie("token", context);
  if (token === undefined) {
    token = null;
  }

  // console.log("Token: " + token);
  const user = await autorizeToken(token as string);

  //GET PRODUTOS
  //const products = await api.getallProducts();
  const products = await getProdutos(tenantSlug as string); //api.getallProducts();
  const grupos = await getAllGrupos(tenantSlug as string);
  //const grupos = await api.getGrupo();

  return {
    props: { tenant, products, grupos, user, token },
  };
};
