import React from "react";
import TBodyItem from "./TBodyItem";

const TransactionTBody = ({ trans = [] }) => {
  return (
    <tbody>
      {trans.map((item, index) => (
        <TBodyItem key={item._id} item={item} index={index} />
      ))}
    </tbody>
  );
};

export default TransactionTBody;
