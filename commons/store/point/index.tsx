import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PointAPI from '../../services/point.services';
import { Refreshtoken } from '../user';
export const getbyidPoint = createAsyncThunk(
  'Point/GetbyidNHCH ',
  async (id: string | number) => {
    try {
      const res: any = await PointAPI.Getbyid(id);
      return res.get;
    } catch (error: any) {
      if (error.response.status === 410) {
        try {
          await Refreshtoken();
          const res: any = await PointAPI.Getbyid(id);
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
  }
);
export const getSearchPoint = createAsyncThunk(
  'Point/Search ',
  async (payload: object) => {
    try {
      const res: any = await PointAPI.Search(payload);
      return res.get;
    } catch (error: any) {
      if (error.response.status === 410) {
        try {
          await Refreshtoken();
          const res: any = await PointAPI.Search(payload);
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
  }
);
interface PointState {
  Point: any;
  isloading: false | true;
}
const initialState = {
  Point: [],
  isloading: false,
} as PointState;
const Point = createSlice({
  name: 'Point',
  initialState,
  reducers: {},
  extraReducers: (builerUser) => {
    builerUser.addCase(getbyidPoint.pending, (state, action) => {
      state.isloading = false;
    }),
      builerUser.addCase(getbyidPoint.fulfilled, (state, action) => {
        state.Point = action.payload ? action.payload : [];
        state.isloading = true;
      }),
      builerUser.addCase(getbyidPoint.rejected, (state, action) => {
        (state.Point = []), (state.isloading = false);
      }),
      builerUser.addCase(getSearchPoint.fulfilled, (state, action) => {
        state.Point = action.payload ? action.payload : [];
        state.isloading = true;
      }),
      builerUser.addCase(getSearchPoint.rejected, (state, action) => {
        (state.Point = []), (state.isloading = false);
      });
  },
});
export default Point.reducer;
