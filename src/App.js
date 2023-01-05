import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  DarkTheme,
  LightTheme,
  GlobalStyles,
  MainContainer,
  ContentContainer,
} from "App.styled";
import { CoinsPage, CoinPage, PortfolioPage, Navbar, TransactionsPage } from "Pages";
import SearchBar from "components/SearchBar/SearchBar";

const App = () => {
  const [changeTheme, setChangeTheme] = useState(false);

  const handleThemeChange = () => {
    setChangeTheme(!changeTheme);
  };

  return (
    <ThemeProvider theme={!changeTheme ? DarkTheme : LightTheme}>
      <Router>
        <GlobalStyles />
        <MainContainer>
          <Navbar handleThemeChange={handleThemeChange} />
          <ContentContainer>
            <SearchBar />
            <Routes>
              <Route path="/" element={<CoinsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/transactions" element={<TransactionsPage />} />
              <Route path="/coin/:coinId" element={<CoinPage />} />
            </Routes>
          </ContentContainer>
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
