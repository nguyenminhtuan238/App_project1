import AuthAPI from '../../services/auth.services';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envTOKEN, envREFRESHTOKEN } from '../../themes/global';
export const LoginUser = createAsyncThunk(
  'user/login',
  async (payload: object) => {
    try {
      const res: any = await AuthAPI.Login(payload);
      await AsyncStorage.setItem(envTOKEN, res.settoken);
      await AsyncStorage.setItem(envREFRESHTOKEN, res.Refreshtoken);
      return res.success;
    } catch (error: any) {
      if (error.response.status === 403) {
        // console.log(JSON.stringify(error.response.data.message))
        throw error.response.data.mess;
      }
      if (error.response.status === 402) {
        throw error.response.data.messa;
      } else {
        console.log(error);
      }
      throw error;
    }
  }
);
export async function Refreshtoken() {
  try {
    const Token = await AsyncStorage.getItem(envREFRESHTOKEN);
    const res = await AuthAPI.Refreshtoken(Token);
    await AsyncStorage.setItem(envTOKEN, envTOKEN);
  } catch (error) {
    console.log(error);
  }
}
export async function Logout() {
  try {
    await AsyncStorage.removeItem(envTOKEN);
    await AsyncStorage.removeItem(envREFRESHTOKEN);
  } catch (error) {
    console.log(error);
  }
}
export const Resetpass = createAsyncThunk(
  'user/Reset',
  async (payload: object) => {
    try {
      const res: any = await AuthAPI.Reset(payload);
      return res.success;
    } catch (error: any) {
      if (error.response.status === 410) {
        try {
          await Refreshtoken();
          const res: any = await AuthAPI.Reset(payload);
          return res.success;
        } catch (error: any) {
          console.log(error);
          if (error.response.status === 402) {
            throw error.response.data.message;
          }
        }
      }
      if (error.response.status === 402) {
        throw error.response.data.message;
      } else {
        console.log(error);
      }
      //throw error
    }
  }
);
interface StudentState {
  user: false | true;
  isloading: false | true;
  error: any;
}
const initialState = {
  user: false,
  isloading: false,
  error: null,
} as StudentState;
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builerUser) => {
    builerUser.addCase(LoginUser.fulfilled, (state, action) => {
      state.isloading = true;
      (state.user = action.payload), (state.error = null);
    }),
      builerUser.addCase(LoginUser.rejected, (state, action) => {
        (state.user = false),
          (state.isloading = false),
          (state.error = action.error);
      });
    builerUser.addCase(Resetpass.fulfilled, (state, action) => {
      state.isloading = action.payload;
      state.error = null;
    }),
      builerUser.addCase(Resetpass.rejected, (state, action) => {
        (state.isloading = false), (state.error = action.error);
      });
  },
});
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
