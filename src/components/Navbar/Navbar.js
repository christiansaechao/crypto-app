import React, { Component } from 'react'
import { NavbarContainer, LeftNav, StyledLink, RightNav } from './Navbar.styles'; 
import SearchBar from '../SearchBar/SearchBar'; 
import CurrencySelector from '../CurrencySelector/CurrencySelector'; 
import ThemeChanger from '../ThemeChanger/ThemeChanger'; 


export default class Navbar extends Component {
  render(){ 
    const {handleThemeChange} = this.props; 

    return (
      <NavbarContainer>
        <LeftNav>
          <StyledLink to="/">Coins</StyledLink>
          <StyledLink to="portfolio">Portfolio</StyledLink>
        </LeftNav>
        <RightNav>
          <SearchBar />
          <CurrencySelector />
          <ThemeChanger handleThemeChange={handleThemeChange}/>
        </RightNav>
      </NavbarContainer>
    )
  }
}