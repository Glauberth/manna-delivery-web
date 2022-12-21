import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import { Product } from "../src/types/Products";
import { Tenant } from "../src/types/Tenent";

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
      case "mannaburguer":
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
          logo: "https://scontent.fslz5-1.fna.fbcdn.net/v/t39.30808-6/310384121_795279774784930_5823022780957123001_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=od621RqjDCEAX-jiyWd&_nc_ht=scontent.fslz5-1.fna&oh=00_AfB7E0FIWDTHcNFZ-UKg4myINQagVtd4OUaqSRyS-B2Agg&oe=63A6A7C4",
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
    let products = [];

    for (let q = 0; q < 10; q++) {
      products.push(TEMPORARYonProduct);
    }

    return products;
  },

  getProduct: async (id: string) => {
    return TEMPORARYonProduct;
  },
});
