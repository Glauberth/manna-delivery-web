//import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
//import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { api } from "../services/api";
import { Address } from "../src/types/Address";
import { CartItem } from "../src/types/CartItem";
import { Group } from "../src/types/Group";
import { Order } from "../src/types/Order";
import { Product } from "../src/types/Products";
import { User } from "../src/types/User";

const TEMPORARYonProduct: Product = {
  id: 1,
  image: "https://www.mannatech.com.br/velhojohn/imgappdelivery/58.png", //"/tmp/burguer.png",
  categoryId: 0,
  categoryName: "HAMBURGUER",
  description:
    "O Hamburguer Mais suculento do Brasil, com duas carnes, queijo, cebola, picles e pão com gegilin",
  name: "BURGUER AC/DC",
  price: 25.5,
};

const TEMPORARYorder: Order = {
  codvenda: 101,
  status: "sent",
  orderDate: "2023-03-31",
  codcliente: "1",
  shippingAddress: {
    id: 1,
    cep: "65110000",
    endereco: "Rua 123",
    numero: "123",
    bairro: "Liberdade",
    complemento: "",
    estado: "SP",
    cidade: "São Luís",
  },
  shippingPrice: 9.14,
  paymentType: "card",
  cupom: "CHAMA",
  cupomDiscount: 14.3,
  products: [
    {
      product: {
        ...TEMPORARYonProduct,
        id: 1,
        image: "https://www.mannatech.com.br/velhojohn/imgappdelivery/101.png",
        name: "CHOPP PILSEN/ 475 ML",
        price: 13,
      },
      qt: 1,
    },
    { product: { ...TEMPORARYonProduct, id: 2 }, qt: 2 },
    // { product: { ...TEMPORARYonProduct, id: 3 }, qt: 1 },
  ],
  subtotal: 204,
  total: 198.84,
};

export const useApi = (tenantSlug: string) => ({
  getTenant: async () => {
    switch (tenantSlug) {
      case "manna_glauberth":
        return {
          logo: "https://s.jpimg.com.br/wp-content/themes/jovempan/assets/build/images/favicons/apple-touch-icon.png",
          slug: "manna_glauberth",
          name: "manna_glauberth Burger",
          mainColor: "#fcb103",
          secondColor: "#00FFFF",
        };
        break;
      case "mannapizza":
        return {
          logo: "https://s2.glbimg.com/t2_E-_cSErv4fsbUVhwwEN0YMX0=/32x32/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png",
          slug: "mannapizza",
          name: "Manna Pizaaria",
          mainColor: "#FF0000",
          secondColor: "#gg0000",
        };
        break;

      case "velhojohn":
        return {
          logo: "https://www.mannatech.com.br/velhojohn/logo/logo.jpg",
          slug: "velhojohn",
          name: "Velho John",
          mainColor: "#000",
          secondColor: "#gg0100",
        };
        break;
      case "biel":
        return {
          logo: "https://ccmpedidoonline.com.br/cdn/logoacaibielburguer.png",
          slug: "biel",
          name: "Açai Biel",
          mainColor: "#aa28a5",
          secondColor: "#gg0000",
        };
        break;
      case "adacoley":
        return {
          logo: "https://www.mannatech.com.br/deliveryapp/clientes/adacoley/logo/logo.png",
          slug: "adacoley",
          name: "AdaColey",
          mainColor: "#bd8631",
          secondColor: "#1b1e23",
        };
        break;
      case "jordansantoamaro":
        return {
          logo: "https://www.mannatech.com.br/deliveryapp/clientes/jordanburgersto/logo/logo.jpg",
          slug: "jordansantoamaro",
          name: "Jordar Burger Santo Amaro",
          mainColor: "#bd8631",
          secondColor: "#1b1e23",
        };
        break;
      default:
        return false;
    }
  },

  getallProducts: async () => {
    let prods: Product[] = [];

    await api
      .get(`/products/${tenantSlug}`)
      .then((res) => {
        console.log(res.data);
        res.data.forEach((item: any) => {
          prods.push({
            id: item.CODPRODUTO,
            // image: item.URLIMAGE,
            image: item.URLIMAGE
              ? item.URLIMAGE
              : //: "https://www.mannatech.com.br/deliveryapp/assets/sem-foto.png",
                "/assets/img/sem-foto.png",
            //image: imgValid,
            categoryId: item.CODGRUPO,
            categoryName: item.NOME,
            name: item.DESCRICAO,
            description: item.OBSERVACAO,
            price: item.PRECOVENDA,
          });
        });
      })
      .catch((err) => {
        console.log(`Erro Get Products by Manná: ${err}`);
        for (let q = 0; q < 10; q++) {
          prods.push(TEMPORARYonProduct);
        }
        return prods;
      })
      .finally(() => {
        // console.log(`Msg by Manná: Finally`);
      });

    return prods;

    //Versão antiga
    // let prods: Product[] = [];

    // for (let q = 0; q < 10; q++) {
    //   products.push(TEMPORARYonProduct);
    // }

    // return prods;
  },

  getProduct: async (id: number) => {
    //Versão Antiga
    // return TEMPORARYonProduct;

    //Versão temp Glau:

    let prod: Product[] = [];

    await api.get(`/products/${tenantSlug}/${id}`).then((res) => {
      const {
        CODPRODUTO,
        CODBARRA,
        DESCRICAO,
        PRECOVENDA,
        CODGRUPO,
        NOME,
        OBSERVACAO,
        URLIMAGE,
      } = res.data[0];

      prod = [
        {
          id: CODPRODUTO,
          image: URLIMAGE ? URLIMAGE : "",
          // image: URLIMAGE ? URLIMAGE : "/assets/img/no-foto.svg",
          categoryId: CODGRUPO,
          categoryName: NOME,
          description: OBSERVACAO,
          name: DESCRICAO,
          price: PRECOVENDA,
        },
      ];
    });

    return prod[0];
  },

  getGrupo: async () => {
    let grupo: Group[] = [];
    // console.log(tenantSlug);

    await api
      .get(`/grupo/${tenantSlug}`)
      .then((res) => {
        res.data.forEach((item: Group) => {
          grupo.push({
            CODGRUPO: item.CODGRUPO,
            NOME: item.NOME,
            NOMEGRUPOAPP: item.NOMEGRUPOAPP,
          });
        });
      })
      .catch((err) => {
        // console.log(err);
      });

    return grupo;
  },

  authorizeToken: async (token: string): Promise<User | false> => {
    if (!token) return false;

    //Aqui falta ir la na API de fato e verificar se o token recebido é válido, se não for tem que devolvier null

    return {
      name: "Glauberth",
      email: "glauberth.sampaio@hotmail.com",
    };
  },

  getCartProducts: async (cartCookie: string) => {
    let cart: CartItem[] = [];

    if (!cartCookie) return cart;

    const cartJson = JSON.parse(cartCookie);

    for (let i in cartJson) {
      if (cartJson[i].id && cartJson[i].id) {
        // const product = {
        //   ...TEMPORARYonProduct,
        //   id: cartJson[i].id,
        // };

        let productbd: Product;

        await api
          .get(`/products/${tenantSlug}/${cartJson[i].id}`)
          .then((res) => {
            console.log(res.data);
            const {
              CODPRODUTO,
              CODBARRA,
              DESCRICAO,
              PRECOVENDA,
              CODGRUPO,
              NOME,
              OBSERVACAO,
              URLIMAGE,
            } = res.data[0];

            productbd = {
              id: CODPRODUTO,
              image: URLIMAGE ? URLIMAGE : "",
              // image: URLIMAGE ? URLIMAGE : "/assets/img/no-foto.svg",
              categoryId: CODGRUPO,
              categoryName: NOME,
              description: OBSERVACAO,
              name: DESCRICAO,
              price: PRECOVENDA,
            };

            cart.push({
              qt: cartJson[i].qt,
              product: productbd,
            });
          });
      }
    }

    return cart;
  },

  getUserAddresses: async (email: string) => {
    const addresses: Address[] = [];

    for (let i = 0; i < 1; i++) {
      addresses.push({
        id: i + 1,
        endereco: "VELHO JOHN",
        numero: `${i + 1}0`,
        bairro: "CALHAU",
        cep: "65052000",
        cidade: "São Luís",
        estado: "MA",
        complemento: "",
      });
    }

    return addresses;
  },

  getUserAddress: async (addressid: number) => {
    let address = {
      id: addressid,
      endereco: "rua 14, quadra 23",
      numero: `${addressid}0`,
      bairro: "Calhau",
      cep: "65110000",
      cidade: "São Luís",
      estado: "MA",
      complemento: "Próx a Padaria",
    };

    return address;
  },

  addUserAddress: async (address: Address) => {
    //console.log(address);
    return { ...address, id: 9 };
  },

  editUserAddress: async (newAddressData: Address) => {
    return true;
  },

  deleteUserAddress: async (addressid: number) => {
    return true;
  },

  getShippingPrice: async (address: Address) => {
    return 7;
  },

  setOrder: async (
    address: Address,
    paymentType: "money" | "card",
    paymentChange: number,
    cupom: string,
    cart: CartItem[]
  ) => {
    return TEMPORARYorder;
  },

  getOrder: async (orderid: number) => {
    return TEMPORARYorder;
  },
});
