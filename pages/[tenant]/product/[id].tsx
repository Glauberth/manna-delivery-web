import { getCookie, hasCookie, setCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../contexts/app";
import { useFormatter } from "../../../libs/useFormatter";
import { Button } from "../../../src/components/Button";
import { Header } from "../../../src/components/Header";
import { Quantity } from "../../../src/components/Quantity";
import { CartCookie } from "../../../src/types/CartCookie";
import { Tenant } from "../../../src/types/Tenent";
import styles from "../../../styles/Product-id.module.css";
import { useProduct } from "../../../src/services/hooks/useProduto";
import { getTenant } from "../../../src/services/hooks/useTenant";
// import { CartProductItem } from "../../../src/components/CartProductItem";
import { ComboItem } from "../../../src/components/ComboItem";
import { Combo } from "../../../src/types/Combo";
import ProductImage from "../../../src/components/ProductItem/ProductImagem";
import Skeleton from "../../../src/components/Skeleton/Skeleton";
import { IDetectedBarcode, IScannerProps, Scanner } from "@yudiel/react-qr-scanner";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addOrderProduct } from "../../../src/services/hooks/useOrders";
import Swal from "sweetalert2";

const Products = (data: Props) => {
  const {
    data: produtoQuery,
    error: errorProduto,
    isLoading: isLoadingProduto,
    isFetching: isFetchingProduto,
  } = useProduct(data.tenant.slug, data.productID);

  const [obsItem, setObsItem] = useState("");
  const [cameraIsOpen, setCameraIsOpen] = useState(false);
  const [totalPriceProduct, setTotalPriceProdutct] = useState<number>(0);
  const { tenant, setTenant } = useAppContext();
  const [qtCount, setQtCount] = useState(1);
  const [combo, setCombo] = useState<Combo[]>([]);
  const router = useRouter();
  const formatter = useFormatter();
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });

  function handleCamera() {
    setCameraIsOpen(!cameraIsOpen);
  }

  async function handleResultScan(dados: IDetectedBarcode[]) {
    dados.map(async (item, index) => {
      // console.log({
      //   rawValue: item.rawValue,
      //   format: item.format,
      //   completo: item,
      // });

      setCameraIsOpen(false);

      const nMesa = item.rawValue;
      const timerToClose = 5000;

      swalWithBootstrapButtons
        .fire({
          title: `Adicionar na Comanda ${nMesa} ?`,
          text: produtoQuery?.DESCRICAO,
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Sim",
          cancelButtonText: "Não, Voltar!",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await addOrderProduct(data.tenant.slug, {
              codBarra: produtoQuery!.CODBARRA,
              codProduto: produtoQuery!.CODPRODUTO,
              codUsuario: 1,
              mesa: Number(nMesa),
              precoVenda: produtoQuery?.PRECOPROMO ? produtoQuery.PRECOPROMO : produtoQuery!.PRECOVENDA,
              quantidade: 1,
              OBS: obsItem,
            })
              .then((res) => {
                toast.success(`Item adicionado na Comanda Nº: ${item.rawValue}`, {
                  position: "top-center",
                  autoClose: timerToClose,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  transition: Bounce,
                });
              })
              .catch((err) => {
                toast.error(`Erro ao Lançar item: ${(err as Error).message}`, {
                  position: "top-center",
                  autoClose: timerToClose,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  transition: Bounce,
                });
              });
          }
        });
    });
  }

  function handleAddProductToCart() {
    let cart: CartCookie[] = [];

    if (hasCookie("cart")) {
      // create or existing cart
      const cartCookie = getCookie("cart");
      const cartJson: CartCookie[] = JSON.parse(cartCookie as string);

      for (let i in cartJson) {
        if (cartJson[i].qt && cartJson[i].id) {
          cart.push(cartJson[i]);
        }
      }
    }

    // procurando o produto em um carrinho
    const cartIndex = cart.findIndex((item) => item.id === data.productID);

    if (cartIndex > -1) {
      // atualizando o carrinho
      cart[cartIndex].qt += qtCount;
    } else {
      // adicionando o produto ao carrinho

      cart.push({
        id: data.productID,
        qt: qtCount,
        preco: 0, //data.product.PRECOVENDA,
        combo: combo,
      });
    }

    setCookie("cart", JSON.stringify(cart));

    //Mandar para o carrinho
    //router.push(`/${data.tenant.slug}/cart`);
    router.push(`/${data.tenant.slug}`);
  }

  function handleUpdateQt(newCount: number) {
    setQtCount(newCount);
  }

  function handleAddCombo(newCombo: Combo) {
    // procurando o combo no array de combos
    const resultSearchIndex = combo.findIndex((item) => item.CODCOMBO === newCombo.CODCOMBO);

    let finalCombo;

    if (resultSearchIndex > -1) {
      if (newCombo.QUANTIDADE >= 1) {
        const newArrayCombo = combo.map((item) => {
          if (item.CODCOMBO == combo[resultSearchIndex].CODCOMBO) {
            item.QUANTIDADE = newCombo.QUANTIDADE;
            return item;
          } else {
            return item;
          }
        });

        finalCombo = newArrayCombo;
      } else {
        //ou remove o combo caso a quantidade for menor que zero
        const newArrayCombo = combo;

        // deleta a posição indicada e o segundo parametro é pra deletar só este objeto do array,
        // se colocar 2 no segundo parametro, ele vai apagar a posição selecionada e mais um pra frente,
        // esse segundo parametro é o countRemove, serve pra decidir quantos items depois dele serão apagados...
        newArrayCombo.splice(resultSearchIndex, 1);
        finalCombo = newArrayCombo;
      }
    } else {
      const newArray = [...combo, newCombo];

      finalCombo = newArray;
    }

    const total = finalCombo.reduce(
      (accumulator, newItem) => {
        return accumulator + newItem.PRECOVENDA * newItem.QUANTIDADE;
      },
      produtoQuery ? produtoQuery.PRECOVENDA : 0
      //  data.product.PRECOVENDA
    );

    setCombo(finalCombo);
    setTotalPriceProdutct(total);
  }

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  useEffect(() => {
    // produtoQuery && setProduct(produtoQuery);
    produtoQuery && setTotalPriceProdutct(produtoQuery.PRECOPROMO ? produtoQuery.PRECOPROMO : produtoQuery.PRECOVENDA);
  }, [produtoQuery]);

  return (
    <div className={styles.container}>
      <>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </>
      {isLoadingProduto || isFetchingProduto ? (
        <Skeleton heigth={30} lines={10} />
      ) : produtoQuery ? (
        <>
          <Head>
            <title>{`${produtoQuery.DESCRICAO} | ${data.tenant.name}`}</title>
          </Head>

          <div className={styles.headerArea}>
            <Header color={data.tenant.mainColor} backHref={`/${data.tenant.slug}`} title={produtoQuery.DESCRICAO} invert />
          </div>

          <div className={styles.headerBg} style={{ backgroundColor: data.tenant.mainColor }}></div>

          <div
            className={styles.productImage}
            style={{
              opacity: produtoQuery.URLIMAGE ? "1" : "0.2",
            }}
          >
            <ProductImage altura={300} largura={300} src={produtoQuery.URLIMAGE} />
          </div>

          <div className={styles.category}>{produtoQuery.NOME}</div>
          <div className={styles.title} style={{ borderBottomColor: tenant?.mainColor }}>
            {produtoQuery.DESCRICAO}
          </div>
          <div className={styles.line}></div>
          <div className={styles.description}>{produtoQuery.OBSERVACAO}</div>
          {/* <div className={styles.qtText}>Quantidade</div> */}
          <div className={styles.area}>
            <div style={{ display: "flex", gap: 5, alignItems: "flex-end" }}>
              {produtoQuery.PRECOPROMO && (
                <div className={styles.areaRight} style={{ color: data.tenant.mainColor }}>
                  {produtoQuery.PRECOPROMO && formatter.formatPrice(produtoQuery.PRECOPROMO)}
                </div>
              )}
              <div
                className={styles.areaRight}
                style={{
                  color: produtoQuery.PRECOPROMO ? "#7171718f" : data.tenant.mainColor,
                  textDecoration: produtoQuery.PRECOPROMO ? "line-through" : "none",
                  fontSize: produtoQuery.PRECOPROMO && 20,
                }}
              >
                {produtoQuery.PRECOPROMO
                  ? formatter.formatPrice(produtoQuery.PRECOVENDA)
                  : formatter.formatPrice(totalPriceProduct)}
              </div>
            </div>
          </div>

          {produtoQuery.COMBO && produtoQuery.COMBO.length > 0 && (
            <div style={{ marginTop: "20px", textAlign: "center", fontWeight: "bold" }} className={styles.category}>
              ADICIONAIS
            </div>
          )}

          {produtoQuery.COMBO &&
            produtoQuery.COMBO.map((item: Combo, index: number) => {
              return <ComboItem key={index} color={data.tenant.mainColor} combo={item} handleCombo={handleAddCombo} />;
            })}

          <div className={styles.areaObs}>
            <textarea
              style={{ borderColor: data.tenant.mainColor, fontSize: 16 }}
              placeholder="Alguma Observação ?"
              id="story"
              name="story"
              rows={5}
              value={obsItem}
              onChange={(e) => setObsItem(e.target.value)}
            ></textarea>
          </div>

          <div className={styles.buttonArea}>
            {cameraIsOpen && (
              <Scanner formats={["qr_code", "code_128", "ean_13"]} onScan={(result) => handleResultScan(result)} />
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // gap: 1,
                justifyContent: "space-between",
                marginLeft: "5px",
              }}
            >
              {/* <div> */}
              <Quantity
                color={data.tenant.mainColor}
                count={qtCount}
                onUpdateCount={handleUpdateQt}
                min={1}
                // small
                // max={10}
                // iconLixeira
              />
              {/* </div> */}
              <div style={{ width: "100%", marginLeft: "10px" }}>
                <Button
                  disabled={data.tenant.isCatalog}
                  color={data.tenant.mainColor}
                  label={`Adicionar`}
                  preco={formatter.formatPrice(totalPriceProduct)}
                  // onClick={handleAlert}
                  onClick={handleCamera}
                  fill
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Skeleton heigth={30} lines={20} />
      )}
    </div>
  );
};

export default Products;

type Props = {
  tenant: Tenant;
  productID: number;
  // product: Product;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug, id } = context.query;

  //GET Tenant
  const tenant = await getTenant(tenantSlug as string);

  // console.log({ DadosTenant: tenant });
  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  //GET Product
  //const product = await getOneProduct(tenantSlug as string, parseInt(id as string));
  //const product = await api.getProduct(parseInt(id as string));
  const productID = parseInt(id as string);

  return {
    //props: { tenant, product },
    props: { tenant, productID },
    // revalidate: 1,
    // fallback: true,
  };
};
