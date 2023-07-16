import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

export const transactionSlice = createSlice({
  name: "trans",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTransactions } = transactionSlice.actions;

export default transactionSlice.reducer;
