import { ReactElement, useState } from "react";
import styles from "./styles.module.css";
import NextImage from "next/image";

type ProductImg = {
  src: string;
  alt: string;
  fallback: ReactElement;
  altura: number;
  largura: number;
};

type Props = {
  src: string;
  altura: number;
  largura: number;
};

const Image = ({ src, alt, fallback, altura = 100, largura = 100 }: ProductImg) => {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return error ? (
    fallback
  ) : (
    <>
      <NextImage
        style={{
          opacity: src ? "1" : "0.2",
        }}
        src={src}
        alt={alt}
        width={largura}
        height={altura}
        onError={onError}
        placeholder="blur"
        blurDataURL="/assets/img/sem-foto.png"
        //
      />
    </>
  );
};

export default function ProductImage({ src, altura, largura }: Props) {
  return (
    // <div className={styles.img}>
    <Image
      src={src ? src : "/assets/img/sem-foto.png"}
      altura={altura}
      largura={largura}
      alt="imgProduct"
      fallback={<span>img não existe</span>}
    />
    // </div>
  );
}
