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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/app */ \"./contexts/app/index.tsx\");\n/* harmony import */ var _src_components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Banner */ \"./src/components/Banner/index.tsx\");\n/* harmony import */ var _src_components_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/ProductItem */ \"./src/components/ProductItem/index.tsx\");\n/* harmony import */ var _src_components_SearchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/SearchInput */ \"./src/components/SearchInput/index.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function(data) {\n    var handlerClick = function handlerClick(searchValue) {\n        alert(\"Voc\\xea est\\xe1 esperando esse valor: \".concat(searchValue));\n        var prodFiltrado = products;\n        prodFiltrado.filter(function(item) {\n            item.name == searchValue;\n            prodFiltrado = item;\n        });\n        console.log(prodFiltrado);\n    };\n    _s();\n    var ref = (0,_contexts_app__WEBPACK_IMPORTED_MODULE_3__.useAppContext)(), tenant = ref.tenant, setTenant = ref.setTenant;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data.products), products = ref1[0], setProducts = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTenant(data.tenant);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \"Produtos | \",\n                        data.tenant.name,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().imgLogo),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.tenant.logo,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTop),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTopLeft),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTitle),\n                                        children: \"Seja Bem-Vindo (a) \\uD83D\\uDC4B\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerSubTitle),\n                                        children: \"O que deseja pra hoje?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTopRight),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtom),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerBottom),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SearchInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            onSearch: handlerClick\n                        }, void 0, false, {\n                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().gridProduct2),\n                children: products.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProductItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        data: item\n                    }, index, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"iPuY4cqvROekzhJbQpy/rrUZAmc=\", false, function() {\n    return [\n        _contexts_app__WEBPACK_IMPORTED_MODULE_3__.useAppContext\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxNQUFNLENBQUVzQixTQUFTOzZDQUFFOzs7OztpREFDeEM7c0RBQ1AsOERBQUNuQixLQUFHOzRDQUNGQyxTQUFTLEVBQUVqQiwrRUFBcUI7NENBQ2hDaUMsS0FBSyxFQUFFO2dEQUFFQyxlQUFlLEVBQUVyQixNQUFNLGFBQU5BLE1BQU0sV0FBVyxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLE1BQU0sQ0FBRXNCLFNBQVM7NkNBQUU7Ozs7O2lEQUN4Qzs7Ozs7O3lDQUNIOzs7OztxQ0FDRjs7Ozs7OzZCQUNGO2tDQUNOLDhEQUFDbkIsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFakIsNkVBQW1CO2tDQUNqQyw0RUFBQ0QsbUVBQVc7NEJBQUNzQyxRQUFRLEVBQUVsQyxZQUFZOzs7OztpQ0FBSTs7Ozs7NkJBQ25DOzs7Ozs7cUJBQ0M7MEJBRVQsOERBQUNOLDhEQUFNOzs7O3FCQUFHOzBCQUVWLDhEQUFDbUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFFakIsNkVBQW1COzBCQUNoQ08sUUFBUSxDQUFDZ0MsR0FBRyxDQUFDLFNBQUM5QixJQUFJLEVBQUUrQixLQUFLO3lDQUN4Qiw4REFBQzFDLG1FQUFXO3dCQUFhSSxJQUFJLEVBQUVPLElBQUk7dUJBQWpCK0IsS0FBSzs7Ozs2QkFBZ0I7aUJBQ3hDLENBQUM7Ozs7O3FCQUNFOzs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztHQXJFS3ZDLElBQUk7O1FBQ3NCTCx3REFBYTs7O0FBRHZDSyxLQUFBQSxJQUFJOztBQXVFViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t0ZW5hbnRdL2luZGV4LnRzeD9hYTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwcFwiO1xuaW1wb3J0IHsgVXNlQXBpIH0gZnJvbSBcIi4uLy4uL2xpYnMvdXNlQXBpXCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9CYW5uZXJcIjtcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW1cIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2VhcmNoSW5wdXRcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vc3JjL3R5cGVzL1Byb2R1Y3RzXCI7XG5pbXBvcnQgeyBUZW5hbnQgfSBmcm9tIFwiLi4vLi4vc3JjL3R5cGVzL1RlbmVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBIb21lID0gKGRhdGE6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGVuYW50LCBzZXRUZW5hbnQgfSA9IHVzZUFwcENvbnRleHQoKTtcblxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oZGF0YS5wcm9kdWN0cyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUZW5hbnQoZGF0YS50ZW5hbnQpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlckNsaWNrKHNlYXJjaFZhbHVlOiBzdHJpbmcpIHtcbiAgICBhbGVydChgVm9jw6ogZXN0w6EgZXNwZXJhbmRvIGVzc2UgdmFsb3I6ICR7c2VhcmNoVmFsdWV9YCk7XG5cbiAgICBsZXQgcHJvZEZpbHRyYWRvID0gcHJvZHVjdHM7XG5cbiAgICBwcm9kRmlsdHJhZG8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLm5hbWUgPT0gc2VhcmNoVmFsdWU7XG4gICAgICBwcm9kRmlsdHJhZG8gPSBpdGVtO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2cocHJvZEZpbHRyYWRvKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qcm9kdXRvcyB8IHtkYXRhLnRlbmFudC5uYW1lfSA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nTG9nb30+XG4gICAgICAgICAgPGltZyBzcmM9e2RhdGEudGVuYW50LmxvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRvcH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUb3BMZWZ0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGl0bGV9PlNlamEgQmVtLVZpbmRvIChhKSDwn5GLPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclN1YlRpdGxlfT5PIHF1ZSBkZXNlamEgcHJhIGhvamU/PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRvcFJpZ2h0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUJ1dHRvbX0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9tTGluZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHRlbmFudD8ubWFpbkNvbG9yIH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b21MaW5lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGVuYW50Py5tYWluQ29sb3IgfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudUJ1dHRvbUxpbmV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0ZW5hbnQ/Lm1haW5Db2xvciB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQm90dG9tfT5cbiAgICAgICAgICA8U2VhcmNoSW5wdXQgb25TZWFyY2g9e2hhbmRsZXJDbGlja30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPEJhbm5lciAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRQcm9kdWN0Mn0+XG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RJdGVtIGtleT17aW5kZXh9IGRhdGE9e2l0ZW19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG50eXBlIFByb3BzID0ge1xuICB0ZW5hbnQ6IFRlbmFudDtcbiAgcHJvZHVjdHM6IFByb2R1Y3RbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgdGVuYW50OiB0ZW5hbnRTbHVnIH0gPSBjb250ZXh0LnF1ZXJ5O1xuXG4gIGNvbnN0IGFwaSA9IFVzZUFwaSh0ZW5hbnRTbHVnIGFzIHN0cmluZyk7XG5cbiAgLy9HRVQgVGVuYW50XG4gIGNvbnN0IHRlbmFudCA9IGF3YWl0IGFwaS5nZXRUZW5hbnQoKTtcblxuICBpZiAoIXRlbmFudCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogXCIvXCIsXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGFwaS5nZXRhbGxQcm9kdWN0cygpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgdGVuYW50LCBwcm9kdWN0cyB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBcHBDb250ZXh0IiwiQmFubmVyIiwiUHJvZHVjdEl0ZW0iLCJTZWFyY2hJbnB1dCIsInN0eWxlcyIsIkhvbWUiLCJkYXRhIiwiaGFuZGxlckNsaWNrIiwic2VhcmNoVmFsdWUiLCJhbGVydCIsInByb2RGaWx0cmFkbyIsInByb2R1Y3RzIiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwidGVuYW50Iiwic2V0VGVuYW50Iiwic2V0UHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsImhlYWRlciIsImltZ0xvZ28iLCJpbWciLCJzcmMiLCJsb2dvIiwiYWx0IiwiaGVhZGVyVG9wIiwiaGVhZGVyVG9wTGVmdCIsImhlYWRlclRpdGxlIiwiaGVhZGVyU3ViVGl0bGUiLCJoZWFkZXJUb3BSaWdodCIsIm1lbnVCdXR0b20iLCJtZW51QnV0dG9tTGluZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibWFpbkNvbG9yIiwiaGVhZGVyQm90dG9tIiwib25TZWFyY2giLCJncmlkUHJvZHVjdDIiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[tenant]/index.tsx\n"));

/***/ })

});