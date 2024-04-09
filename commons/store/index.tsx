import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import point from './point';
import Student from './Student';
import user from './user';
const reducer = combineReducers({
  user,
  Student,
  point,
});
const store = configureStore({
  reducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
