import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./reducer/transactions";

export const store = configureStore({
  reducer: {
    trans: transactionReducer,
  },
});
