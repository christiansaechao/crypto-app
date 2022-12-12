import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    algin-items: center;
    width: 80%; 
    margin: 0 auto; 
`;

export const InputWrapper = styled.div`
  background: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh; 
  width: 100%;
  padding: 0px 10px;
  color: ${(props) => props.theme.textColor};
  &.left {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-right: 1px solid #424242; 
  }

  &.right {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;

export const CurrencyInput = styled.input`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.main};
  border: none;
  outline: none;
  font-size: 1.5rem;
  width: 80%;
  height: 70%; 
`;

export const ImageCurrencyWrapper = styled.div`
  width: 25%;
  display: flex; 
  justify-content: start; 
  align-items: center; 
`;

export const DollarSymbol = styled.div`
  margin-right: 10px;
  font-size: 2rem; 
  background: green;
  height: 30px; 
  width: 30px;
  padding: 10px; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`; 

export const CoinImage = styled.img`
  margin-right: 10px;
`; 
export const Currency = styled.div`
  text-transform: uppercase; 
  font-size: 1.4rem; 
`; 