import styled from 'styled-components'; 

export const CurrencySelectorContainer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    border-radius: 5px; 
    cursor: pointer;
    position: relative;
    width: 100%;
    border: 1px solid transparent; 
    &:hover{
        border: 1px solid white; 
    }
`; 
export const DollarSymbol = styled.div`
    color: #02EC29; 
    background: ${props => props.theme.secondary}; 
    width: 20px; 
    height: 20px;
    display: flex; 
    justify-content: center; 
    align-items: center; 
`; 
export const Currency = styled.div`
    color: ${props => props.theme.textColor}; 
    margin-right: 5px;
    font-size: .8rem;
`; 
export const Carot = styled.div `
    color: #02EC29; 
`; 