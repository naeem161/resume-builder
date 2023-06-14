
import { configureStore } from "@reduxjs/toolkit";
import stepperSlice from './features/stepper/stepperSlice'
import profileSlice from './features/profile/profileSlice'
import workSlice from './features/work/workSlice'


export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
    profile: profileSlice,
    work: workSlice,
  },

});