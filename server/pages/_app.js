"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const integration_react_namespaceObject = require("redux-persist/integration/react");
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: ./store/reducers/AppSlice.ts

const initialState = {
  isLoading: false,
  error: ''
};
const appSlice = (0,toolkit_.createSlice)({
  name: 'app',
  initialState,
  reducers: {}
});
/* harmony default export */ const AppSlice = (appSlice.reducer);
// EXTERNAL MODULE: ./store/reducers/RegisterSlice.ts
var RegisterSlice = __webpack_require__(413);
// EXTERNAL MODULE: ./store/reducers/AuthSlice.ts
var AuthSlice = __webpack_require__(672);
// EXTERNAL MODULE: ./store/reducers/TextBookSlice.ts
var TextBookSlice = __webpack_require__(540);
// EXTERNAL MODULE: ./store/reducers/SprintSlice.ts
var SprintSlice = __webpack_require__(991);
;// CONCATENATED MODULE: ./store/store.ts








const persistConfig = {
  key: 'root',
  storage: (storage_default())
};
const rootReducer = (0,toolkit_.combineReducers)({
  appReducer: AppSlice,
  registerReducer: RegisterSlice/* default */.Z,
  authReducer: AuthSlice/* default */.Z,
  textBookReducer: TextBookSlice/* default */.Z,
  sprintReducer: SprintSlice/* default */.Z
});
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, rootReducer);
const setupStore = () => (0,toolkit_.configureStore)({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [external_redux_persist_namespaceObject.FLUSH, external_redux_persist_namespaceObject.REHYDRATE, external_redux_persist_namespaceObject.PAUSE, external_redux_persist_namespaceObject.PERSIST, external_redux_persist_namespaceObject.PURGE, external_redux_persist_namespaceObject.REGISTER]
    }
  })
});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  const store = setupStore();
  const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
  return /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
      store: store,
      children: /*#__PURE__*/jsx_runtime_.jsx(integration_react_namespaceObject.PersistGate, {
        loading: null,
        persistor: persistor,
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "z": () => (/* binding */ sprintSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-param-reassign */

const initialState = {
  group: '0',
  page: '0',
  words: [],
  score: 0,
  currentQuize: 1,
  hp: 3,
  inprogress: false,
  answers: []
};
const sprintSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'textBook',
  initialState,
  reducers: {
    setWords(state, action) {
      state.words = action.payload;
    },

    setGroup(state, action) {
      state.group = action.payload;
    },

    setPage(state, action) {
      state.page = action.payload;
    },

    setScore(state, action) {
      state.score = action.payload;
    },

    setCurrentQuize(state, action) {
      state.currentQuize = action.payload;
    },

    setHP(state, action) {
      state.hp = action.payload;
    },

    setInprogress(state, action) {
      state.inprogress = action.payload;
    },

    setAnswers(state, action) {
      state.answers = action.payload;
    }

  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sprintSlice.reducer);

/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [672,53], () => (__webpack_exec__(317)));
module.exports = __webpack_exports__;

})();