import styled from "styled-components";
import { Link } from "react-router-dom";

export const CoinsTableContainer = styled.table`

  color: ${props => props.theme.textColor};;
  width: 100%;
  border-collapse: seperate;
  border-spacing: 0px;
  margin: 0 auto; 
  background: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.greyText};
  border-radius: 5px;
`;

export const CoinsTableHead = styled.thead`
  background: ${props => props.theme.secondary};
`;

export const CoinsTableRow = styled.tr`
    &:nth-child(even) {
      background: ${props => props.theme.secondary};
    }
`;

export const CoinsTableTH = styled.th`
    font-size: .9rem;
    font-weight: 400;
    border-bottom: 2px solid ${props => props.theme.greyText};
    text-align: left;
    padding: 20px 10px;

    & .color-change{
      font-size: .9rem;
      margin-left: 4px;
      color: ${props => props.theme.orange};
    }
`;

export const CoinsTableBody = styled.tbody`
`;

export const CoinsTableTD = styled.td`
    max-width: 15px;
    font-size: .8rem;
    font-weight: 400;
    border-bottom: 2px solid ${props => props.theme.greyText};
    padding: 20px 0px;

    &.first-child{
      padding-left: 30px;
      padding-right: 8px;
      align-self: center;
    }

    &.circulating-container{
      padding-right: 30px;
      & .num-container{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
    
    & .spark-line{
      height: 50px;
      width: 100px;
    }
    
    & .coin-rank{
      text-align: center;
      width: 18px;
      height: 18px;
      border: 1px solid ${props => props.theme.orange}; 
    }

`;

export const CoinImage = styled.img`
    width: 20px;
    margin-right: 5px; 
`;

export const CenterElements = styled.div`
  display: flex; 
  align-items: center; 

    &.percentage{
      color: ${(props) => (props.textColor ? '#02EC29' : '#CC1339')};
    }
`; 

export const StyledLink = styled(Link)`
    text-decoration: none; 
    color: ${props => props.theme.textColor};
`; 