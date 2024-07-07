import Link from "next/link";
import { ReactElement, useState } from "react";
import { useAppContext } from "../../../contexts/app";
import { useFormatter } from "../../../libs/useFormatter";
import { Product } from "../../types/Products";
import styles from "./styles.module.css";
import NextImage from "next/image";

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
    <>
      <NextImage
        src={src}
        alt={alt}
        onError={onError}
        width={100}
        height={100}
        placeholder="blur"
        blurDataURL="/assets/img/sem-foto.png"

        // sizes="(max-width: 100px) 100vw"
      />
    </>
  );
};

export default function ProductItem({ data }: Props) {
  const { tenant } = useAppContext();

  const formatter = useFormatter();

  return (
    <Link href={`/${tenant?.slug}/product/${data.CODPRODUTO}`} id={"l" + data.CODGRUPO.toString()}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.catName}>{data.NOME}</div>
          <div className={styles.name}>{data.DESCRICAO}</div>
          <div className={styles.description}>{data.OBSERVACAO && `${data.OBSERVACAO?.slice(0, 60)}...`}</div>
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
        <div
          className={styles.productImage}
          style={{
            opacity: data.URLIMAGE == "/assets/img/sem-foto.png" ? "0.2" : "1",
          }}
        >
          <Image
            src={data.URLIMAGE ? data.URLIMAGE : "/assets/img/sem-foto.png"}
            alt="imagemproduto"
            fallback={<span>img não existe</span>}
          />
        </div>
      </div>
    </Link>
  );
}
