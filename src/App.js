import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { DarkTheme , LightTheme, GlobalStyles, MainContainer } from "App.styled";
import { CoinsPage, CoinPage, PortfolioPage, Navbar } from 'Pages';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeTheme: false,
      selectedCurrency: 'usd'
    };

    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleThemeChange(){
    this.setState({ changeTheme: !this.state.changeTheme});
  }

  render(){
    const { changeTheme, selectedCurrency } = this.state; 
    const { handleThemeChange, handleCurrencyChange } = this; 

    return (
      <ThemeProvider theme={!changeTheme ? DarkTheme : LightTheme }>
        <Router>
          <GlobalStyles />

          <MainContainer>
            <Navbar handleThemeChange={handleThemeChange} />
            <Routes>
              <Route path="/" element={<CoinsPage selectedCurrency={selectedCurrency} />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/coin/:coinId" element={<CoinPage selectedCurrency={selectedCurrency} />} />
            </Routes>
          </MainContainer>
        </Router>
      </ThemeProvider>
    )
  }
}
