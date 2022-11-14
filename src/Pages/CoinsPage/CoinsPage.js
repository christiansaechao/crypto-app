import React, { Component } from 'react';
import axios from 'axios'; 
import {CoinsContainer} from './CoinsPage.styles'; 
import CoinsTable from '../../components/CoinsTable/CoinsTable'; 

export default class CoinsPage extends Component { 
  state = {
    coinsData: null,
    coinsPerPage: 5,
  }

  getCoinsData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${this.state.coinsPerPage}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({
        coinsData: data
      });
    } catch (err) {
      console.log(err.error); 
    }
  };

  componentDidUpdate(){
  }

  componentDidMount(){
    this.getCoinsData(); 
  }

  render() {
    const {coinsData} = this.state; 

    return (
      <CoinsContainer>
        <CoinsTable coinsData={coinsData} />
      </CoinsContainer>
    )
  }
}
