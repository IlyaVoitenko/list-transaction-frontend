import React from "react";
import THeadItem from "./THeadItem";

const TransactionTHead = ({ data }) => {
  const headerTable = data[0] || {};

  return (
    <thead className="text-xs text-gray-700 uppercase text-left bg-gray-200 dark:bg-neutral-900  dark:text-white">
      <tr>
        {Object.keys(headerTable).map((item, index) => (
          <THeadItem key={index} items={item} />
        ))}
      </tr>
    </thead>
  );
};

export default TransactionTHead;
