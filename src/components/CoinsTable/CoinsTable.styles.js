import styled from "styled-components";

export const CoinsTableContainer = styled.table`
  color: white;
  width: 95%;
  border-collapse: seperate;
  border-spacing: 0px;
  margin: 0 auto; 
  border-radius: 10px; 
  background: ${props => props.theme.secondary}; 
  padding: 10px 40px;
`;

export const CoinsTableHead = styled.thead`

`;

export const CoinsTableRow = styled.tr`
`;

export const CoinsTableTH = styled.th`
    font-size: 1.2rem;
    text-align: left; 
    font-weight: 400;
    padding: 10px 20px;
    border-bottom: 2px solid white; 
`;

export const CoinsTableBody = styled.tbody`
padding: 20px; 
`;

export const CoinsTableTD = styled.td`
    text-align: left;
    font-weight: 400;
    border-bottom: 3px solid #707070; 
    padding: 20px;

    & .spark-line{
      height: 50px;
      width: 100px;
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