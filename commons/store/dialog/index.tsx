import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface dialogState {
  Access: false | true;
  confirm: false | true;
  Certification: false | true;
}
const initialState = {
  Access: true,
  confirm: false,
  Certification: false,
} as dialogState;
const dialog = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    toggleDialog: (state) => {
      (state.Access = false), (state.confirm = !state.confirm);
    },
    toggleDialog1: (state) => {
      state.Certification = !state.Certification;
    },
  },
});
export const { toggleDialog, toggleDialog1 } = dialog.actions;
export default dialog.reducer;
