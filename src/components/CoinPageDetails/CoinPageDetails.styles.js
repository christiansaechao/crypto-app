import styled from "styled-components";

export const MainContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const DetailsContainer = styled.div`
    width: 100%;
    color: ${(props) => props.theme.textColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;
`;

export const LeftContainer = styled.div`
    width: 30%;
    height: 30vh; 
    padding: 20px;
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.theme.secondary};
    border-radius: 10px; 
`;
export const CoinRank = styled.div`
    background: #b1b7c9;
    width: 20%;
    font-size: .7rem;
    padding: 2px;
    text-align: center; 
    border-radius: 5px;
`; 
export const CoinImage = styled.img`
width: 80px;
`;
export const BlockchainType = styled.div`
    font-size: .9rem;
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
    transition: all .2s ease-in-out;
    border-radius: 10px;
    border: 1px solid transparent; 
    
    &:hover{
        cursor: pointer;
        border: 1px solid #e1e1e1; 
        background: ${props => props.theme.main}
    }
`;

export const RightContainer = styled.div`
    width: 63%;
    height: 30vh; 
    background: lightblue;
    padding: 20px;
    border-radius: 10px; 
    background: ${(props) => props.theme.secondary};
`;

export const RightTopContainer = styled.div`
    height: 60%;
    border-bottom: 1px solid #424242;
`;

export const CoinPrice = styled.div`
    font-size: 2.5rem;
    display: flex;
    align-items: center; 

    & span {
        margin-right: 10px; 
    }
`; 
export const MarketPercentage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    text-align: center; 
`; 
export const RightBotContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0px;
`;
export const SmallDetail = styled.div`
    width: 33%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    border-right: 1px solid #424242;

    &.no-border{
        border-right: none;
    }
`;

export const DescriptionContainer = styled.div`
    width: 70%;
    margin: 0 auto; 
    padding: 20px;
    color: ${(props) => props.theme.textColor};
    text-align: center;
    height: 30vh;

    & a{
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

export const BackgroundChange = styled.div`
    background: ${props => props.bgColor ? 'green' : 'red'};
    font-size: .8rem;
    padding: 2px 8px;
    border-radius: 10px; 
    display: inline;
`; 
