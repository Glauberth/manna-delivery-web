import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppContext } from "../../../contexts/app";
import { useAuthContext } from "../../../contexts/auth";
import { useFormatter } from "../../../libs/useFormatter";
import { ButtonWithIcon } from "../../../src/components/ButtonWithIcon";
import { CartProductItem } from "../../../src/components/CartProductItem";
import { Header } from "../../../src/components/Header";
import { InputField } from "../../../src/components/InputField";
import { Tenant } from "../../../src/types/Tenent";
import { User } from "../../../src/types/User";
import styles from "../../../styles/Order-id.module.css";
import { Order } from "../../../src/types/Order";
import { autorizeToken } from "../../../services/hooks/useToken";
import { getTenant } from "../../../services/hooks/useTenant";
import { getOneOrder } from "../../../services/hooks/useOrders";

const OrderID = (data: Props) => {
  const { user, setToken, setUser } = useAuthContext();
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
    setToken(data.token);
    if (data.user) setUser(data.user);
  }, []);

  const formatter = useFormatter();
  const router = useRouter();

  useEffect(() => {
    if (data.order.status !== "delivered") {
      setTimeout(() => {
        console.log("recarregou");
        router.reload();
      }, 10000); //5seconds
    }
  }, []);

  const orderStatusList = {
    pending: {
      label: "Aguardando",
      longLabel: "Aguardando  Aprovação..",
      backgroundColor: "#d4b736",
      fonteColor: "#ffffff",
      pct: 25,
    },
    preparing: {
      label: "Preparando",
      longLabel: "Preparando o seu pedido...",
      backgroundColor: "#feede6",
      fonteColor: "#d4bc34",
      pct: 45,
    },
    sent: {
      label: "Enviado",
      longLabel: "Enviados o seu pedido...",
      backgroundColor: "#f1f3f8",
      fonteColor: "#758cbd",
      pct: 75,
    },
    delivered: {
      label: "Entregue",
      longLabel: "Seu pedido foi entregue...",
      backgroundColor: "#f1f8f6",
      fonteColor: "#6ab70a",
      pct: 100,
    },
    cancelled: {
      label: "Cancelado",
      longLabel: "Seu Pedido foi cancelado...",
      backgroundColor: "#f1f8f6",
      fonteColor: "#96202a",
      pct: 0,
    },
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Pedido #${data.order.codvenda} | ${data.tenant.name}`}</title>
      </Head>

      <Header
        backHref={`/${data.tenant.slug}/cart`}
        color={data.tenant.mainColor}
        title={`Pedido #${data.order.codvenda}`}
      />

      {data.order.status !== "delivered" && (
        <div
          className={styles.statusArea}
          style={{
            backgroundColor: orderStatusList[data.order.status].backgroundColor,
          }}
        >
          <div
            className={styles.statusLongLabel}
            style={{
              color: orderStatusList[data.order.status].fonteColor,
            }}
          >
            {orderStatusList[data.order.status].longLabel}
          </div>
          <div className={styles.statusPct}>
            <div
              className={styles.statusPctBar}
              style={{
                width: `${orderStatusList[data.order.status].pct}`,
                backgroundColor: orderStatusList[data.order.status].fonteColor,
              }}
            ></div>
          </div>
          <div className={styles.statusMsg}>
            Aguardando Mudança de status...
          </div>
        </div>
      )}

      <div className={styles.orderInfoArea}>
        <div
          className={styles.orderInfoStatus}
          style={{
            backgroundColor: orderStatusList[data.order.status].backgroundColor,
            color: orderStatusList[data.order.status].fonteColor,
          }}
        >
          {orderStatusList[data.order.status].label}
        </div>
        <div className={styles.orderInfoQt}>
          {data.order.products.length}
          {data.order.products.length === 1 ? " item" : " itens"}
        </div>
        <div className={styles.orderInfoDate}>
          {formatter.formatDate(data.order.orderDate)}
        </div>
      </div>

      <div className={styles.productsList}>
        {data.order.products.map((cartItem, index) => (
          <CartProductItem
            key={index}
            color={data.tenant.mainColor}
            quantity={cartItem.qt}
            product={cartItem.product}
            onChange={() => {}}
            noEdit
          />
        ))}
      </div>

      <div className={styles.infoGroup}>
        <div className={styles.infoArea}>
          <div className={styles.infoTitle}>Endereço</div>
          <div className={styles.infoBody}>
            <ButtonWithIcon
              color={data.tenant.mainColor}
              leftIcon={"location"}
              rightIcon={"rightarrow"}
              value={`${data.order.shippingAddress.endereco}, Nº ${data.order.shippingAddress.numero} - ${data.order.shippingAddress.bairro}`}
              onClick={() => {}}
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
                  onClick={() => {}}
                  fill={data.order.paymentType === "money"}
                />
              </div>
              <div className={styles.paymentBtn}>
                <ButtonWithIcon
                  color={data.tenant.mainColor}
                  leftIcon="card"
                  value="Cartão"
                  onClick={() => {}}
                  fill={data.order.paymentType === "card"}
                />
              </div>
            </div>
          </div>
        </div>

        {data.order.paymentType === "money" && (
          <div className={styles.infoArea}>
            <div className={styles.infoTitle}>Troco</div>
            <div className={styles.infoBody}>
              <InputField
                color={data.tenant.mainColor}
                placeholder="Quanto você tem em dinheiro?"
                value={data.order.paymentChange?.toString() ?? ""}
                onChange={() => {}}
              />
            </div>
          </div>
        )}

        {data.order.cupom && (
          <div className={styles.infoArea}>
            <div className={styles.infoTitle}>Cupom de Desconto</div>
            <div className={styles.infoBody}>
              <ButtonWithIcon
                color={data.tenant.mainColor}
                leftIcon={"cupom"}
                rightIcon={"checked"}
                value={data.order.cupom.toUpperCase()}
                //onClick={}
                //fill
              />
            </div>
          </div>
        )}
      </div>

      <div className={styles.resumeArea}>
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>Subtotal</div>
          <div className={styles.resumeRight}>
            {formatter.formatPrice(data.order.subtotal)}
          </div>
        </div>

        {data.order.cupomDiscount && (
          <div className={styles.resumeItem}>
            <div className={styles.resumeLeft}>Desconto</div>
            <div className={styles.resumeRight}>
              - {formatter.formatPrice(data.order.cupomDiscount)}
            </div>
          </div>
        )}
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>Frete</div>
          <div className={styles.resumeRight}>
            {data.order.shippingPrice > 0
              ? formatter.formatPrice(data.order.shippingPrice)
              : "--"}
          </div>
        </div>
        <div className={styles.resumeLine}></div>
        <div className={styles.resumeItem}>
          <div className={styles.resumeLeft}>Total</div>
          <div
            style={{ color: data.tenant.mainColor }}
            className={styles.resumeRightBig}
          >
            {formatter.formatPrice(data.order.total)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderID;

type Props = {
  tenant: Tenant;
  token: string;
  user: User | null;
  order: Order;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug, orderid } = context.query;

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

  //Get Order
  const order = await getOneOrder(parseInt(orderid as string));

  return {
    props: { tenant, user, token, order },
  };
};
