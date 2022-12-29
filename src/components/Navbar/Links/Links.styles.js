import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items:center;
    margin-bottom: 20px;
    width: 100%;
    padding: 5px 0px;
    transition: all .2s ease-in-out; 
    border-radius: 5px; 
    border: 1px solid transparent; 
    &:hover{
        border: 1px solid gray;
    }
`; 

export const Icon = styled.img`
    width: 15px;
`; 

export const Text = styled.div`
    font-size: .6rem;
    text-decoration: none; 
`; 

export const StyledLink = styled(Link)`
    text-decoration: none; 
    color: ${props => props.theme.textColor} ;
    border-radius: 10px;
    width: 100%;
    text-align: center; 

    &:visited { 
        text-decoration: none; 
        color: ${props => props.theme.textColor}; 
    }
`; 