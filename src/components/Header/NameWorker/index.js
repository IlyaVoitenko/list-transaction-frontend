import React from "react";
import { employeeSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";

const NameWorker = () => {
  const employee = useSelector(employeeSelector);
  const { role, login } = employee;
  return (
    <div>
      {role} : {login}
    </div>
  );
};

export default NameWorker;
