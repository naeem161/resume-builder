
import { configureStore } from "@reduxjs/toolkit";
import stepperSlice from './features/stepper/stepperSlice'
import profileSlice from './features/profile/profileSlice'
import workSlice from './features/work/workSlice'
import educationSlice from './features/education/educationSlice'
import skillsSlice from './features/skills/skillsSlice'




export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
    profile: profileSlice,
    work: workSlice,
    education: educationSlice,
    skills: skillsSlice,
  },

});