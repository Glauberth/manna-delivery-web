"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[tenant]",{

/***/ "./pages/[tenant]/index.tsx":
/*!**********************************!*\
  !*** ./pages/[tenant]/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/app */ \"./contexts/app/index.tsx\");\n/* harmony import */ var _src_components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Banner */ \"./src/components/Banner/index.tsx\");\n/* harmony import */ var _src_components_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/ProductItem */ \"./src/components/ProductItem/index.tsx\");\n/* harmony import */ var _src_components_SearchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/SearchInput */ \"./src/components/SearchInput/index.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function(data) {\n    var handlerClick = function handlerClick(searchValue) {\n        alert(\"Voc\\xea est\\xe1 esperando esse valor: \".concat(searchValue));\n        setProducts.apply(void 0, (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(products).concat([\n            products.filter(searchValue)\n        ]));\n    };\n    _s();\n    var ref = (0,_contexts_app__WEBPACK_IMPORTED_MODULE_3__.useAppContext)(), tenant = ref.tenant, setTenant = ref.setTenant;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data.products), products = ref1[0], setProducts = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTenant(data.tenant);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \"Produtos | \",\n                        data.tenant.name,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().imgLogo),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.tenant.logo,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerTop),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerTopLeft),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerTitle),\n                                        children: \"Seja Bem-Vindo (a) \\uD83D\\uDC4B\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerSubTitle),\n                                        children: \"O que deseja pra hoje?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerTopRight),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuButtom),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().headerBottom),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SearchInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            onSearch: handlerClick\n                        }, void 0, false, {\n                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().gridProduct2),\n                children: products.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProductItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        data: item\n                    }, index, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"iPuY4cqvROekzhJbQpy/rrUZAmc=\", false, function() {\n    return [\n        _contexts_app__WEBPACK_IMPORTED_MODULE_3__.useAppContext\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVDLGVBQWUsRUFBRXJCLE1BQU0sYUFBTkEsTUFBTSxXQUFXLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsTUFBTSxDQUFFc0IsU0FBUzs2Q0FBRTs7Ozs7aURBQ3hDOzs7Ozs7eUNBQ0g7Ozs7O3FDQUNGOzs7Ozs7NkJBQ0Y7a0NBQ04sOERBQUNwQixLQUFHO3dCQUFDQyxTQUFTLEVBQUVaLDZFQUFtQjtrQ0FDakMsNEVBQUNELG1FQUFXOzRCQUFDa0MsUUFBUSxFQUFFOUIsWUFBWTs7Ozs7aUNBQUk7Ozs7OzZCQUNuQzs7Ozs7O3FCQUNDOzBCQUVULDhEQUFDTiw4REFBTTs7OztxQkFBRzswQkFFViw4REFBQ2MsS0FBRztnQkFBQ0MsU0FBUyxFQUFFWiw2RUFBbUI7MEJBQ2hDTyxRQUFRLENBQUM0QixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLO3lDQUN4Qiw4REFBQ3ZDLG1FQUFXO3dCQUFhSSxJQUFJLEVBQUVrQyxJQUFJO3VCQUFqQkMsS0FBSzs7Ozs2QkFBZ0I7aUJBQ3hDLENBQUM7Ozs7O3FCQUNFOzs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztHQTlES3BDLElBQUk7O1FBQ3NCTCx3REFBYTs7O0FBRHZDSyxLQUFBQSxJQUFJOztBQWdFViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t0ZW5hbnRdL2luZGV4LnRzeD9hYTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwcFwiO1xuaW1wb3J0IHsgVXNlQXBpIH0gZnJvbSBcIi4uLy4uL2xpYnMvdXNlQXBpXCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9CYW5uZXJcIjtcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW1cIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2VhcmNoSW5wdXRcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vc3JjL3R5cGVzL1Byb2R1Y3RzXCI7XG5pbXBvcnQgeyBUZW5hbnQgfSBmcm9tIFwiLi4vLi4vc3JjL3R5cGVzL1RlbmVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBIb21lID0gKGRhdGE6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGVuYW50LCBzZXRUZW5hbnQgfSA9IHVzZUFwcENvbnRleHQoKTtcblxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oZGF0YS5wcm9kdWN0cyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUZW5hbnQoZGF0YS50ZW5hbnQpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlckNsaWNrKHNlYXJjaFZhbHVlOiBzdHJpbmcpIHtcbiAgICBhbGVydChgVm9jw6ogZXN0w6EgZXNwZXJhbmRvIGVzc2UgdmFsb3I6ICR7c2VhcmNoVmFsdWV9YCk7XG5cbiAgICBzZXRQcm9kdWN0cyguLi5wcm9kdWN0cywgcHJvZHVjdHMuZmlsdGVyKHNlYXJjaFZhbHVlKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UHJvZHV0b3MgfCB7ZGF0YS50ZW5hbnQubmFtZX0gPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ0xvZ299PlxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnRlbmFudC5sb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUb3B9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVG9wTGVmdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRpdGxlfT5TZWphIEJlbS1WaW5kbyAoYSkg8J+RizwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJTdWJUaXRsZX0+TyBxdWUgZGVzZWphIHByYSBob2plPzwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUb3BSaWdodH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b219PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudUJ1dHRvbUxpbmV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0ZW5hbnQ/Lm1haW5Db2xvciB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9tTGluZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHRlbmFudD8ubWFpbkNvbG9yIH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b21MaW5lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGVuYW50Py5tYWluQ29sb3IgfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckJvdHRvbX0+XG4gICAgICAgICAgPFNlYXJjaElucHV0IG9uU2VhcmNoPXtoYW5kbGVyQ2xpY2t9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxCYW5uZXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkUHJvZHVjdDJ9PlxuICAgICAgICB7cHJvZHVjdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxQcm9kdWN0SXRlbSBrZXk9e2luZGV4fSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxudHlwZSBQcm9wcyA9IHtcbiAgdGVuYW50OiBUZW5hbnQ7XG4gIHByb2R1Y3RzOiBQcm9kdWN0W107XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHRlbmFudDogdGVuYW50U2x1ZyB9ID0gY29udGV4dC5xdWVyeTtcblxuICBjb25zdCBhcGkgPSBVc2VBcGkodGVuYW50U2x1ZyBhcyBzdHJpbmcpO1xuXG4gIC8vR0VUIFRlbmFudFxuICBjb25zdCB0ZW5hbnQgPSBhd2FpdCBhcGkuZ2V0VGVuYW50KCk7XG5cbiAgaWYgKCF0ZW5hbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL1wiLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBhcGkuZ2V0YWxsUHJvZHVjdHMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHRlbmFudCwgcHJvZHVjdHMgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwQ29udGV4dCIsIkJhbm5lciIsIlByb2R1Y3RJdGVtIiwiU2VhcmNoSW5wdXQiLCJzdHlsZXMiLCJIb21lIiwiZGF0YSIsImhhbmRsZXJDbGljayIsInNlYXJjaFZhbHVlIiwiYWxlcnQiLCJzZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwiZmlsdGVyIiwidGVuYW50Iiwic2V0VGVuYW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJuYW1lIiwiaGVhZGVyIiwiaW1nTG9nbyIsImltZyIsInNyYyIsImxvZ28iLCJhbHQiLCJoZWFkZXJUb3AiLCJoZWFkZXJUb3BMZWZ0IiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJTdWJUaXRsZSIsImhlYWRlclRvcFJpZ2h0IiwibWVudUJ1dHRvbSIsIm1lbnVCdXR0b21MaW5lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYWluQ29sb3IiLCJoZWFkZXJCb3R0b20iLCJvblNlYXJjaCIsImdyaWRQcm9kdWN0MiIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[tenant]/index.tsx\n"));

/***/ })

});