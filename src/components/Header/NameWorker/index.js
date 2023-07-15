import React from "react";
import { employeeSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";

const NameWorker = () => {
  const employee = useSelector(employeeSelector);
  const { roles, login } = employee;
  return (
    <div>
      {roles[1]} : {login}
    </div>
  );
};

export default NameWorker;
