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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/app */ \"./contexts/app/index.tsx\");\n/* harmony import */ var _src_components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Banner */ \"./src/components/Banner/index.tsx\");\n/* harmony import */ var _src_components_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/ProductItem */ \"./src/components/ProductItem/index.tsx\");\n/* harmony import */ var _src_components_SearchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/SearchInput */ \"./src/components/SearchInput/index.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function(data) {\n    var handlerClick = function handlerClick(searchValue) {\n        alert(\"Voc\\xea est\\xe1 esperando esse valor: \".concat(searchValue));\n        var prodFiltrado = products;\n        var results = prodFiltrado.filter(function(resp) {\n            return resp.name.toLowerCase().includes(searchValue);\n        });\n        setProducts(results);\n    // console.log(results);\n    };\n    _s();\n    var ref = (0,_contexts_app__WEBPACK_IMPORTED_MODULE_3__.useAppContext)(), tenant = ref.tenant, setTenant = ref.setTenant;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data.products), products = ref1[0], setProducts = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTenant(data.tenant);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \"Produtos | \",\n                        data.tenant.name,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().imgLogo),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.tenant.logo,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTop),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTopLeft),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTitle),\n                                        children: \"Seja Bem-Vindo (a) \\uD83D\\uDC4B\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerSubTitle),\n                                        children: \"O que deseja pra hoje?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerTopRight),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtom),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuButtomLine),\n                                            style: {\n                                                backgroundColor: tenant === null || tenant === void 0 ? void 0 : tenant.mainColor\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerBottom),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SearchInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            onSearch: handlerClick\n                        }, void 0, false, {\n                            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().gridProduct2),\n                children: products.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProductItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        data: item\n                    }, index, false, {\n                        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery-web/pages/[tenant]/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"iPuY4cqvROekzhJbQpy/rrUZAmc=\", false, function() {\n    return [\n        _contexts_app__WEBPACK_IMPORTED_MODULE_3__.useAppContext\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWpCQSxNQUFNLENBQUVxQixTQUFTOzZDQUFFOzs7OztpREFDeEM7c0RBQ1AsOERBQUNuQixLQUFHOzRDQUNGQyxTQUFTLEVBQUVsQiwrRUFBcUI7NENBQ2hDa0MsS0FBSyxFQUFFO2dEQUFFQyxlQUFlLEVBQUVwQixNQUFNLGFBQU5BLE1BQU0sV0FBVyxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLE1BQU0sQ0FBRXFCLFNBQVM7NkNBQUU7Ozs7O2lEQUN4Qzs7Ozs7O3lDQUNIOzs7OztxQ0FDRjs7Ozs7OzZCQUNGO2tDQUNOLDhEQUFDbkIsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFbEIsNkVBQW1CO2tDQUNqQyw0RUFBQ0QsbUVBQVc7NEJBQUN1QyxRQUFRLEVBQUVuQyxZQUFZOzs7OztpQ0FBSTs7Ozs7NkJBQ25DOzs7Ozs7cUJBQ0M7MEJBRVQsOERBQUNOLDhEQUFNOzs7O3FCQUFHOzBCQUVWLDhEQUFDb0IsS0FBRztnQkFBQ0MsU0FBUyxFQUFFbEIsNkVBQW1COzBCQUNoQ08sUUFBUSxDQUFDaUMsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSzt5Q0FDeEIsOERBQUM1QyxtRUFBVzt3QkFBYUksSUFBSSxFQUFFdUMsSUFBSTt1QkFBakJDLEtBQUs7Ozs7NkJBQWdCO2lCQUN4QyxDQUFDOzs7OztxQkFDRTs7Ozs7O2FBQ0YsQ0FDTjtBQUNKLENBQUM7R0FyRUt6QyxJQUFJOztRQUNzQkwsd0RBQWE7OztBQUR2Q0ssS0FBQUEsSUFBSTs7QUF1RVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bdGVuYW50XS9pbmRleC50c3g/YWE2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hcHBcIjtcbmltcG9ydCB7IFVzZUFwaSB9IGZyb20gXCIuLi8uLi9saWJzL3VzZUFwaVwiO1xuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQmFubmVyXCI7XG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RJdGVtXCI7XG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaElucHV0XCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL3NyYy90eXBlcy9Qcm9kdWN0c1wiO1xuaW1wb3J0IHsgVGVuYW50IH0gZnJvbSBcIi4uLy4uL3NyYy90eXBlcy9UZW5lbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgSG9tZSA9IChkYXRhOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHRlbmFudCwgc2V0VGVuYW50IH0gPSB1c2VBcHBDb250ZXh0KCk7XG5cbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KGRhdGEucHJvZHVjdHMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGVuYW50KGRhdGEudGVuYW50KTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZXJDbGljayhzZWFyY2hWYWx1ZTogc3RyaW5nKSB7XG4gICAgYWxlcnQoYFZvY8OqIGVzdMOhIGVzcGVyYW5kbyBlc3NlIHZhbG9yOiAke3NlYXJjaFZhbHVlfWApO1xuXG4gICAgbGV0IHByb2RGaWx0cmFkbyA9IHByb2R1Y3RzO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IHByb2RGaWx0cmFkby5maWx0ZXIoKHJlc3ApID0+XG4gICAgICByZXNwLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSlcbiAgICApO1xuICAgIHNldFByb2R1Y3RzKHJlc3VsdHMpO1xuXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0cyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UHJvZHV0b3MgfCB7ZGF0YS50ZW5hbnQubmFtZX0gPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ0xvZ299PlxuICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnRlbmFudC5sb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUb3B9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVG9wTGVmdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRpdGxlfT5TZWphIEJlbS1WaW5kbyAoYSkg8J+RizwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJTdWJUaXRsZX0+TyBxdWUgZGVzZWphIHByYSBob2plPzwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUb3BSaWdodH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b219PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudUJ1dHRvbUxpbmV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0ZW5hbnQ/Lm1haW5Db2xvciB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9tTGluZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHRlbmFudD8ubWFpbkNvbG9yIH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b21MaW5lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGVuYW50Py5tYWluQ29sb3IgfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckJvdHRvbX0+XG4gICAgICAgICAgPFNlYXJjaElucHV0IG9uU2VhcmNoPXtoYW5kbGVyQ2xpY2t9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxCYW5uZXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkUHJvZHVjdDJ9PlxuICAgICAgICB7cHJvZHVjdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxQcm9kdWN0SXRlbSBrZXk9e2luZGV4fSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxudHlwZSBQcm9wcyA9IHtcbiAgdGVuYW50OiBUZW5hbnQ7XG4gIHByb2R1Y3RzOiBQcm9kdWN0W107XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHRlbmFudDogdGVuYW50U2x1ZyB9ID0gY29udGV4dC5xdWVyeTtcblxuICBjb25zdCBhcGkgPSBVc2VBcGkodGVuYW50U2x1ZyBhcyBzdHJpbmcpO1xuXG4gIC8vR0VUIFRlbmFudFxuICBjb25zdCB0ZW5hbnQgPSBhd2FpdCBhcGkuZ2V0VGVuYW50KCk7XG5cbiAgaWYgKCF0ZW5hbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL1wiLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBhcGkuZ2V0YWxsUHJvZHVjdHMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHRlbmFudCwgcHJvZHVjdHMgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwQ29udGV4dCIsIkJhbm5lciIsIlByb2R1Y3RJdGVtIiwiU2VhcmNoSW5wdXQiLCJzdHlsZXMiLCJIb21lIiwiZGF0YSIsImhhbmRsZXJDbGljayIsInNlYXJjaFZhbHVlIiwiYWxlcnQiLCJwcm9kRmlsdHJhZG8iLCJwcm9kdWN0cyIsInJlc3VsdHMiLCJmaWx0ZXIiLCJyZXNwIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZXRQcm9kdWN0cyIsInRlbmFudCIsInNldFRlbmFudCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwiaGVhZGVyIiwiaW1nTG9nbyIsImltZyIsInNyYyIsImxvZ28iLCJhbHQiLCJoZWFkZXJUb3AiLCJoZWFkZXJUb3BMZWZ0IiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJTdWJUaXRsZSIsImhlYWRlclRvcFJpZ2h0IiwibWVudUJ1dHRvbSIsIm1lbnVCdXR0b21MaW5lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYWluQ29sb3IiLCJoZWFkZXJCb3R0b20iLCJvblNlYXJjaCIsImdyaWRQcm9kdWN0MiIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[tenant]/index.tsx\n"));

/***/ })

});