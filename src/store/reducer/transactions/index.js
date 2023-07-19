import { createSlice } from "@reduxjs/toolkit";
import { setTransactions } from "../../thunk";
const initialState = {
  transactions: [],
};

export const transactionSlice = createSlice({
  name: "trans",
  initialState,
  reducers: {
    clearTransactions: (state) => {
      state.transactions = [];
    },
  },
  extraReducers: {
    [setTransactions.fulfilled]: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearTransactions } = transactionSlice.actions;

export default transactionSlice.reducer;
