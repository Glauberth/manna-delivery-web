import Link from "next/link";
import { useAppContext } from "../../../contexts/app";
import { useFormatter } from "../../../libs/useFormatter";
import { Product } from "../../types/Products";
import styles from "./styles.module.css";

type Props = {
  data: Product;
};

export default function ProductItem({ data }: Props) {
  const { tenant } = useAppContext();

  const formatter = useFormatter();

  return (
    <Link href={`/${tenant?.slug}/product/${data.id}`}>
      <a>
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
          <div className={styles.img}>
            <img src={data.image} alt="" />
          </div>
        </div>
      </a>
    </Link>
  );
}
