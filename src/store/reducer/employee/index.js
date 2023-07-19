import { createSlice } from "@reduxjs/toolkit";
import { setEmployee } from "../../thunk";

const initialState = {
  employee: {},
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  extraReducers: {
    [setEmployee.fulfilled]: (state, action) => {
      state.employee = { ...action.payload };
    },
  },
});

export const { _ } = employeeSlice.actions;

export default employeeSlice.reducer;
