"use client";

import { getCookie, hasCookie } from "cookies-next";
import CartIcon from "./../Icon/cart.svg";
import styles from "./styles.module.css";
import { useFormatter } from "../../../libs/useFormatter";
import { getOneOrder } from "../../services/hooks/useOrders";
import { useEffect, useState } from "react";
import { destroyCookie } from "nookies";
// import { CartCookie } from "../../types/CartCookie";

type Props = {
  tenantSlug: string;
  color: string;
};

function FooterCart({ tenantSlug, color }: Props) {
  const [isComandaCookie, setIsComandaCookie] = useState(hasCookie("manna.comanda"));

  useEffect(() => {
    async function handleOder() {
      if (isComandaCookie) {
        const comandaCookie = getCookie("manna.comanda");
        const dadosOrder = await getOneOrder({ tenantSlug: tenantSlug, mesaComanda: Number(comandaCookie) });

        if (!dadosOrder) {
          destroyCookie(undefined, "manna.comanda");
          setIsComandaCookie(false);
        }
      }
    }

    handleOder();
  }, []);

  // function getTotalCart() {
  //   if (isCartCookie) {
  //     const cartCookie = getCookie("cart");
  //     const data: CartCookie[] = JSON.parse(decodeURIComponent(cartCookie as string));

  //     console.log("dadosCookie", data);

  //     const totalProduto = data.reduce((accumulator, item) => {
  //       const totalCombo = item.combo?.reduce((accumulator, item) => {
  //         return accumulator + item.PRECOVENDA * item.QUANTIDADE;
  //       }, 0);

  //       return totalCombo ? accumulator + item.qt * item.preco + totalCombo * item.qt : accumulator + item.qt * item.preco;
  //     }, 0);

  //     return totalProduto;
  //   } else return 0;
  // }

  const formatter = useFormatter();

  return (
    <>
      {isComandaCookie && (
        <a href={`/${tenantSlug}/cart`}>
          <footer className={styles.rodape} style={{ backgroundColor: color }}>
            <div className={styles.container}>
              <div className={styles.cartIcon}>
                <CartIcon color="white" />
              </div>

              <div>
                <h1 style={{ textAlign: "center" }}>Ver Conta</h1>
              </div>
              <div>{/* <h1>{`${formatter.formatPrice(getTotalCart())}`}</h1> */}</div>
            </div>
          </footer>
        </a>
      )}
    </>
  );
}

export default FooterCart;
