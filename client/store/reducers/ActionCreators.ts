import { User, CreateUser } from './../../types/index';
import { AppDispatch } from './../store';
import { registerSlice } from './RegisterSlice';
import Controller from './../../api/index'


export const signUp = (user: CreateUser) => async (dispatch: AppDispatch) => {
  try {
    dispatch(registerSlice.actions.setIsLoading())
    await Controller.createUser(user)
    dispatch(registerSlice.actions.setSuccess())
  } catch (error){
    dispatch(registerSlice.actions.setError("some error"))
  }
}