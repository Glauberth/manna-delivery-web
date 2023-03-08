import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../contexts/app";
import { UseApi } from "../../../libs/useApi";
import { useFormatter } from "../../../libs/useFormatter";
import { Button } from "../../../src/components/Button";
import { Header } from "../../../src/components/Header";
import { Quantity } from "../../../src/components/Quantity";
import { Product } from "../../../src/types/Products";
import { Tenant } from "../../../src/types/Tenent";
import styles from "../../../styles/Product-id.module.css";

const Product = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  const [qtCount, setQtCount] = useState(1);
  const formatter = useFormatter();

  const handleAddToCart = () => {
    alert("Função bloqueada temporariamente!");
  };

  const handleUpdateQt = (newCount: number) => {
    setQtCount(newCount);
  };

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {data.product.name} | {data.tenant.name}
        </title>
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

      <div className={styles.productImage}>
        <img src={data.product.image} alt="" />
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
            //small
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
          color={data.tenant.mainColor}
          label="Adicionar a Sacola"
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
  const product = await api.getProduct(id as string);

  return {
    props: { tenant, product },
  };
};
