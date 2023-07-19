import { createSlice } from "@reduxjs/toolkit";
import { setEmployee } from "../../thunk";

const initialState = {
  employee: {},
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    clearEmployee: (state) => {
      state.employee = {};
    },
  },
  extraReducers: {
    [setEmployee.fulfilled]: (state, action) => {
      state.employee = { ...action.payload };
    },
  },
});

export const { clearEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
