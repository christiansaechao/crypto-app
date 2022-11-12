import styled from 'styled-components'; 

export const CurrencySelectorContainer = styled.div`
    background-color: ${props => props.theme.main};  
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 5px; 
    border-radius: 10px; 
    margin-right: 20px; 
`; 
export const DollarSymbol = styled.div`
    color: green; 
    background: ${props => props.theme.secondary}; 
    width: 25px; 
    height: 25px;
    border-radius: 50%;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin-right: 5px;
`; 
export const Currency = styled.div`
    color: ${props => props.theme.textColor}; 
    margin-right: 5px;
`; 
export const Carot = styled.div `
    color: green; 
`; 