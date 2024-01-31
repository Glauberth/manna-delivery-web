import { getCookie, hasCookie } from "cookies-next";
import CartIcon from "./../Icon/cart.svg";
import styles from "./styles.module.css";
import { useFormatter } from "../../../libs/useFormatter";
import { CartCookie } from "../../types/CartCookie";

type Props = {
  tenantSlug: string;
};

function FooterCart({ tenantSlug }: Props) {
  const isCartCookie = hasCookie("cart");

  function getTotalCart() {
    if (isCartCookie) {
      const cartCookie = getCookie("cart");
      const data: CartCookie[] = JSON.parse(
        decodeURIComponent(cartCookie as string)
      );

      console.log("dadosCookie", data);

      const totalProduto = data.reduce((accumulator, item) => {
        const totalCombo = item.combo?.reduce((accumulator, item) => {
          return accumulator + item.PRECOVENDA * item.QUANTIDADE;
        }, 0);

        return totalCombo
          ? accumulator + item.qt * item.preco + totalCombo * item.qt
          : accumulator + item.qt * item.preco;
      }, 0);

      return totalProduto;
    } else return 0;
  }

  const formatter = useFormatter();

  return (
    <>
      {isCartCookie && (
        <footer className={styles.rodape}>
          <a href={`/${tenantSlug}/cart`}>
            <div className={styles.container}>
              <div className={styles.cartIcon}>
                <CartIcon color="white" />
              </div>

              <div>
                <h1 style={{ textAlign: "center" }}>Ver a sacola</h1>
              </div>
              <div>
                <h1>{`${formatter.formatPrice(getTotalCart())}`}</h1>
              </div>
            </div>
          </a>
        </footer>
      )}
    </>
  );
}

export default FooterCart;
