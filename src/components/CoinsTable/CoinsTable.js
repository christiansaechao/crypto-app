import React from "react";
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
  StyledLink
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
                <CoinsTableTH></CoinsTableTH>
                <CoinsTableTH><CenterElements>Name<FaChevronDown className='color-change'/></CenterElements></CoinsTableTH>
                <CoinsTableTH><CenterElements>Price<FaChevronDown className='color-change'/></CenterElements></CoinsTableTH>
                <CoinsTableTH><CenterElements>1h%<FaChevronDown className='color-change'/></CenterElements></CoinsTableTH>
                <CoinsTableTH><CenterElements>24h%<FaChevronDown className='color-change'/></CenterElements></CoinsTableTH>
                <CoinsTableTH><CenterElements>7d%<FaChevronDown className='color-change'/></CenterElements></CoinsTableTH>
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
                    <CoinsTableTD><div className='coin-rank'>{index + 1}</div></CoinsTableTD>
                    <CoinsTableTD>
                      <CenterElements>
                        <CoinImage src={coin.image} />
                        <StyledLink to={`coin/${coin.id}`}>{coin.name}</StyledLink>
                      </CenterElements>
                    </CoinsTableTD>
                    <CoinsTableTD>
                      ${coin.current_price.toLocaleString(undefined, {minimumFractionDigits: 2, maxiumFractionDigits: 6})}
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
                    <CoinsTableTD className='remove-padding-right'>
                      <ProgressBar coin={coin}/>
                      {coin.circulating_supply === coin.total_supply
                        ? Math.trunc(coin.circulating_supply).toLocaleString()
                        : Math.trunc(coin.circulating_supply).toLocaleString() +
                          "/" +
                          Math.trunc(coin.total_supply).toLocaleString()}
                    </CoinsTableTD>
                    <CoinsTableTD className='remove-padding-right'>
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
