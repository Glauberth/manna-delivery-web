import Link from "next/link";
import { ReactElement, useState } from "react";
import styles from "./styles.module.css";
import NextImage from "next/image";
import { Product } from "../../types/Products";
// import { useAppContext } from "../../../contexts/app";
import { useFormatter } from "../../../libs/useFormatter";
import { useTenantStore } from "../../store/TenantStore";

type Props = {
  data: Product;
};

type ProductImg = {
  src: string;
  alt: string;
  fallback: ReactElement;
};

const Image = ({ src, alt, fallback }: ProductImg) => {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return error ? (
    fallback
  ) : (
    <div className={styles.imageMask}>
      <NextImage
        src={src}
        alt={alt}
        onError={onError}
        fill
        sizes="100px"
        placeholder="blur"
        blurDataURL="/assets/img/sem-foto.png"
        className={styles.image}
        style={{
          objectFit: "cover",
        }}
        // sizes="50px"
        // sizes="(max-width: 100px) 100vw"
      />
    </div>
  );
};

export default function BannerProductItem({ data }: Props) {
  // const { tenant } = useAppContext();
  const [tenant] = useTenantStore((state) => [state.tenant]);

  const formatter = useFormatter();

  return (
    <Link href={`/${tenant?.slug}/product/${data.CODPRODUTO}`}>
      {/* <a id={"l" + data.CODGRUPO.toString()}> */}

      <div
        className={styles.productImage}
        style={{
          opacity: data.URLIMAGE == "/assets/img/sem-foto.png" ? "0.2" : "1",
          // padding: "5px",
          // height: "100px",
          // width: "100px",
          // margin: "auto",
          // overflow: "hidden",
          // borderRadius: "15px",
        }}
      >
        <Image
          src={data.URLIMAGE ? data.URLIMAGE : "/assets/img/sem-foto.png"}
          alt="imagemproduto"
          fallback={<span>img não existe</span>}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          {/* <div className={styles.catName}>{data.NOME}</div> */}
          <div className={styles.name}>{data.DESCRICAO.length < 20 ? data.DESCRICAO : `${data.DESCRICAO.slice(0, 20)}...`}</div>
          {/* <div className={styles.description}>{data.OBSERVACAO && `${data.OBSERVACAO?.slice(0, 20)}...`}</div> */}
          <div style={{ display: "flex", gap: 5, alignItems: "flex-end" }}>
            {data.PRECOPROMO && (
              <div className={styles.price} style={{ color: tenant?.mainColor }}>
                {formatter.formatPrice(data.PRECOPROMO)}
              </div>
            )}
            <div
              className={styles.price}
              style={{
                color: data.PRECOPROMO ? "#7171718f" : tenant?.mainColor,
                textDecoration: data.PRECOPROMO ? "line-through" : "none",
                fontSize: data.PRECOPROMO && 12,
              }}
            >
              {formatter.formatPrice(data.PRECOVENDA)}
            </div>
          </div>
        </div>
      </div>
      {/* </a> */}
    </Link>
  );
}
