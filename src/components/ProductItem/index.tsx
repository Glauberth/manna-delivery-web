import Link from "next/link";
import { ReactElement, useState } from "react";
import { useAppContext } from "../../../contexts/app";
import { useFormatter } from "../../../libs/useFormatter";
// import { useUtils } from "../../../libs/useUtils";
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
  base64?: BlobPart;
};

const Image = ({ src, alt, fallback, base64 }: ProductImg) => {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return error ? (
    fallback
  ) : (
    <NextImage
      src={src}
      alt={alt}
      onError={onError}
      width={100}
      height={100}
      // sizes="(max-width: 100px) 100vw"
    />
  );
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
              {data.description && `${data.description?.slice(0, 80)}...`}
            </div>
            <div className={styles.price} style={{ color: tenant?.mainColor }}>
              {formatter.formatPrice(data.price)}
            </div>
          </div>
          <div
            className={styles.productImage}
            style={{
              opacity: data.image == "/assets/img/sem-foto.png" ? "0.2" : "1",
            }}
          >
            {/* <img src={data.image} alt="" /> */}
            <Image
              src={data.image}
              base64={data.foto!}
              alt="imagemproduto"
              fallback={<span>img não existe</span>}
            />
          </div>
        </div>
      </a>
    </Link>
  );
}
