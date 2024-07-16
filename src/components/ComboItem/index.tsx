import { useState } from "react";
import { useFormatter } from "../../../libs/useFormatter";
import { Combo } from "../../types/Combo";
import { Quantity } from "../Quantity";
import styles from "./styles.module.css";
import NextImage from "next/image";

type Props = {
  color: string;
  combo: Combo;
  handleCombo: (combo: Combo) => void;
  noEdit?: boolean;
};

export const ComboItem = ({ color, combo, handleCombo, noEdit }: Props) => {
  const [quantidade, setQuantidade] = useState(0);
  const formatter = useFormatter();

  function handleUpdateQtdCombo(newCount: number) {
    setQuantidade(newCount);
    const updatedCombo = { ...combo, QUANTIDADE: newCount };
    handleCombo(updatedCombo);
  }

  return (
    <div className={styles.container}>
      {combo.URLIMAGE && (
        <div className={styles.productImage}>
          <NextImage width={70} height={70} src={combo.URLIMAGE} alt="" />
        </div>
      )}
      <div className={styles.productInfo}>
        <div className={styles.productCategory}>{combo.NOME}</div>
        <div className={styles.productName}>{combo.DESCRICAO}</div>
        <div className={styles.productPrice} style={{ color: color }}>
          {formatter.formatPrice(combo.PRECOVENDA)}
        </div>
      </div>
      <div className={styles.qtControl}>
        {noEdit && (
          <div className={styles.qtArea}>
            <div style={{ color }} className={styles.qtTitle}>
              Qtd.
            </div>
            <div style={{ color }} className={styles.qtCount}>
              {quantidade}
            </div>
          </div>
        )}

        {!noEdit && (
          <Quantity
            color={color}
            count={quantidade}
            onUpdateCount={handleUpdateQtdCombo}
            min={0}
            max={3}
            // iconLixeira
            small
          />
        )}
      </div>
    </div>
  );
};
