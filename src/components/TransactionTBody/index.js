import React from "react";
import TBodyItem from "./TBodyItem";

const TransactionTBody = ({ trans = [] }) => {
  console.log("TransactionTBody :", trans);
  return (
    <tbody>
      {trans.map((item) => (
        <TBodyItem key={item.id} item={item} />
      ))}
    </tbody>
  );
};

export default TransactionTBody;
