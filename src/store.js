
import { configureStore } from "@reduxjs/toolkit";
import stepperSlice from './features/stepper/stepperSlice'


export const store = configureStore({
  reducer: {
    stepper: stepperSlice
  },

});