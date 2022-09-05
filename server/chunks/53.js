"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ registerSlice),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-param-reassign */

const initialState = {
  isLoading: false,
  error: '',
  success: false
};
const registerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'registration',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },

    setError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    setSuccess(state) {
      state.isLoading = false;
      state.success = true;
    }

  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerSlice.reducer);

/***/ }),

/***/ 540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "d": () => (/* binding */ textBookSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-param-reassign */

const initialState = {
  group: '0',
  page: '0',
  words: [],
  hardWords: {},
  weakWords: {},
  isLoading: false
};
const textBookSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'textBook',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },

    setWords(state, action) {
      state.words = action.payload;
    },

    setGroup(state, action) {
      state.group = action.payload;
    },

    setPage(state, action) {
      state.page = action.payload;
    },

    setUserWords(state, action) {
      if (action.payload.hardWords) {
        state.hardWords = _objectSpread({}, action.payload.hardWords);
      }

      if (action.payload.weakWords) {
        state.weakWords = _objectSpread({}, action.payload.weakWords);
      }
    },

    updateUserWords(state, action) {
      if (action.payload.difficulty === 'hard') {
        switch (action.payload.method) {
          case 'DELETE':
            delete state.hardWords[action.payload.wordId];
            break;

          case 'POST':
            state.hardWords[action.payload.wordId] = true;
            break;

          case 'PUT':
            state.hardWords[action.payload.wordId] = true;
            delete state.weakWords[action.payload.wordId];
            break;

          default:
            break;
        }
      }

      if (action.payload.difficulty === 'weak') {
        switch (action.payload.method) {
          case 'DELETE':
            delete state.weakWords[action.payload.wordId];
            break;

          case 'POST':
            state.weakWords[action.payload.wordId] = true;
            break;

          case 'PUT':
            state.weakWords[action.payload.wordId] = true;
            delete state.hardWords[action.payload.wordId];
            break;

          default:
            break;
        }
      }
    }

  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textBookSlice.reducer);

/***/ })

};
;