import styled from 'styled-components'; 

export const SearchContainer = styled.div`
    width: 80%; 
    background: ${props => props.theme.main};
    display: flex; 
    justify-content: start; 
    align-items: center; 
    border-radius: 10px; 
    margin: 20px 0px 10px;
    padding: 10px 0px;
    border: 3px solid ${props => props.theme.greyText}; 
`; 
export const SearchIcon = styled.img`
    height: 15px; 
    padding: 10px;
`; 

export const SearchField = styled.input`
    width: 100%; 
    border: none; 
    background: ${props => props.theme.main};
    color: ${props => props.theme.textColor}; 
    font-size: 1.4rem; 

    &:focus {
        outline: none;
      }
`; 