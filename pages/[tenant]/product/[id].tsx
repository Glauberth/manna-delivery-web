import { getCookie, hasCookie, setCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../contexts/app";
import { useFormatter } from "../../../libs/useFormatter";
import { Button } from "../../../src/components/Button";
import { Header } from "../../../src/components/Header";
import { Quantity } from "../../../src/components/Quantity";
import { CartCookie } from "../../../src/types/CartCookie";
import { Product } from "../../../src/types/Products";
import { Tenant } from "../../../src/types/Tenent";
import styles from "../../../styles/Product-id.module.css";
import NextImage from "next/image";
import { getOneProduct } from "../../../services/hooks/useProduto";
import { getTenant } from "../../../services/hooks/useTenant";
import { CartProductItem } from "../../../src/components/CartProductItem";
import { ComboItem } from "../../../src/components/ComboItem";
import { Combo } from "../../../src/types/Combo";

const Products = (data: Props) => {
  const [totalPriceProduct, setTotalPriceProdutct] = useState(data.product.PRECOVENDA);

  const { tenant, setTenant } = useAppContext();
  const [qtCount, setQtCount] = useState(1);
  const [combo, setCombo] = useState<Combo[]>([]);
  const router = useRouter();
  const formatter = useFormatter();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  function handleAddProductToCart() {
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
    }

    // procurando o produto em um carrinho
    const cartIndex = cart.findIndex((item) => item.id === data.product.CODPRODUTO);

    if (cartIndex > -1) {
      // atualizando o carrinho
      cart[cartIndex].qt += qtCount;
    } else {
      // adicionando o produto ao carrinho

      //GET Tenant
      // const codvenda = getTenant(data.tenant.slug);

      cart.push({
        //codvenda: 1,
        id: data.product.CODPRODUTO,
        qt: qtCount,
        preco: data.product.PRECOVENDA,
        combo: combo,
      });
    }

    console.log(cart);

    //setar o cookie
    setCookie("cart", JSON.stringify(cart));

    //Mandar para o carrinho
    //router.push(`/${data.tenant.slug}/cart`);
    router.push(`/${data.tenant.slug}`);
  }

  function handleUpdateQt(newCount: number) {
    setQtCount(newCount);
  }

  function handleAddCombo(newCombo: Combo) {
    // procurando o combo no array de combos
    const resultSearchIndex = combo.findIndex((item) => item.CODCOMBO === newCombo.CODCOMBO);

    let finalCombo;

    if (resultSearchIndex > -1) {
      if (newCombo.QUANTIDADE >= 1) {
        const newArrayCombo = combo.map((item) => {
          if (item.CODCOMBO == combo[resultSearchIndex].CODCOMBO) {
            item.QUANTIDADE = newCombo.QUANTIDADE;
            return item;
          } else {
            return item;
          }
        });

        finalCombo = newArrayCombo;
      } else {
        //ou remove o combo caso a quantidade for menor que zero
        const newArrayCombo = combo;

        // deleta a posição indicada e o segundo parametro é pra deletar só este objeto do array,
        // se colocar 2 no segundo parametro, ele vai apagar a posição selecionada e mais um pra frente,
        // esse segundo parametro é o countRemove, serve pra decidir quantos items depois dele serão apagados...
        newArrayCombo.splice(resultSearchIndex, 1);
        finalCombo = newArrayCombo;
      }
    } else {
      const newArray = [...combo, newCombo];

      finalCombo = newArray;
    }

    const total = finalCombo.reduce((accumulator, newItem) => {
      return accumulator + newItem.PRECOVENDA * newItem.QUANTIDADE;
    }, data.product.PRECOVENDA);

    setCombo(finalCombo);
    setTotalPriceProdutct(total);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${data.product.DESCRICAO} | ${data.tenant.name}`}</title>
      </Head>

      <div className={styles.headerArea}>
        <Header color={data.tenant.mainColor} backHref={`/${data.tenant.slug}`} title={data.product.DESCRICAO} invert />
      </div>

      <div className={styles.headerBg} style={{ backgroundColor: data.tenant.mainColor }}>
        {/* <button onClick={() => console.log(totalPriceProduct)}>teste</button> */}
      </div>

      <div
        className={styles.productImage}
        style={{
          opacity: data.product.URLIMAGE ? "1" : "0.2",
        }}
      >
        <NextImage
          width={300}
          height={300}
          src={data.product.URLIMAGE ? data.product.URLIMAGE : "/assets/img/sem-foto.png"}
          alt=""
        />
      </div>

      <div className={styles.category}>{data.product.NOME}</div>
      <div className={styles.title} style={{ borderBottomColor: tenant?.mainColor }}>
        {data.product.DESCRICAO}
      </div>
      <div className={styles.line}></div>
      <div className={styles.description}>{data.product.OBSERVACAO}</div>
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

        <div className={styles.areaRight} style={{ color: data.tenant.mainColor }}>
          {/* {formatter.formatPrice(data.product.price)} */}
          {formatter.formatPrice(totalPriceProduct)}
        </div>
      </div>

      {data.product.COMBO && data.product.COMBO.length > 0 && (
        <div style={{ marginTop: "20px", textAlign: "center", fontWeight: "bold" }} className={styles.category}>
          ADICIONAIS
        </div>
      )}

      {data.product.COMBO?.map((item, index) => {
        return <ComboItem key={index} color={data.tenant.mainColor} combo={item} handleCombo={handleAddCombo} />;
      })}

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
        {data.tenant.isCatalogo == false && (
          <Button
            // disabled
            color={data.tenant.mainColor}
            label="Adicionar ao Carrinho"
            onClick={handleAddProductToCart}
            fill
          />
        )}
      </div>
    </div>
  );
};

export default Products;

type Props = {
  tenant: Tenant;
  product: Product;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug, id } = context.query;

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

  //GET Product
  const product = await getOneProduct(tenantSlug as string, parseInt(id as string));
  //const product = await api.getProduct(parseInt(id as string));

  return {
    props: { tenant, product },
    // revalidate: 1,
    // fallback: true,
  };
};
