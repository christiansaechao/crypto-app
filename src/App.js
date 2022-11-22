import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { DarkTheme , LightTheme, GlobalStyles } from "App.styled";
import { CoinsPage, CoinPage, PortfolioPage, Navbar } from 'Pages';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeTheme: false,
      selectedCurrency: 'usd'
    };

    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  handleThemeChange(){
    this.setState({ changeTheme: !this.state.changeTheme});
  }

  handleCurrencyChange(currency){
    currency = currency.toLowerCase(); 
    this.setState({selectedCurrency: currency})
  }

  render(){
    const { changeTheme, selectedCurrency } = this.state; 
    const { handleThemeChange, handleCurrencyChange } = this; 

    return (
      <ThemeProvider theme={!changeTheme ? DarkTheme : LightTheme }>
        <Router>
          <GlobalStyles />
          <Navbar handleThemeChange={handleThemeChange} handleCurrencyChange={handleCurrencyChange} />
          <Routes>
            <Route path="/" element={<CoinsPage selectedCurrency={selectedCurrency} />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/coin" element={<CoinPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    )
  }
}
