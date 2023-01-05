import styled from 'styled-components'; 

export const MainContainer = styled.div`
    height: 100vh;
`; 

export const Header = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.textColor};
  margin: 20px 0;
  padding: 0;
`; 
export const DetailsContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  gap: 15px;
`;

export const SmallDetail = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  border: 1px solid #272727;
  border-radius: 6px;
  padding: 10px;

  & .inner-detail-container {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`

export const DetailName = styled.div`
  color: ${(props) => props.theme.orange};
  font-size: 0.8rem;
`;