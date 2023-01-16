import styled from 'styled-components'; 

export const IconContainer = styled.div`
    background: transparent;
    border: 1px solid ${props => props.theme.orange}; 
    border-radius: 5px; 
    width: 32px; 
    height: 32px;
    font-size: .6rem;
    color: ${props => props.theme.orange};
    display: flex;
    justify-content: center;
    align-items: center; 

    &:hover{
        cursor: pointer; 
    }
`; 