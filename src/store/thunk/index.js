import {
  loadClient,
  testLoginEmployee,
  loadListTransactions,
  loadListTransactionsClient,
} from "../../components/API";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthErrorMessage } from "../reducer/auth";

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
