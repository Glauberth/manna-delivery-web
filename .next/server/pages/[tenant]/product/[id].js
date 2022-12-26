(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 5626:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__5lQc8",
	"button": "styles_button__E0qsb",
	"qt": "styles_qt__tSKwC"
};


/***/ }),

/***/ 7742:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Product-id_container__dgVFU",
	"headerArea": "Product-id_headerArea__tYGOY",
	"headerBg": "Product-id_headerBg__gfUXz",
	"productImage": "Product-id_productImage__YQUGW",
	"category": "Product-id_category__ntlwH",
	"title": "Product-id_title__q4tmF",
	"line": "Product-id_line__7m_Yz",
	"description": "Product-id_description__sxSmp",
	"qtText": "Product-id_qtText__X3ilr",
	"area": "Product-id_area__D4SJE",
	"areaRight": "Product-id_areaRight__NZbyY",
	"areaObs": "Product-id_areaObs__1Quu5",
	"buttonArea": "Product-id_buttonArea__9NSYS"
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

/***/ 7289:
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
/* harmony import */ var _libs_useFormatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7855);
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3565);
/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1402);
/* harmony import */ var _src_components_Quantity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7062);
/* harmony import */ var _styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7742);
/* harmony import */ var _styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_useApi__WEBPACK_IMPORTED_MODULE_4__]);
_libs_useApi__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Product = (data)=>{
    const { tenant , setTenant  } = (0,_contexts_app__WEBPACK_IMPORTED_MODULE_3__/* .useAppContext */ .bp)();
    const { 0: qtCount , 1: setQtCount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const formatter = (0,_libs_useFormatter__WEBPACK_IMPORTED_MODULE_8__/* .useFormatter */ .G)();
    const handleAddToCart = ()=>{
        alert("Lan\xe7ado com Sucesso!");
    };
    const handleUpdateQt = (newCount)=>{
        setQtCount(newCount);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setTenant(data.tenant);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        data.product.name,
                        " | ",
                        data.tenant.name
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().headerArea),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Header__WEBPACK_IMPORTED_MODULE_6__/* .Header */ .h, {
                    color: data.tenant.mainColor,
                    backHref: `/${data.tenant.slug}`,
                    title: data.product.name,
                    invert: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().headerBg),
                style: {
                    backgroundColor: data.tenant.mainColor
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().productImage),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: data.product.image,
                    alt: ""
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().category),
                children: data.product.categoryName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),
                style: {
                    borderBottomColor: tenant?.mainColor
                },
                children: data.product.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().line)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),
                children: data.product.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().qtText),
                children: "Quantidade"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().area),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().areaLeft),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Quantity__WEBPACK_IMPORTED_MODULE_7__/* .Quantity */ .h, {
                            color: data.tenant.mainColor,
                            count: qtCount,
                            onUpdateCount: handleUpdateQt,
                            min: 1,
                            //small
                            //max={10}
                            iconLixeira: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().areaRight),
                        style: {
                            color: data.tenant.mainColor
                        },
                        children: formatter.formatPrice(data.product.price)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().areaObs),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    style: {
                        borderColor: data.tenant.mainColor,
                        fontSize: 16
                    },
                    placeholder: "Alguma Observa\xe7\xe3o ?",
                    id: "story",
                    name: "story",
                    rows: 5
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Product_id_module_css__WEBPACK_IMPORTED_MODULE_9___default().buttonArea),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                    color: data.tenant.mainColor,
                    label: "Adicionar a Sacola",
                    onClick: handleAddToCart,
                    fill: true
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);
const getServerSideProps = async (context)=>{
    const { tenant: tenantSlug , id  } = context.query;
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
    //GET Product
    const product = await api.getProduct(id);
    return {
        props: {
            tenant,
            product
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Quantity)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Quantity/icons8-lixo.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgIcons8Lixo = function SvgIcons8Lixo(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    role: "img"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M10 2 9 3H4v2h1v15c0 .522.191 1.055.568 1.432.377.377.91.568 1.432.568h10c.522 0 1.055-.191 1.432-.568.377-.377.568-.91.568-1.432V5h1V3h-5l-1-1h-4zM7 5h10v15H7V5zm2 2v11h2V7H9zm4 0v11h2V7h-2z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const icons8_lixo = (SvgIcons8Lixo);
// EXTERNAL MODULE: ./src/components/Quantity/styles.module.css
var styles_module = __webpack_require__(5626);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./libs/useFormatter.ts
var useFormatter = __webpack_require__(7855);
;// CONCATENATED MODULE: ./src/components/Quantity/index.tsx





const Quantity = ({ color , count , onUpdateCount , min , max , small , iconLixeira  })=>{
    const { 0: canRemove , 1: setCanRemove  } = (0,external_react_.useState)(false);
    const { 0: canAdd , 1: setCanAdd  } = (0,external_react_.useState)(false);
    const formatter = (0,useFormatter/* useFormatter */.G)();
    (0,external_react_.useEffect)(()=>{
        setCanRemove(!min || min && count > min ? true : false);
        setCanAdd(!max || max && count < max ? true : false);
    }, [
        count,
        min,
        max
    ]);
    const handleRemove = ()=>{
        if (canRemove) onUpdateCount(count - 1);
    };
    const handleAdd = ()=>{
        if (canAdd) onUpdateCount(count + 1);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).button,
                onClick: handleRemove,
                style: {
                    color: canRemove ? "#FFF" : "#96a3ab",
                    backgroundColor: canRemove ? color : "#f2f4f5",
                    width: small ? 42 : 48,
                    height: small ? 42 : 48
                },
                children: canRemove ? "-" : iconLixeira ? /*#__PURE__*/ jsx_runtime_.jsx(icons8_lixo, {
                    color: "#000"
                }) : "-"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).qt,
                style: {
                    fontSize: small ? 16 : 18
                },
                children: formatter.formatQuantity(count, 2)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).button,
                onClick: handleAdd,
                style: {
                    color: canAdd ? "#FFF" : "#96a3ab",
                    backgroundColor: canAdd ? color : "#f2f4f5",
                    width: small ? 42 : 48,
                    height: small ? 42 : 48
                },
                children: "+"
            })
        ]
    });
};


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,664,310,970,264], () => (__webpack_exec__(7289)));
module.exports = __webpack_exports__;

})();