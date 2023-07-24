import { createSlice } from "@reduxjs/toolkit";
import { setClient } from "../../thunk";

const initialState = {
  client: {},
  isValidSearchClient: false,
  numberPhone: null,
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
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

export const { clearClient, setIsValidSearchClient, setNumberPhone } =
  clientSlice.actions;

export default clientSlice.reducer;
