import React, { useState, useEffect } from "react";
import { FaCaretUp, FaCaretDown, FaChevronDown } from "react-icons/fa";
import {
  CoinsTableContainer,
  CoinsTableHead,
  CoinsTableRow,
  CoinsTableTH,
  CoinsTableBody,
  CoinsTableTD,
  CoinImage,
  CenterElements,
  StyledLink,
} from "./CoinsTable.styles";
import Sparkline from "./Sparkline/Sparkline";
import ProgressBar from "../ProgressBar/ProgressBar";
import numeral from "numeral";

const CoinsTable = ({ coinsData }) => {
  const filteredData = [...coinsData];

  const handleFilters = () => {
    filteredData = filteredData.sort((a, b) => b.price_change_percentage_1h_in_currency - a.price_change_percentage_1h_in_currency);
  }

  return (
    <>
      {coinsData && (
        <CoinsTableContainer>
          <CoinsTableHead>
            <CoinsTableRow>
              <CoinsTableTH></CoinsTableTH>
              <CoinsTableTH>
                <CenterElements>
                  Name
                  <FaChevronDown className="color-change" />
                </CenterElements>
              </CoinsTableTH>
              <CoinsTableTH>
                <CenterElements>
                  Price
                  <FaChevronDown className="color-change" />
                </CenterElements>
              </CoinsTableTH>
              <CoinsTableTH className="percent-change" onClick={() => handleFilters()}>
                <CenterElements>
                  1h%
                  <FaChevronDown className="color-change" />
                </CenterElements>
              </CoinsTableTH>
              <CoinsTableTH className="percent-change">
                <CenterElements>
                  24h%
                  <FaChevronDown className="color-change" />
                </CenterElements>
              </CoinsTableTH>
              <CoinsTableTH className="percent-change">
                <CenterElements>
                  7d%
                  <FaChevronDown className="color-change" />
                </CenterElements>
              </CoinsTableTH>
              <CoinsTableTH>24h Volume</CoinsTableTH>
              <CoinsTableTH>Market Cap</CoinsTableTH>
              <CoinsTableTH>Circulating/Total Supply</CoinsTableTH>
              <CoinsTableTH className="sparkline">Last 7d</CoinsTableTH>
            </CoinsTableRow>
          </CoinsTableHead>
          <CoinsTableBody>
            {filteredData.map((coin, index) => {
              return (
                <CoinsTableRow key={coin.id}>
                  <CoinsTableTD className="first-child">
                    <div className="coin-rank">{index + 1}</div>
                  </CoinsTableTD>
                  <CoinsTableTD>
                    <CenterElements>
                      <CoinImage src={coin.image} />
                      <StyledLink to={`coin/${coin.id}`}>
                        {coin.name}
                      </StyledLink>
                    </CenterElements>
                  </CoinsTableTD>
                  <CoinsTableTD>${coin.current_price}</CoinsTableTD>
                  <CoinsTableTD>
                    <CenterElements
                      className="percentage"
                      textColor={
                        coin.price_change_percentage_1h_in_currency > 0
                      }
                    >
                      {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%{" "}
                      {coin.price_change_percentage_1h_in_currency > 0 ? (
                        <FaCaretUp />
                      ) : (
                        <FaCaretDown />
                      )}
                    </CenterElements>
                  </CoinsTableTD>
                  <CoinsTableTD>
                    <CenterElements
                      className="percentage"
                      textColor={
                        coin.price_change_percentage_24h_in_currency > 0
                      }
                    >
                      {coin.price_change_percentage_24h_in_currency?.toFixed(2)}
                      %{" "}
                      {coin.price_change_percentage_24h_in_currency > 0 ? (
                        <FaCaretUp />
                      ) : (
                        <FaCaretDown />
                      )}
                    </CenterElements>
                  </CoinsTableTD>
                  <CoinsTableTD>
                    <CenterElements
                      className="percentage"
                      textColor={
                        coin.price_change_percentage_7d_in_currency > 0
                      }
                    >
                      {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
                      {coin.price_change_percentage_7d_in_currency > 0 ? (
                        <FaCaretUp />
                      ) : (
                        <FaCaretDown />
                      )}
                    </CenterElements>
                  </CoinsTableTD>
                  <CoinsTableTD>
                    ${coin.total_volume.toLocaleString()}
                  </CoinsTableTD>
                  <CoinsTableTD>
                    ${coin.market_cap.toLocaleString()}
                  </CoinsTableTD>
                  <CoinsTableTD className="circulating-container">
                    <ProgressBar coin={coin} />
                    {coin.circulating_supply === coin.total_supply ? (
                      numeral(coin.circulating_supply).format("0.0a")
                    ) : (
                      <div className="num-container">
                        <div>
                          {numeral(coin.circulating_supply).format("0.0a")}
                        </div>
                        <div>{numeral(coin.total_supply).format("0.0a")}</div>
                      </div>
                    )}
                  </CoinsTableTD>
                  <CoinsTableTD>
                    <div className="spark-line">
                      <Sparkline coinData={coin.sparkline_in_7d.price} />
                    </div>
                  </CoinsTableTD>
                </CoinsTableRow>
              );
            })}
          </CoinsTableBody>
        </CoinsTableContainer>
      )}
    </>
  );
};

export default CoinsTable;
