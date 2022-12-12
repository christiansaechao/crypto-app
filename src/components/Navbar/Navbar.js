import React, { Component } from 'react'
import { NavbarContainer, StyledLink, Logo } from './Navbar.styles'; 
import CurrencySelector from '../CurrencySelector/CurrencySelector'; 
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import LogoImage from '../../images/LogoImage.png';


export default class Navbar extends Component {
  render(){ 
    const {handleThemeChange, handleCurrencyChange} = this.props; 

    return (
      <NavbarContainer>
          <Logo src={LogoImage} />
          <StyledLink to="/">C</StyledLink>
          <StyledLink to="portfolio">P</StyledLink>
          <CurrencySelector handleCurrencyChange={handleCurrencyChange}/>
          <ThemeChanger handleThemeChange={handleThemeChange}/>
      </NavbarContainer>
    )
  }
}