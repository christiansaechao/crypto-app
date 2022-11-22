import React, { Component } from 'react';
import axios from 'axios'; 
import { CoinsContainer } from './CoinsPage.styles'; 
import CoinsTable from '../../components/CoinsTable/CoinsTable'; 
import LandingPageCharts from '../../components/LandingPageCharts/LandingPageCharts'; 

const URL = 'https://api.coingecko.com/api/v3/coins/'; 
export default class CoinsPage extends Component { 
  state = {
    coinsData: null,
    coinsPerPage: 5,
    chartsData: null,
    numDays: 30,
  }

  getCoinsData = async () => {
    try {
      const { data } = await axios(
        `${URL}markets?vs_currency=${this.props.selectedCurrency}&order=market_cap_desc&per_page=${this.state.coinsPerPage}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({
        coinsData: data
      });
    } catch (err) {
      console.log(err.error); 
    }
  };

  getChartsData = async () => {
    try {
      const { data } = await axios(
        `${URL}bitcoin/market_chart?vs_currency=usd&days=${this.state.numDays}&interval=daily`
      );
      this.setState({
        chartsData: data
      });
    } catch (err) {
      console.log(err.error); 
    }
  };

  componentDidUpdate(prevProps){
    if(this.props.selectedCurrency !== prevProps.selectedCurrency){
      this.getCoinsData(); 
    }
  }

  componentDidMount(){
    this.getCoinsData(); 
    this.getChartsData();
  }

  render() {
    const { coinsData, chartsData } = this.state;
    return (
      <CoinsContainer>
        <LandingPageCharts chartsData={chartsData} />
        <CoinsTable coinsData={coinsData} />
      </CoinsContainer>
    )
  }
}
