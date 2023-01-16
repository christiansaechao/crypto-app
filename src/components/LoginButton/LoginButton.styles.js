import styled from "styled-components";
import { Link } from 'react-router-dom'; 

export const StyledLink = styled(Link)`
text-decoration: none; 
color: ${(props) => props.theme.textColor};
background-color: ${(props) => props.theme.orange}; 
border-radius: 2px;
height: 100%; 
display: flex; 
justify-content: center; 
align-items: center;
font-size: .9rem;
padding: 7px 20px;

&:visited { 
    text-decoration: none; 
    color: ${(props) => props.theme.textColor}; 
}
`;
