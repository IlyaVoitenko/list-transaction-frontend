import { createSlice } from "@reduxjs/toolkit";
import {
  sortedArrayById,
  sortedByString,
  sortBySumma,
  sortByDate,
} from "./helper";
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
    clearDetailTransaction: (state) => {
      state.detailTransaction = {};
    },
    setIsDetailTransaction: (state, action) => {
      state.isDetailTransaction = action.payload;
    },
    //sort

    sortTransactonsByAddressee: (state) => {
      state.transactions = state.transactions.sort((first, second) =>
        sortedByString(first.addressee, second.addressee)
      );
    },
    sortTransactonsBySender: (state) => {
      state.transactions = state.transactions.sort((first, second) =>
        sortedByString(first.sender, second.sender)
      );
    },
    sortTransactonsBySumma: (state) => {
      state.transactions = state.transactions.sort((first, second) =>
        sortBySumma(parseInt(first.summa), parseInt(second.summa))
      );
    },
    sortTransactonsByFromPlace: (state) => {
      state.transactions = state.transactions.sort((first, second) =>
        sortedByString(first.fromPlace, second.fromPlace)
      );
    },
    sortTransactonsByToPlace: (state) => {
      state.transactions = state.transactions.sort((first, second) =>
        sortedByString(first.toPlace, second.toPlace)
      );
    },
    sortTransactonsByCreated: (state) => {
      state.transactions = state.transactions.sort((first, second) =>
        sortByDate(first.createdAt, second.createdAt)
      );
    },
    sortTransactonsByUpdated: (state) => {
      state.transactions = state.transactions.sort((first, second) =>
        sortByDate(first.updatedAt, second.updatedAt)
      );
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
export const {
  clearTransactions,
  setIsDetailTransaction,
  clearDetailTransaction,

  sortTransactonsByToPlace,
  sortTransactonsByFromPlace,
  sortTransactonsByAddressee,
  sortTransactonsBySumma,
  sortTransactonsBySender,
  sortTransactonsByCreated,
  sortTransactonsByUpdated,
} = transactionSlice.actions;

export default transactionSlice.reducer;
