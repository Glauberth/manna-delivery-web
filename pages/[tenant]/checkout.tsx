import { getCookie, setCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/app";
import { useAuthContext } from "../../contexts/auth";
import { useFormatter } from "../../libs/useFormatter";
import { Button } from "../../src/components/Button";
import { ButtonWithIcon } from "../../src/components/ButtonWithIcon";
import { CartProductItem } from "../../src/components/CartProductItem";
import { Header } from "../../src/components/Header";
import { InputField } from "../../src/components/InputField";
import { Address } from "../../src/types/Address";
import { CartCookie } from "../../src/types/CartCookie";
// import { CartItem } from "../../src/types/CartItem";
import { Tenant } from "../../src/types/Tenent";
import { User } from "../../src/types/User";
import styles from "../../styles/Checkout.module.css";
// import { getCartProducts } from "../../src/services/hooks/useProduto";
import { autorizeToken } from "../../src/services/hooks/useToken";
// import { newOrder } from "../../src/services/hooks/useOrders";
import { getTenant } from "../../src/services/hooks/useTenant";

const Checkout = (data: Props) => {
  const formatter = useFormatter();
  const router = useRouter();

  const { user, setToken, setUser } = useAuthContext();
  const { tenant, setTenant, shippingAddress, shippingPrice } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
    setToken(data.token);
    if (data.user) setUser(data.user);
  }, []);

  // Product Control
  // const [cart, setCart] = useState<CartItem[]>(data.cart);
  const [cart, setCart] = useState([]); // useState(data.cart);

  // Shipping
  const handleChangeAddress = () => {
    router.push(`/${data.tenant.slug}/myaddresses`);
  };

  //Payments
  const [paymentType, setPaymentType] = useState<"money" | "card">("money");
  const [paymentChange, setPaymentChange] = useState(0);

  //cupom
  const [cupom, setCupom] = useState<string>("");
  const [cupomDiscount, setCupomDiscount] = useState(0);
  const [cupomInput, setCupomInput] = useState("");
  const handleSetCupom = () => {
    if (cupomInput) {
      setCupom(cupomInput);
      setCupomDiscount(15.2);
    }
  };

  // Resume
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let sub = 0;
    for (let i in cart) {
      // sub += cart[i].product.PRECOVENDA * cart[i].qt;
    }

    setSubtotal(sub);
  }, [cart]);

  const handleFinish = async () => {
    // if (shippingAddress) {
    //   const order = await newOrder(shippingAddress, paymentType, paymentChange, cupom, data.cart);
    //   if (order) {
    //     router.push(`/${data.tenant.slug}/order/${order.codvenda}`);
    //   } else {
    //     alert("Ocorreu um erro, tente mais tarde!");
    //   }
    // }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Checkout | ${data.tenant.name}`}</title>
      </Head>

      <Header backHref={`/${data.tenant.slug}/cart`} color={data.tenant.mainColor} title="Checkout" subTitle="Produtos" />

      <div className={styles.infoGroup}>
        <div className={styles.infoArea}>
          <div className={styles.infoTitle}>Endereço</div>
          <div className={styles.infoBody}>
            <ButtonWithIcon
              color={data.tenant.mainColor}
              leftIcon={"location"}
              rightIcon={"rightarrow"}
              value={
                shippingAddress
                  ? `${shippingAddress.endereco}, Nº ${shippingAddress.numero} - ${shippingAddress.bairro}`
                  : "Escolha um endereço"
              }
              onClick={handleChangeAddress}
              //fill
            />
          </div>
        </div>

        <div className={styles.infoArea}>
          <div className={styles.infoTitle}>Tipo de Pagamento</div>
          <div className={styles.infoBody}>
            <div className={styles.paymentType}>
              <div className={styles.paymentBtn}>
                <ButtonWithIcon
                  color={data.tenant.mainColor}
                  leftIcon="money"
                  value="Dinheiro"
                  onClick={() => setPaymentType("money")}
                  fill={paymentType === "money"}
                />
              </div>
              <div className={styles.paymentBtn}>
                <ButtonWithIcon
                  color={data.tenant.mainColor}
                  leftIcon="card"
                  value="Cartão"
                  onClick={() => setPaymentType("card")}
                  fill={paymentType === "card"}
                />
              </div>
            </div>
          </div>
        </div>

        {paymentType === "money" && (
          <div className={styles.infoArea}>
            <div className={styles.infoTitle}>Troco</div>
            <div className={styles.infoBody}>
              <InputField
                color={data.tenant.mainColor}
                placeholder="Quanto você tem em dinheiro?"
                value={paymentChange ? paymentChange.toString() : ""}
                onChange={(newValue) => {
                  setPaymentChange(parseInt(newValue));
                }}
              />
            </div>
          </div>
        )}

        <div className={styles.infoArea}>
          <div className={styles.infoTitle}>Cupom de Desconto</div>
          <div className={styles.infoBody}>
            {cupom && (
              <ButtonWithIcon
                color={data.tenant.mainColor}
                leftIcon={"cupom"}
                rightIcon={"checked"}
                value={cupom.toUpperCase()}
                //onClick={}
                //fill
              />
            )}

            {!cupom && (
              <div className={styles.cupomInput}>
                <InputField
                  color={data.tenant.mainColor}
                  placeholder="Digite o código do cupom"
                  value={cupomInput}
                  onChange={(newValue) => setCupomInput(newValue)}
                />
                <Button color={data.tenant.mainColor} label="OK" onClick={handleSetCupom} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.productsQuantity}>
        {cart.length} {cart.length === 1 ? "item" : "itens"}
      </div>

      <div className={styles.productsList}>
        {/* {cart.map((cartItem, index) => (
          <CartProductItem
            key={index}
            color={data.tenant.mainColor}
            quantity={cartItem.qt}
            product={cartItem.product}
            onChange={() => {}}
            noEdit
          />
        ))} */}
      </div>

      <div className={styles.resumeArea}>
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>Subtotal</div>
          <div className={styles.resumeRight}>{formatter.formatPrice(subtotal)}</div>
        </div>

        {cupomDiscount > 0 && (
          <div className={styles.resumeItem}>
            <div className={styles.resumeLeft}>Desconto</div>
            <div className={styles.resumeRight}>- {formatter.formatPrice(cupomDiscount)}</div>
          </div>
        )}
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>Frete</div>
          <div className={styles.resumeRight}>{shippingPrice > 0 ? formatter.formatPrice(shippingPrice) : "--"}</div>
        </div>
        <div className={styles.resumeLine}></div>
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>Total</div>
          <div style={{ color: data.tenant.mainColor }} className={styles.resumeRightBig}>
            {formatter.formatPrice(shippingPrice + subtotal - cupomDiscount)}
          </div>
        </div>
        <div className={styles.resumeButton}>
          <Button
            color={data.tenant.mainColor}
            label="Finalizar Pedido"
            onClick={handleFinish}
            fill
            disabled={!shippingAddress}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

type Props = {
  tenant: Tenant;
  token: string;
  user: User | null;
  // cart: CartItem[];
  // codvenda: number;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;

  //GET Tenant
  const tenant = await getTenant(tenantSlug as string);

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
  const user = await autorizeToken(token as string);

  //GET CART PRODUTOS
  const cartCookie = getCookie("cart", context);
  //const cart = await api.getCartProducts(cartCookie as string);
  // const cart = await getCartProducts(tenantSlug as string, cartCookie as string);
  //console.log("CART", cart);
  //console.log(codvenda);
  return {
    // props: { tenant, user, token, cart },
    props: { tenant, user, token },
  };
};
