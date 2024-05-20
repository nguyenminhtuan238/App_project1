import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CarRegistrationidState {
  DeliveryAddressid: any;
}
const initialState = {
  DeliveryAddressid: '',
} as CarRegistrationidState;
const DeliveryAddressid = createSlice({
  name: 'DeliveryAddress',
  initialState,
  reducers: {
    GetDeliveryAddressid: (state, action) => {
      state.DeliveryAddressid = action.payload;
    },
  },
});
export const { GetDeliveryAddressid } = DeliveryAddressid.actions;
export default DeliveryAddressid.reducer;
