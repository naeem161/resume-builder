import { createSlice } from "@reduxjs/toolkit";

const education = {
  institute: "",
  degree: "",
  study: "",
  date: "",
};

const initialState = {
  education: [education],
};
const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    saveEducation: (state, { payload }) => {
      state.education = payload.education;
    },
  },
});

export const { saveEducation } = educationSlice.actions;

export default educationSlice.reducer;