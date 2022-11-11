import React from 'react'
import { NavbarContainer, LeftNav, StyledLink, RightNav } from './Navbar.styles'; 
import SearchBar from '../SearchBar/SearchBar'; 
import CurrencySelector from '../CurrencySelector/CurrencySelector'; 
import ThemeChanger from '../ThemeChanger/ThemeChanger'; 
const Navbar = () => {
  return (
    <NavbarContainer>
      <LeftNav>
        <StyledLink to="/">Coins</StyledLink>
        <StyledLink to="portfolio">Portfolio</StyledLink>
      </LeftNav>
      <RightNav>
        <SearchBar />
        <CurrencySelector />
        <ThemeChanger />
      </RightNav>
    </NavbarContainer>
  )
}

export default Navbar;