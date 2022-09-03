import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/AppSlice';
import registerReducer from './reducers/RegisterSlice';
import authReducer from './reducers/AuthSlice';
import textBookReducer from './reducers/TextBookSlice';
import { persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  appReducer,
  registerReducer,
  authReducer,
  textBookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
