import {
  loadClient,
  testLoginEmployee,
  loadListTransactions,
  loadDetailTransaction,
  loadListTransactionsClient,
} from "../../components/API";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthErrorMessage } from "../reducer/auth";

//employee
export const setEmployee = createAsyncThunk(
  "employee/setEmployee",
  async (data, apiThunk) => {
    try {
      const { employee } = await testLoginEmployee(data.login, data.password);
      apiThunk.dispatch(setAuthErrorMessage(false));
      if (!employee) {
        throw new Error(404);
      }
      return employee;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
      apiThunk.dispatch(setAuthErrorMessage(true));
    }
  }
);
// transactions
export const setTransactions = createAsyncThunk(
  "trans/setTransactions",
  async (_, apiThunk) => {
    try {
      const transactions = await loadListTransactions();
      if (!transactions) {
        throw new Error(404);
      }
      return transactions;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
export const setDetailTransactions = createAsyncThunk(
  "trans/setDetailTransactions",
  async (data, apiThunk) => {
    try {
      const { transaction } = await loadDetailTransaction(data);
      if (!transaction) {
        throw new Error(404);
      }
      return transaction;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
//client
export const setTransactionsClient = createAsyncThunk(
  "trans/setTransactionsClient",
  async (numberPhoneClient, apiThunk) => {
    try {
      const { data } = await loadListTransactionsClient(numberPhoneClient);
      if (!data) {
        throw new Error(404);
      }
      return data.clientTransactions;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);

export const setClient = createAsyncThunk(
  "client/setClient",
  async (numberPhone, apiThunk) => {
    try {
      const { data } = await loadClient(numberPhone);
      if (!data) {
        throw new Error(404);
      }
      return data.client;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
