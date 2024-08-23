import { useEffect, useState } from "react";
import { useFormatter } from "../../../libs/useFormatter";
import { Combo } from "../../types/Combo";
import { Quantity } from "../Quantity";
import styles from "./styles.module.css";
import NextImage from "next/image";

type Props = {
  color: string;
  combo: Combo;
  noEdit?: boolean;
  qtdMax?: number;
  qtdInicial?: number;
  qtdTotalGrupo: number;
  isCompletQtdGrupo: boolean;
  handleQtdTotalGrupo: (value: number) => void;
  handleCombo: (combo: Combo) => void;
};

export const ComboItem = ({
  color,
  combo,
  handleCombo,
  noEdit,
  qtdMax,
  qtdInicial = 0,
  qtdTotalGrupo,
  isCompletQtdGrupo,
  handleQtdTotalGrupo,
}: Props) => {
  const [quantidade, setQuantidade] = useState(qtdInicial);
  const formatter = useFormatter();

  function handleUpdateQtdCombo(newCount: number) {
    setQuantidade(newCount);
    const updatedCombo = { ...combo, QUANTIDADE: newCount };
    handleCombo(updatedCombo);
    // console.log({ updatedCombo });
  }

  // useEffect(() => {
  //   // console.log({ EntrounoEffcets: { updatedCombo } });
  //   setQuantidade(qtdInicial);
  //   qtdInicial && handleUpdateQtdCombo(qtdInicial);
  //   // qtdInicial && handleQtdTotalGrupo(qtdInicial);
  // }, [qtdInicial > 0]);

  return (
    <div className={styles.container}>
      <div className={styles.productImage}>
        <NextImage width={70} height={70} src={combo.URLIMAGE ? combo.URLIMAGE : "/assets/img/sem-foto.png"} alt="" />
      </div>

      <div className={styles.productInfo}>
        {/* <div className={styles.productCategory}>{combo.NOME}</div> */}
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
            max={qtdMax}
            qtdInicial={qtdInicial}
            // iconLixeira
            small
            isCompletQtdGrupo={isCompletQtdGrupo}
            setQtdTotalGrupo={handleQtdTotalGrupo}
            qtdTotalGrupo={qtdTotalGrupo}
          />
        )}
      </div>
    </div>
  );
};
