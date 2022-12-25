"use strict";
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 5310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Il": () => (/* binding */ AppContext),
  "zt": () => (/* binding */ Provider),
  "bp": () => (/* reexport */ useAppContext)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./contexts/app/types.ts
var Actions;
(function(Actions) {
    Actions[Actions["SET_TENANT"] = 0] = "SET_TENANT";
})(Actions || (Actions = {}));

;// CONCATENATED MODULE: ./contexts/app/reducer.ts

const reducer = (state, action)=>{
    switch(action.type){
        case Actions.SET_TENANT:
            return {
                ...state,
                tenant: action.payload.tenant
            };
            break;
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./contexts/app/hook.ts



const useAppContext = ()=>{
    const { state , dispatch  } = (0,external_react_.useContext)(AppContext);
    return {
        ...state,
        setTenant: (tenant)=>{
            dispatch({
                type: Actions.SET_TENANT,
                payload: {
                    tenant
                }
            });
        }
    };
};

;// CONCATENATED MODULE: ./contexts/app/index.tsx




const initialState = {
    tenant: null
};
const AppContext = /*#__PURE__*/ (0,external_react_.createContext)({
    state: initialState,
    dispatch: ()=>{}
});
const Provider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(reducer, initialState);
    const value = {
        state,
        dispatch
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(AppContext.Provider, {
        value: value,
        children: children
    });
};


/***/ })

};
;