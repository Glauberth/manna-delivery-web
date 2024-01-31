import IconLixeira from "./icons8-lixo.svg";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useFormatter } from "../../../libs/useFormatter";

type Props = {
  color: string;
  count: number;
  onUpdateCount: (newCount: number) => void;
  min?: number;
  max?: number;
  small?: boolean;
  iconLixeira?: boolean;
};

export const Quantity = ({
  color,
  count,
  onUpdateCount,
  min,
  max,
  small,
  iconLixeira,
}: Props) => {
  const [canRemove, setCanRemove] = useState(false);
  const [canAdd, setCanAdd] = useState(false);
  const formatter = useFormatter();

  useEffect(() => {
    // console.log({ count: count, min: min, max: max });

    if (min) {
      setCanRemove(!min || (min && count > min) ? true : false);
    } else {
      setCanRemove(min == 0 && count > min ? true : false);
    }

    setCanAdd(!max || (max && count < max) ? true : false);
  }, [count, min, max]);

  const handleRemove = () => {
    if (canRemove) onUpdateCount(count - 1);
  };

  const handleAdd = () => {
    if (canAdd) onUpdateCount(count + 1);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.button}
        onClick={handleRemove}
        style={{
          color: canRemove ? "#FFF" : "#96a3ab",
          backgroundColor: canRemove ? color : "#f2f4f5",
          width: small ? 42 : 48,
          height: small ? 42 : 48,
        }}
      >
        {canRemove ? "-" : iconLixeira ? <IconLixeira color={"#000"} /> : "-"}
      </div>
      <div className={styles.qt} style={{ fontSize: small ? 16 : 18 }}>
        {formatter.formatQuantity(count, 2)}
      </div>
      <div
        className={styles.button}
        onClick={handleAdd}
        style={{
          color: canAdd ? "#FFF" : "#96a3ab",
          backgroundColor: canAdd ? color : "#f2f4f5",
          width: small ? 42 : 48,
          height: small ? 42 : 48,
        }}
      >
        +
      </div>
    </div>
  );
};
