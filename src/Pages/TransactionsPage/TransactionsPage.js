import React from "react";
import TransactionsTable from "components/TransactionsTable/TransactionsTable";
import {
  MainContainer,
  Header,
  DetailsContainer,
  SmallDetail,
  DetailName,
} from "./TransactionsPage.styles";

const TransactionsPage = () => {
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
          <div className="inner-detail-container">$1,366.98</div>
        </SmallDetail>
      </DetailsContainer>
      <TransactionsTable />
    </MainContainer>
  );
};

export default TransactionsPage;
