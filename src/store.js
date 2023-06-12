
import { configureStore } from "@reduxjs/toolkit";
import stepperSlice from './features/stepper/stepperSlice'
import profileSlice from './features/profile/profileSlice'


export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
    profile: profileSlice
  },

});