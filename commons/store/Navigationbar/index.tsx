import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface NavigationbarState {
  setSelectedbar: number;
}
const initialState = {
  setSelectedbar: 0,
} as NavigationbarState;
const Navigationbar = createSlice({
  name: 'Navigationbar',
  initialState,
  reducers: {
    toggleNavigationbar: (state, action) => {
      state.setSelectedbar = action.payload;
    },
  },
});
export const { toggleNavigationbar } = Navigationbar.actions;
export default Navigationbar.reducer;
