/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  token: string,
  name: string,
  userID: string,
  isLoggedIn: boolean,
  authError: string
}

const initialState: AuthState = {
  token: '',
  name: '',
  userID: '',
  isLoggedIn: false,
  authError: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ userID: string, name: string, token: string }>) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userID = action.payload.userID;
      state.name = action.payload.name;
    },
    setErrorMessage(state, action: PayloadAction<string>) {
      state.authError = action.payload;
    },
    setIsLogged(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setId(state, action: PayloadAction<string>) {
      state.userID = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.name = '';
      state.token = '';
      state.userID = '';
    },
  },
});

export default authSlice.reducer;
