(() => {
var exports = {};
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 9585:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__LWRkF",
	"swiper": "styles_swiper__Y0e6w",
	"slide": "styles_slide__Lt8lo"
};


/***/ }),

/***/ 8236:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__1GwAv",
	"head": "styles_head__XBJUb",
	"info": "styles_info__XXHwm",
	"img": "styles_img__bUvK6",
	"catName": "styles_catName___PMgn",
	"name": "styles_name__jsE96",
	"price": "styles_price__IGAim",
	"description": "styles_description__Q7qai"
};


/***/ }),

/***/ 3442:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__Rk3Op",
	"button": "styles_button__NvDUi",
	"input": "styles_input__fwSmj"
};


/***/ }),

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"header": "Home_header__GCVRv",
	"headerTop": "Home_headerTop__lUS0T",
	"imgLogo": "Home_imgLogo__CFRxB",
	"headerTitle": "Home_headerTitle__HEz2F",
	"headerSubTitle": "Home_headerSubTitle__p73gz",
	"menuButtom": "Home_menuButtom__FpjNY",
	"menuButtomLine": "Home_menuButtomLine__grDZ5",
	"grid": "Home_grid__GxQ85",
	"gridProduct2": "Home_gridProduct2__p2AdV"
};


/***/ }),

/***/ 7855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useFormatter)
/* harmony export */ });
const useFormatter = ()=>({
        formatPrice: (price)=>{
            return price.toLocaleString("pr-br", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL"
            });
        },
        formatQuantity: (quantity, minDigits)=>{
            if (quantity.toString().length >= minDigits) return quantity.toString();
            const sobra = minDigits - quantity.toString().length;
            return `${"0".repeat(sobra)}${quantity}`;
        }
    });


/***/ }),

/***/ 819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5310);
/* harmony import */ var _libs_useApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9970);
/* harmony import */ var _src_components_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2279);
/* harmony import */ var _src_components_ProductItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3659);
/* harmony import */ var _src_components_SearchInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5721);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_useApi__WEBPACK_IMPORTED_MODULE_4__, _src_components_Banner__WEBPACK_IMPORTED_MODULE_5__]);
([_libs_useApi__WEBPACK_IMPORTED_MODULE_4__, _src_components_Banner__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Home = (data)=>{
    const { tenant , setTenant  } = (0,_contexts_app__WEBPACK_IMPORTED_MODULE_3__/* .useAppContext */ .bp)();
    const { 0: dados , 1: setDados  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data.products);
    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data.products);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setTenant(data.tenant);
    }, []);
    function handlerClick(searchValue) {
        let prodFiltrado = dados;
        const results = prodFiltrado.filter((itens)=>itens.name.toLowerCase().includes(searchValue.toLowerCase()));
        results ? setProducts(results) : setProducts(dados);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        "Produtos | ",
                        data.tenant.name,
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().imgLogo),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: data.tenant.logo,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerTop),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerTopLeft),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerTitle),
                                        children: "Seja Bem-Vindo (a) \uD83D\uDC4B"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerSubTitle),
                                        children: "O que deseja pra hoje?"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerTopRight),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuButtom),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuButtomLine),
                                            style: {
                                                backgroundColor: tenant?.mainColor
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuButtomLine),
                                            style: {
                                                backgroundColor: tenant?.mainColor
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuButtomLine),
                                            style: {
                                                backgroundColor: tenant?.mainColor
                                            }
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerBottom),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_SearchInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            onSearch: handlerClick
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Banner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().gridProduct2),
                id: "grid",
                children: products.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_ProductItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        data: item
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getServerSideProps = async (context)=>{
    const { tenant: tenantSlug  } = context.query;
    const api = (0,_libs_useApi__WEBPACK_IMPORTED_MODULE_4__/* .UseApi */ .e)(tenantSlug);
    //GET Tenant
    const tenant = await api.getTenant();
    if (!tenant) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    const products = await api.getallProducts();
    return {
        props: {
            tenant,
            products
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2279:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9585);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Banner() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().swiper),
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
            ],
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().slide),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/tmp/banner1.png",
                        alt: "banner"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().slide),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/tmp/banner1.png",
                        alt: "banner"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().slide),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/tmp/banner1.png",
                        alt: "banner"
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5310);
/* harmony import */ var _libs_useFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7855);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8236);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);





function ProductItem({ data  }) {
    const { tenant  } = (0,_contexts_app__WEBPACK_IMPORTED_MODULE_2__/* .useAppContext */ .bp)();
    const formatter = (0,_libs_useFormatter__WEBPACK_IMPORTED_MODULE_3__/* .useFormatter */ .G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/${tenant?.slug}/product/${data.id}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().info),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().catName),
                                children: data.categoryName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),
                                children: data.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),
                                children: data.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().price),
                                style: {
                                    color: tenant?.mainColor
                                },
                                children: formatter.formatPrice(data.price)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().img),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: data.image,
                            alt: ""
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 5721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SearchInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/SearchInput/styles.module.css
var styles_module = __webpack_require__(3442);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/SearchInput/searchicon.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgSearchicon = function SvgSearchicon(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 21,
    height: 21,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m16.031 14.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 9 18c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 16 9c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const searchicon = (SvgSearchicon);
// EXTERNAL MODULE: ./contexts/app/index.tsx + 3 modules
var app = __webpack_require__(5310);
;// CONCATENATED MODULE: ./src/components/SearchInput/index.tsx





function SearchInput({ onSearch  }) {
    const { tenant  } = (0,app/* useAppContext */.bp)();
    const { 0: focused , 1: setFocused  } = (0,external_react_.useState)(false);
    const { 0: searchValue , 1: setSearchValue  } = (0,external_react_.useState)("");
    function handleKeyUp(event) {
        if (event.code === "Enter") {
            onSearch(searchValue);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).container,
        style: {
            borderColor: focused ? tenant?.mainColor : "#FFFFFF"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#grid",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).button,
                    onClick: ()=>onSearch(searchValue),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(searchicon, {
                        color: tenant?.mainColor
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "Digte para pesquisar",
                className: (styles_module_default()).input,
                onFocus: ()=>setFocused(true),
                onBlur: ()=>setFocused(false),
                onKeyUp: handleKeyUp,
                value: searchValue,
                onChange: (e)=>setSearchValue(e.target.value)
            })
        ]
    });
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,664,310,970], () => (__webpack_exec__(819)));
module.exports = __webpack_exports__;

})();