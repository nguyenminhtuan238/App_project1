import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface HiddenState {
  hidden: false | true;
  setRegisteredCar: false | true;
}
const initialState = {
  hidden: true,
  setRegisteredCar: true,
} as HiddenState;
const Hidden = createSlice({
  name: 'hidden',
  initialState,
  reducers: {
    HiddenRegisteredCar: (state) => {
      state.setRegisteredCar = !state.setRegisteredCar;
    },
    getHidden: (state) => {
      state.hidden = !state.hidden;
    },
  },
});
export const { HiddenRegisteredCar, getHidden } = Hidden.actions;
export default Hidden.reducer;
