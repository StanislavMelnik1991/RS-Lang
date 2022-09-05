import { textBookSlice } from './TextBookSlice';
import {
  User,
  CreateUser,
  CreateUserWordResp,
  AssociativeArr,
  Difficulty,
  CreateUserWordReq,
  WordType,
} from '../../types/index';
import { AppDispatch } from '../store';
import { registerSlice } from './RegisterSlice';
import Controller from '../../api/index';
import { authSlice } from './AuthSlice';

export const signUp = (user: CreateUser) => async (dispatch: AppDispatch) => {
  try {
    dispatch(registerSlice.actions.setIsLoading(true));
    await Controller.createUser(user);
    dispatch(registerSlice.actions.setSuccess());
  } catch (error) {
    dispatch(registerSlice.actions.setError('some error'));
  } finally {
    dispatch(registerSlice.actions.setIsLoading(false));
  }
};

export const login = (user: User) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.setIsLoading(true));
    const res = await Controller.loginUser(user);
    dispatch(
      authSlice.actions.loginSuccess({ userID: res.userId, name: res.name, token: res.token }),
    );
  } catch (error) {
    dispatch(authSlice.actions.setErrorMessage('Incorrect login or password'));
  } finally {
    dispatch(authSlice.actions.setIsLoading(false));
  }
};

const fetchUserWords = (hardWords: AssociativeArr, page: string) => {
  const arr = Object.keys(hardWords);
  const words: string[] = [];
  for (let i = 0; i < 20; i++) {
    words[i] = arr[(Number.parseInt(page, 10) * 20) + i];
  }
  return words;
};

export const fetchWords = (
  page: string,
  group: string,
  hardWords: AssociativeArr,
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(textBookSlice.actions.setLoading(true));
    const words: Promise<WordType>[] = [];
    if (group === '6') {
      const renderWords = fetchUserWords(hardWords, page);

      renderWords.forEach((id) => {
        if (id) {
          words.push(Controller.getWord(id));
        }
      });
      dispatch(textBookSlice.actions.setWords(await Promise.all(words)));
    } else {
      const res = await Controller.getWords({ page, group });
      dispatch(textBookSlice.actions.setWords(res));
    }
  } catch (err: any) {
    throw new Error(err);
  } finally {
    dispatch(textBookSlice.actions.setLoading(false));
  }
};

export const getUserWords = (userId: string, token: string) => async (dispatch: AppDispatch) => {
  try {
    Controller.setToken(token);
    const words = await Controller.getUserWord({ userId }) as CreateUserWordResp[];
    const weakWords: AssociativeArr = {};
    const hardWords: AssociativeArr = {};
    words.forEach((word) => {
      if ((word.difficulty) === 'hard') {
        hardWords[(word.wordId)] = true;
      }
      if ((word.difficulty) === 'weak') {
        weakWords[(word.wordId)] = true;
      }
    });
    dispatch(textBookSlice.actions.setUserWords({ weakWords, hardWords }));
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateUserWords = (
  difficulty: Difficulty,
  wordId: string,
  method: 'PUT' | 'POST' | 'DELETE' | 'GET',
  userId: string,
) => async (dispatch: AppDispatch) => {
  try {
    const wordParams: CreateUserWordReq = {
      userId,
      word: {
        difficulty,
        optional: {
          date: Date.now(),
        },
      },
      wordId,
    };
    Controller.setUserWord(wordParams, method);
    dispatch(textBookSlice.actions.updateUserWords({ wordId, difficulty, method }));
  } catch (error: any) {
    throw new Error(error);
  }
};
