import React, { useState } from "react";
import { FaCaretUp, FaCaretDown, FaChevronDown, FaRedo } from "react-icons/fa";
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
  const [filter, setFilter] = useState("");
  const [ascending, setAscending] = useState(true);
  let filterData = [...coinsData];

  const changeFilter = (filterType) => {
    setFilter(filterType);
    if (filter === filterType) {
      setAscending(!ascending);
    } else {
      setAscending(true);
    }
  };

  if (filter && ascending === true) {
    filterData.sort((a, b) => b[filter] - a[filter]);
  } else {
    filterData.sort((a, b) => a[filter] - b[filter]);
  }

  const decimalCheck = (number) =>
  number < 1 ? number : number.toLocaleString();

  return (
    <>
      {coinsData && (
        <CoinsTableContainer>
          <CoinsTableHead>
            <CoinsTableRow>
              <CoinsTableTH className='center' onClick={() =>
                  changeFilter("")
                }><FaRedo /></CoinsTableTH>
              <CoinsTableTH className="name">
                <CenterElements>Name</CenterElements>
              </CoinsTableTH>
              <CoinsTableTH onClick={() => changeFilter("current_price")}>
                <CenterElements>
                  Price
                  <FaChevronDown className="color-change" />
                </CenterElements>
              </CoinsTableTH>
              <CoinsTableTH
                className="percent-change"
                onClick={() =>
                  changeFilter("price_change_percentage_1h_in_currency")
                }
              >
                <CenterElements>
                  1h%
                  <FaChevronDown className="color-change" />
                </CenterElements>
              </CoinsTableTH>
              <CoinsTableTH
                className="percent-change"
                onClick={() =>
                  changeFilter("price_change_percentage_24h_in_currency")
                }
              >
                <CenterElements>
                  24h%
                  <FaChevronDown className="color-change" />
                </CenterElements>
              </CoinsTableTH>
              <CoinsTableTH
                className="percent-change"
                onClick={() =>
                  changeFilter("price_change_percentage_7d_in_currency")
                }
              >
                <CenterElements>
                  7d%
                  <FaChevronDown className="color-change" />
                </CenterElements>
              </CoinsTableTH>
              <CoinsTableTH onClick={() => changeFilter("total_volume")}>
                24h Volume
              </CoinsTableTH>
              <CoinsTableTH onClick={() => changeFilter("market_cap")}>
                Market Cap
              </CoinsTableTH>
              <CoinsTableTH>Circulating/Total Supply</CoinsTableTH>
              <CoinsTableTH className="sparkline">Last 7d</CoinsTableTH>
            </CoinsTableRow>
          </CoinsTableHead>
          <CoinsTableBody>
            {filterData.map((coin, index) => {
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
                  <CoinsTableTD>${decimalCheck(coin.current_price)}</CoinsTableTD>
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
                    {coin.circulating_supply === coin.total_supply ||
                    coin.total_supply === null ? (
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
