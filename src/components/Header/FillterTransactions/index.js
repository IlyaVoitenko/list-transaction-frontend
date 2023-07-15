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
      <option value="id">Id</option>
      <option value="name">Name</option>
      <option value="username">Username</option>
      <option value="email">Email</option>
      <option value="address">Address</option>
      <option value="website">WebSite</option>
      <option value="company">Company</option>
      <option value="phone">Number Phone</option>
    </select>
  );
};

export default FillterTransactions;
