import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, GlobalStyles, MainContainer, ContentContainer } from "App.styled";
import { CoinsPage, CoinPage, PortfolioPage, Navbar, TransactionsPage } from "Pages";
import SearchBar from "components/SearchBar/SearchBar";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeTheme: false,
      selectedCurrency: "usd",
    };

    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleThemeChange() {
    this.setState({ changeTheme: !this.state.changeTheme });
  }

  render() {
    const { changeTheme, selectedCurrency } = this.state;
    const { handleThemeChange } = this;

    return (
      <ThemeProvider theme={!changeTheme ? DarkTheme : LightTheme}>
        <Router>
          <GlobalStyles />
          <MainContainer>
            <Navbar handleThemeChange={handleThemeChange} />
            <ContentContainer>
              <SearchBar />
              <Routes>
                <Route
                  path="/"
                  element={<CoinsPage selectedCurrency={selectedCurrency} />}
                />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/transactions" element={<TransactionsPage />} />
                <Route
                  path="/coin/:coinId"
                  element={<CoinPage selectedCurrency={selectedCurrency} />}
                />
              </Routes>
            </ContentContainer>
          </MainContainer>
        </Router>
      </ThemeProvider>
    );
  }
}
