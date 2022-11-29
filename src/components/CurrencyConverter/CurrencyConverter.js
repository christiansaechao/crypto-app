import React, { Component } from "react";
import {
  MainWrapper,
  CurrencyInput,
  InputWrapper,
  CoinImage,
  Currency,
  ImageCurrencyWrapper,
  DollarSymbol
} from "./CurrencyConverter.styles";

export class CurrencyConverter extends Component {
  state = {
    input1: "",
    input2: "",
  };

  handleChange = (e) => {
    let { value } = e.target;
    if (e.target.name === "input1") {
      this.setState({
        [e.target.name]: value,
        input2:
          value /
          this.props.coinData.market_data.current_price[
            this.props.selectedCurrency
          ],
      });
    } else {
      this.setState({
        [e.target.name]: value,
        input1:
          value *
          this.props.coinData.market_data.current_price[
            this.props.selectedCurrency
          ],
      });
    }
  };

  render() {
    const { coinData, selectedCurrency } = this.props;
    const { input1, input2 } = this.state;
    const { handleChange } = this;
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
                name={"input1"}
                onChange={handleChange}
                value={input1}
              />
            </InputWrapper>
            <InputWrapper className={"right"}>
              <ImageCurrencyWrapper>
                <CoinImage src={coinData.image.small} />
                <Currency>
                  {coinData.symbol}
                </Currency>
              </ImageCurrencyWrapper>
              <CurrencyInput
                name={"input2"}
                onChange={handleChange}
                value={input2}
              />
            </InputWrapper>
          </MainWrapper>
        )}
      </>
    );
  }
}

export default CurrencyConverter;
