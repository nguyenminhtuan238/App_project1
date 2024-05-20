import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envREFRESHTOKEN, envUser } from '../../themes/global';
import userFireBase from '../../services/User.services';
import { supabase } from '../../themes/supabase';
import * as QueryParams from 'expo-auth-session/build/QueryParams';
import pointFireBase from '../../services/point.services';

const LoginPoint = async (data: any) => {
  try {
    const GetUser = await userFireBase.getbyiduser(data?.id);
    if (GetUser.success == false) {
      await userFireBase.Adduser(
        {
          Email: data?.email,
          Point: 0,
          accumulation: 0,
          create_at: new Date(Date.now()),
          update_at: new Date(Date.now()),
        },
        data?.id
      );
      await pointFireBase.Addpointadd({
        ID_User: data?.id,
        Point: 500,
        StatusPoint: '첫 번째 등록 지점',
        Createdate: new Date(Date.now()),
      });
      await userFireBase.updateuser({ Point: 500 }, data?.id);
    }
  } catch (error) {
    throw error;
  }
};

export const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);
  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error }: any = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });
  await AsyncStorage.setItem(envUser, JSON.stringify(data?.user));
  await LoginPoint(data?.user);
  if (error) throw error;
  return data.session;
};
export async function Logout() {
  try {
    await AsyncStorage.removeItem(envUser);
    await AsyncStorage.removeItem(envREFRESHTOKEN);
  } catch (error) {
    console.log(error);
  }
}

interface StudentState {
  user: object | any;
  isloading: false | true;
  checklogin: false | true;
  error: any;
}
const initialState = {
  user: {},
  isloading: false,
  checklogin: false,
  error: null,
} as StudentState;
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    CheckLogin: (state, action) => {
      state.checklogin = action.payload;
    },
  },
  extraReducers: (builerUser) => {},
});
export const { CheckLogin } = slice.actions;
export default slice.reducer;

// Actions
// export const login = ({ username, password }) => async dispatch => {
//   try {
//     // const res = await api.post('/api/auth/login/', { username, password })
//     dispatch(loginSuccess({username}));
//   } catch (e) {
//     return console.error(e.message);
//   }
// }
// export const logout = () => async dispatch => {
//   try {
//     // const res = await api.post('/api/auth/logout/')
//     return dispatch(logoutSuccess())
//   } catch (e) {
//     return console.error(e.message);
//   }
// }
