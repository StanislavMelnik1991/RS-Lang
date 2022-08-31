/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RegisterState {
  isLoading: boolean;
  error: string;
  success: boolean;
}

const initialState: RegisterState = {
  isLoading: false,
  error: '',
  success: false,
};

export const registerSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setIsLoading(state) {
      state.isLoading = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setSuccess(state) {
      state.isLoading = false;
      state.success = true;
    },
  },
});

export default registerSlice.reducer;
