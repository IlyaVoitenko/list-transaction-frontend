import { createSlice } from "@reduxjs/toolkit";
import { setTransactions } from "../../thunk";
const initialState = {
  transactions: [],
};

export const transactionSlice = createSlice({
  name: "trans",
  initialState,
  extraReducers: {
    [setTransactions.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.transactions = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { _ } = transactionSlice.actions;

export default transactionSlice.reducer;
