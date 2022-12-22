import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  position: relative;
  width: 70%;
`;

export const SearchContainer = styled.form`
  background: ${(props) => props.theme.main};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 60%;
  border: 3px solid ${(props) => props.theme.greyText};
`;
export const SearchIcon = styled.img`
  height: 15px;
  padding: 10px;
`;

export const SearchField = styled.input`
  width: 100%;
  border: none;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.textColor};
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }
`;

export const SearchResults = styled.div`
  width: 30%;
  height: 200px;
  background: transparent;
  z-index: 10;
  position: absolute;
  top: 10;
  overflow: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 5px 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ResultItems = styled.div`
  background: rgb(0, 0, 0, 0.7);
  padding: 5px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.textColor};
  transition: all .2s ease-in-out;
  border-bottom: 2px solid ${(props) => props.theme.main};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;
