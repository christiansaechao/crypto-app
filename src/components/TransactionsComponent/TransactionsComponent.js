import React from "react";
import TransactionsTable from '../TransactionsTable/TransactionsTable';
import {
  MainContainer,
  Header,
  DetailsContainer,
  SmallDetail,
  DetailName,
} from "./TransactionsComponent.styles";

const TransactionComponent = ({ transactions }) => {
  return (
        <MainContainer>
          <Header>Transactions</Header>
          <DetailsContainer>
            <SmallDetail>
              <DetailName>Balance</DetailName>
              <div className="inner-detail-container">$4,422.97</div>
            </SmallDetail>
            <SmallDetail>
              <DetailName>Income</DetailName>
              <div className="inner-detail-container">$16,454.12</div>
            </SmallDetail>
            <SmallDetail>
              <DetailName>Savings</DetailName>
              <div className="inner-detail-container">$628.00</div>
            </SmallDetail>
            <SmallDetail>
              <DetailName>Expenses</DetailName>
              <div className="inner-detail-container">$59.66</div>
            </SmallDetail>
            <SmallDetail>
              <DetailName>Invoices</DetailName>
              <div className="inner-detail-container">5</div>
            </SmallDetail>
          </DetailsContainer>
          <TransactionsTable transactions={transactions} />
        </MainContainer>
  );
};

export default TransactionComponent;
