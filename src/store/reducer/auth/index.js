import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authErrorMessage: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthErrorMessage: (state, action) => {
      state.authErrorMessage = action.payload;
    },
  },
});

export const { setAuthErrorMessage } = authSlice.actions;

export default authSlice.reducer;
