import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CarRegistrationidState {
  CarRegistrationid: any;
}
const initialState = {
  CarRegistrationid: '',
} as CarRegistrationidState;
const CarRegistrationid = createSlice({
  name: 'CarRegistrationid',
  initialState,
  reducers: {
    GetCarRegistrationid: (state, action) => {
      state.CarRegistrationid = action.payload;
    },
  },
});
export const { GetCarRegistrationid } = CarRegistrationid.actions;
export default CarRegistrationid.reducer;
