import React from "react";
import { handleSelectChange } from "./helper";
import { useDispatch } from "react-redux";

const FillterTransactions = () => {
  const dispatch = useDispatch();

  return (
    <select
      id="countries"
      defaultValue=""
      onChange={({ target }) => handleSelectChange(dispatch, target)}
      className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    >
      <option value="" disabled>
        Sort by
      </option>
      <option value="addressee">addressee</option>
      <option value="sender">sender</option>
      <option value="summa">summa</option>
      <option value="fromPlace">fromPlace</option>
      <option value="toPlace">toPlace</option>
      <option value="createdAt">created</option>
      <option value="updatedAt">updated</option>
    </select>
  );
};

export default FillterTransactions;
