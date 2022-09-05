import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/AppSlice';
import registerReducer from './reducers/RegisterSlice';
import authReducer from './reducers/AuthSlice';
import textBookReducer from './reducers/TextBookSlice';
import sprintReducer from './reducers/SprintSlice';

const rootReducer = combineReducers({
  appReducer,
  registerReducer,
  authReducer,
  textBookReducer,
  sprintReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
