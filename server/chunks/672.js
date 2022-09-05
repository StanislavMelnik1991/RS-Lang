"use strict";
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ authSlice),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-param-reassign */

const initialState = {
  token: '',
  name: '',
  userID: '',
  isLoggedIn: false,
  authError: '',
  isLoading: false
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userID = action.payload.userID;
      state.name = action.payload.name;
    },

    setErrorMessage(state, action) {
      state.authError = action.payload;
    },

    setIsLogged(state, action) {
      state.isLoggedIn = action.payload;
    },

    setName(state, action) {
      state.name = action.payload;
    },

    setToken(state, action) {
      state.token = action.payload;
    },

    setId(state, action) {
      state.userID = action.payload;
    },

    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.name = '';
      state.token = '';
      state.userID = '';
    }

  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);

/***/ })

};
;