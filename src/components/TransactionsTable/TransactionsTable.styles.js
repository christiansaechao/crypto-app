import styled from "styled-components";

export const CoinsTableContainer = styled.table`
  color: ${props => props.theme.textColor};
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
    text-align: center;
    padding: 20px 0px;
    cursor: pointer;
`;

export const CoinsTableBody = styled.tbody`
  height: 50vh;
`;

export const CoinsTableTD = styled.td`
    max-width: 15px;
    font-size: .8rem;
    font-weight: 400;
    border-bottom: 2px solid ${props => props.theme.greyText};
    padding: 20px 0px;
    text-align: center;
`;