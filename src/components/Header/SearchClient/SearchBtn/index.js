import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTransactionsClient, setClient } from "../../../../store/thunk";
import { numberPhoneSelector } from "../../../../store/selectors";

const SearchBtn = () => {
  const dispatch = useDispatch();
  const numberPhoneClient = useSelector(numberPhoneSelector);
  return (
    <div className="ml-2 flex mr-2">
      <button
        type="button"
        onClick={
          numberPhoneClient !== null
            ? () => {
                dispatch(setClient(numberPhoneClient));
                dispatch(setTransactionsClient(numberPhoneClient));
              }
            : null
        }
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Send
      </button>
    </div>
  );
};

export default SearchBtn;
