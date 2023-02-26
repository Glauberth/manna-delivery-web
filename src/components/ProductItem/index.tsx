import Link from "next/link";
import { ReactElement, useState } from "react";
import { useAppContext } from "../../../contexts/app";
import { useFormatter } from "../../../libs/useFormatter";
import { useUtils } from "../../../libs/useUtils";
import { Product } from "../../types/Products";
import styles from "./styles.module.css";

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

  return error ? fallback : <img src={src} alt={alt} onError={onError} />;
};

export default function ProductItem({ data }: Props) {
  const { tenant } = useAppContext();

  const formatter = useFormatter();
  // console.log(data.image);
  // const isimg = useUtils();
  // isimg.isImg(data.image);

  return (
    <Link href={`/${tenant?.slug}/product/${data.id}`}>
      <a id={"l" + data.categoryId.toString()}>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.catName}>{data.categoryName}</div>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.description}>
              {data.description?.slice(0, 80)}...
            </div>
            <div className={styles.price} style={{ color: tenant?.mainColor }}>
              {formatter.formatPrice(data.price)}
            </div>
          </div>
          <div
            className={styles.img}
            style={{
              opacity:
                data.image ==
                "https://www.mannatech.com.br/velhojohn/imgappdelivery/sem-foto.png"
                  ? "0.1"
                  : "1",
            }}
          >
            {/* <img src={data.image} alt="" /> */}
            <Image
              src={data.image}
              alt="imagemproduto"
              fallback={<span>this one exists</span>}
            />
          </div>
        </div>
      </a>
    </Link>
  );
}
