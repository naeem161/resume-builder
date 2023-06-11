import { createSlice } from '@reduxjs/toolkit'


const stepperSlice = createSlice({
  name: 'stepper',
  initialState: {
    steps: ["Profile", "Work", "Eduction", "Skills", "Interests", "Preview"],
    activeStep: 0,
    prevSteps: [],

  },
  reducers: {

    nextStep: (state) => {
      if (state.activeStep < state.steps.length - 1) {
        state.prevSteps = [...state.prevSteps, state.activeStep];
        state.activeStep += 1;
      }

    },
    prevStep: (state) => {
      if (
        state.activeStep > 0 &&
        state.prevSteps.includes(state.activeStep - 1)
      ) {
        state.activeStep -= 1;
      }
    },

  },
});

export const { nextStep, prevStep } = stepperSlice.actions;
export default stepperSlice.reducer;

