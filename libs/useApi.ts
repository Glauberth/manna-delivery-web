//import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import { api } from "../services/api";
import { Product } from "../src/types/Products";

const TEMPORARYonProduct: Product = {
  id: 1,
  image: "/tmp/burguer.png",
  categoryName: "Tradicional",
  description:
    "O Hamburguer Mais suculento do Brasil, com duas carnes, queijo, cebola, picles e pão com gegilin",
  name: "BURGUER AC/DC",
  price: 25.5,
};

export const UseApi = (tenantSlug: string) => ({
  getTenant: async () => {
    switch (tenantSlug) {
      case "manna_glauberth":
        return {
          logo: "https://s.jpimg.com.br/wp-content/themes/jovempan/assets/build/images/favicons/apple-touch-icon.png",
          slug: "mannaburguer",
          name: "Manna Burger",
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
          logo: "https://scontent.fslz5-1.fna.fbcdn.net/v/t39.30808-6/310384121_795279774784930_5823022780957123001_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QD3ORmScI3oAX8QlpV-&_nc_ht=scontent.fslz5-1.fna&oh=00_AfBAAF4O5VKJVo41CX2dBewy6fWxk9O9sRpVu2JYvDBGXQ&oe=63AC9684",
          slug: "velhojohn",
          name: "Velho John",
          mainColor: "#000",
          secondColor: "#gg0000",
        };
      default:
        return false;
    }
  },

  getallProducts: async () => {
    let prods: Product[] = [];

    await api.get(`/products/${tenantSlug}`).then((res) => {
      res.data.forEach((item: any) => {
        prods.push({
          id: item.CODPRODUTO,
          image: "/tmp/burguer.png",
          categoryName: item.NOME,
          name: item.DESCRICAO,
          description:
            "O Hamburguer Mais suculento do Brasil, com duas carnes, queijo, cebola, picles e pão com gergelim",
          price: item.PRECOVENDA,
        });
      });
    });
    return prods;

    //Versão antiga
    // let prods: Product[] = [];

    // for (let q = 0; q < 10; q++) {
    //   products.push(TEMPORARYonProduct);
    // }

    // return prods;
  },

  getProduct: async (id: string) => {
    //Versão Antiga
    // return TEMPORARYonProduct;

    //Versão temp Glau:

    let prod: Product[] = [];

    await api.get(`/products/${tenantSlug}/${id}`).then((res) => {
      const { CODPRODUTO, DESCRICAO, PRECOVENDA, NOME } = res.data[0];

      prod = [
        {
          id: CODPRODUTO,
          image: "/tmp/burguer.png",
          categoryName: NOME,
          description:
            "O Hamburguer Mais suculento do Brasil, com duas carnes, queijo, cebola, picles e pão com gergelim",
          name: DESCRICAO,
          price: PRECOVENDA,
        },
      ];
    });

    return prod[0];
  },
});
