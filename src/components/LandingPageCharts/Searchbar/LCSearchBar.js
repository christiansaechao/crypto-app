import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedCoin } from "store/getChartsData/actions";
import axios from "axios";
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
  const [Value, setValue] = useState("");
  const [Coins, setCoins] = useState([]);

  useEffect(()=> {
    const SearchCoin = async () => {
      try {

          const { data } = await axios(
            `https://crypto-app-server.herokuapp.com/coins/${Value}`
          );
          setCoins(data);
      } catch (err) {
        console.log(err.error);
      }
    };
    SearchCoin(); 
  }, [Value])

  const changeCoin = (coin) => {
    const coinId = coin.id; 
    dispatch(changeSelectedCoin(coinId)); 
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
            value={Value}
            onChange={(e) => setValue(e.target.value)}
          />
        </SearchContainer>
        {Value !== "" && (
          <SearchResults>
            {Coins.map((coin) => (
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
