import React from "react";
import { TransactionsData } from "./TransactionsData";
import { FaCheckSquare } from "react-icons/fa";
import {
  CoinsTableContainer,
  CoinsTableHead,
  CoinsTableRow,
  CoinsTableTH,
  CoinsTableBody,
  CoinsTableTD,
} from "./TransactionsTable.styles";

const TransactionsTable = () => {
  const transactions = TransactionsData;
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
    <CoinsTableContainer>
      <CoinsTableHead>
        <CoinsTableRow>
          <CoinsTableTH></CoinsTableTH>
          <CoinsTableTH>Transactions</CoinsTableTH>
          <CoinsTableTH>Asset</CoinsTableTH>
          <CoinsTableTH>Price Bought For</CoinsTableTH>
          <CoinsTableTH>Amount</CoinsTableTH>
          <CoinsTableTH>Gain/Loss</CoinsTableTH>
          <CoinsTableTH>Transaction Status</CoinsTableTH>
          <CoinsTableTH>Date/Time Bought</CoinsTableTH>
        </CoinsTableRow>
      </CoinsTableHead>
      <CoinsTableBody>
        {transactions.map((transaction) => (
          <CoinsTableRow>
            <CoinsTableTD>
              <FaCheckSquare className="checkbox" />
            </CoinsTableTD>
            <CoinsTableTD>
              <div className={transaction.txType === "Buy" ? "green" : "red"}>
                {transaction.txType}
              </div>{" "}
              #{transaction.txNumber}
            </CoinsTableTD>
            <CoinsTableTD>{transaction.asset}</CoinsTableTD>
            <CoinsTableTD>
              $
              {transaction.priceBoughtFor < 1
                ? transaction.priceBoughtFor
                : transaction.priceBoughtFor.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
            </CoinsTableTD>
            <CoinsTableTD>
              {transaction.amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </CoinsTableTD>
            <CoinsTableTD>
              <div className={ transaction.gainLossPercent > 0 ? 'green' : 'red'}>
              $
              {transaction.gainLossFiat.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}{" "}
              ({transaction.gainLossPercent}%)
              </div>
            </CoinsTableTD>
            <CoinsTableTD>
              <div className={txStatus(transaction.txStatus)}>
                {transaction.txStatus}
              </div>
            </CoinsTableTD>
            <CoinsTableTD>{transaction.dateTimeBought}</CoinsTableTD>
          </CoinsTableRow>
        ))}
      </CoinsTableBody>
    </CoinsTableContainer>
  );
};

export default TransactionsTable;
