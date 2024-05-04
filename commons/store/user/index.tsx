import AuthAPI from '../../services/User.services';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envREFRESHTOKEN, webClientId, envUser } from '../../themes/global';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import userFireBase from '../../services/User.services';
import { supabase } from '../../themes/supabase';
import * as QueryParams from 'expo-auth-session/build/QueryParams';
import pointFireBase from '../../services/point.services';
GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId,
  offlineAccess: true,
});
const LoginPoint = async (data: any) => {
  try {
    const GetUser = await userFireBase.getbyiduser(data?.id);
    if (GetUser.success == false) {
      await userFireBase.Adduser(
        { Email: data?.email, Point: 0, accumulation: 0 },
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
export const LoginGoogle = createAsyncThunk('user/Google', async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken, user }: any = await GoogleSignin.signIn();
    await LoginPoint(user);
    await AsyncStorage.setItem(envUser, JSON.stringify(user));
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential);

    return user;
  } catch (error: any) {
    console.log(error);

    throw error;
  }
});
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
    await GoogleSignin.signOut();
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
  extraReducers: (builerUser) => {
    builerUser.addCase(LoginGoogle.fulfilled, (state, action) => {
      state.isloading = true;
      (state.user = action.payload), (state.error = null);
    }),
      builerUser.addCase(LoginGoogle.rejected, (state, action) => {
        (state.user = {}),
          (state.isloading = false),
          (state.error = action.error);
      });
  },
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
