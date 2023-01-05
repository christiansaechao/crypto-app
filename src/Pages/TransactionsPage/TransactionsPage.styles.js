import styled from 'styled-components'; 

export const NoTransactions = styled.div`
  width: 100%; 
  height: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  font-size: 1.5rem;
  color: ${props => props.theme.textColor}; 
`; 