import styled from 'styled-components'; 

export const ThemeChangerIcon = styled.img`
    background: ${props => props.theme.main};
    height: 30px;
    padding: 2px; 
    border-radius: 10px; 
    &:hover{
        cursor: pointer; 
    }
`; 