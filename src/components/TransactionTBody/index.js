import React from "react";
import TBodyItem from "./TBodyItem";

const TransactionTBody = ({ trans = [] }) => {
  return (
    <tbody>
      {trans.map((item) => (
        <TBodyItem key={item._id} item={item} />
      ))}
    </tbody>
  );
};

export default TransactionTBody;
