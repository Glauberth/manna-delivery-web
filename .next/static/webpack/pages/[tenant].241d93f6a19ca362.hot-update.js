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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/app */ \"./contexts/app/index.tsx\");\n/* harmony import */ var _src_components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Banner */ \"./src/components/Banner/index.tsx\");\n/* harmony import */ var _src_components_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/ProductItem */ \"./src/components/ProductItem/index.tsx\");\n/* harmony import */ var _src_components_SearchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/SearchInput */ \"./src/components/SearchInput/index.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function(data) {\n    var handlerClick = function handlerClick(searchValue) {\n        alert(\"Voc\\xea est\\xe1 esperando esse valor: \".concat(searchValue));\n        var prodFiltrado = products;\n        var results = prodFiltrado.filter(function(resp) {\n            return resp.name.toLowerCase().includes(result);\n        });\n        setData(results);\n        console.log(prodFiltrado);\n    };\n    _s();\n    var ref = (0,_contexts_app__WEBPACK_IMPORTED_MODULE_3__.useAppContext)(), tenant = ref.tenant, setTenant = ref.setTenant;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data.products), products = ref1[0], setProducts = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTenant(data.tenant);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \"Produtos | \",\n                        data.tenant.name,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().imgLogo),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.tenant.logo,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTop),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTopLeft),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTitle),\n                                        children: \"Seja Bem-Vindo (a) \\uD83D\\uDC4B\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerSubTitle),\n                                        children: \"O que deseja pra hoje?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTopRight),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtom),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerBottom),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SearchInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            onSearch: handlerClick\n                        }, void 0, false, {\n                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().gridProduct2),\n                children: products.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProductItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        data: item\n                    }, index, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"iPuY4cqvROekzhJbQpy/rrUZAmc=\", false, function() {\n    return [\n        _contexts_app__WEBPACK_IMPORTED_MODULE_3__.useAppContext\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU5BLE1BQU0sV0FBVyxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLE1BQU0sQ0FBRXNCLFNBQVM7NkNBQUU7Ozs7O2lEQUN4QztzREFDUCw4REFBQ25CLEtBQUc7NENBQ0ZDLFNBQVMsRUFBRXRCLCtFQUFxQjs0Q0FDaENzQyxLQUFLLEVBQUU7Z0RBQUVDLGVBQWUsRUFBRXJCLE1BQU0sYUFBTkEsTUFBTSxXQUFXLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsTUFBTSxDQUFFc0IsU0FBUzs2Q0FBRTs7Ozs7aURBQ3hDOzs7Ozs7eUNBQ0g7Ozs7O3FDQUNGOzs7Ozs7NkJBQ0Y7a0NBQ04sOERBQUNuQixLQUFHO3dCQUFDQyxTQUFTLEVBQUV0Qiw2RUFBbUI7a0NBQ2pDLDRFQUFDRCxtRUFBVzs0QkFBQzJDLFFBQVEsRUFBRXZDLFlBQVk7Ozs7O2lDQUFJOzs7Ozs2QkFDbkM7Ozs7OztxQkFDQzswQkFFVCw4REFBQ04sOERBQU07Ozs7cUJBQUc7MEJBRVYsOERBQUN3QixLQUFHO2dCQUFDQyxTQUFTLEVBQUV0Qiw2RUFBbUI7MEJBQ2hDTyxRQUFRLENBQUNxQyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLO3lDQUN4Qiw4REFBQ2hELG1FQUFXO3dCQUFhSSxJQUFJLEVBQUUyQyxJQUFJO3VCQUFqQkMsS0FBSzs7Ozs2QkFBZ0I7aUJBQ3hDLENBQUM7Ozs7O3FCQUNFOzs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztHQXJFSzdDLElBQUk7O1FBQ3NCTCx3REFBYTs7O0FBRHZDSyxLQUFBQSxJQUFJOztBQXVFViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t0ZW5hbnRdL2luZGV4LnRzeD9hYTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwcFwiO1xuaW1wb3J0IHsgVXNlQXBpIH0gZnJvbSBcIi4uLy4uL2xpYnMvdXNlQXBpXCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9CYW5uZXJcIjtcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW1cIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2VhcmNoSW5wdXRcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vc3JjL3R5cGVzL1Byb2R1Y3RzXCI7XG5pbXBvcnQgeyBUZW5hbnQgfSBmcm9tIFwiLi4vLi4vc3JjL3R5cGVzL1RlbmVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBIb21lID0gKGRhdGE6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGVuYW50LCBzZXRUZW5hbnQgfSA9IHVzZUFwcENvbnRleHQoKTtcblxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oZGF0YS5wcm9kdWN0cyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUZW5hbnQoZGF0YS50ZW5hbnQpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlckNsaWNrKHNlYXJjaFZhbHVlOiBzdHJpbmcpIHtcbiAgICBhbGVydChgVm9jw6ogZXN0w6EgZXNwZXJhbmRvIGVzc2UgdmFsb3I6ICR7c2VhcmNoVmFsdWV9YCk7XG5cbiAgICBsZXQgcHJvZEZpbHRyYWRvID0gcHJvZHVjdHM7XG5cbiAgICBjb25zdCByZXN1bHRzID0gcHJvZEZpbHRyYWRvLmZpbHRlcigocmVzcCkgPT5cbiAgICAgIHJlc3AubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHJlc3VsdClcbiAgICApO1xuICAgIHNldERhdGEocmVzdWx0cyk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9kRmlsdHJhZG8pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlByb2R1dG9zIHwge2RhdGEudGVuYW50Lm5hbWV9IDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdMb2dvfT5cbiAgICAgICAgICA8aW1nIHNyYz17ZGF0YS50ZW5hbnQubG9nb30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVG9wfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRvcExlZnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUaXRsZX0+U2VqYSBCZW0tVmluZG8gKGEpIPCfkYs8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyU3ViVGl0bGV9Pk8gcXVlIGRlc2VqYSBwcmEgaG9qZT88L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVG9wUmlnaHR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9tfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b21MaW5lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGVuYW50Py5tYWluQ29sb3IgfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudUJ1dHRvbUxpbmV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0ZW5hbnQ/Lm1haW5Db2xvciB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9tTGluZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHRlbmFudD8ubWFpbkNvbG9yIH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJCb3R0b219PlxuICAgICAgICAgIDxTZWFyY2hJbnB1dCBvblNlYXJjaD17aGFuZGxlckNsaWNrfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8QmFubmVyIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZFByb2R1Y3QyfT5cbiAgICAgICAge3Byb2R1Y3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UHJvZHVjdEl0ZW0ga2V5PXtpbmRleH0gZGF0YT17aXRlbX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRlbmFudDogVGVuYW50O1xuICBwcm9kdWN0czogUHJvZHVjdFtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyB0ZW5hbnQ6IHRlbmFudFNsdWcgfSA9IGNvbnRleHQucXVlcnk7XG5cbiAgY29uc3QgYXBpID0gVXNlQXBpKHRlbmFudFNsdWcgYXMgc3RyaW5nKTtcblxuICAvL0dFVCBUZW5hbnRcbiAgY29uc3QgdGVuYW50ID0gYXdhaXQgYXBpLmdldFRlbmFudCgpO1xuXG4gIGlmICghdGVuYW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9cIixcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgYXBpLmdldGFsbFByb2R1Y3RzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB0ZW5hbnQsIHByb2R1Y3RzIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFwcENvbnRleHQiLCJCYW5uZXIiLCJQcm9kdWN0SXRlbSIsIlNlYXJjaElucHV0Iiwic3R5bGVzIiwiSG9tZSIsImRhdGEiLCJoYW5kbGVyQ2xpY2siLCJzZWFyY2hWYWx1ZSIsImFsZXJ0IiwicHJvZEZpbHRyYWRvIiwicHJvZHVjdHMiLCJyZXN1bHRzIiwiZmlsdGVyIiwicmVzcCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicmVzdWx0Iiwic2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0ZW5hbnQiLCJzZXRUZW5hbnQiLCJzZXRQcm9kdWN0cyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwiaGVhZGVyIiwiaW1nTG9nbyIsImltZyIsInNyYyIsImxvZ28iLCJhbHQiLCJoZWFkZXJUb3AiLCJoZWFkZXJUb3BMZWZ0IiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJTdWJUaXRsZSIsImhlYWRlclRvcFJpZ2h0IiwibWVudUJ1dHRvbSIsIm1lbnVCdXR0b21MaW5lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYWluQ29sb3IiLCJoZWFkZXJCb3R0b20iLCJvblNlYXJjaCIsImdyaWRQcm9kdWN0MiIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[tenant]/index.tsx\n"));

/***/ })

});