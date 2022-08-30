import { textBookSlice } from './TextBookSlice';
import { User, CreateUser } from '../../types/index';
import { AppDispatch } from '../store';
import { registerSlice } from './RegisterSlice';
import Controller from '../../api/index';
import { authSlice } from './AuthSlice';

export const signUp = (user: CreateUser) => async (dispatch: AppDispatch) => {
  try {
    dispatch(registerSlice.actions.setIsLoading());
    await Controller.createUser(user);
    dispatch(registerSlice.actions.setSuccess());
  } catch (error) {
    dispatch(registerSlice.actions.setError('some error'));
  }
};

export const login = (user: User) => async (dispatch: AppDispatch) => {
  try {
    const res = await Controller.loginUser(user);
    dispatch(
      authSlice.actions.loginSuccess({ userID: res.userId, name: res.name, token: res.token }),
    );
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    localStorage.setItem('userID', JSON.stringify(res.userId));
    localStorage.setItem('token', JSON.stringify(res.token));
    localStorage.setItem('name', JSON.stringify(res.name));
  } catch (error) {
    dispatch(authSlice.actions.setErrorMessage('Incorrect login or password'));
  }
};


export const fetchWords = (page: string, group: string) => async (dispatch: AppDispatch) => {
  try {
    const res = await Controller.getWords({ page, group });
    dispatch(textBookSlice.actions.setWords(res));
    localStorage.setItem('group', group);
    localStorage.setItem('page', page);
  } catch (err) {
    throw new Error('err');
  }
};
