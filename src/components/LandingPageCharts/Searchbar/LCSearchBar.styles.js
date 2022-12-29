import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchContainer = styled.form`
  background: ${(props) => props.theme.main};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.greyText};
  padding: 5px;
`;

export const SearchField = styled.input`
  padding: 5px;
  width: 100%;
  height: 5px;
  border: none;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.textColor};
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const SearchResults = styled.div`
  width: 100%;
  height: 100px;
  background: transparent;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 10;
  overflow: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background: #161616;
  padding: 5px 10px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.24);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ResultItems = styled.div`
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.textColor};
  transition: all 0.2s ease-in-out;
`;

export const CoinContainer = styled.div`
  cursor: pointer; 
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;
