/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AssociativeArr, WordType } from '../../types';

export interface TextBookSlice {
  group: string;
  page: string;
  words: WordType[];
  hardWords: AssociativeArr
  weakWords: AssociativeArr
}

const initialState: TextBookSlice = {
  group: '0',
  page: '0',
  words: [],
  hardWords: {},
  weakWords: {},
};

export const textBookSlice = createSlice({
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
    setUserWords(
      state,
      action: PayloadAction<{
        hardWords?: AssociativeArr,
        weakWords?: AssociativeArr
      }>,
    ) {
      if (action.payload.hardWords) {
        state.hardWords = { ...action.payload.hardWords };
      }
      if (action.payload.weakWords) {
        state.weakWords = { ...action.payload.weakWords };
      }
    },
  },
});

export default textBookSlice.reducer;
