import { getCookie, hasCookie, setCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
// import { useAppContext } from "../../../contexts/app";
import { useFormatter } from "../../../libs/useFormatter";
import { Button } from "../../../src/components/Button";
import { Header } from "../../../src/components/Header";
import { Quantity } from "../../../src/components/Quantity";
// import { CartCookie } from "../../../src/types/CartCookie";
import { Tenant } from "../../../src/types/Tenent";
import styles from "../../../styles/Product-id.module.css";
import { useProduct } from "../../../src/services/hooks/useProduto";
import { getTenant } from "../../../src/services/hooks/useTenant";
// import { CartProductItem } from "../../../src/components/CartProductItem";
import { Combo, COMBOGRUPO, ComboVendas } from "../../../src/types/Combo";
import ProductImage from "../../../src/components/ProductItem/ProductImagem";
import Skeleton from "../../../src/components/Skeleton/Skeleton";
// import { IDetectedBarcode, IScannerProps, Scanner } from "@yudiel/react-qr-scanner";
import { addOrderProduct } from "../../../src/services/hooks/useOrders";
import Swal from "sweetalert2";
import { Modal, Box, Button as ButtonMaterial, TextField, Fade } from "@mui/material";
import { parseCookies } from "nookies";
import { LoadingButton } from "@mui/lab";
import { ComboGrupo } from "../../../src/components/ComboGrupo";
import useToast from "../../../libs/useToast";
import { useTenantStore } from "../../../src/store/TenantStore";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #8f8f8f",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const Products = (data: Props) => {
  const {
    data: produtoQuery,
    error: errorProduto,
    isLoading: isLoadingProduto,
    isFetching: isFetchingProduto,
  } = useProduct(data.tenant.slug, data.productID);

  const { showToast } = useToast();

  const router = useRouter();
  const [tenant, setTenant] = useTenantStore((state) => [state.tenant, state.setTenant]);
  // const { tenant, setTenant } = useAppContext();
  const [obsItem, setObsItem] = useState("");
  const [cameraIsOpen, setCameraIsOpen] = useState(false);
  const [totalPriceProduct, setTotalPriceProdutct] = useState<number>(0);
  const [qtCount, setQtCount] = useState(1);
  const [combo, setCombo] = useState<Combo[]>([]);
  const [openModalMesaObs, setOpenModalMesaObs] = useState(false);
  const [comandaPulseira, setComandaPulseira] = useState("");
  const [mesaObs, setMesaObs] = useState("");
  // const [mesa, setMesa] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [loading, setLoading] = useState(false);

  const formatter = useFormatter();
  const inputRefComandaPulseira = useRef<HTMLDivElement>(null);
  const inputRefNomeCliente = useRef<HTMLDivElement>(null);

  const { "manna.mesaobs": cookieMesaObs } = parseCookies();

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });

  function handleAction() {
    const combosGruposObrigatorios = produtoQuery?.COMBO?.filter((comboGrupo) => comboGrupo.obrigatorio == 1);

    if (combosGruposObrigatorios) {
      const result = combosGruposObrigatorios.map((item) => {
        const filterItensCombo = combo.filter((itemCombo) => itemCombo.codcombogrupo == item.codcombogrupo);

        const totalGrupoCombo = filterItensCombo.reduce((accumulator, itemCombo) => {
          return accumulator + itemCombo.QUANTIDADE;
        }, 0);

        return {
          grupoCombo: item.nomegrupo,
          qtdMin: item.qtdmin,
          qtdMax: item.qtdmax,
          totalQtdEscolhida: totalGrupoCombo,
          isOk: totalGrupoCombo >= item.qtdmin && totalGrupoCombo <= item.qtdmax,
        };
      });

      const combosObrigatoriosNotSelecteds = result.find((item) => item.isOk == false);

      if (combosObrigatoriosNotSelecteds) {
        showToast(`${combosObrigatoriosNotSelecteds.grupoCombo} -> É preciso escolher todos os itens obrigatórios...`, "error");

        return; //Para a aplicação aqui...
      }
    }

    const { "manna.mesaobs": cookieMesaObs } = parseCookies();
    const { "manna.comanda": cookieComandaPulsiera } = parseCookies();
    const { "manna.codvenda": cookieCodVenda } = parseCookies();

    if (cookieMesaObs) {
      setMesaObs(cookieMesaObs);
      setComandaPulseira(cookieComandaPulsiera);
      setOpenModalMesaObs(true);
    } else {
      handleAddProdutoCodVenda(cookieCodVenda);
    }
  }

  function handleAddProdutoCodVenda(cookieCodVenda: string) {
    // console.log({ codvenda: cookieCodVenda });
    swalWithBootstrapButtons
      .fire({
        title: produtoQuery?.DESCRICAO,
        text: "Adicionar o Produto ?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sim",
        cancelButtonText: "Não, Voltar!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const comboVendas: ComboVendas[] = combo.map((item) => {
            return {
              CodProduto: Number(item.CODPRODUTOCOMBO),
              Quantidade: item.QUANTIDADE,
              Impresso: "NÃO",
              PrecoVenda: item.PRECOVENDA,
              ...(cookieCodVenda && { CodVenda: Number(cookieCodVenda) }),
            };
          });

          await addOrderProduct(data.tenant.slug, {
            ...(cookieCodVenda && { codvenda: Number(cookieCodVenda) }),
            codBarra: produtoQuery!.CODBARRA,
            codProduto: produtoQuery!.CODPRODUTO,
            codUsuario: 1,
            precoVenda: produtoQuery?.PRECOPROMO ? produtoQuery.PRECOPROMO : produtoQuery!.PRECOVENDA,
            quantidade: 1,
            OBS: obsItem,
            ...(comboVendas && { combovendas: comboVendas }),
          })
            .then((res) => {
              // console.log(res);
              setCookie("manna.codvenda", res.data.codvenda, {
                maxAge: 60 * 60 * 24 * 1,
                path: "/",
              });
              showToast(`Item adicionado com sucesso!`, "success");
            })
            .catch((err) => {
              showToast(`Erro ao Lançar item: ${(err as Error).message}`, "error");
            })
            .finally(() => {
              setOpenModalMesaObs(false);
              setLoading(false);
            });
        }
      });
  }

  async function handleAddProdutoMesaComanda() {
    if (!comandaPulseira) {
      showToast(`Digite uma Comanda/Pulseira válida!`, "error");
      inputRefComandaPulseira.current && inputRefComandaPulseira.current.focus();

      return;
    }

    if (nomeCliente.length < 3) {
      showToast(`Digite seu Nome!`, "error");
      inputRefNomeCliente.current && inputRefNomeCliente.current.focus();

      return;
    }

    setLoading(true);
    const { "manna.codvenda": cookieCodVenda } = parseCookies();

    const comboVendas: ComboVendas[] = combo.map((item, index) => {
      return {
        CodProduto: Number(item.CODPRODUTOCOMBO),
        Quantidade: item.QUANTIDADE,
        Impresso: "NÃO",
        PrecoVenda: item.PRECOVENDA,
        ...(cookieCodVenda && { CodVenda: Number(cookieCodVenda) }),
      };
    });

    await addOrderProduct(data.tenant.slug, {
      codBarra: produtoQuery!.CODBARRA,
      codProduto: produtoQuery!.CODPRODUTO,
      codUsuario: 1,
      mesa: Number(comandaPulseira),
      precoVenda: produtoQuery?.PRECOPROMO ? produtoQuery.PRECOPROMO : produtoQuery!.PRECOVENDA,
      quantidade: 1,
      OBS: `${obsItem} Mesa: ${cookieMesaObs} ${nomeCliente && `Cliente: ${nomeCliente}`}`,
      ...(comboVendas && { combovendas: comboVendas }),
    })
      .then((res) => {
        setCookie("manna.comanda", comandaPulseira, {
          maxAge: 60 * 60 * 24 * 1,
          path: "/",
        });
        //Falta gravar o codvenda no cookie para os proximos subitens;
        setCookie("manna.codvenda", res.data.codvenda, {
          maxAge: 60 * 60 * 24 * 1,
          path: "/",
        });

        showToast(`Item adicionado na Comanda Nº: ${comandaPulseira}, Obs: Mesa ${cookieMesaObs} `, "success");
        router.push(`/${data.tenant.slug}/cart`);
      })
      .catch((err) => {
        showToast(`Erro ao Lançar item: ${(err as Error).message}`, "error");
      })
      .finally(() => {
        setOpenModalMesaObs(false);
        setLoading(false);
      });
  }

  // function handleCamera() {
  //   setCameraIsOpen(!cameraIsOpen);
  // }

  // async function handleResultScan(dados: IDetectedBarcode[]) {
  //   dados.map(async (item, index) => {
  //     console.log({
  //       rawValue: item.rawValue,
  //       format: item.format,
  //       completo: item,
  //     });

  //     setCameraIsOpen(false);

  //     const nComandaPulseira = item.rawValue;
  //   });
  // }

  // function handleAddProductToCart() {
  //   let cart: CartCookie[] = [];

  //   if (hasCookie("cart")) {
  //     // create or existing cart
  //     const cartCookie = getCookie("cart");
  //     const cartJson: CartCookie[] = JSON.parse(cartCookie as string);

  //     for (let i in cartJson) {
  //       if (cartJson[i].qt && cartJson[i].id) {
  //         cart.push(cartJson[i]);
  //       }
  //     }
  //   }

  //   // procurando o produto em um carrinho
  //   const cartIndex = cart.findIndex((item) => item.id === data.productID);

  //   if (cartIndex > -1) {
  //     // atualizando o carrinho
  //     cart[cartIndex].qt += qtCount;
  //   } else {
  //     // adicionando o produto ao carrinho

  //     cart.push({
  //       id: data.productID,
  //       qt: qtCount,
  //       preco: 0, //data.product.PRECOVENDA,
  //       combo: combo,
  //     });
  //   }

  //   setCookie("cart", JSON.stringify(cart));

  //   //Mandar para o carrinho
  //   //router.push(`/${data.tenant.slug}/cart`);
  //   router.push(`/${data.tenant.slug}`);
  // }

  function handleUpdateQt(newCount: number) {
    console.log({ combo });
    setQtCount(newCount);
  }

  function handleAddCombo(newCombo: Combo) {
    // procurando o combo no array de combos
    // console.log({ handleCombo: newCombo });
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
      produtoQuery ? (produtoQuery.PRECOPROMO ? produtoQuery.PRECOPROMO : produtoQuery.PRECOVENDA) : 0
    );

    // console.log({ finalCombo });

    setCombo(finalCombo);
    setTotalPriceProdutct(total);
  }

  useEffect(() => {
    setTenant(data.tenant);
  }, []);

  useEffect(() => {
    produtoQuery && setTotalPriceProdutct(produtoQuery.PRECOPROMO ? produtoQuery.PRECOPROMO : produtoQuery.PRECOVENDA);

    if (produtoQuery?.COMBO) {
      let itensCombo: Combo[] = [];

      produtoQuery?.COMBO?.map((comboGrupo) => {
        console.log({ comboGrupo });
        if (comboGrupo.obrigatorio == 1 && comboGrupo.COMBO.length == 1) {
          comboGrupo.COMBO.map((itemCombo) => {
            itensCombo.push(itemCombo);
          });
        }
      });

      itensCombo && setCombo(itensCombo);
    }
  }, [produtoQuery]);

  const handleComandaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Função para permitir apenas números no campo de texto
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setComandaPulseira(value);
    }
  };

  return (
    <div className={styles.container}>
      {cameraIsOpen ? (
        <>
          {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button color={data.tenant.mainColor} label="x" onClick={() => setCameraIsOpen(false)} />
          </div>
          <Scanner formats={["qr_code", "code_128", "ean_13"]} onScan={(result) => handleResultScan(result)} /> */}
        </>
      ) : (
        <>
          {isLoadingProduto ? (
            //||
            <Skeleton heigth={30} lines={10} />
          ) : (
            produtoQuery && (
              <>
                <Head>
                  <title>{`${produtoQuery.DESCRICAO} | ${data.tenant.name}`}</title>
                  {/* {isFetchingProduto && (<Spinner)} */}
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
                    {produtoQuery.COMBO &&
                      produtoQuery.COMBO.map((item: COMBOGRUPO, index: number) => {
                        // falta colocar pra verificar se o item está só e já colocar a quantidade como máx escolhida
                        let qtdInicial = 0;
                        if (item.COMBO.length == 1 && item.obrigatorio) {
                          qtdInicial = item.qtdmax;
                        }
                        return (
                          <ComboGrupo
                            key={index}
                            ComboGrupo={item}
                            Combo={item.COMBO}
                            colorTenant={data.tenant.mainColor}
                            handleAddCombo={handleAddCombo}
                          />
                        );
                      })}
                  </div>
                )}

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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      // gap: 1,
                      justifyContent: "space-between",
                      marginLeft: "5px",
                    }}
                  >
                    <Quantity
                      color={data.tenant.mainColor}
                      count={qtCount}
                      onUpdateCount={handleUpdateQt}
                      min={1}
                      // small
                      // max={10}
                      // iconLixeira
                    />

                    <div style={{ width: "100%", marginLeft: "10px" }}>
                      <Button
                        disabled={data.tenant.isCatalog ? true : cookieMesaObs ? false : true}
                        color={data.tenant.mainColor}
                        label={`Adicionar`}
                        preco={formatter.formatPrice(totalPriceProduct)}
                        onClick={handleAction}
                        fill
                      />
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </>
      )}
      <div>
        {/* <ButtonMaterial variant="contained" onClick={handleOpen}>
          Abrir Modal
        </ButtonMaterial> */}
        <Modal
          open={openModalMesaObs}
          //onClose={handleCloseModal}
          // onClose={() => {}} //função para executar ao fechar o modal...
          hideBackdrop
        >
          <Fade in={openModalMesaObs}>
            <Box sx={style}>
              <div>
                <h2 style={{ textAlign: "center" }}>{produtoQuery?.DESCRICAO}</h2>
              </div>

              <TextField
                inputRef={inputRefComandaPulseira}
                type="text"
                onChange={handleComandaChange}
                label="Informe a Comanda/Pulseira "
                fullWidth
                margin="normal"
                value={comandaPulseira}
                //Isso aqui retira as setinhas chatas do input number...
                sx={{
                  "& input[type=number]": {
                    MozAppearance: "textfield",
                    "&::-webkit-outer-spin-button": {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                    "&::-webkit-inner-spin-button": {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                  },
                }}
              />
              <TextField
                inputRef={inputRefNomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
                label="Seu Nome"
                fullWidth
                margin="normal"
                value={nomeCliente}
              />

              {mesaObs && (
                <TextField
                  //
                  disabled
                  label="Observação Nº Mesa"
                  fullWidth
                  margin="normal"
                  value={cookieMesaObs}
                />
              )}
              <div style={{ display: "flex", justifyContent: "end" }}>
                <ButtonMaterial
                  disabled={loading}
                  style={{ marginRight: "10px" }}
                  variant="outlined"
                  color="secondary"
                  onClick={() => setOpenModalMesaObs(false)}
                >
                  Voltar
                </ButtonMaterial>
                <LoadingButton loading={loading} variant="contained" color="primary" onClick={handleAddProdutoMesaComanda}>
                  Confirmar
                </LoadingButton>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default Products;

type Props = {
  tenant: Tenant;
  productID: number;
  // comboVendasInit : Combo[];
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

  const productID = parseInt(id as string);

  return {
    //props: { tenant, product },
    props: { tenant, productID },
    // revalidate: 1,
    // fallback: true,
  };
};
