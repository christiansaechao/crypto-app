import styled from 'styled-components'; 

export const MainContainer = styled.div`
`; 

export const DescriptionContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  height: 30vh;

  & a {
    text-decoration: none;
    color: orange;
  }
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
