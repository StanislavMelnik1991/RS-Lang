import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
    isLoading: boolean;
    error: string;
}

const initialState: AppState = {
    isLoading: false,
    error: ''
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

    }
})

export default appSlice.reducer;