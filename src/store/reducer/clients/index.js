import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: {},
  isModalClient: false,
  isValidSearchClient: false,
  numberPhone: null,
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setModalClient: (state, action) => {
      state.isModalClient = action.payload;
    },
    setNumberPhone: (state, action) => {
      state.numberPhone = action.payload;
    },
    setClient: (state, action) => {
      state.client = action.payload;
    },
    clearClient: (state) => {
      state.client = {};
    },
    setIsValidSearchClient: (state, action) => {
      state.isValidSearchClient = action.payload;
    },
  },
});

export const {
  setModalClient,
  setClient,
  clearClient,
  setIsValidSearchClient,
  setNumberPhone,
} = clientSlice.actions;

export default clientSlice.reducer;
