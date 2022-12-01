import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { CoinsContainer, Wrapper } from "./CoinsPage.styles";
import CoinsTable from "../../components/CoinsTable/CoinsTable";
import LandingPageCharts from "../../components/LandingPageCharts/LandingPageCharts";
import FearIndex from "../../components/FearIndex/FearIndex";
import SearchBar from "../../components/SearchBar/SearchBar";

const URL = "https://api.coingecko.com/api/v3/coins/";
export default class CoinsPage extends Component {
  state = {
    coinsData: [],
    coinsPerPage: 20,
    pageNum: 1,
    chartsData: null,
    numDays: 30,
    hasMoreItems: true,
    FearIndexData: null,
  };

  getCoinsData = async () => {
    try {
      const { data } = await axios(
        `${URL}markets?vs_currency=${this.props.selectedCurrency}&order=market_cap_desc&per_page=${this.state.coinsPerPage}&page=${this.state.pageNum}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({ coinsData: [...this.state.coinsData, ...data] });
    } catch (err) {
      console.log(err.error);
    }
  };

  getChartsData = async () => {
    try {
      const { data } = await axios(
        `${URL}bitcoin/market_chart?vs_currency=${this.props.selectedCurrency}&days=${this.state.numDays}&interval=daily`
      );
      this.setState({
        chartsData: data,
      });
    } catch (err) {
      console.log(err.error);
    }
  };

  getFearIndexData = async () => {
    try {
      const { data } = await axios(`https://api.alternative.me/fng/`);
      this.setState({ FearIndexData: data });
    } catch (err) {
      console.log(err.error);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedCurrency !== prevProps.selectedCurrency) {
      this.getCoinsData();
      this.getChartsData();
    }

    if (this.state.pageNum !== prevState.pageNum) {
      this.getCoinsData();
    }
  }

  componentDidMount() {
    this.getChartsData();
    this.getCoinsData();
    this.getFearIndexData();
  }

  render() {
    const { coinsData, chartsData, hasMoreItems, pageNum, FearIndexData } =
      this.state;
    return (
      <>
        {coinsData && (
          <>
            <CoinsContainer>
              <SearchBar />
              <Wrapper>
                <LandingPageCharts chartsData={chartsData} />
                <FearIndex FearIndexData={FearIndexData} />
              </Wrapper>
              <InfiniteScroll
                dataLength={coinsData.length}
                next={() => this.setState({ pageNum: pageNum + 1 })}
                hasMore={hasMoreItems}
                loader={<h4>Loading...</h4>}
              >
                <CoinsTable coinsData={coinsData} />
              </InfiniteScroll>
            </CoinsContainer>
          </>
        )}
      </>
    );
  }
}
