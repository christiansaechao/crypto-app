import styled from 'styled-components'; 
import { Link } from 'react-router-dom'; 

export const NavbarContainer = styled.div`
    background: ${props => props.theme.secondary}; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 80px; 
    padding: 40px 10px;
    & > * {
        margin-bottom: 10px;
    }
`
export const Logo = styled.img`
`; 

export const StyledLink = styled(Link)`
    text-decoration: none; 
    font-size: 22px; 
    color: ${props => props.theme.textColor} 
    text-align: center;
    border-radius: 10px;
    width: 100%;
    text-align: center; 

    //--- change this onHover to when the page is selected later on ---
    &:hover{
        background: ${props => props.theme.main}; 
    }

    &:visited { 
        text-decoration: none; 
        color: ${props => props.theme.textColor}; 
       }
`; 
