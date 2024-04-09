import AuthAPI from '../../services/auth.services';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Refreshtoken } from '../user';
export const updateStudent = createAsyncThunk(
  'Student/update',
  async (payload: object) => {
    try {
      await AuthAPI.update(payload);
      const Get = await AuthAPI.get();
      return Get.get;
    } catch (error: any) {
      if (error.response.status === 410) {
        try {
          await Refreshtoken();
          await AuthAPI.update(payload);
          const Get = await AuthAPI.get();
          return Get.get;
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(error);
      }
      //throw error
    }
  }
);
export const getStudent = createAsyncThunk('Student/Get', async () => {
  try {
    const res = await AuthAPI.get();
    return res.get;
  } catch (error: any) {
    if (error.response.status === 410) {
      try {
        await Refreshtoken();
        const res = await AuthAPI.get();
        return res.get;
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error);
    }
    //throw error
    //throw error
  }
});
interface StudentState {
  Student: any;
  isloading: false | true;
}
const initialState = {
  Student: [],
  isloading: false,
} as StudentState;
const Student = createSlice({
  name: 'Student',
  initialState,
  reducers: {},
  extraReducers: (builerUser) => {
    builerUser.addCase(getStudent.pending, (state, action) => {
      state.isloading = false;
    }),
      builerUser.addCase(getStudent.fulfilled, (state, action) => {
        state.Student = action.payload;
        state.isloading = true;
      }),
      builerUser.addCase(getStudent.rejected, (state, action) => {
        (state.Student = []), (state.isloading = false);
      });
    builerUser.addCase(updateStudent.fulfilled, (state, action) => {
      state.Student = action.payload;
      state.isloading = true;
    }),
      builerUser.addCase(updateStudent.rejected, (state, action) => {
        (state.Student = []), (state.isloading = false);
      });
  },
});
export default Student.reducer;
