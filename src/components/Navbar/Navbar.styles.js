import styled from 'styled-components';

export const NavbarContainer = styled.div`
    background: ${props => props.theme.secondary}; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 80px; 
    padding: 40px 0px;
    & > * {
        margin-bottom: 10px;
    }
`

