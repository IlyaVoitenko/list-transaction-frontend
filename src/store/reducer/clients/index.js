import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: {},
  isModalClient: false,
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setModalClient: (state, action) => {
      state.isModalClient = action.payload;
    },
  },
});

export const { setModalClient } = clientSlice.actions;

export default clientSlice.reducer;
