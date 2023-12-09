import { useFormatter } from "../../../libs/useFormatter";
import { Product } from "../../types/Products";
import { Quantity } from "../Quantity";
import styles from "./styles.module.css";
import NextImage from "next/image";

type Props = {
  color: string;
  quantity: number;
  product: Product;
  onChange: (newCount: number, id: number) => void;
  noEdit?: boolean;
};

export const CartProductItem = ({
  color,
  product,
  quantity,
  onChange,
  noEdit,
}: Props) => {
  const formatter = useFormatter();
  console.log({ imagem: product.image });

  return (
    <div className={styles.container}>
      <div className={styles.productImage}>
        {product.image && (
          <NextImage width={150} height={150} src={product.image} alt="" />
        )}
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productCategory}>{product.categoryName}</div>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productPrice} style={{ color: color }}>
          {formatter.formatPrice(product.price)}
        </div>
      </div>
      <div className={styles.qtControl}>
        {noEdit && (
          <div className={styles.qtArea}>
            <div style={{ color }} className={styles.qtTitle}>
              Qtd.
            </div>
            <div style={{ color }} className={styles.qtCount}>
              {quantity}
            </div>
          </div>
        )}

        {!noEdit && (
          <Quantity
            color={color}
            count={quantity}
            onUpdateCount={(newCount: number) => onChange(newCount, product.id)}
            min={0}
            small
          />
        )}
      </div>
    </div>
  );
};
