import styled from 'styled-components'; 

export const SearchContainer = styled.div`
    width: 270px; 
    background: ${props => props.theme.main};
    display: flex; 
    justify-content: start; 
    align-items: center; 
    border-radius: 10px; 
    margin-right: 20px; 
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
    font-size: 17px; 

    &:focus {
        outline: none;
      }
`; 