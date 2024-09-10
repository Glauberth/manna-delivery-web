import styles from "./styles.module.css";

type Props = {
  color: string;
  label: string;
  onClick: () => void;
  fill?: boolean;
  disabled?: boolean;
  preco?: string;
};

export const Button = ({ color, label, onClick, fill, disabled, preco }: Props) => {
  return (
    <div
      className={styles.container}
      onClick={!disabled ? onClick : () => {}}
      style={{
        color: fill ? "#FFF" : color,
        borderColor: color,
        backgroundColor: fill ? color : "#FFF",
        opacity: disabled ? 0.4 : 1,
        justifyContent: "space-between",
      }}
    >
      <div style={{ textAlign: "center", alignItems: "center" }}>{label}</div>
      {preco && <div>{preco}</div>}
    </div>
  );
};
