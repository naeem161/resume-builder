import { createSlice } from "@reduxjs/toolkit";




const workSlice = createSlice({
  name: "work",
  initialState: { experienceArray: [] },
  reducers: {

    saveWork: (state, { payload }) => {
      state.experienceArray = payload.work;
    },
  },
});
export const { saveWork } = workSlice.actions;

export default workSlice.reducer;