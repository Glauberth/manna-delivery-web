import { Address } from "../../types/Address";
import { Icon } from "../Icon/Icon";
import styles from "./styles.module.css";

type Props = {
  color: string;
  address: Address;
  onSelect: (address: Address) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  menuOpened: number;
  setMenuOpened: (id: number) => void;
};

export const AddressItem = ({
  color,
  address,
  onSelect,
  onEdit,
  onDelete,
  menuOpened,
  setMenuOpened,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.addressArea} onClick={() => onSelect(address)}>
        <div className={styles.addressIcon}>
          <Icon color={color} icon="location" width={24} height={24} />
        </div>
        <div
          className={styles.addressText}
        >{`${address.endereco}, ${address.numero}, ${address.bairro}${address.endereco}, ${address.numero}, ${address.bairro}${address.endereco}, ${address.numero}, ${address.bairro}`}</div>
      </div>
      <div className={styles.btnArea}>
        <div
          className={styles.menuIcon}
          onClick={() => setMenuOpened(address.id)}
        >
          <Icon color="#6A7D8B" icon="dots" width={24} height={24} />
        </div>
        {menuOpened === address.id && (
          <div className={styles.popup}>
            <div
              className={styles.popupItem}
              onClick={() => onEdit(address.id)}
            >
              <div className={styles.popupIcon}>
                <Icon color="#96a3ab" icon="edit" height={24} width={24} />
              </div>
              <div className={styles.popupText}>Editar</div>
            </div>
            <div
              className={styles.popupItem}
              onClick={() => onDelete(address.id)}
            >
              <div className={styles.popupIcon}>
                <Icon color="#96a3ab" icon="delete" height={24} width={24} />
              </div>
              <div className={styles.popupText}>Deletar</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
