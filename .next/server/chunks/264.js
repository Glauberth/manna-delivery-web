exports.id = 264;
exports.ids = [264];
exports.modules = {

/***/ 5223:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__kKEzJ"
};


/***/ }),

/***/ 1295:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__nmgK4",
	"leftSide": "styles_leftSide__2lOF0",
	"rightSide": "styles_rightSide__V1z_W",
	"buttonTransparent": "styles_buttonTransparent__cfhsC",
	"centerSide": "styles_centerSide__3Jmdr",
	"title": "styles_title__h3Tkb",
	"subTitle": "styles_subTitle__RN3B_"
};


/***/ }),

/***/ 3565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5223);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ color , label , onClick , fill  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
        onClick: onClick,
        style: {
            color: fill ? "#FFF" : color,
            borderColor: color,
            backgroundColor: fill ? color : "#FFF"
        },
        children: label
    });
};


/***/ }),

/***/ 1402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Header/styles.module.css
var styles_module = __webpack_require__(1295);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Header/backIcon.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgBackIcon = function SvgBackIcon(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 16,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M3.828 7H16v2H3.828l5.364 5.364-1.414 1.414L0 8 7.778.222l1.414 1.414L3.828 7Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const backIcon = (SvgBackIcon);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx




const Header = ({ backHref , color , subTitle , title , invert  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).leftSide,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: backHref,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (styles_module_default()).buttonTransparent,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(backIcon, {
                            color: invert ? "#FFF" : color
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).centerSide,
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).title,
                        style: {
                            color: invert ? "#FFF" : "#1b1b1b"
                        },
                        children: title
                    }),
                    subTitle && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).subTitle,
                        children: subTitle
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).rightSide
            })
        ]
    });
};


/***/ })

};
;