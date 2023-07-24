import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalWindow: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalWindow: (state, action) => {
      state.isModalWindow = action.payload;
    },
  },
});

export const { setModalWindow } = modalSlice.actions;

export default modalSlice.reducer;
