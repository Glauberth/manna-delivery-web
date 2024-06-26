import { getCookie, hasCookie, setCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../contexts/app";
import { UseApi } from "../../../libs/useApi";
import { useFormatter } from "../../../libs/useFormatter";
import { Button } from "../../../src/components/Button";
import { Header } from "../../../src/components/Header";
import { Quantity } from "../../../src/components/Quantity";
import { CartCookie } from "../../../src/types/CartCookie";
import { Product } from "../../../src/types/Products";
import { Tenant } from "../../../src/types/Tenent";
import styles from "../../../styles/Product-id.module.css";
import NextImage from "next/image";

type Combo = {
  idProdCombo: number;
  qtdProdCombo: number;
};

const Product = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  const [qtCount, setQtCount] = useState(1);
  const [qtdCombo, setQtdCombo] = useState(0);
  const [combo, setCombo] = useState<Combo[]>([]);
  const router = useRouter();
  const formatter = useFormatter();
  const api = UseApi(data.tenant.slug);

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  const handleAddToCart = () => {
    let cart: CartCookie[] = [];

    // create or existing cart
    if (hasCookie("cart")) {
      const cartCookie = getCookie("cart");
      const cartJson: CartCookie[] = JSON.parse(cartCookie as string);

      for (let i in cartJson) {
        if (cartJson[i].qt && cartJson[i].id) {
          cart.push(cartJson[i]);
        }
      }

      //console.log(cart);
    }

    // procurando o produto em um carrinho
    const cartIndex = cart.findIndex((item) => item.id === data.product.id);

    if (cartIndex > -1) {
      // atualizando o carrinho
      cart[cartIndex].qt += qtCount;
    } else {
      // adicionando o produto ao carrinho

      //GET Tenant
      const codvenda = api.getTenant();

      cart.push({
        //codvenda: 1,
        id: data.product.id,
        qt: qtCount,
      });
    }

    console.log(cart);

    //setar o cookie
    setCookie("cart", JSON.stringify(cart));

    //Mandar para o carrinho
    router.push(`/${data.tenant.slug}/cart`);
  };

  const handleUpdateQt = (newCount: number) => {
    setQtCount(newCount);
  };

  const handleUpdateQtdCombo = (newCount: number) => {
    setQtdCombo(newCount);
  };

  const handleAddCombo = (idCombo: number) => {
    // let combos: Combo[] = [];

    // combos.push({
    //   idProdCombo: idCombo,
    //   qtdProdCombo: 1,
    // });

    setCombo((prevCombo) => [
      ...combo,
      { idProdCombo: idCombo, qtdProdCombo: 1 },
    ]);
  };

  useEffect(() => {
    console.log(combo);
  }, [combo]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${data.product.name} | ${data.tenant.name}`}</title>
      </Head>

      <div className={styles.headerArea}>
        <Header
          color={data.tenant.mainColor}
          backHref={`/${data.tenant.slug}`}
          title={data.product.name}
          invert
        />
      </div>

      <div
        className={styles.headerBg}
        style={{ backgroundColor: data.tenant.mainColor }}
      ></div>

      <div
        className={styles.productImage}
        style={{
          opacity: data.product.image ? "1" : "0.2",
        }}
      >
        <NextImage
          width={350}
          height={350}
          src={
            data.product.image ? data.product.image : "/assets/img/sem-foto.png"
          }
          alt=""
        />
      </div>

      <div className={styles.category}>{data.product.categoryName}</div>
      <div
        className={styles.title}
        style={{ borderBottomColor: tenant?.mainColor }}
      >
        {data.product.name}
      </div>
      <div className={styles.line}></div>
      <div className={styles.description}>{data.product.description}</div>
      <div className={styles.qtText}>Quantidade</div>
      <div className={styles.area}>
        <div className={styles.areaLeft}>
          <Quantity
            color={data.tenant.mainColor}
            count={qtCount}
            onUpdateCount={handleUpdateQt}
            min={1}
            // small
            //max={10}
            // iconLixeira
          />
        </div>

        <div
          className={styles.areaRight}
          style={{ color: data.tenant.mainColor }}
        >
          {formatter.formatPrice(data.product.price)}
        </div>
      </div>
      {data.product.combo!.length > 0 && (
        <div
          style={{ marginTop: "20px", textAlign: "center", fontWeight: "bold" }}
          className={styles.category}
        >
          ADICIONAIS
        </div>
      )}
      {data.product.combo?.map(
        (item, index) =>
          item.TIPOCOMBO == 1 && (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: "20px",
                marginTop: "10px",
                marginBottom: "10px",
                borderBottom: "1px solid #bbb",
                paddingBottom: "5px",
              }}
            >
              <div>
                {/* <input
                  type="checkbox"
                  id={item.CODPRODUTOCOMBO.toString()}
                  name="scales"
                  onChange={(e) => {
                    handleAddCombo(item.CODPRODUTOCOMBO);
                  }}
                /> */}
                <label style={{ marginLeft: "10px" }} htmlFor={item.DESCRICAO}>
                  {item.DESCRICAO}
                </label>
                <div style={{ marginLeft: 10, marginTop: 5, color: "#5d5d5d" }}>
                  + {formatter.formatPrice(item.PRECOVENDA)}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <Quantity
                  color={data.tenant.mainColor}
                  count={qtdCombo}
                  onUpdateCount={() => {}}
                  // onUpdateCount={(newCount: number) =>
                  //   onChange(newCount, product.id)
                  // }
                  min={1}
                  small
                  //max={10}
                  // iconLixeira
                />
              </div>
            </div>
          )
      )}

      <div className={styles.areaObs}>
        <textarea
          style={{ borderColor: data.tenant.mainColor, fontSize: 16 }}
          placeholder="Alguma Observação ?"
          id="story"
          name="story"
          rows={5}
        ></textarea>
      </div>
      <div className={styles.buttonArea}>
        <Button
          // disabled
          color={data.tenant.mainColor}
          label="Adicionar ao Carrinho"
          onClick={handleAddToCart}
          fill
        />
      </div>
    </div>
  );
};

export default Product;

type Props = {
  tenant: Tenant;
  product: Product;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug, id } = context.query;

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

  //GET Product
  const product = await api.getProduct(parseInt(id as string));

  return {
    props: { tenant, product },
    // revalidate: 1,
    // fallback: true,
  };
};
