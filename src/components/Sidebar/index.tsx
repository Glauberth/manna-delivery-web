import { useRouter } from "next/router";
import { useAuthContext } from "../../../contexts/auth";
import { Tenant } from "../../types/Tenent";
import { Button } from "../Button";
import { SidebarMenuItem } from "../SidebarMenuItem";
import styles from "./styles.module.css";
import { destroyCookie } from "nookies";

type Props = {
  tenant: Tenant;
  open: boolean;
  onClose: () => void;
};

export const Sidebar = ({ tenant, open, onClose }: Props) => {
  const { user, setToken } = useAuthContext();

  const router = useRouter();

  function handleDestroyCookieComanda() {
    destroyCookie(undefined, "manna.comanda");
    destroyCookie(undefined, "manna.mesa");
    onClose();
    router.reload();
  }

  return (
    <div className={styles.container} style={{ width: open ? "100vw" : "0" }}>
      <div className={styles.area}>
        <div className={styles.header}>
          <div className={styles.loginArea} style={{ borderBottomColor: tenant.mainColor }}>
            {user && (
              <div className={styles.userInfo}>
                <strong>{user.name}</strong>
                Último pedido há x semanas
              </div>
            )}

            {!user && (
              <Button
                disabled
                color={tenant.mainColor}
                label="Fazer Login"
                onClick={() => router.push(`/${tenant.slug}/login`)}
                fill
              />
            )}
          </div>

          <div className={styles.closeBtn} style={{ color: tenant.mainColor }} onClick={onClose}>
            x
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.menu}>
          <SidebarMenuItem
            //
            color={"#6A7D8B"}
            icon="menu"
            label="Cardápio"
            onClick={onClose}
          />
          <SidebarMenuItem
            color={"#6A7D8B"}
            icon="cart"
            label="Carrinho"
            onClick={() => {
              router.push(`/${tenant.slug}/cart`);
            }}
          />
          <SidebarMenuItem
            color={"#6A7D8B"}
            icon="fav"
            label="Favoritos"
            onClick={() => {}}
            disabled //essa tag opcional risca o texto do menu
          />
          <SidebarMenuItem
            color={"#6A7D8B"}
            icon="order"
            label="Meus Pedidos"
            onClick={() => {
              router.push(`/${tenant.slug}/orders`);
            }}
            disabled
          />
          <SidebarMenuItem
            //
            color={"#6A7D8B"}
            icon="config"
            label="Configurações"
            onClick={() => {}}
            disabled
          />
          <SidebarMenuItem
            //
            color={"#6A7D8B"}
            icon="config"
            label="Sair da Comanda"
            onClick={handleDestroyCookieComanda}
          />
        </div>
        <div className={styles.menuButton}>
          {user && (
            <SidebarMenuItem
              color={"#6A7D8B"}
              icon="logout"
              label="Sair"
              onClick={() => {
                setToken("");
                onClose();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
