import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './user';
import dialog from './dialog';
import Navigationbar from './Navigationbar';
import hidden from './hidden';
import CarRegistration from './CarRegistration';
import DeliveryAddress from './DeliveryAddress';
const reducer = combineReducers({
  user,
  dialog,
  Navigationbar,
  hidden,
  CarRegistration,
  DeliveryAddress,
});
const store = configureStore({
  reducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
