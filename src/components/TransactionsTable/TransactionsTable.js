import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import {
  TransactionsTableContainer,
  TransactionsTableHead,
  TransactionsTableRow,
  TransactionsTableTH,
  TransactionsTableBody,
  TransactionsTableTD,
} from "./TransactionsTable.styles";

const TransactionsTable = ({ transactions }) => {
  const txStatus = (status) => {
    switch (status) {
      case "Complete":
        return "green";
      case "Canceled":
        return "red";
      case "Pending":
        return "yellow";
      default:
        return null;
    }
  };
  return (
    <TransactionsTableContainer>
      <TransactionsTableHead>
        <TransactionsTableRow>
          <TransactionsTableTH></TransactionsTableTH>
          <TransactionsTableTH>Transactions</TransactionsTableTH>
          <TransactionsTableTH>Asset</TransactionsTableTH>
          <TransactionsTableTH>Price Bought For</TransactionsTableTH>
          <TransactionsTableTH>Amount</TransactionsTableTH>
          <TransactionsTableTH>Gain/Loss</TransactionsTableTH>
          <TransactionsTableTH>Transaction Status</TransactionsTableTH>
          <TransactionsTableTH>Date/Time Bought</TransactionsTableTH>
        </TransactionsTableRow>
      </TransactionsTableHead>
      <TransactionsTableBody>
        {transactions.map((transaction) => (
          <TransactionsTableRow>
            <TransactionsTableTD>
              <FaCheckSquare className="checkbox" />
            </TransactionsTableTD>
            <TransactionsTableTD>
              <div className={transaction.txType === "Buy" ? "green" : "red"}>
                {transaction.txType}
              </div>{" "}
              #{transaction.txNumber}
            </TransactionsTableTD>
            <TransactionsTableTD>{transaction.asset}</TransactionsTableTD>
            <TransactionsTableTD>
              $
              {transaction.priceBoughtFor < 1
                ? transaction.priceBoughtFor
                : transaction.priceBoughtFor.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
            </TransactionsTableTD>
            <TransactionsTableTD>
              {transaction.amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </TransactionsTableTD>
            <TransactionsTableTD>
              <div
                className={transaction.gainLossPercent > 0 ? "green" : "red"}
              >
                $
                {transaction.gainLossFiat.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}{" "}
                ({transaction.gainLossPercent}%)
              </div>
            </TransactionsTableTD>
            <TransactionsTableTD>
              <div className={txStatus(transaction.txStatus)}>
                {transaction.txStatus}
              </div>
            </TransactionsTableTD>
            <TransactionsTableTD>
              {transaction.dateTimeBought}
            </TransactionsTableTD>
          </TransactionsTableRow>
        ))}
      </TransactionsTableBody>
    </TransactionsTableContainer>
  );
};

export default TransactionsTable;
