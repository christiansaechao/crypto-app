import React, { Component } from "react";
import axios from "axios";
import CoinPageDetails from "components/CoinPageDetails/CoinPageDetails";
import { useParams } from "react-router-dom";
import CurrencyConverter from "components/CurrencyConverter/CurrencyConverter";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class CoinPage extends Component {
  state = {
    coinData: null,
  };

  getCoinData = async (coinId) => {
    try {
      console.log(coinId)
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      this.setState({ coinData: data });
    } catch (err) {
      console.log(err.error);
    }
  };

  componentDidUpdate(prevProps) {
  }

  componentDidMount() {
    let {coinId} = this.props.params;
    this.getCoinData(coinId);
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

export default withParams(CoinPage); 