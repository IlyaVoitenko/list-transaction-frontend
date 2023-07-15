import React from "react";
import SearchClient from "./SearchClient";
import LogoutBtn from "./LogoutBtn";
import NameWorker from "./NameWorker";
import InfoClientBtn from "./InfoClientBtn";
import FillterTransactions from "./FillterTransactions";
import lodash from "lodash";
import { useSelector } from "react-redux";
import { employeeSelector } from "../../store/selectors";

const Header = () => {
  const employee = useSelector(employeeSelector);
  return (
    <div className="flex text-white justify-around items-center  h-[7%]">
      <NameWorker />
      <SearchClient />
      {!lodash.isEmpty(employee) && <InfoClientBtn />}
      <FillterTransactions />
      <LogoutBtn />
    </div>
  );
};

export default Header;
