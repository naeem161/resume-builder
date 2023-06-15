import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  interests: [],
};

const interestsSlice = createSlice({
  name: "interests",
  initialState,
  reducers: {

    saveInterests: (state, { payload }) => {
      state.interests = payload.interests;
    },
  },
});
export const { saveInterests } = interestsSlice.actions;

export default interestsSlice.reducer;