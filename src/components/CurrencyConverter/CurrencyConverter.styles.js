import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  algin-items: center;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px; 
  height: 60px;
`;

export const InputWrapper = styled.div`
  background: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 10px;
  color: ${(props) => props.theme.textColor};
  &.left {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.right {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
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
  padding: 0px 10px;
`;

export const ImageCurrencyWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const DollarSymbol = styled.div`
  margin-right: 10px;
  font-size: 1rem;
  background: green;
  height: 10px;
  width: 10px;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinImage = styled.img`
  margin-right: 10px;
  width: 30px;
`;
export const Currency = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
`;
