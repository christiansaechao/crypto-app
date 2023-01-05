import styled from "styled-components";

export const TransactionsTableContainer = styled.table`
  color: ${props => props.theme.textColor};
  width: 100%;
  border-collapse: seperate;
  border-spacing: 0px;
  margin: 0 auto; 
  background: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.greyText};
  border-radius: 5px;
`;

export const TransactionsTableHead = styled.thead`
  background: ${props => props.theme.secondary};
`;

export const TransactionsTableRow = styled.tr`
    &:nth-child(even) {
      background: ${props => props.theme.secondary};
    }

    &:last-child{
      border-bottom: none;
    }
`;

export const TransactionsTableTH = styled.th`
    font-size: .9rem;
    font-weight: 400;
    border-bottom: 2px solid ${props => props.theme.greyText};
    text-align: left;
    padding: 20px;
    cursor: pointer;
`;

export const TransactionsTableBody = styled.tbody`
  height: 50vh;
`;

export const TransactionsTableTD = styled.td`
    max-width: 15px;
    font-size: .8rem;
    font-weight: 400;
    padding: 20px;
    text-align: left;
    border-bottom: 2px solid ${props => props.theme.greyText};

    &:first-child{
      text-align: center;
      padding-right: 0; 
    }

    & .checkbox{
      font-size: 1.2rem;
      background: ${props => props.theme.orange};
      color: ${props => props.theme.greyText};
    }

    & .green{
      color: green; 
    }

    & .red{
      color: red; 
    }

    & .yellow{
      color: ${props => props.theme.orange};
    }
`;