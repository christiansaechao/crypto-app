import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components'; 
import { theme, GlobalStyles} from "App.styled";
import {CoinsPage, CoinPage, PortfolioPage, Navbar} from 'Pages'; 

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<CoinsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/coin" element={<CoinPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
