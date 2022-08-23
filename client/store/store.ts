import {combineReducers, configureStore} from "@reduxjs/toolkit";
import appReducer from './reducers/AppSlice';
import registerReducer from './reducers/RegisterSlice'
import authReducer from './reducers/AuthSlice'

const rootReducer = combineReducers({
    appReducer,
    registerReducer,
    authReducer
 })
 
 export const setupStore = () => {
     return configureStore ( {
         reducer: rootReducer
     })
 }
 
 export type RootState = ReturnType<typeof rootReducer>
 export type AppStore = ReturnType<typeof setupStore>
 export type AppDispatch = AppStore['dispatch']