import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchbarData } from "store/getSearchbarData/actions";
import {
  SearchIcon,
  SearchField,
  SearchContainer,
  SearchResults,
  MainContainer,
  ResultItems,
  StyledLink,
  Wrapper,
  ButtonContainer
} from "./SearchBar.styles";
import LoginButton from "components/LoginButton/LoginButton";
import NotificationIcon from "components/NotificationIcon/NotificationIcon";
import icon from "../../images/Search.png";

const SearchBar = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.searchBarData.coins);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(getSearchbarData(value));
  }, [value]);

  const resetSearchbar = () => {
    setValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Wrapper>
        <MainContainer>
          <SearchContainer onSubmit={(e) => handleSubmit(e)}>
            <SearchIcon src={icon} />
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
                  <StyledLink
                    onClick={() => resetSearchbar()}
                    to={`coin/${coin.id}`}
                  >
                    {coin?.id}
                  </StyledLink>
                </ResultItems>
              ))}
            </SearchResults>
          )}
        </MainContainer>
        <ButtonContainer>
          <LoginButton />
          <NotificationIcon />
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default SearchBar;
