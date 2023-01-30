import { useState } from "react";
import styles from "./styles.module.css";

type ProductImg = {
  src: string;
  alt: string;
  fallback: string;
};

const Image = ({ src, alt, fallback }: ProductImg) => {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return error ? fallback : <img src={src} alt={alt} onError={onError} />;
};

export default function ProductImage(url: string) {
  return (
    <div className={styles.img}>
      <img src={url} alt="" />
    </div>
  );
}
