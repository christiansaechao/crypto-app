import React, { Component } from "react";
import axios from "axios";
import CoinPageDetails from "components/CoinPageDetails/CoinPageDetails";
import CurrencyConverter from "components/CurrencyConverter/CurrencyConverter";

export default class CoinPage extends Component {
  state = {
    coinData: null,
  };

  getCoinData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/shiba-inu?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      this.setState({ coinData: data });
    } catch (err) {
      console.log(err.error);
    }
  };

  componentDidMount() {
    this.getCoinData();
  }

  render() {
    const { coinData } = this.state;
    const { selectedCurrency } = this.props;
    return (
      <>
        {coinData && (
          <CoinPageDetails
            coinData={coinData}
            selectedCurrency={selectedCurrency}
          />
        )}
        <CurrencyConverter
          coinData={coinData}
          selectedCurrency={selectedCurrency}
        />
      </>
    );
  }
}
