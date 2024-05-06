import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import bookingReducer from "./booking-reducer";

export const store = configureStore({
  reducer: {
    hero: findPlaceSlice,
    bookingReducer : bookingReducer
  },
});
