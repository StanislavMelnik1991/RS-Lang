"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UA": () => (/* binding */ fetchWords),
  "b7": () => (/* binding */ getUserWords),
  "x4": () => (/* binding */ login),
  "y1": () => (/* binding */ signUp),
  "iG": () => (/* binding */ updateUserWords)
});

// EXTERNAL MODULE: ./store/reducers/TextBookSlice.ts
var TextBookSlice = __webpack_require__(540);
// EXTERNAL MODULE: ./store/reducers/RegisterSlice.ts
var RegisterSlice = __webpack_require__(413);
;// CONCATENATED MODULE: ./api/index.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baseLink = 'https://stanislau-rs-lang.herokuapp.com';

class Controller {
  constructor(link) {
    _defineProperty(this, "baseLink", void 0);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "token", void 0);

    _defineProperty(this, "userId", void 0);

    this.baseLink = link;
  }

  async createUser(user) {
    const rawResponse = await fetch(`${this.baseLink}/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const content = await rawResponse.json();
    return content;
  }

  async loginUser(user) {
    const rawResponse = await fetch(`${this.baseLink}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const content = await rawResponse.json();

    if (content.token && content.userId) {
      this.setToken(content.token);
      this.userId = content.userId;
    }

    return content;
  }

  async getWord(wordId) {
    const rawResponse = await fetch(`${this.baseLink}/words/${wordId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const content = await rawResponse.json();
    return content;
  }

  async getWords({
    page,
    group
  }) {
    const rawResponse = await fetch(`${this.baseLink}/words?page=${page}&group=${group}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const content = await rawResponse.json();
    return content;
  }

  async setUserWord({
    userId,
    word,
    wordId
  }, method) {
    if (!this.token) {
      throw new Error('unauthorized user');
    }

    await fetch(`${this.baseLink}/users/${userId}/words/${wordId}`, {
      method,
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(word)
    });
  }

  async getUserWord({
    userId,
    wordId
  }) {
    if (!this.token || !userId) {
      throw new Error('unauthorized user');
    }

    const rawResponse = await fetch(`${this.baseLink}/users/${userId}/words${wordId || ''}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (wordId) {
      const content = await rawResponse.json();
      return content;
    }

    const content = await rawResponse.json();
    return content;
  }

  setToken(token) {
    this.token = token;
  }

}

/* harmony default export */ const api = (new Controller(baseLink));
// EXTERNAL MODULE: ./store/reducers/AuthSlice.ts
var AuthSlice = __webpack_require__(672);
;// CONCATENATED MODULE: ./store/reducers/ActionCreators.ts




const signUp = user => async dispatch => {
  try {
    dispatch(RegisterSlice/* registerSlice.actions.setIsLoading */.E.actions.setIsLoading(true));
    await api.createUser(user);
    dispatch(RegisterSlice/* registerSlice.actions.setSuccess */.E.actions.setSuccess());
  } catch (error) {
    dispatch(RegisterSlice/* registerSlice.actions.setError */.E.actions.setError('some error'));
  } finally {
    dispatch(RegisterSlice/* registerSlice.actions.setIsLoading */.E.actions.setIsLoading(false));
  }
};
const login = user => async dispatch => {
  try {
    dispatch(AuthSlice/* authSlice.actions.setIsLoading */.G.actions.setIsLoading(true));
    const res = await api.loginUser(user);
    dispatch(AuthSlice/* authSlice.actions.loginSuccess */.G.actions.loginSuccess({
      userID: res.userId,
      name: res.name,
      token: res.token
    }));
  } catch (error) {
    dispatch(AuthSlice/* authSlice.actions.setErrorMessage */.G.actions.setErrorMessage('Incorrect login or password'));
  } finally {
    dispatch(AuthSlice/* authSlice.actions.setIsLoading */.G.actions.setIsLoading(false));
  }
};

const fetchUserWords = (hardWords, page) => {
  const arr = Object.keys(hardWords);
  const words = [];

  for (let i = 0; i < 20; i++) {
    words[i] = arr[Number.parseInt(page, 10) * 20 + i];
  }

  return words;
};

const fetchWords = (page, group, hardWords) => async dispatch => {
  try {
    dispatch(TextBookSlice/* textBookSlice.actions.setLoading */.d.actions.setLoading(true));
    const words = [];

    if (group === '6' && hardWords) {
      const renderWords = fetchUserWords(hardWords, page);
      renderWords.forEach(id => {
        if (id) {
          words.push(api.getWord(id));
        }
      });
      dispatch(TextBookSlice/* textBookSlice.actions.setWords */.d.actions.setWords(await Promise.all(words)));
    } else {
      const res = await api.getWords({
        page,
        group
      });
      dispatch(TextBookSlice/* textBookSlice.actions.setWords */.d.actions.setWords(res));
    }
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(TextBookSlice/* textBookSlice.actions.setLoading */.d.actions.setLoading(false));
  }
};
const getUserWords = (userId, token) => async dispatch => {
  try {
    api.setToken(token);
    const words = await api.getUserWord({
      userId
    });
    const weakWords = {};
    const hardWords = {};
    words.forEach(word => {
      if (word.difficulty === 'hard') {
        hardWords[word.wordId] = true;
      }

      if (word.difficulty === 'weak') {
        weakWords[word.wordId] = true;
      }
    });
    dispatch(TextBookSlice/* textBookSlice.actions.setUserWords */.d.actions.setUserWords({
      weakWords,
      hardWords
    }));
  } catch (error) {
    throw new Error(error);
  }
};
const updateUserWords = (difficulty, wordId, method, userId) => async dispatch => {
  try {
    const wordParams = {
      userId,
      word: {
        difficulty
      },
      wordId
    };
    api.setUserWord(wordParams, method);
    dispatch(TextBookSlice/* textBookSlice.actions.updateUserWords */.d.actions.updateUserWords({
      wordId,
      difficulty,
      method
    }));
  } catch (error) {
    throw new Error(error);
  }
};

/***/ })

};
;