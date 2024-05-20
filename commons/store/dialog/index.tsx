import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface dialogState {
  Access: false | true;
  confirm: false | true;
  Certification: false | true;
  WithDrawal: false | true;
  BlockWithDrawal: false | true;
}
const initialState = {
  Access: true,
  confirm: false,
  Certification: false,
  WithDrawal: false,
  BlockWithDrawal: false,
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
    toggleDialog2: (state) => {
      state.WithDrawal = !state.WithDrawal;
    },
    toggleBlockWithDrawal: (state) => {
      state.BlockWithDrawal = !state.BlockWithDrawal;
    },
  },
});
export const {
  toggleDialog,
  toggleDialog1,
  toggleDialog2,
  toggleBlockWithDrawal,
} = dialog.actions;
export default dialog.reducer;
