import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import point from './point';
import Student from './Student';
import user from './user';
import dialog from './dialog';
import Navigationbar from './Navigationbar';
import hidden from './hidden';
const reducer = combineReducers({
  user,
  Student,
  point,
  dialog,
  Navigationbar,
  hidden,
});
const store = configureStore({
  reducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
