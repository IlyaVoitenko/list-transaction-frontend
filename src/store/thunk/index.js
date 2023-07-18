import { testLoginClient } from "../../components/API";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthErrorMessage } from "../reducer/auth";

export const setEmployee = createAsyncThunk(
  "employee/setEmployee",
  async (data, apiThunk) => {
    try {
      const { employee } = await testLoginClient(data.login, data.password);
      apiThunk.dispatch(setAuthErrorMessage(false));
      console.log("setEmployee :", employee);

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
