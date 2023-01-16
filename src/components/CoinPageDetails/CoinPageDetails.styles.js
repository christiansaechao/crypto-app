import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 70vh; 
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
  align-items: start;
  gap: 80px;
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
  padding: 15px;
  background: ${(props) => props.theme.greyText}; 
  width: 30px;
  height: 30px;
  border-radius: 6px; 
`;
export const BlockchainType = styled.div`
  font-size: 0.9rem;
  text-transform: capitalize;
  font-weight: 400;
  padding-left: 10px; 
`;
export const CoinName = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
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
    color: ${(props) => props.theme.orange};
  }
`;

export const CoinPrice = styled.div`
  font-size: 2.8rem;
  display: flex;
  align-items: center;
  width: 100%; 
  margin: 0 18%;
  gap: 10px;
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

export const Tags = styled.div`
  font-size: 10px;
  margin-top: 20px;
  width: 100%;
  height: 80px;
`;
export const TagsInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;
export const Tag = styled.div`
  border-radius: 15px;
  text-align: center;
  background: #272727;
  font-size: 0.6rem;
  padding: 6px 15px;
`;