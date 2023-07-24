import React from "react";
import lodash from "lodash";
import { useDispatch } from "react-redux";
import { setModalWindow } from "../../../store/reducer/modal";
import { clearDetailTransaction } from "../../../store/reducer/transactions";
import { clearClient } from "../../../store/reducer/clients";

const BtnCloseModal = ({ client }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-end pr-3 mt-1">
      <button
        onClick={() => {
          lodash.isEmpty(client)
            ? dispatch(clearDetailTransaction())
            : dispatch(clearClient());
          dispatch(setModalWindow(false));
        }}
        className="flex items-center justify-center pb-1 pr-0.5  hover:bg-red-700 w-[20px] h-[20px]"
      >
        <span className="text-xl">&times;</span>
      </button>
    </div>
  );
};

export default BtnCloseModal;
