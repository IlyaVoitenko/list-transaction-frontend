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
    setClient: (state, action) => {
      state.client = action.payload;
    },
    clearClient: (state) => {
      state.client = {};
    },
  },
});

export const { setModalClient, setClient, clearClient } = clientSlice.actions;

export default clientSlice.reducer;
