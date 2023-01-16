import styled from 'styled-components';

export const VotingContainer = styled.div`
    border: 1px solid ${props => props.theme.greyText}; 
    padding: 20px 40px; 
    color: white; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    border-radius: 5px; 
    margin-bottom: 20px;

    & span{
        text-transform: capitalize; 
    }
`;

export const HowDoYouFeel = styled.div`

`;

export const VotingButtons = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    gap: 40px; 
`; 

export const Button = styled.button`
    font-size: 1rem;
    padding: 5px 30px; 
    background: transparent; 
    border: 1px solid ${props => props.theme.greyText}; 
    color: white; 
    border-radius: 5px;
    transition: .2s all ease-in-out; 
    cursor: pointer; 
    
    & .yellow{
        margin-left: 5px;
        font-size: .7rem;
        color: ${props => props.theme.orange}; 
    }

    &:hover{
        border: 1px solid ${props => props.theme.orange}; 
    }
`; 