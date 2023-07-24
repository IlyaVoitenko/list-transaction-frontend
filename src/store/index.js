import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./reducer/transactions";
import employeeReducer from "./reducer/employee";
import authReducer from "./reducer/auth";
import clientReducer from "./reducer/clients";
import modalReducer from "./reducer/modal";

export const store = configureStore({
  reducer: {
    trans: transactionReducer,
    employee: employeeReducer,
    client: clientReducer,
    modal: modalReducer,
    auth: authReducer,
  },
});

export default store;
