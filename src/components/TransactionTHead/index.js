import React from "react";
import THeadItem from "./THeadItem";
import lodash from "lodash";

const TransactionTHead = ({ trans = [] }) => {
  return (
    <thead className="text-xs text-gray-700 uppercase text-left bg-gray-200 dark:bg-neutral-900  dark:text-white">
      <tr>
        {!lodash.isEmpty(trans)
          ? Object.keys(trans[0]).map((item, index) => (
              <THeadItem key={index} items={item} />
            ))
          : null}
      </tr>
    </thead>
  );
};

export default TransactionTHead;
