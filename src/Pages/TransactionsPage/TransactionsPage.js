import React from "react";
import TransactionsComponent from "components/TransactionsComponent/TransactionsComponent";
import { NoTransactions } from "./TransactionsPage.styles";
import { TransactionsData } from "../../components/TransactionsTable/TransactionsData";

const TransactionsPage = () => {
  const transactions = TransactionsData;
  return (
    <>
      {transactions ? (
        <TransactionsComponent transactions={transactions} />
      ) : (
        <NoTransactions>No Transactions Have Been Made Yet ...</NoTransactions>
      )}
    </>
  );
};

export default TransactionsPage;
