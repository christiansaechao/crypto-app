import React, { Component } from "react";
import { NavbarContainer} from "./Navbar.styles";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import Links from './Links/Links'; 

export default class Navbar extends Component {
  render() {
    const { handleThemeChange, handleCurrencyChange } = this.props;
    return (
      <NavbarContainer>
        {/* <Icon src={LogoImage} /> */}
        <Links />
        <CurrencySelector handleCurrencyChange={handleCurrencyChange} />
        <ThemeChanger handleThemeChange={handleThemeChange} />
      </NavbarContainer>
    );
  }
}
