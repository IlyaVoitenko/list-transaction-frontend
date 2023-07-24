import { createSlice } from "@reduxjs/toolkit";
import {
  setTransactions,
  setTransactionsClient,
  setDetailTransactions,
} from "../../thunk";
const initialState = {
  transactions: [],
  detailTransaction: {},
  isDetailTransaction: false,
  isError: false,
};

export const transactionSlice = createSlice({
  name: "trans",
  initialState,
  reducers: {
    clearTransactions: (state) => {
      state.transactions = [];
    },
    setIsDetailTransaction: (state, action) => {
      state.isDetailTransaction = action.payload;
    },
  },
  extraReducers: {
    [setTransactions.fulfilled]: (state, action) => {
      state.transactions = action.payload;
    },
    [setTransactions.rejected]: (state) => {
      state.isError = true;
    },
    [setDetailTransactions.fulfilled]: (state, action) => {
      state.detailTransaction = action.payload;
    },
    [setDetailTransactions.rejected]: (state) => {
      state.isError = true;
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
export const { clearTransactions, setIsDetailTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
