import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  SearchIcon,
  SearchField,
  SearchContainer,
  SearchResults,
  MainContainer,
  ResultItems,
  StyledLink,
} from "./SearchBar.styles";
import icon from "../../images/Search.png";

const SearchBar = ({searchType}) => {
  const [Value, setValue] = useState("");
  const [Coins, setCoins] = useState([]);

  useEffect(()=> {
    const SearchCoin = async () => {
      try {
        if(searchType === 'main'){
          const { data } = await axios(
            `https://crypto-app-server.herokuapp.com/coins/${Value}`
          );
          setCoins(data);
        } else {
          console.log('this is something else'); 
        }
      } catch (err) {
        console.log(err.error);
      }
    };
    SearchCoin(); 
  }, [Value])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <MainContainer>
        <SearchContainer onSubmit={(e) => handleSubmit(e)}>
          <SearchIcon src={icon} />
          <SearchField
            type="text"
            placeholder="Search..."
            value={Value}
            onChange={(e) => setValue(e.target.value)}
          />
        </SearchContainer>
        {Value !== "" && (
          <SearchResults>
            {Coins.map((coin) => (
              <ResultItems key={coin.id}>
                <StyledLink to={`coin/${coin.id}`}>{coin?.id}</StyledLink>
              </ResultItems>
            ))}
          </SearchResults>
        )}
      </MainContainer>
    </>
  );
};

export default SearchBar;
