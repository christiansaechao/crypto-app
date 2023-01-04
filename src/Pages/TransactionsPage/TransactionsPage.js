import React from "react";
import TransactionsTable from "components/TransactionsTable/TransactionsTable";
import {
  MainContainer,
  DetailsContainer,
  SmallDetail,
  DetailName,
} from "./TransactionsPage.styles";

const TransactionsPage = () => {
  return (
    <MainContainer>
      <DetailsContainer>
        <SmallDetail>
          <DetailName>Balance</DetailName>
          <div className="inner-detail-container">$4,444</div>
        </SmallDetail>
        <SmallDetail>
          <DetailName>Income</DetailName>
          <div className="inner-detail-container">$4,444</div>
        </SmallDetail>
        <SmallDetail>
          <DetailName>Savings</DetailName>
          <div className="inner-detail-container">$4,444</div>
        </SmallDetail>
        <SmallDetail>
          <DetailName>Expenses</DetailName>
          <div className="inner-detail-container">$4,444</div>
        </SmallDetail>
        <SmallDetail>
          <DetailName>Invoices</DetailName>
          <div className="inner-detail-container">$4,444</div>
        </SmallDetail>
      </DetailsContainer>
      <TransactionsTable />
    </MainContainer>
  );
};

export default TransactionsPage;
