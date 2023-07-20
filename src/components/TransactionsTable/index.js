import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestTransactions } from "../../store/selectors";
import TransactionTHead from "../TransactionTHead";
import TransactionTBody from "../TransactionTBody";
import { setTransactions } from "../../store/thunk";

const TransactionsTable = () => {
  const dispatch = useDispatch();
  const testTransactions = useSelector(getTestTransactions);

  useEffect(() => {
    dispatch(setTransactions());
  }, [dispatch]);

  return (
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg  h-screen">
      <table className="table w-full text-gray-300 border-separate space-y-6 text-sm">
        <TransactionTHead trans={testTransactions} />
        <TransactionTBody trans={testTransactions} />
      </table>
    </div>
  );
};

export default TransactionsTable;
