/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WordType } from '../../types';

export interface SprintBookSlice {
  group: string;
  page: string;
  words: WordType[];
  score: number;
  currentQuize: number;
}

const initialState: SprintBookSlice = {
  group: '0',
  page: '0',
  words: [],
  score: 0,
  currentQuize: 1,
};

export const sprintSlice = createSlice({
  name: 'textBook',
  initialState,
  reducers: {
    setWords(state, action: PayloadAction<Array<WordType>>) {
      state.words = action.payload;
    },
    setGroup(state, action: PayloadAction<string>) {
      state.group = action.payload;
    },
    setPage(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
    setScore(state, action: PayloadAction<number>) {
      state.score = action.payload;
    },
    setCurrentQuize(state, action: PayloadAction<number>) {
      state.currentQuize = action.payload;
    },
  },
});

export default sprintSlice.reducer;
