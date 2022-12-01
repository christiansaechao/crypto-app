import styled from 'styled-components'; 

export const Wrapper = styled.div`
    color: ${props => props.theme.textColor};
    width: 65%;
    height: 40vh; 
    margin: 10px 0;
    padding: 30px 20px 40px 20px;
    border-radius: 10px; 
    background: ${props => props.theme.secondary}
`; 

export const TextWrapper =styled.div`
    font-size: 1.2rem; 
    font-weight: 400;
`; 