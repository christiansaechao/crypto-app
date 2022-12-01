import styled from 'styled-components'; 

export const Dropdown = styled.div`
    margin-top: 20px;
    position: absolute; 
    top: -30px;
    left: 60px;
    z-index: 3;
`; 

export const ListContainer = styled.ol`
    list-style: none;
    height: 150px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`; 

export const ListItem = styled.li`
    border-radius: 5px; 
    text-align: center; 
    color: white; 
    width: 80px;
    border: 1px solid #e1e1e1;
    margin-bottom: 1px;
    background: ${props => props.theme.secondary}
`;