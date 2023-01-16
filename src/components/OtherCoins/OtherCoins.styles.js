import styled from "styled-components";
import { Link } from "react-router-dom";
export const OtherCoinsContainer = styled.div`
  width: 70%;
  height: 338px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.textColor};
  & .learn {
    font-size: 10px;
    color: #a2a2a2;
  }
`;

export const OtherTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const OtherCoinList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #272727;
  padding: 24px 0;
  width: 100%;
  border-radius: 5px;

  & div:not(:last-child) {
    height: 100%;
    border-right: 1px solid #272727;
  }
`;

export const Coin = styled.div`
  width: 100%;
  font-size: 0.8rem;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const Name = styled.h2`
  font-size: 1.3rem;
`;

export const Symbol = styled.h3`
  color: #a2a2a2;
  font-size: 1rem;
  margin-top: -5px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const Price = styled.span`
  font-size: 1.5rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
    color: ${(props) => props.theme.textColor};
`;

export const BackgroundChange = styled.div`
  color: ${(props) => (props.textColor ? "green" : "red")};
  font-size: 0.8rem;
  display: inline;
`;
