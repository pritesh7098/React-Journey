import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState, // declares the initial state of the slice
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData; // assuming userData is an object containing user information
    },

    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions; // in reducer login and logout are actions and we have to exports this actions.

export default authSlice.reducer; // exports the reducer function
