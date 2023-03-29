import { getCookie, setCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/app";
import { useAuthContext } from "../../contexts/auth";
import { UseApi } from "../../libs/useApi";
import { useFormatter } from "../../libs/useFormatter";
import { Button } from "../../src/components/Button";
import { CartProductItem } from "../../src/components/CartProductItem";
import { Header } from "../../src/components/Header";
import { InputField } from "../../src/components/InputField";
import { CartCookie } from "../../src/types/CartCookie";
import { CartItem } from "../../src/types/CartItem";
import { Tenant } from "../../src/types/Tenent";
import { User } from "../../src/types/User";
import styles from "../../styles/Cart.module.css";

const Cart = (data: Props) => {
  const formatter = useFormatter();
  const router = useRouter();

  const { tenant, setTenant } = useAppContext();
  const { user, setToken, setUser } = useAuthContext();

  useEffect(() => {
    setTenant(data.tenant);
    setToken(data.token);
    if (data.user) setUser(data.user);
  }, []);

  // Product Control
  const [cart, setCart] = useState<CartItem[]>(data.cart);
  const handleCartChange = (newCount: number, id: number) => {
    const tmpCart: CartItem[] = [...cart];

    const cartIndex = tmpCart.findIndex((item) => item.product.id === id);

    if (newCount > 0) {
      tmpCart[cartIndex].qt = newCount;
    } else {
      delete tmpCart[cartIndex];
    }

    let newCart: CartItem[] = tmpCart.filter((item) => item); //aqui ele pega só os itens que existem (porque o deletado fica como null)

    setCart(newCart);

    //update Cookie
    let cartCookie: CartCookie[] = [];
    for (let i in newCart) {
      cartCookie.push({
        id: newCart[i].product.id,
        qt: newCart[i].qt,
        //codvenda: data.codvenda,
      });
    }
    setCookie("cart", JSON.stringify(cartCookie));
  };

  // Shipping
  const [shippingInput, setShippingInput] = useState("");
  const [shippingPrice, setShippingPrice] = useState(0);
  const [shippingTime, setShippingTime] = useState(0);
  const [shippingAddress, setShippingAddress] = useState("");

  const handleShippingCalc = () => {
    setShippingAddress("Rua 31, Quadra 20, N 86");
    setShippingPrice(5.5);
    setShippingTime(20);
  };

  // Resume
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let sub = 0;
    for (let i in cart) {
      sub += cart[i].product.price * cart[i].qt;
    }

    setSubtotal(sub);
  }, [cart]);

  const handleFinish = () => {
    router.push(`/${data.tenant.slug}/checkout`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Sacola | ${data.tenant.name}`}</title>
      </Head>

      <Header
        backHref={`/${data.tenant.slug}`}
        color={data.tenant.mainColor}
        title="Sacola"
        subTitle="Produtos"
      />

      <div className={styles.productsQuantity}>
        {cart.length} {cart.length === 1 ? "item" : "itens"}
      </div>

      <div className={styles.productsList}>
        {cart.map((cartItem, index) => (
          <CartProductItem
            key={index}
            color={data.tenant.mainColor}
            quantity={cartItem.qt}
            product={cartItem.product}
            onChange={handleCartChange}
          />
        ))}
      </div>

      <div className={styles.shippingArea}>
        <div className={styles.shippingTitle}>Calcular Frete e Prazo</div>
        <div className={styles.shippingForm}>
          <InputField
            color={data.tenant.mainColor}
            placeholder="Digite o CEP"
            value={shippingInput}
            onChange={(newValue) => setShippingInput(newValue)}
          />
          <Button
            color={data.tenant.mainColor}
            label="OK"
            onClick={handleShippingCalc}
          />
        </div>

        {shippingTime > 0 && (
          <div className={styles.shippingInfo}>
            <div className={styles.shippingAdress}>{shippingAddress}</div>
            <div className={styles.shippingTime}>
              <div className={styles.shippingTimeText}>
                Recebe em até {shippingTime} minutos
              </div>
              <div
                style={{ color: data.tenant.mainColor }}
                className={styles.shippingPrice}
              >
                {formatter.formatPrice(shippingPrice)}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.resumeArea}>
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>Subtotal</div>
          <div className={styles.resumeRight}>
            {formatter.formatPrice(subtotal)}
          </div>
        </div>
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>Frete</div>
          <div className={styles.resumeRight}>
            {shippingPrice > 0 ? formatter.formatPrice(shippingPrice) : "--"}
          </div>
        </div>
        <div className={styles.resumeLine}></div>
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>Total</div>
          <div
            style={{ color: data.tenant.mainColor }}
            className={styles.resumeRightBig}
          >
            {formatter.formatPrice(shippingPrice + subtotal)}
          </div>
        </div>
        <div className={styles.resumeButton}>
          <Button
            color={data.tenant.mainColor}
            label="Continuar"
            onClick={handleFinish}
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;

type Props = {
  tenant: Tenant;
  token: string;
  user: User | null;
  cart: CartItem[];
  // codvenda: number;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

  const api = UseApi(tenantSlug as string);

  //GET Tenant
  const tenant = await api.getTenant();

  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  //GET LOGGED USER
  //const token = context.req.cookies.token; //Também posso usar assim pra pegar o cookie

  let token = getCookie("token", context);
  if (token === undefined) {
    token = null;
  }

  // console.log("Token: " + token);
  const user = await api.authorizeToken(token as string);

  //GET CART PRODUTOS
  const cartCookie = getCookie("cart", context);
  const cart = await api.getCartProducts(cartCookie as string);
  //console.log("CART", cart);
  //console.log(codvenda);
  return {
    props: { tenant, user, token, cart },
  };
};
