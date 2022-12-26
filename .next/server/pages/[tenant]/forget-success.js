(() => {
var exports = {};
exports.id = 951;
exports.ids = [951];
exports.modules = {

/***/ 5889:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ForgetSuccess_container__vRzS2",
	"header": "ForgetSuccess_header__9WaME",
	"iconArea": "ForgetSuccess_iconArea__LIwIL",
	"title": "ForgetSuccess_title__QiJc9",
	"subtitle": "ForgetSuccess_subtitle__tqLYN",
	"formArea": "ForgetSuccess_formArea__F__kF",
	"inputArea": "ForgetSuccess_inputArea__pi2_J"
};


/***/ }),

/***/ 1532:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5310);
/* harmony import */ var _libs_useApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9970);
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3565);
/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1402);
/* harmony import */ var _src_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(220);
/* harmony import */ var _styles_ForgetSuccess_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5889);
/* harmony import */ var _styles_ForgetSuccess_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_ForgetSuccess_module_css__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_useApi__WEBPACK_IMPORTED_MODULE_5__]);
_libs_useApi__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const ForguetSuccess = (data)=>{
    const { tenant , setTenant  } = (0,_contexts_app__WEBPACK_IMPORTED_MODULE_4__/* .useAppContext */ .bp)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    function handleSubmit() {
        router.push(`/${data.tenant.slug}/login`);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setTenant(data.tenant);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_ForgetSuccess_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            " Esqueci a senha | ",
                            data.tenant.name,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: data.tenant.logo
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Header__WEBPACK_IMPORTED_MODULE_7__/* .Header */ .h, {
                color: data.tenant.mainColor,
                backHref: `/${data.tenant.slug}/forget`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_ForgetSuccess_module_css__WEBPACK_IMPORTED_MODULE_9___default().iconArea),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .J, {
                    icon: "mailSent",
                    color: data.tenant.mainColor,
                    width: 99,
                    height: 81
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_ForgetSuccess_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),
                children: "Verifique seu Email"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_ForgetSuccess_module_css__WEBPACK_IMPORTED_MODULE_9___default().subtitle),
                children: "Enviamos as instru\xe7\xf5es para recupera\xe7\xe3o de senha para o seu e-mail."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_ForgetSuccess_module_css__WEBPACK_IMPORTED_MODULE_9___default().formArea),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_ForgetSuccess_module_css__WEBPACK_IMPORTED_MODULE_9___default().inputArea),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                        color: data.tenant.mainColor,
                        label: "Fazer login",
                        onClick: handleSubmit,
                        fill: true
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForguetSuccess);
const getServerSideProps = async (context)=>{
    const { tenant: tenantSlug  } = context.query;
    const api = (0,_libs_useApi__WEBPACK_IMPORTED_MODULE_5__/* .UseApi */ .e)(tenantSlug);
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
    return {
        props: {
            tenant
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ Icon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Icon/mailSent.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgMailSent = function SvgMailSent(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 100,
    height: 83,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M99.917 77.865a4.541 4.541 0 0 1-4.506 4.51H13.59a4.51 4.51 0 0 1-4.506-4.51v-4.573h81.75V20.154L54.5 52.854 9.083 11.98V5.167A4.542 4.542 0 0 1 13.625.625h81.75a4.542 4.542 0 0 1 4.542 4.542v72.698ZM20.137 9.708 54.5 40.638l34.362-30.93H20.138ZM0 55.125h36.333v9.083H0v-9.083Zm0-22.708h22.708V41.5H0v-9.083Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const mailSent = (SvgMailSent);
;// CONCATENATED MODULE: ./src/components/Icon/Icon.tsx


const Icon = ({ color , icon , width , height  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            width,
            height
        },
        children: icon === "mailSent" && /*#__PURE__*/ jsx_runtime_.jsx(mailSent, {
            color: color
        })
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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,664,310,970,264], () => (__webpack_exec__(1532)));
module.exports = __webpack_exports__;

})();