/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AssociativeArr, Difficulty, WordType } from '../../types';

export interface TextBookSlice {
  group: string;
  page: string;
  words: WordType[];
  hardWords: AssociativeArr
  weakWords: AssociativeArr
  isLoading: boolean
}

const initialState: TextBookSlice = {
  group: '0',
  page: '0',
  words: [],
  hardWords: {},
  weakWords: {},
  isLoading: false
};

export const textBookSlice = createSlice({
  name: 'textBook',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
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
    updateUserWords(
      state,
      action: PayloadAction<{ wordId: string, difficulty: Difficulty, method: 'PUT' | 'POST' | 'DELETE' | 'GET' }>,
    ) {
      if (action.payload.difficulty === 'hard') {
        switch (action.payload.method) {
          case 'DELETE':
            delete (state.hardWords[action.payload.wordId]);
            break;
          case 'POST':
            state.hardWords[action.payload.wordId] = true;
            break;
          case 'PUT':
            state.hardWords[action.payload.wordId] = true;
            delete (state.weakWords[action.payload.wordId]);
            break;

          default:
            break;
        }
      }
      if (action.payload.difficulty === 'weak') {
        switch (action.payload.method) {
          case 'DELETE':
            delete (state.weakWords[action.payload.wordId]);
            break;
          case 'POST':
            state.weakWords[action.payload.wordId] = true;
            break;
          case 'PUT':
            state.weakWords[action.payload.wordId] = true;
            delete (state.hardWords[action.payload.wordId]);
            break;

          default:
            break;
        }
      }
    },
  },
});

export default textBookSlice.reducer;
