import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import {
  CoinsTableContainer,
  CoinsTableHead,
  CoinsTableRow,
  CoinsTableTH,
  CoinsTableBody,
  CoinsTableTD,
  CoinImage,
  CenterElements,
} from "./CoinsTable.styles";
import Sparkline from "./Sparkline/Sparkline";
import ProgressBar from '../ProgressBar/ProgressBar'; 

class CoinsTable extends React.Component {
  render() {
    const { coinsData } = this.props;
    return (
      <>
        {coinsData && (
          <CoinsTableContainer>
            <CoinsTableHead>
              <CoinsTableRow>
                <CoinsTableTH>#</CoinsTableTH>
                <CoinsTableTH>Name</CoinsTableTH>
                <CoinsTableTH>Price</CoinsTableTH>
                <CoinsTableTH>1h%</CoinsTableTH>
                <CoinsTableTH>24h%</CoinsTableTH>
                <CoinsTableTH>7d%</CoinsTableTH>
                <CoinsTableTH>24h Volume</CoinsTableTH>
                <CoinsTableTH>Market Cap</CoinsTableTH>
                <CoinsTableTH>Circulating/Total Supply</CoinsTableTH>
                <CoinsTableTH>Last 7d</CoinsTableTH>
              </CoinsTableRow>
            </CoinsTableHead>
            <CoinsTableBody>
              {coinsData.map((coin, index) => {
                return (
                  <CoinsTableRow key={coin.id}>
                    <CoinsTableTD>{index + 1}</CoinsTableTD>
                    <CoinsTableTD className="img-name">
                      <CenterElements>
                        <CoinImage src={coin.image} />
                        {coin.name}
                      </CenterElements>
                    </CoinsTableTD>
                    <CoinsTableTD>
                      ${coin.current_price.toLocaleString()}
                    </CoinsTableTD>
                    <CoinsTableTD>
                      <CenterElements
                        className="percentage"
                        textColor={
                          coin.price_change_percentage_1h_in_currency > 0
                        }
                      >
                        {coin.price_change_percentage_1h_in_currency.toFixed(2)}%{" "}
                        {coin.price_change_percentage_1h_in_currency > 0 ? (<FaCaretUp />) : (<FaCaretDown />)}
                      </CenterElements>
                    </CoinsTableTD>
                    <CoinsTableTD>
                      <CenterElements
                        className="percentage"
                        textColor={
                          coin.price_change_percentage_24h_in_currency > 0
                        }
                      >
                        {coin.price_change_percentage_24h_in_currency.toFixed(2)}%{" "}
                        {coin.price_change_percentage_24h_in_currency > 0 ? (<FaCaretUp />) : (<FaCaretDown />)}
                      </CenterElements>
                    </CoinsTableTD>
                    <CoinsTableTD>
                      <CenterElements
                        className="percentage"
                        textColor={
                          coin.price_change_percentage_7d_in_currency > 0
                        }
                      >
                        {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                        {coin.price_change_percentage_7d_in_currency > 0 ? (<FaCaretUp />) : (<FaCaretDown />)}
                      </CenterElements>
                    </CoinsTableTD>
                    <CoinsTableTD>
                      ${coin.total_volume.toLocaleString()}
                    </CoinsTableTD>
                    <CoinsTableTD>
                      ${coin.market_cap.toLocaleString()}
                    </CoinsTableTD>
                    <CoinsTableTD>
                      <ProgressBar coin={coin}/>
                      {coin.circulating_supply === coin.total_supply
                        ? Math.trunc(coin.circulating_supply).toLocaleString()
                        : Math.trunc(coin.circulating_supply).toLocaleString() +
                          "/" +
                          Math.trunc(coin.total_supply).toLocaleString()}
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
  }
}

export default CoinsTable;
