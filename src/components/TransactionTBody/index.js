import React from "react";
import TBodyItem from "./TBodyItem";

const TransactionTBody = ({ data }) => {
  return (
    <tbody>
      {data.map((item) => (
        <TBodyItem key={item.id} item={item} />
      ))}
    </tbody>
  );
};

export default TransactionTBody;
