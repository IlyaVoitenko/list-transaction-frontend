import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArrayTestTransactions } from "../../store/selectors";
import TransactionTHead from "../TransactionTHead";
import TransactionTBody from "../TransactionTBody";
import { getListTransactions } from "../API";
const TransactionsTable = () => {
  const dispatch = useDispatch();
  const testTransactions = useSelector(getArrayTestTransactions);

  useEffect(() => {
    getListTransactions();
  }, [dispatch]);

  return (
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg ">
      <table className="table w-full text-gray-300 border-separate space-y-6 text-sm">
        <TransactionTHead data={testTransactions} />
        <TransactionTBody data={testTransactions} />
      </table>
    </div>
  );
};

export default TransactionsTable;
