import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider } from 'styled-components'; 
import { theme, GlobalStyles} from "App.styled";
import {CoinsPage, CoinPage, PortfolioPage} from 'components'; 

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
          <nav>
            <ul>
              <li>
                <Link to="/">Coins</Link>
              </li>
              <li>
                <Link to="/portfolio">Portoflio</Link>
              </li>
              <li>
                <Link to="/coin">Coin</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<CoinsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/coin" element={<CoinPage />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

function About() {
  return <h1>This is About page</h1>;
}

function Users() {
  return <h1>This is Users page</h1>;
}