import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useAppContext } from "../../contexts/app";
// import { useAuthContext } from "../../contexts/auth";
import { useFormatter } from "../../libs/useFormatter";
import { Button } from "../../src/components/Button";
import { CartProductItem } from "../../src/components/CartProductItem";
import { Header } from "../../src/components/Header";
import { InputField } from "../../src/components/InputField";
import { Tenant } from "../../src/types/Tenent";
import { User } from "../../src/types/User";
import styles from "../../styles/Cart.module.css";
import { autorizeToken } from "../../src/services/hooks/useToken";
import { getTenant } from "../../src/services/hooks/useTenant";
import { getOneOrder } from "../../src/services/hooks/useOrders";
import { Order } from "../../src/types/Order";
import { destroyCookie, parseCookies } from "nookies";
import { useTenantStore } from "../../src/store/TenantStore";

const Cart = (data: Props) => {
  const formatter = useFormatter();
  const router = useRouter();

  // const { tenant, setTenant } = useAppContext();
  // const { user, setToken, setUser } = useAuthContext();

  const [tenant, user, setTenant, setUser, setToken] = useTenantStore((state) => [
    state.tenant,
    state.user,
    state.setTenant,
    state.setUser,
    state.setToken,
  ]);

  useEffect(() => {
    setTenant(data.tenant);
    setToken(data.token);
    if (data.user) setUser(data.user);
  }, []);

  // Product Control
  // const [cart, setCart] = useState<CartItem[]>(data.cart);

  // const handleCartChange = (newCount: number, id: number) => {
  //   const tmpCart: CartItem[] = [...cart];

  //   const cartIndex = tmpCart.findIndex((item) => item.product.CODPRODUTO === id);

  //   if (newCount > 0) {
  //     tmpCart[cartIndex].qt = newCount;
  //   } else {
  //     delete tmpCart[cartIndex];
  //   }

  //   let newCart: CartItem[] = tmpCart.filter((item) => item); //aqui ele pega só os itens que existem (porque o deletado fica como null)

  //   setCart(newCart);

  //   console.log(newCart);

  //   //update Cookie
  //   let cartCookie: CartCookie[] = [];
  //   for (let i in newCart) {
  //     cartCookie.push({
  //       id: newCart[i].product.CODPRODUTO,
  //       qt: newCart[i].qt,
  //       preco: newCart[i].product.PRECOVENDA,
  //       combo: newCart[i].product.COMBO,
  //       //codvenda: data.codvenda,
  //     });
  //   }
  //   setCookie("cart", JSON.stringify(cartCookie));
  // };

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

  // useEffect(() => {
  //   let sub = 0;
  //   for (let i in cart) {
  //     sub += cart[i].product.PRECOVENDA * cart[i].qt;
  //   }

  //   setSubtotal(sub);
  // }, [cart]);

  useEffect(() => {
    let totalVenda = 0;
    data.order?.Vendadetalhe_temp &&
      data.order.Vendadetalhe_temp.map((item) => {
        totalVenda = totalVenda + item.ValorTotal;
      });

    setSubtotal(totalVenda);
  }, []);

  // useEffect(() => {
  //   !data.order && router.push(`/${data.tenant.slug}`);
  // }, []);

  const handleFinish = () => {
    router.push(`/${data.tenant.slug}/checkout`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Sacola | ${data.tenant.name}`}</title>
      </Head>

      <div style={{ marginBottom: "20px" }}>
        <Header
          backHref={`/${data.tenant.slug}`}
          color={data.tenant.mainColor}
          title={data.comandaCookie ? `Itens Comanda: ${data.comandaCookie}` : "Itens"}
          subTitle="Produtos"
        />
      </div>

      {/* <div className={styles.resumeButton} style={{ marginBottom: "15px" }}>
        <Button
          color={data.tenant.mainColor}
          label="< Adicionar mais Itens"
          onClick={() => {
            router.push(`/${data.tenant.slug}`);
          }}
          fill
        />
      </div> */}

      {data.order?.Vendadetalhe_temp && (
        <div className={styles.productsList}>
          {data.order.Vendadetalhe_temp.map((item, index) => (
            <CartProductItem
              key={index}
              color={data.tenant.mainColor}
              quantity={item.Quantidade}
              product={{
                CODBARRA: item.Produto.CodBarra,
                CODGRUPO: 1,
                CODPRODUTO: item.Produto.codproduto,
                DESCRICAO: item.Produto.Descricao,
                NOME: "Grupo Geral",
                PRECOVENDA: item.ValorUnitario,
                URLIMAGE: item.Produto.urlImage,
              }}
              // onChange={handleCartChange}
              onChange={() => {}}
            />
          ))}
        </div>
      )}

      <div className={styles.productsQuantity}>{/* {cart.length} {cart.length === 1 ? "item" : "itens"} */}</div>

      {!data.order && (
        <div className={styles.shippingArea}>
          <div className={styles.shippingTitle}>Calcular Frete e Prazo</div>
          <div className={styles.shippingForm}>
            <InputField
              color={data.tenant.mainColor}
              placeholder="Digite o CEP"
              value={shippingInput}
              onChange={(newValue) => setShippingInput(newValue)}
            />
            <Button color={data.tenant.mainColor} label="OK" onClick={handleShippingCalc} />
          </div>

          {shippingTime > 0 && (
            <div className={styles.shippingInfo}>
              <div className={styles.shippingAdress}>{shippingAddress}</div>
              <div className={styles.shippingTime}>
                <div className={styles.shippingTimeText}>Recebe em até {shippingTime} minutos</div>
                <div style={{ color: data.tenant.mainColor }} className={styles.shippingPrice}>
                  {formatter.formatPrice(shippingPrice)}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className={styles.resumeArea}>
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>Subtotal</div>
          <div className={styles.resumeRight}>{formatter.formatPrice(subtotal)}</div>
        </div>
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>{data.comandaCookie ? "Taxa de Serviço" : "Frete"}</div>
          {data.comandaCookie ? (
            <div className={styles.resumeRight}>{formatter.formatPrice(subtotal * 0.1)}</div>
          ) : (
            <div className={styles.resumeRight}>{shippingPrice > 0 ? formatter.formatPrice(shippingPrice) : "--"}</div>
          )}
        </div>
        <div className={styles.resumeLine}></div>
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>Total</div>
          <div style={{ color: data.tenant.mainColor }} className={styles.resumeRightBig}>
            {data.comandaCookie
              ? formatter.formatPrice(subtotal + subtotal * 0.1)
              : formatter.formatPrice(shippingPrice + subtotal)}
          </div>
        </div>
        {!data.order?.Mesa && (
          <div className={styles.resumeButton}>
            <Button color={data.tenant.mainColor} label="Continuar" onClick={handleFinish} fill />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

type Props = {
  tenant: Tenant;
  token: string;
  user: User | null;
  order: Order | null;
  comandaCookie: string;
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

  const user = await autorizeToken(token as string);
  const { "manna.comanda": comandaCookie } = parseCookies(context);
  const { "manna.codvenda": codvendaCookie } = parseCookies(context);

  const order = await getOneOrder({
    //
    tenantSlug: tenant.slug,
    ...(comandaCookie && { mesaComanda: Number(comandaCookie) }),
    ...(codvendaCookie && { codVenda: Number(codvendaCookie) }),
  })
    .then((res) => {
      if (!res) {
        console.log("res destroy manna.comanda");
        destroyCookie(context, "manna.comanda", { path: "/" });
      }
      return res;
    })
    .catch(() => {
      console.log("cat destroy manna.comanda");
      if (comandaCookie) {
        destroyCookie(context, "manna.comanda", { path: "/" });
      }
      return undefined;
    });

  // console.log({ order });

  return {
    props: { tenant, user, token, order: order ? order : {}, comandaCookie: comandaCookie ? comandaCookie : "" },
  };
};
