import styled from 'styled-components'; 
import { Link } from 'react-router-dom'; 

export const NavbarContainer = styled.div`
    background: ${props => props.theme.secondary}; 
    height: 50px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 10px 30px; 
`
export const LeftNav = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
`;
export const StyledLink = styled(Link)`
    text-decoration: none; 
    font-size: 22px; 
    color: ${props => props.theme.textColor} 
    letter-spacing: 0; 
    padding: 10px 40px; 
    text-align: center;
    border-radius: 10px; 

    //--- change this onHover to when the page is selected later on ---
    &:hover{
        background: ${props => props.theme.main}; 
    }
    &:visited { 
        text-decoration: none; 
        color: ${props => props.theme.textColor}; 
       }
`; 
export const RightNav = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
`; 
