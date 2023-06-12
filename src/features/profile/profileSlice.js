import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  city: "",
  country: '',
  summary: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // reducer code here
    saveProfile: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.phone = payload.phone;
      state.email = payload.email;
      state.city = payload.city;
      state.country = payload.country;
      state.summary = payload.summary;
    },
  },
});

export const { saveProfile } = profileSlice.actions;

export default profileSlice.reducer;