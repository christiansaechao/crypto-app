import React from 'react';
import { SearchIcon, SearchField, SearchContainer } from './SearchBar.styles'; 
import icon from '../../images/Search.png'

const SearchBar = () => {
  return (
    <SearchContainer>
        <SearchIcon src={icon}/>
        <SearchField type='text' placeholder='Search...'/>
    </SearchContainer>
  )
}

export default SearchBar; 