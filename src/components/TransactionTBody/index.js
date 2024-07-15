import React from "react";
import TBodyItem from "./TBodyItem";

const TransactionTBody = ({ trans = [] }) => {
  const emptyArray = Array(5).fill(null);

  return (
    <tbody>
      {emptyArray.map((item, index) => (
        <TBodyItem key={index} item={item} index={index} />
      ))}
    </tbody>
  );
};

export default TransactionTBody;
