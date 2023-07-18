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
      console.log("action :", action.payload);
      state.employee = { ...action.payload };
    },
  },
});

export const { _ } = employeeSlice.actions;

export default employeeSlice.reducer;
