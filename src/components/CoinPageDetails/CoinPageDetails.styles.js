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
  margin-top: 40px;
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
    font-size: clamp(1rem, 1.3rem, 1.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
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
  gap: 180px;
  height: 338px;
  margin-top: 60px; 
`;

export const LeftContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  height: 100%;
  width: 530px; 
`;

export const CoinRank = styled.div`
  border-bottom: 1px solid #b1b7c9;
  font-size: 0.9rem;
  text-align: center;
`;
export const CoinImage = styled.img`
  padding: 10px;
  background: ${(props) => props.theme.greyText};
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;
export const BlockchainType = styled.div`
  font-size: 0.9rem;
  text-transform: capitalize;
  font-weight: 400;
`;
export const CoinName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Symbol = styled.div`
  color: #a2a2a2;
`;

export const CoinPrice = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ContractAddressContainer = styled.div`
  color: #a2a2a2;
  margin-top: 60px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContractAddress = styled.div`
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.orange};
  }
`;
export const Tags = styled.div`
  font-size: 10px;
  margin-top: 30px;
`;
export const TagsInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 27px;
`;
export const Tag = styled.div`
  border-radius: 15px;
  text-align: center;
  background: #272727;
  font-size: 0.6rem;
  padding: 10px;
`;

export const RightContainer = styled.div`
  width: 70%;
  height: 100%; 
  color: ${props => props.theme.textColor}; 
`;

export const OtherCoins = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #272727;
  height: 290px;
  padding: 24px 0; 

  & div:not(:last-child){
    height: 100%;
    border-right: 1px solid #272727; 
  }
`;
