import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoinList } from "store/getCoinsData/actions";
import {
  DetailsContainer,
  LeftContainer,
  CoinImage,
  CoinName,
  ContractAddress,
  ContractAddressContainer,
  MainContainer,
  CoinRank,
  CoinPrice,
  SmallDetail,
  BackgroundChange,
  DetailName,
  MiddleDetailsContainer,
  Symbol,
  Wrapper,
  Tag,
  Tags,
  TagsInnerContainer,
  RightContainer,
  OtherCoins,
} from "./CoinPageDetails.styles";
import { FaCopy, FaCaretDown, FaCaretUp } from "react-icons/fa";

const CoinPageDetails = ({ coinData }) => {
  const dispatch = useDispatch();
  const [randCoins, setRandCoins] = useState([]);
  const coinList = useSelector((state) => state.coinsData.coinList);
  const selectedCurrency = useSelector((state) =>
    state.currency.selectedCurrency.toLowerCase()
  );

  useEffect(() => {
    dispatch(getCoinList());
    setRandCoins(coinList); 
  }, [dispatch]);

  useEffect(() => {
      console.log(randCoins); 
  }, [randCoins])
  
  const caretOrientation = (percentage) =>
    percentage > 0 ? <FaCaretUp /> : <FaCaretDown />;
  const colorChange = (data) => {
    return data[selectedCurrency] > 0;
  };
  const {
    name,
    symbol,
    categories,
    image,
    contract_address,
    market_data: {
      atl,
      atl_change_percentage,
      ath,
      ath_change_percentage,
      market_cap,
      market_cap_change_percentage_24h_in_currency,
      market_cap_rank,
      total_volume,
      circulating_supply,
      max_supply,
      price_change_percentage_24h_in_currency,
      current_price,
    },
  } = coinData;

  return (
    <>
      <MainContainer>
        <DetailsContainer>
          <SmallDetail>
            <DetailName>All Time Low</DetailName>
            <div className="inner-detail-container">
              ${atl[selectedCurrency]}
              <BackgroundChange textColor={colorChange(atl_change_percentage)}>
                {atl_change_percentage[selectedCurrency].toFixed(2)}%
                {caretOrientation(atl_change_percentage[selectedCurrency])}
              </BackgroundChange>
            </div>
          </SmallDetail>
          <SmallDetail>
            <DetailName>All Time High</DetailName>
            <div className="inner-detail-container">
              ${ath[selectedCurrency]}
              <BackgroundChange textColor={colorChange(ath_change_percentage)}>
                {ath_change_percentage[selectedCurrency].toFixed(2)}%
                {caretOrientation(ath_change_percentage[selectedCurrency])}
              </BackgroundChange>
            </div>
          </SmallDetail>
          <SmallDetail>
            <DetailName>Marketcap</DetailName>
            <div className="inner-detail-container">
              <div>${market_cap[selectedCurrency].toLocaleString()}</div>
              <BackgroundChange
                textColor={colorChange(
                  market_cap_change_percentage_24h_in_currency
                )}
              >
                {market_cap_change_percentage_24h_in_currency[
                  selectedCurrency
                ].toFixed(2)}
                %
                {caretOrientation(
                  market_cap_change_percentage_24h_in_currency[selectedCurrency]
                )}
              </BackgroundChange>
            </div>
          </SmallDetail>
          <SmallDetail>
            <DetailName>24h Volume</DetailName>
            <div className="inner-detail-container">
              ${total_volume[selectedCurrency].toLocaleString()}
            </div>
          </SmallDetail>
          <SmallDetail>
            <DetailName>Circulating Supply</DetailName>
            <div className="circulating">
              {circulating_supply.toLocaleString()}
            </div>
            <div className="max">
              Max Supply:{" "}
              {max_supply !== null ? max_supply.toLocaleString() : "--"}
            </div>
          </SmallDetail>
        </DetailsContainer>
        <MiddleDetailsContainer>
          <LeftContainer>
            <Wrapper>
              <CoinImage src={image.large} />
              <div>
                <CoinName>
                  {name} <CoinRank>Rank #{market_cap_rank}</CoinRank>
                </CoinName>
                <Symbol>({symbol.toUpperCase()})</Symbol>
              </div>
            </Wrapper>
            <CoinPrice>
              <span>
                $
                {current_price[selectedCurrency] > 1
                  ? current_price[selectedCurrency].toLocaleString(undefined, {
                      minimumFractionDigit: 2,
                    })
                  : current_price[selectedCurrency]}
              </span>
              <BackgroundChange
                textColor={
                  price_change_percentage_24h_in_currency[selectedCurrency] > 0
                }
              >
                {price_change_percentage_24h_in_currency[
                  selectedCurrency
                ].toFixed(2)}
                % <FaCaretDown />
              </BackgroundChange>
            </CoinPrice>
            <Tags>
              Tags
              <TagsInnerContainer>
                {categories.slice(0, 6).map((category) => {
                  return <Tag key={category}>{category}</Tag>;
                })}
              </TagsInnerContainer>
            </Tags>
          </LeftContainer>
          <RightContainer>
            Other Coins
            <OtherCoins>
            </OtherCoins>
          </RightContainer>
        </MiddleDetailsContainer>
        <ContractAddressContainer>
          Contract Address:
          {contract_address !== undefined ? (
            <ContractAddress
              onClick={() => {
                navigator.clipboard.writeText(contract_address);
              }}
            >
              <FaCopy /> {contract_address}
            </ContractAddress>
          ) : (
            <div></div>
          )}
        </ContractAddressContainer>
      </MainContainer>
    </>
  );
};

export default CoinPageDetails;
