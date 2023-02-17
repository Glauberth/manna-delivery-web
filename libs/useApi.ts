//import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { api } from "../services/api";
import { Group } from "../src/types/Group";
import { Product } from "../src/types/Products";

const TEMPORARYonProduct: Product = {
  id: 1,
  image: "/tmp/burguer.png",
  categoryId: 0,
  categoryName: "Tradicional",
  description:
    "O Hamburguer Mais suculento do Brasil, com duas carnes, queijo, cebola, picles e pão com gegilin",
  name: "BURGUER AC/DC",
  price: 25.5,
};

// type Retorno = {
//   CODPRODUTO: number;
//   URLIMAGE: string;
//   NOME: string;
//   DESCRICAO: string;
//   OBSERVACAO: string;
//   PRECOVENDA: number;
// };

export const UseApi = (tenantSlug: string) => ({
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
          secondColor: "#gg0000",
        };
        break;
      case "biel":
        return {
          logo: "https://scontent.fslz5-1.fna.fbcdn.net/v/t39.30808-6/301667940_504591118336270_5938668438966005122_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EnTxJaCutl8AX_6fv3e&_nc_ht=scontent.fslz5-1.fna&oh=00_AfCYO6pJ9_HRZi4n7HPLnJpJShLMF3__tNSnCp0GbyPW5A&oe=63AE8C62",
          slug: "biel",
          name: "Açai Biel",
          mainColor: "#000",
          secondColor: "#gg0000",
        };
        break;
      case "adacoley":
        return {
          logo: "https://lh3.googleusercontent.com/p/AF1QipNispLOtrASt4ffMfisunFGE5G1eHlRM3pzxQ0o=w1080-h608-p-no-v0",
          slug: "adacoley",
          name: "AdaColey",
          mainColor: "#000",
          secondColor: "#gg0000",
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
        res.data.forEach((item: any) => {
          prods.push({
            id: item.CODPRODUTO,
            // image: item.URLIMAGE,
            image: item.URLIMAGE
              ? item.URLIMAGE
              : "https://www.mannatech.com.br/velhojohn/imgappdelivery/sem-foto.png",
            //image: imgValid,
            categoryId: item.CODGRUPO,
            categoryName: item.NOME,
            name: item.DESCRICAO,
            description: item.OBSERVACAO
              ? item.OBSERVACAO
              : "Preencha a Observação e irá aparecer aqui",
            price: item.PRECOVENDA,
          });
        });
      })
      .catch((err) => {
        console.log(`Msg by Manná: ${err}`);
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

  getProduct: async (id: string) => {
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
          });
        });
      })
      .catch((err) => {
        // console.log(err);
      });

    return grupo;
  },
});
