"use strict";
exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 9970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ UseApi)
/* harmony export */ });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9419);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_api__WEBPACK_IMPORTED_MODULE_0__]);
_services_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
//import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";

const TEMPORARYonProduct = {
    id: 1,
    image: "/tmp/burguer.png",
    categoryName: "Tradicional",
    description: "O Hamburguer Mais suculento do Brasil, com duas carnes, queijo, cebola, picles e p\xe3o com gegilin",
    name: "BURGUER AC/DC",
    price: 25.5
};
const UseApi = (tenantSlug)=>({
        getTenant: async ()=>{
            switch(tenantSlug){
                case "manna_glauberth":
                    return {
                        logo: "https://s.jpimg.com.br/wp-content/themes/jovempan/assets/build/images/favicons/apple-touch-icon.png",
                        slug: "mannaburguer",
                        name: "Manna Burger",
                        mainColor: "#fcb103",
                        secondColor: "#00FFFF"
                    };
                    break;
                case "mannapizza":
                    return {
                        logo: "https://s2.glbimg.com/t2_E-_cSErv4fsbUVhwwEN0YMX0=/32x32/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/H/w/YbA657S3aYVfC0P9wboQ/g1-favicon.png",
                        slug: "mannapizza",
                        name: "Manna Pizaaria",
                        mainColor: "#FF0000",
                        secondColor: "#gg0000"
                    };
                    break;
                case "velhojohn":
                    return {
                        logo: "https://scontent.fslz5-1.fna.fbcdn.net/v/t39.30808-6/310384121_795279774784930_5823022780957123001_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QD3ORmScI3oAX8QlpV-&_nc_ht=scontent.fslz5-1.fna&oh=00_AfBAAF4O5VKJVo41CX2dBewy6fWxk9O9sRpVu2JYvDBGXQ&oe=63AC9684",
                        slug: "velhojohn",
                        name: "Velho John",
                        mainColor: "#000",
                        secondColor: "#gg0000"
                    };
                default:
                    return false;
            }
        },
        getallProducts: async ()=>{
            let prods = [];
            await _services_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`/products/${tenantSlug}`).then((res)=>{
                res.data.forEach((item)=>{
                    prods.push({
                        id: item.CODPRODUTO,
                        image: "/tmp/burguer.png",
                        categoryName: item.NOME,
                        name: item.DESCRICAO,
                        description: "O Hamburguer Mais suculento do Brasil, com duas carnes, queijo, cebola, picles e p\xe3o com gergelim",
                        price: item.PRECOVENDA
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
        getProduct: async (id)=>{
            //Versão Antiga
            // return TEMPORARYonProduct;
            //Versão temp Glau:
            let prod = [];
            await _services_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`/products/${tenantSlug}/${id}`).then((res)=>{
                const { CODPRODUTO , DESCRICAO , PRECOVENDA , NOME  } = res.data[0];
                prod = [
                    {
                        id: CODPRODUTO,
                        image: "/tmp/burguer.png",
                        categoryName: NOME,
                        description: "O Hamburguer Mais suculento do Brasil, com duas carnes, queijo, cebola, picles e p\xe3o com gergelim",
                        name: DESCRICAO,
                        price: PRECOVENDA
                    }, 
                ];
            });
            return prod[0];
        }
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9419:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:9000/api/v1/",
    timeout: 15000
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;