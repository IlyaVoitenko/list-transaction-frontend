import React from "react";
import SearchBtn from "./SearchBtn";
import SearchInput from "./SearchInput";

const SearchClient = () => {
  return (
    <div className="flex flex-row">
      <SearchInput />
      <SearchBtn />
    </div>
  );
};

export default SearchClient;
