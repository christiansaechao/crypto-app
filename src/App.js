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
    };

    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleThemeChange(){
    this.setState({ changeTheme: !this.state.changeTheme});
  }

  render(){
    const { changeTheme } = this.state; 
    const { handleThemeChange } = this; 

    return (
      <ThemeProvider theme={!changeTheme ? DarkTheme : LightTheme }>
        <Router>
          <GlobalStyles />
          <Navbar handleThemeChange={handleThemeChange} />
          <Routes>
            <Route path="/" element={<CoinsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/coin" element={<CoinPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    )
  }
}
