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
  },
});

export default authSlice.reducer;
