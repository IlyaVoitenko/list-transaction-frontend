import React from "react";
import lodash from "lodash";
import { Navigate, Outlet } from "react-router-dom";
import { employeeSelector } from "../../store/selectors";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const employee = useSelector(employeeSelector);
  console.log(employee);
  return !lodash.isEmpty(employee) ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
