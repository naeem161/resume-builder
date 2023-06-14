
import { configureStore } from "@reduxjs/toolkit";
import stepperSlice from './features/stepper/stepperSlice'
import profileSlice from './features/profile/profileSlice'
import workSlice from './features/work/workSlice'
import educationSlice from './features/education/educationSlice'


export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
    profile: profileSlice,
    work: workSlice,
    education: educationSlice
  },

});