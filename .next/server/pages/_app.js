/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/app/hook.ts":
/*!******************************!*\
  !*** ./contexts/app/hook.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./contexts/app/index.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./contexts/app/types.ts\");\n\n\n\nconst useAppContext = ()=>{\n    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.AppContext);\n    return {\n        ...state,\n        setTenant: (tenant)=>{\n            dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__.Actions.SET_TENANT,\n                payload: {\n                    tenant\n                }\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hcHAvaG9vay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtQztBQUNKO0FBRUc7QUFFM0IsTUFBTUcsYUFBYSxHQUFHLElBQU07SUFDakMsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRSxHQUFHTCxpREFBVSxDQUFDQyx5Q0FBVSxDQUFDO0lBRWxELE9BQU87UUFDTCxHQUFHRyxLQUFLO1FBQ1JFLFNBQVMsRUFBRSxDQUFDQyxNQUFjLEdBQUs7WUFDN0JGLFFBQVEsQ0FBQztnQkFDUEcsSUFBSSxFQUFFTixzREFBa0I7Z0JBQ3hCUSxPQUFPLEVBQUU7b0JBQUVILE1BQU07aUJBQUU7YUFDcEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5uYS1kZWxpdmVyeS8uL2NvbnRleHRzL2FwcC9ob29rLnRzPzIzOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBUZW5hbnQgfSBmcm9tIFwiLi4vLi4vc3JjL3R5cGVzL1RlbmVudFwiO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBDb250ZXh0ID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHNldFRlbmFudDogKHRlbmFudDogVGVuYW50KSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFjdGlvbnMuU0VUX1RFTkFOVCxcbiAgICAgICAgcGF5bG9hZDogeyB0ZW5hbnQgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiQWN0aW9ucyIsInVzZUFwcENvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwic2V0VGVuYW50IiwidGVuYW50IiwidHlwZSIsIlNFVF9URU5BTlQiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/app/hook.ts\n");

/***/ }),

/***/ "./contexts/app/index.tsx":
/*!********************************!*\
  !*** ./contexts/app/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider),\n/* harmony export */   \"useAppContext\": () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_3__.useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./contexts/app/reducer.ts\");\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hook */ \"./contexts/app/hook.ts\");\n\n\n\n\nconst initialState = {\n    tenant: null\n};\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: initialState,\n    dispatch: ()=>{}\n});\nconst Provider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery/contexts/app/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hcHAvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtEO0FBQ2Q7QUFHRztBQUV2QyxNQUFNSSxZQUFZLEdBQWE7SUFDN0JDLE1BQU0sRUFBRSxJQUFJO0NBQ2I7QUFFTSxNQUFNQyxVQUFVLGlCQUFHTixvREFBYSxDQUFjO0lBQ25ETyxLQUFLLEVBQUVILFlBQVk7SUFDbkJJLFFBQVEsRUFBRSxJQUFNLENBQUMsQ0FBQztDQUNuQixDQUFDLENBQUM7QUFFSSxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQWdCLEdBQUs7SUFDdEQsTUFBTSxLQUFDSCxLQUFLLE1BQUVDLFFBQVEsTUFBSVAsaURBQVUsQ0FBQ0MsNkNBQU8sRUFBRUUsWUFBWSxDQUFDO0lBRTNELE1BQU1PLEtBQUssR0FBRztRQUFFSixLQUFLO1FBQUVDLFFBQVE7S0FBRTtJQUVqQyxxQkFBTyw4REFBQ0YsVUFBVSxDQUFDRyxRQUFRO1FBQUNFLEtBQUssRUFBRUEsS0FBSztrQkFBR0QsUUFBUTs7Ozs7aUJBQXVCLENBQUM7QUFDN0UsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFubmEtZGVsaXZlcnkvLi9jb250ZXh0cy9hcHAvaW5kZXgudHN4PzgwNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCB7IENvbnRleHRUeXBlLCBEYXRhVHlwZSwgUHJvdmlkZXJUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCIuL2hvb2tcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBEYXRhVHlwZSA9IHtcbiAgdGVuYW50OiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHRUeXBlPih7XG4gIHN0YXRlOiBpbml0aWFsU3RhdGUsXG4gIGRpc3BhdGNoOiAoKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm92aWRlclR5cGUpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9O1xuXG4gIHJldHVybiA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0FwcENvbnRleHQuUHJvdmlkZXI+O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJ1c2VBcHBDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwidGVuYW50IiwiQXBwQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJQcm92aWRlciIsImNoaWxkcmVuIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/app/index.tsx\n");

/***/ }),

/***/ "./contexts/app/reducer.ts":
/*!*********************************!*\
  !*** ./contexts/app/reducer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./contexts/app/types.ts\");\n\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case _types__WEBPACK_IMPORTED_MODULE_0__.Actions.SET_TENANT:\n            return {\n                ...state,\n                tenant: action.payload.tenant\n            };\n            break;\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hcHAvcmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3RDtBQUVqRCxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBZSxFQUFFQyxNQUFrQixHQUFLO0lBQzlELE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLSixzREFBa0I7WUFDckIsT0FBTztnQkFBRSxHQUFHRSxLQUFLO2dCQUFFSSxNQUFNLEVBQUVILE1BQU0sQ0FBQ0ksT0FBTyxDQUFDRCxNQUFNO2FBQUUsQ0FBQztZQUNuRCxNQUFNO1FBQ1I7WUFDRSxPQUFPSixLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5uYS1kZWxpdmVyeS8uL2NvbnRleHRzL2FwcC9yZWR1Y2VyLnRzPzE2MjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGUsIEFjdGlvblR5cGUsIEFjdGlvbnMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZTogRGF0YVR5cGUsIGFjdGlvbjogQWN0aW9uVHlwZSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25zLlNFVF9URU5BTlQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGVuYW50OiBhY3Rpb24ucGF5bG9hZC50ZW5hbnQgfTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiQWN0aW9ucyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTRVRfVEVOQU5UIiwidGVuYW50IiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/app/reducer.ts\n");

/***/ }),

/***/ "./contexts/app/types.ts":
/*!*******************************!*\
  !*** ./contexts/app/types.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Actions\": () => (/* binding */ Actions)\n/* harmony export */ });\nvar Actions;\n(function(Actions) {\n    Actions[Actions[\"SET_TENANT\"] = 0] = \"SET_TENANT\";\n})(Actions || (Actions = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hcHAvdHlwZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBcUJPLE9BRU47VUFGV0EsT0FBTztJQUFQQSxPQUFPLENBQVBBLE9BQU8sQ0FDakJDLFlBQVUsSUFBVkEsQ0FBVSxJQUFWQSxZQUFVO0dBREFELE9BQU8sS0FBUEEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL21hbm5hLWRlbGl2ZXJ5Ly4vY29udGV4dHMvYXBwL3R5cGVzLnRzP2UxYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzcGF0Y2gsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGVuYW50IH0gZnJvbSBcIi4uLy4uL3NyYy90eXBlcy9UZW5lbnRcIjtcblxuZXhwb3J0IHR5cGUgRGF0YVR5cGUgPSB7XG4gIHRlbmFudDogVGVuYW50IHwgbnVsbDtcbn07XG5cbmV4cG9ydCB0eXBlIEFjdGlvblR5cGUgPSB7XG4gIHR5cGU6IEFjdGlvbnM7XG4gIHBheWxvYWQ/OiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBDb250ZXh0VHlwZSA9IHtcbiAgc3RhdGU6IERhdGFUeXBlO1xuICBkaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9uVHlwZT47XG59O1xuXG5leHBvcnQgdHlwZSBQcm92aWRlclR5cGUgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZW51bSBBY3Rpb25zIHtcbiAgU0VUX1RFTkFOVCxcbn1cbiJdLCJuYW1lcyI6WyJBY3Rpb25zIiwiU0VUX1RFTkFOVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/app/types.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/app */ \"./contexts/app/index.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_app__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/glauberthalmeidapinho/Dev/manna-delivery/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVrQztBQUVqRSxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0gsbURBQWtCO2tCQUNqQiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNULENBQ3JCO0FBQ0osQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5uYS1kZWxpdmVyeS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBBcHBDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvYXBwXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBwQ29udGV4dFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsIkFwcENvbnRleHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();