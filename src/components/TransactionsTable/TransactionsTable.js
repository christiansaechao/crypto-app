import React from "react";
import { TransactionsData } from "./TransactionsData";
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
  return (
    <CoinsTableContainer>
      <CoinsTableHead>
        <CoinsTableRow>
          <CoinsTableTH>Transactions</CoinsTableTH>
          <CoinsTableTH>Date/Time Bought</CoinsTableTH>
          <CoinsTableTH>Price Bought For</CoinsTableTH>
          <CoinsTableTH>Amount</CoinsTableTH>
          <CoinsTableTH>Gain/Loss</CoinsTableTH>
          <CoinsTableTH>Gain/Loss%</CoinsTableTH>
          <CoinsTableTH>Transaction Status</CoinsTableTH>
        </CoinsTableRow>
      </CoinsTableHead>
      <CoinsTableBody>
        {
          transactions.map((transaction) => 
            <CoinsTableRow>
              <CoinsTableTD>{transaction.txType}</CoinsTableTD>
              <CoinsTableTD>{transaction.txNumber}</CoinsTableTD>
              <CoinsTableTD>{transaction.asset}</CoinsTableTD>
              <CoinsTableTD>{transaction.dateTimeBought}</CoinsTableTD>
              <CoinsTableTD>{transaction.priceBoughtFor}</CoinsTableTD>
              <CoinsTableTD>{transaction.amount}</CoinsTableTD>
              <CoinsTableTD>{transaction.gainLossFiat}</CoinsTableTD>
              <CoinsTableTD>{transaction.gainLossPercent}</CoinsTableTD>
              <CoinsTableTD>{transaction.txStatus}</CoinsTableTD>
            </CoinsTableRow>
          )}
      </CoinsTableBody>
    </CoinsTableContainer>
  );
};

export default TransactionsTable;
