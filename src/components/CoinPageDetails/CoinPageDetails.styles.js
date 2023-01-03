import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 15px;
`; 

export const DetailsContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  display: flex;
  width: 100%;
  margin: 40px 0;
  gap: 15px;
`;

export const SmallDetail = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  border: 1px solid #272727;
  border-radius: 6px;
  padding: 10px;

  & .inner-detail-container {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  & .circulating {
    font-size: 1rem;
  }

  & .max {
    font-size: 0.8rem;
  }
`;

export const DetailName = styled.div`
  color: ${(props) => props.theme.orange};
  font-size: 0.8rem;
`;

export const BackgroundChange = styled.div`
  color: ${(props) => (props.textColor ? "green" : "red")};
  font-size: 0.8rem;
  display: inline;
`;

export const MiddleDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between; 
  align-items: center;
  gap: 20px;
  height: 40vh;
`;

export const LeftContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  width: 30%;
  height: 30vh;
`;

export const CoinRank = styled.div`
  border-bottom: 1px solid #b1b7c9;
  width: 50%; 
  font-size: .9rem;
  text-align: center;
`;
export const CoinImage = styled.img`
  padding: 20px;
  background: ${(props) => props.theme.greyText}; 
  width: 40px;
  border-radius: 6px; 
`;
export const BlockchainType = styled.div`
  font-size: 0.9rem;
  text-transform: capitalize;
  font-weight: 400;
`;
export const CoinName = styled.div`
    font-size: 1.5rem;
    font-weight: 400;z
`;
export const ContractAddress = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  padding: 2px 10px;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border: 1px solid #e1e1e1;
    background: ${(props) => props.theme.main};
  }
`;

export const CoinPrice = styled.div`
  font-size: 3.5rem;
  display: flex;
  align-items: center;

  & span {
    margin-right: 10px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  height: 30vh;

  & a {
    text-decoration: none;
    color: orange;
  }
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
