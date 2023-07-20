import React from "react";
import THeadItem from "./THeadItem";
import lodash from "lodash";
import { filterFieldsArray } from "../TransactionsTable/helper";

const TransactionTHead = ({ trans = [] }) => {
  const filteredArray = filterFieldsArray(trans[0]);

  return (
    <thead className="text-xs text-gray-700 uppercase text-left bg-gray-200 dark:bg-neutral-900  dark:text-white">
      <tr>
        {!lodash.isEmpty(filteredArray)
          ? Object.keys(filteredArray).map((item, index) => (
              <THeadItem key={index} items={item} />
            ))
          : null}
      </tr>
    </thead>
  );
};

export default TransactionTHead;
