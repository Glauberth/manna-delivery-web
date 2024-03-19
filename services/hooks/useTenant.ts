import { Tenant } from "../../src/types/Tenent";

export async function getTenant(tenantSlug: string): Promise<Tenant> {
  switch (tenantSlug) {
    case "ferreira":
      return {
        logo: "/assets/img/logojordan.jpg",
        slug: "ferreira",
        name: "Glau Burger",
        mainColor: "#bd8631",
        secondColor: "#1b1e23",
        isCatalogo: true,
      };
      break;
    case "manna":
      return {
        logo: "/assets/img/manna/logo/logo.png",
        slug: "manna",
        name: "Manna Restaurante",
        mainColor: "#FF0000",
        secondColor: "#gg0000",
        isCatalogo: true,
      };
      break;

    case "velhojohn":
      return {
        logo: "https://www.mannatech.com.br/velhojohn/logo/logo.jpg",
        slug: "velhojohn",
        name: "Velho John",
        mainColor: "#000",
        secondColor: "#gg0100",
        isCatalogo: true,
      };
      break;
    case "biel":
      return {
        logo: "/assets/img/logobiel.jpeg",
        slug: "biel",
        name: "Açai Biel",
        mainColor: "#aa28a5",
        secondColor: "#gg0000",
        isCatalogo: true,
      };
      break;

    case "jordansantoamaro":
      return {
        logo: "/assets/img/logojordan.jpg",
        slug: "jordansantoamaro",
        name: "Jordar Burger Santo Amaro",
        mainColor: "#bd8631",
        secondColor: "#1b1e23",
        isCatalogo: true,
      };
      break;
    case "jordan_teste":
      return {
        logo: "/assets/img/logojordan.jpg",
        slug: "jordan_teste",
        name: "Jordar Teste",
        mainColor: "#bd8631",
        secondColor: "#1b1e23",
        isCatalogo: false,
      };
      break;
    case "srinverno":
      return {
        logo: "/assets/img/srinverno/logo/srinverno.jpg",
        slug: "srinverno",
        name: "Sr. Inverno ",
        mainColor: "#bd8631",
        secondColor: "#1b1e23",
        isCatalogo: true,
      };
      break;
    case "bigjoelagoa_new":
      return {
        logo: "/assets/img/bigjoe/logo/logo.png",
        slug: "bigjoelagoa_new",
        name: "Big Joe Lagoa",
        mainColor: "#bd8631",
        secondColor: "#1b1e23",
        isCatalogo: true,
      };
      break;
    case "adacoley":
      return {
        logo: "/assets/img/adacoley/logo/logo.png",
        slug: "adacoley",
        name: "Ada Music Bar",
        mainColor: "#bd8631",
        secondColor: "#1b1e23",
        isCatalogo: true,
      };
      break;
    case "seugarcia":
      return {
        logo: "/assets/img/seugarcia/logo/logo.png",
        slug: "seugarcia",
        name: "Seu Garcia",
        mainColor: "#bd8631",
        secondColor: "#1b1e23",
        isCatalogo: true,
      };
      break;
    case "seugarcia2":
      return {
        logo: "/assets/img/seugarcia/logo/logo.png",
        slug: "seugarcia2",
        name: "Seu Garcia",
        mainColor: "#bd8631",
        secondColor: "#1b1e23",
        isCatalogo: true,
      };
      break;
    case "gabysfastfood":
      return {
        logo: "/assets/img/gabysturu/logo/logo.png",
        slug: "gabysfastfood",
        name: "Gabys Fast Food",
        mainColor: "#bd8631",
        secondColor: "#1b1e23",
        isCatalogo: true,
      };
      break;

    default:
      return {
        logo: "",
        slug: "",
        name: "",
        mainColor: "#bd8631",
        secondColor: "#1b1e23",
        isCatalogo: true,
      };
  }
}
