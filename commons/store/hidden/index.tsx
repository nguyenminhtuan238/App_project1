import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface HiddenState {
  setRegisteredCar: false | true;
}
const initialState = {
  setRegisteredCar: true,
} as HiddenState;
const Hidden = createSlice({
  name: 'hidden',
  initialState,
  reducers: {
    HiddenRegisteredCar: (state) => {
      state.setRegisteredCar = !state.setRegisteredCar;
    },
  },
});
export const { HiddenRegisteredCar } = Hidden.actions;
export default Hidden.reducer;
