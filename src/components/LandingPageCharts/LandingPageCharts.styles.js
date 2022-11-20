import styled from 'styled-components'; 

export const ChartContainer = styled.div`
    width: 96%;
    height: 40vh; 
    margin: 30px auto; 
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    position: relative; 
    padding: 20px 0px; 
`; 

export const Wrapper = styled.div`
    color: white; 
    width: 45%;
    height: 90%; 
    padding: 30px 20px 40px 20px;
    border-radius: 10px; 
    background: ${props => props.theme.secondary}
`; 

export const TextWrapper =styled.div`
    font-size: 1.2rem; 
    font-weight: 400;
`; 