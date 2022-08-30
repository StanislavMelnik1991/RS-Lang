import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WordType } from "../../types";

export interface TextBookSlice {
    group: string;
    page: string;
    words: WordType[]
}

const initialState: TextBookSlice = {
    group: '0',
    page: '0',
    words: []
}

export const textBookSlice = createSlice({
    name: 'textBook',
    initialState,
    reducers: {
        setWords(state, action: PayloadAction<Array<WordType>>) {
            state.words = action.payload
        },
        setGroup(state, action: PayloadAction<string>) {
            state.group = action.payload
        },
        setPage(state, action: PayloadAction<string>) {
            state.page = action.payload
        }
    }
})

export default textBookSlice.reducer;