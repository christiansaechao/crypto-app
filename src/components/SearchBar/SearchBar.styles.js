import styled from 'styled-components'; 

export const SearchContainer = styled.div`
    width: 270px; 
    background: #2c2f36; 
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
    background: #2c2f36;
    color: white; 
    font-size: 17px; 

    &:focus {
        outline: none;
      }
`; 