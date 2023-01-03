import { useState } from "react";
import {
  MainWrapper,
  CurrencyInput,
  InputWrapper,
  CoinImage,
  Currency,
  ImageCurrencyWrapper,
  DollarSymbol,
} from "./CurrencyConverter.styles";

const CurrencyConverter = ({ coinData, selectedCurrency }) => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const handleChange = (e) => {
    let { value } = e.target;
    value = parseInt(value);
    if (e.target.name === "inputOne") {
      setInputOne(value);
      setInputTwo(
        value /
          coinData.market_data.current_price[selectedCurrency.toLowerCase()]
      );
    } else {
      setInputTwo(value);
      setInputOne(value * coinData.market_data.current_price[selectedCurrency.toLowerCase()]);
    }
  };

  return (
    <>
      {coinData && (
        <MainWrapper>
          <InputWrapper className={"left"}>
            <ImageCurrencyWrapper>
              <DollarSymbol>$</DollarSymbol>
              <Currency>{selectedCurrency}</Currency>
            </ImageCurrencyWrapper>
            <CurrencyInput
              name={"inputOne"}
              onChange={handleChange}
              value={inputOne}
            />
          </InputWrapper>
          <InputWrapper className={"right"}>
            <ImageCurrencyWrapper>
              <CoinImage src={coinData.image.small} />
              <Currency>{coinData.symbol}</Currency>
            </ImageCurrencyWrapper>
            <CurrencyInput
              name={"inputTwo"}
              onChange={handleChange}
              value={inputTwo}
            />
          </InputWrapper>
        </MainWrapper>
      )}
    </>
  );
};

export default CurrencyConverter;
