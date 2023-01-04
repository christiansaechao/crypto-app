import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchbarData } from "store/getSearchbarData/actions";
import { changeSelectedCoin } from "store/getChartsData/actions";
import {
  SearchField,
  SearchContainer,
  SearchResults,
  MainContainer,
  ResultItems,
  CoinContainer
} from "./LCSearchBar.styles";

const SearchBar = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.searchBarData.coins); 
  const [value, setValue] = useState("");

  useEffect(()=> {
    dispatch(getSearchbarData(value)); 
  }, [value])

  const changeCoin = (coin) => {
    const coinId = coin.id; 
    dispatch(changeSelectedCoin(coinId));
    resetSearchbar(); 
  }

  const resetSearchbar = () => {
    setValue(''); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <MainContainer>
        <SearchContainer onSubmit={(e) => handleSubmit(e)}>
          <SearchField
            type="text"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </SearchContainer>
        {coins !== null && value && (
          <SearchResults>
            {coins.map((coin) => (
              <ResultItems key={coin.id}>
                <CoinContainer onClick={() => changeCoin(coin)}>{coin?.id}</CoinContainer>
              </ResultItems>
            ))}
          </SearchResults>
        )}
      </MainContainer>
    </>
  );
};

export default SearchBar;
