import styled from "styled-components";

export const CoinsTableContainer = styled.table`
  color: white;
  width: 90%;
  border-collapse: collapse;
  margin: 0 auto; 
`;

export const CoinsTableHead = styled.thead`
 border-bottom: 1px solid white; 
`;

export const CoinsTableRow = styled.tr`
    padding: 20px 0px;
`;

export const CoinsTableTH = styled.th`
    font-size: 1.3rem;
    font-weight: 500;
    text-align: left;
    padding: 20px;
`;

export const CoinsTableBody = styled.tbody``;

export const CoinsTableTD = styled.td`
    text-align: left;
    font-weight: 400;
    border-bottom: 1px solid white; 
    padding: 20px;

    &.img-name{
        background: orange; 
        vertically-align: middle; 
    }
`;

export const CoinImage = styled.img`
  width: 20px;
`;
