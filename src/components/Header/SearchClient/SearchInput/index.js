import React, { useState } from "react";
import { isValidSearchSelector } from "../../../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { handleInput } from "../helper";

const SearchInput = () => {
  const dispatch = useDispatch();
  const isValidSearch = useSelector(isValidSearchSelector);
  const [inputValue, setInputValue] = useState("");
  return (
    <div
      className={`${
        !isValidSearch
          ? "bg-Slate-800 border border-gray-900 rounded-lg"
          : "border-2 border-green-500 rounded-lg"
      }`}
    >
      <input
        onChange={({ target }) => handleInput(target, setInputValue, dispatch)}
        className={` outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
        value={inputValue}
        placeholder="search by phone"
      />
    </div>
  );
};

export default SearchInput;
