import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
// import { useAppContext } from "../../contexts/app";
// import { useAuthContext } from "../../contexts/auth";
import ProductItem from "../../src/components/ProductItem";
import SearchInput from "../../src/components/SearchInput";
import { Sidebar } from "../../src/components/Sidebar";
import { Group } from "../../src/types/Group";
import { Product } from "../../src/types/Products";
import { Tenant } from "../../src/types/Tenent";
import { User } from "../../src/types/User";
import { useProducts } from "../../src/services/hooks/useProduto";
import { useGrupos } from "../../src/services/hooks/useGrupo";
import { autorizeToken } from "../../src/services/hooks/useToken";
import { getAllTenant, getTenant } from "../../src/services/hooks/useTenant";
import styles from "../../styles/Home.module.css";
import NoItemsIcon from "./../../public/assets/noitems.svg";
import NextImage from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Skeleton from "../../src/components/Skeleton/Skeleton";
import GrupoSlider from "../../src/components/GrupoSlider";
import { useTenantStore } from "../../src/store/TenantStore";
import { parseCookies } from "nookies";

// import Banner from "../../src/components/Banner";
// import { queryClient } from "../../services/queryClient";
const FooterCart = dynamic(() => import("../../src/components/FooterCart"), {
  ssr: false,
});

const Home = (data: Props) => {
  const router = useRouter();
  const {
    data: produtosQuery,
    error: ErrorProdutos,
    isLoading: isLoadingProdutos,
    isFetching: isFetchingProdutos,
  } = useProducts(data.tenant.slug);

  const {
    data: gruposQuery,
    error: errorGrupos,
    isLoading: isLoadingGrupos,
    isFetching: isFetchingGrupos,
  } = useGrupos(data.tenant.slug);

  const [tenant, setTenant, user, setUser, setToken] = useTenantStore((state) => [
    data.tenant,
    state.setTenant,
    state.user,
    state.setUser,
    state.setToken,
  ]);

  const { "manna.mesaobs": cookieMesaObs } = parseCookies();
  const { "manna.codvenda": cookieVenda } = parseCookies();
  const [dados, setDados] = useState<Product[] | undefined>(produtosQuery);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [grupos, setGrupos] = useState<Group[] | undefined>(gruposQuery);
  const [products, setProducts] = useState<Product[] | undefined>(produtosQuery);

  function getProducts(category: string) {
    const prodCategory = products ? products.filter((res) => res.NOME == category) : [];

    return prodCategory;
  }

  function realoadPage() {
    //this will reload the page without doing SSR
    //router.replace(router.asPath);
    router.reload();
  }

  //Search New   --------------------------------------------------------------->
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const handleSearch = (value: string) => setSearchText(value);

  //Fim Search new <---------------------------------------------------------------

  function handlerClick(searchValue: string) {
    let prodFiltrado = dados;

    const results = prodFiltrado
      ? prodFiltrado.filter((itens) => itens.DESCRICAO.toLowerCase().includes(searchValue.toLowerCase()))
      : [];

    results ? setProducts(results) : setProducts(dados);
  }

  useEffect(() => {
    let newFilteredProducts: Product[] = [];

    if (produtosQuery) {
      for (let product of produtosQuery) {
        if (product.DESCRICAO.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1) {
          newFilteredProducts.push(product);
        }
      }
    }

    setFilteredProducts(newFilteredProducts);
  }, [searchText]);

  useEffect(() => {
    const { token: cookieToken } = parseCookies();

    autorizeToken(cookieToken as string).then((res) => {
      const user = res;
      if (user) setUser(user);
    });

    setTenant(data.tenant);
    cookieToken ? setToken(cookieToken) : setToken("");
  }, []);

  useEffect(() => {
    produtosQuery && setProducts(produtosQuery);
  }, [produtosQuery]);

  useEffect(() => {
    gruposQuery && setGrupos(gruposQuery);
  }, [gruposQuery]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Produtos | ${data.tenant.name}`}</title>
      </Head>
      <header className={styles.header} style={{ backgroundColor: data.tenant.secondColor }}>
        <div>
          <p className={styles.obsHeader} style={{ color: data.tenant.mainColor }}>
            {data.tenant.obs}
          </p>
        </div>
        <div className={styles.imgLogo}>
          <NextImage
            width={150}
            height={150}
            src={data.tenant.logo}
            alt="logo"
            //
            // quality={25}
            // priority
          />
        </div>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo (a) 👋</div>
            <div className={styles.headerSubTitle}>
              O que deseja pra hoje <strong> {user?.name.toUpperCase()}</strong>?
            </div>

            {cookieMesaObs && (
              <div className={styles.headerSubTitle} style={{ marginTop: "5px" }}>
                <strong> Obs: Mesa #{cookieMesaObs}</strong>
              </div>
            )}

            {cookieVenda && (
              <div className={styles.headerSubTitle} style={{ marginTop: "5px" }}>
                <strong> Nº Venda: #{cookieVenda}</strong>
              </div>
            )}
          </div>
          {data.tenant.isCatalog == false && (
            <div className={styles.headerTopRight}>
              <div className={styles.menuButtom} onClick={() => setSidebarOpen(true)}>
                <div className={styles.menuButtomLine} style={{ backgroundColor: tenant?.mainColor }}></div>
                <div className={styles.menuButtomLine} style={{ backgroundColor: tenant?.mainColor }}></div>
                <div className={styles.menuButtomLine} style={{ backgroundColor: tenant?.mainColor }}></div>
              </div>

              <Sidebar tenant={data.tenant} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            </div>
          )}
        </div>
        <div className={styles.headerBottom}>
          <SearchInput onSearch={handleSearch} />
        </div>
      </header>
      {/* <Banner data={falta carregar os produtos em oferta aqui...} /> */}
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
              <div className={styles.noProductsText}>Ops! Não há itens com este nome!</div>
            </div>
          )}
        </>
      )}
      {!searchText && (
        <>
          {grupos && grupos.length > 0 ? (
            <>
              <GrupoSlider data={grupos} />
              <div className={styles.grid2}>
                {grupos.map((itemGrupo) => (
                  <div key={itemGrupo.CODGRUPO}>
                    <div className={styles.categoryName} style={{ backgroundColor: tenant?.mainColor }}>
                      {itemGrupo.NOMEGRUPOAPP}
                    </div>
                    {getProducts(itemGrupo.NOME).map((item) => item && <ProductItem key={item.CODPRODUTO} data={item} />)}
                  </div>
                ))}
              </div>
            </>
          ) : isFetchingGrupos || isLoadingGrupos || isFetchingProdutos || isLoadingProdutos ? (
            <Skeleton heigth={30} lines={5} />
          ) : (
            <div className={styles.noProducts}>
              <NoItemsIcon color="#e0e0e0" />
              <div className={styles.noProductsText}>Ops! Verifique sua conexão!</div>
              <div className={styles.clickReload} onClick={() => realoadPage()}>
                Clique aqui para recarregar!
              </div>
            </div>
          )}
        </>
      )}

      {data.tenant.isCatalog == false && <FooterCart tenantSlug={data.tenant.slug} color={data.tenant.mainColor} />}
    </div>
  );
};

export default Home;

type Props = {
  tenant: Tenant;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Suponha que você tenha uma função para buscar todos os slugs de tenants
  const tenants = await getAllTenant(); // Função para pegar todos os tenants

  //Eu pego todos os tenants que existem para a pagina [tenant]
  const paths = tenants.map((tenant: any) => ({
    params: { tenant: tenant.slug }, // o parâmetro 'tenant' no caminho dinâmico
  }));

  return {
    paths, // Retorna os caminhos que serão pré-gerados
    fallback: "blocking", // Permite gerar páginas dinamicamente em tempo de execução
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { tenant: tenantSlug } = context.params!;

  console.log({ tenantSlug });
  const tenant = await getTenant(tenantSlug as string);

  if (!tenant.name) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { tenant },
    revalidate: 30,
  };
};
