import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPickupLocation: false,
  selectedVehicle: false,
  dateFrom : new Date(),
  dateTo : new Date(),
};

export const bookingReducer = createSlice({
  name: "bookingReducer",
  initialState,
  reducers: {
    choosePickupLocation: (state, { payload }) => {
      state.selectedPickupLocation = payload;
    },
    chooseDates: (state, { payload }) => {
      state.selectedVehicle = payload.dateFrom;
      state.dateTo = payload.dateTo;
    },
    chooseSelectedVehicle: (state, { payload }) => {
        console.log('selectedVehicle',payload)
      state.selectedVehicle = payload;
    },

  },
});

export const { choosePickupLocation , chooseSelectedVehicle, chooseDates} = bookingReducer.actions;
export default bookingReducer.reducer;
