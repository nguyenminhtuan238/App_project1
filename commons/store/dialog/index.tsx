import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface dialogState {
  Access: false | true;
  confirm: false | true;
}
const initialState = {
  Access: true,
  confirm: false,
} as dialogState;
const dialog = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    toggleDialog: (state) => {
      (state.Access = false), (state.confirm = !state.confirm);
    },
  },
});
export const { toggleDialog } = dialog.actions;
export default dialog.reducer;
