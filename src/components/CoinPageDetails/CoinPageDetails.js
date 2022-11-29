import React, { Component } from "react";
import {
  DetailsContainer,
  LeftContainer,
  RightContainer,
  CoinImage,
  CoinName,
  ContractAddress,
  DescriptionContainer,
  MainContainer,
  RightTopContainer,
  RightBotContainer,
  CoinRank,
  BlockchainType,
  CoinPrice,
  MarketPercentage,
  SmallDetail,
  BackgroundChange
} from "./CoinPageDetails.styles";
import { FaCopy } from "react-icons/fa";

export class CoinPageDetails extends Component {
  render() {
    const {
      coinData: {
        name,
        symbol,
        image,
        contract_address,
        asset_platform_id,
        description,
        market_cap_rank,
        market_data,
      },
      selectedCurrency,
    } = this.props;
    return (
      <>
        <MainContainer>
          <DetailsContainer>
            <LeftContainer>
              <CoinImage src={image.large} />
              <CoinRank>Rank #{market_cap_rank}</CoinRank>
              <CoinName>
                {name} ({symbol})
              </CoinName>
              <BlockchainType>
                Blockchain: {asset_platform_id ? asset_platform_id : name}
              </BlockchainType>
              {contract_address !== undefined ? (
                <ContractAddress onClick={() => {navigator.clipboard.writeText(contract_address);}}>
                  <FaCopy /> {contract_address}
                </ContractAddress>
              ) : (
                <div></div>
              )}
            </LeftContainer>

            <RightContainer>
              <RightTopContainer>
                <CoinPrice>
                  <span>
                    ${market_data.current_price[selectedCurrency]}
                  </span>
                  <BackgroundChange bgColor={market_data.price_change_percentage_24h_in_currency[selectedCurrency] > 0}>
                    {market_data.price_change_percentage_24h_in_currency[
                      selectedCurrency
                    ].toFixed(2)}
                    %
                  </BackgroundChange>
                </CoinPrice>
                <MarketPercentage>
                  <div>
                    <div>ATL: ${market_data.atl[selectedCurrency]}</div>
                    <BackgroundChange bgColor={market_data.atl_change_percentage[selectedCurrency] > 0}>
                      {market_data.atl_change_percentage[
                        selectedCurrency
                      ].toFixed(2)}
                      %
                    </BackgroundChange>
                  </div>
                  <div>
                    <div>ATH: ${market_data.ath[selectedCurrency]}</div>
                    <BackgroundChange bgColor={market_data.ath_change_percentage[selectedCurrency] > 0}>
                      {market_data.ath_change_percentage[
                        selectedCurrency
                      ].toFixed(2)}
                      %
                    </BackgroundChange>
                  </div>
                </MarketPercentage>
              </RightTopContainer>
              <RightBotContainer>
                <SmallDetail>
                  <div>Marketcap</div>
                  <div>${market_data.market_cap[selectedCurrency].toLocaleString()}</div>
                  <BackgroundChange bgColor={market_data.market_cap_change_percentage_24h_in_currency[selectedCurrency] > 0}>{market_data.market_cap_change_percentage_24h_in_currency[selectedCurrency].toLocaleString(undefined, {minimumFractionDigit: 2,maximumFractionDigit: 2,})}%</BackgroundChange>
                </SmallDetail>
                <SmallDetail>
                  <div>24h Volume</div>
                  <div>${market_data.total_volume[selectedCurrency].toLocaleString()}</div> 
                  <br></br>
                </SmallDetail>
                <SmallDetail className='no-border'>
                  <div>Circulating Supply</div>
                  <div>{market_data.circulating_supply.toLocaleString()}</div> 
                  <div>Max Supply: {market_data.max_supply !== null ? market_data.max_supply.toLocalString() : '--'}</div>
                </SmallDetail>
              </RightBotContainer>
            </RightContainer>
          </DetailsContainer>
          <DescriptionContainer dangerouslySetInnerHTML={{ __html: description.en }} />
        </MainContainer>
      </>
    );
  }
}

export default CoinPageDetails;
