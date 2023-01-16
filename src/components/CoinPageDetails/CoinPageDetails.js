import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DetailsContainer,
  LeftContainer,
  CoinImage,
  CoinName,
  ContractAddress,
  MainContainer,
  CoinRank,
  BlockchainType,
  CoinPrice,
  SmallDetail,
  BackgroundChange,
  DetailName,
  MiddleDetailsContainer,
  Wrapper,
  
} from "./CoinPageDetails.styles";
import { FaCopy } from "react-icons/fa";
import OtherCoins from "OtherCoins/OtherCoins";

const CoinPageDetails = ({ coinData }) => {
  const selectedCurrency = useSelector((state) =>
    state.currency.selectedCurrency.toLowerCase()
  );
  const coinList = useSelector((state) =>
    state.coinsData.coinList); 

  return (
    <>
      <MainContainer>
        <DetailsContainer>
          <SmallDetail>
            <DetailName>All Time Low</DetailName>
            <div className="inner-detail-container">
              ${coinData.market_data.atl[selectedCurrency]}
              <BackgroundChange
                textColor={
                  coinData.market_data.atl_change_percentage[selectedCurrency] >
                  0
                }
              >
                {coinData.market_data.atl_change_percentage[
                  selectedCurrency
                ].toFixed(2)}
                %
              </BackgroundChange>
            </div>
          </SmallDetail>
          <SmallDetail>
            <DetailName>All Time High</DetailName>
            <div className="inner-detail-container">
              ${coinData.market_data.ath[selectedCurrency]}
              <BackgroundChange
                textColor={
                  coinData.market_data.ath_change_percentage[selectedCurrency] >
                  0
                }
              >
                {coinData.market_data.ath_change_percentage[
                  selectedCurrency
                ].toFixed(2)}
                %
              </BackgroundChange>
            </div>
          </SmallDetail>
          <SmallDetail>
            <DetailName>Marketcap</DetailName>
            <div className="inner-detail-container">
              <div>
                $
                {coinData.market_data.market_cap[
                  selectedCurrency
                ].toLocaleString()}
              </div>
              <BackgroundChange
                textColor={
                  coinData.market_data
                    .market_cap_change_percentage_24h_in_currency[
                    selectedCurrency
                  ] > 0
                }
              >
                {coinData.market_data.market_cap_change_percentage_24h_in_currency[
                  selectedCurrency
                ].toLocaleString(undefined, {
                  minimumFractionDigit: 2,
                  maximumFractionDigit: 2,
                })}
                %
              </BackgroundChange>
            </div>
          </SmallDetail>
          <SmallDetail>
            <DetailName>24h Volume</DetailName>
            <div className="inner-detail-container">
              $
              {coinData.market_data.total_volume[
                selectedCurrency
              ].toLocaleString()}
            </div>
          </SmallDetail>
          <SmallDetail>
            <DetailName>Circulating Supply</DetailName>
            <div className="circulating">
              {coinData.market_data.circulating_supply.toLocaleString()}
            </div>
            <div className="max">
              Max Supply:{" "}
              {coinData.market_data.max_supply !== null
                ? coinData.market_data.max_supply.toLocaleString()
                : "--"}
            </div>
          </SmallDetail>
        </DetailsContainer>
        <MiddleDetailsContainer>
          <LeftContainer>
            <Wrapper>
              <CoinImage src={coinData.image.large} />
              <CoinName>
                {coinData.name} ({coinData.symbol})
                <CoinRank>Rank #{coinData.market_cap_rank}</CoinRank>
              </CoinName>
            </Wrapper>
            <CoinPrice>
              <span>
                ${coinData.market_data.current_price[selectedCurrency]}
              </span>
              <BackgroundChange
                textColor={
                  coinData.market_data.price_change_percentage_24h_in_currency[
                    selectedCurrency
                  ] > 0
                }
              >
                {coinData.market_data.price_change_percentage_24h_in_currency[
                  selectedCurrency
                ].toFixed(2)}
                %
              </BackgroundChange>
            </CoinPrice>
            <BlockchainType>
              Blockchain:{" "}
              {coinData.asset_platform_id
                ? coinData.asset_platform_id
                : coinData.name}
            </BlockchainType>
            {coinData.contract_address !== undefined ? (
              <ContractAddress
                onClick={() => {
                  navigator.clipboard.writeText(coinData.contract_address);
                }}
              >
                <FaCopy /> {coinData.contract_address}
              </ContractAddress>
            ) : (
              <div></div>
            )}
          </LeftContainer>
        {coinList !== null && <OtherCoins coinList={coinList} />}
        </MiddleDetailsContainer>
      </MainContainer>
    </>
  );
};

export default CoinPageDetails;