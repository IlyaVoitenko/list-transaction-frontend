import { createSlice } from "@reduxjs/toolkit";
import { setClient } from "../../thunk";

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

    clearClient: (state) => {
      state.client = {};
    },
    setIsValidSearchClient: (state, action) => {
      state.isValidSearchClient = action.payload;
    },
  },
  extraReducers: {
    [setClient.fulfilled]: (state, action) => {
      state.client = action.payload;
    },
  },
});

export const {
  setModalClient,
  clearClient,
  setIsValidSearchClient,
  setNumberPhone,
} = clientSlice.actions;

export default clientSlice.reducer;
