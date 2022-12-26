exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 5973:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__OjLdI",
	"input": "styles_input__VTWOJ",
	"showPassword": "styles_showPassword__UiQUr"
};


/***/ }),

/***/ 8942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ InputField)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/InputField/eyeon.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgEyeon = function SvgEyeon(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 22,
    height: 18,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M11 0c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9C5.608 18 1.122 14.12.181 9 1.121 3.88 5.608 0 11 0Zm0 16a9.005 9.005 0 0 0 8.777-7A9.005 9.005 0 0 0 2.223 9 9.005 9.005 0 0 0 11 16Zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const eyeon = (SvgEyeon);
;// CONCATENATED MODULE: ./src/components/InputField/eyeoff.svg
var eyeoff_path;

function eyeoff_extends() { eyeoff_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return eyeoff_extends.apply(this, arguments); }



var SvgEyeoff = function SvgEyeoff(props) {
  return /*#__PURE__*/external_react_.createElement("svg", eyeoff_extends({
    width: 22,
    height: 22,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), eyeoff_path || (eyeoff_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.882 18.297A10.949 10.949 0 0 1 11 20C5.608 20 1.122 16.12.18 11a10.982 10.982 0 0 1 3.34-6.066L.393 1.808 1.807.393l19.799 19.8-1.415 1.414-3.31-3.31ZM4.935 6.35A8.965 8.965 0 0 0 2.223 11a9.005 9.005 0 0 0 13.2 5.838l-2.027-2.028A4.5 4.5 0 0 1 7.19 8.604L4.935 6.35Zm6.979 6.978-3.242-3.242a2.5 2.5 0 0 0 3.24 3.241l.002.001Zm7.893 2.264-1.431-1.43a8.934 8.934 0 0 0 1.4-3.162A9.006 9.006 0 0 0 8.553 4.338L6.974 2.76C8.22 2.27 9.58 2 11 2c5.392 0 9.878 3.88 10.819 9a10.946 10.946 0 0 1-2.012 4.592Zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const eyeoff = (SvgEyeoff);
// EXTERNAL MODULE: ./src/components/InputField/styles.module.css
var styles_module = __webpack_require__(5973);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/InputField/index.tsx





const InputField = ({ color , onChange , placeholder , value , password  })=>{
    const { 0: showPassword , 1: setShowPassword  } = (0,external_react_.useState)(false);
    const { 0: focused , 1: setFocused  } = (0,external_react_.useState)(false);
    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).container,
        style: {
            borderColor: focused ? color : "#f9f9fb",
            backgroundColor: focused ? "#fff" : "#f9f9fb"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (styles_module_default()).input,
                type: password ? showPassword ? "text" : "password" : "text",
                placeholder: placeholder,
                color: color,
                value: value,
                onChange: (e)=>onChange(e.target.value),
                onFocus: ()=>setFocused(true),
                onBlur: ()=>setFocused(false)
            }),
            password && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).showPassword,
                onClick: toggleShowPassword,
                children: [
                    showPassword && /*#__PURE__*/ jsx_runtime_.jsx(eyeon, {
                        color: "#a9a4a4"
                    }),
                    !showPassword && /*#__PURE__*/ jsx_runtime_.jsx(eyeoff, {
                        color: "#a9a4a4"
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;