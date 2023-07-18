import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./reducer/transactions";
import employeeReducer from "./reducer/employee";
import authReducer from "./reducer/auth";

export const store = configureStore({
  reducer: {
    trans: transactionReducer,
    employee: employeeReducer,
    auth: authReducer,
  },
});

export default store;
