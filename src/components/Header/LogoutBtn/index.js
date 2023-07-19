import React from "react";
import { useDispatch } from "react-redux";
import { clearEmployee } from "../../../store/reducer/employee";
import { clearClient } from "../../../store/reducer/clients";
import { clearTransactions } from "../../../store/reducer/transactions";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(clearEmployee());
          dispatch(clearClient());
          dispatch(clearTransactions());
        }}
        className=" py-2 px-4   bg-red-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out "
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutBtn;
