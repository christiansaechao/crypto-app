import React from "react";
import {
  OtherCoinsContainer,
  OtherTitle,
  OtherCoinList,
  Coin,
  StyledLink,
  Image,
  Name,
  Symbol,
  Price,
} from "./OtherCoins.styles";

const OtherCoins = ({coinList}) => {
    console.log(coinList); 
  const decimalCheck = (number) =>
    number < 1 ? number : number.toLocaleString();
  return (
    <OtherCoinsContainer>
      <OtherTitle>
        Other Coins
        <span className="learn">Learn about projects and status</span>
      </OtherTitle>
      <OtherCoinList>
        {coinList.length > 0 &&
          coinList?.map((coin) => {
            return (
              <Coin key={coin.id}>
                <StyledLink to={`/coin/${coin.id}`}>
                  <Image src={coin.image} />
                  <Name>{coin.name}</Name>
                  <Symbol>{coin.symbol}</Symbol>
                  <Price>${decimalCheck(coin.current_price)}</Price>
                  {coin.price_change_percentage_24h_in_currency}
                </StyledLink>
              </Coin>
            );
          })}
      </OtherCoinList>
    </OtherCoinsContainer>
  );
};

export default OtherCoins;
