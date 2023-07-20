import { createSlice } from "@reduxjs/toolkit";
import { setTransactions, setTransactionsClient } from "../../thunk";
const initialState = {
  transactions: [],
  isError: false,
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
    [setTransactionsClient.fulfilled]: (state, action) => {
      state.transactions = action.payload;
      state.isError = false;
    },
    [setTransactionsClient.rejected]: (state) => {
      state.isError = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearTransactions } = transactionSlice.actions;

export default transactionSlice.reducer;
