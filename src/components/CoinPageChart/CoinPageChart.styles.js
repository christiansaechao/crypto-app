import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  height: 60vh;
  margin: 10px 0;
  padding: 30px 20px 40px 20px;
  border-radius: 10px;
  background: ${(props) => props.theme.main};
  border: 1px solid ${(props) => props.theme.greyText};
`;

export const DropdownsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .chevron{
    color: ${props => props.theme.orange}; 
  }
`;

export const ButtonContainer = styled.div`
  width: 80px;
  text-align: center;
  font-size: .9rem;
  border-radius: 6px;
  padding: 10px 15px;
  border: 1px solid ${(props) => props.theme.greyText};
  transition: all .3s ease-in-out;
  cursor: pointer; 

  &.volume-btn{
    background: ${(props) => props.bgActive === true ? props.theme.orange : 'transparent'}; 
  }

  &.price-btn{ 
    background: ${(props) => props.bgActive === true ? props.theme.orange : 'transparent'}; 
  }
  
  &.day-btn{ 
    background: ${(props) => props.bgActive === true ? props.theme.orange : 'transparent'}; 
  }
  
  &.week-btn{ 
    background: ${(props) => props.bgActive === true ? props.theme.orange : 'transparent'}; 
  }

  &.month-btn{ 
    background: ${(props) => props.bgActive === true ? props.theme.orange : 'transparent'}; 
  }
  
  &.three-months-btn{ 
    background: ${(props) => props.bgActive === true ? props.theme.orange : 'transparent'}; 
  }

  &.year-btn{ 
    background: ${(props) => props.bgActive === true ? props.theme.orange : 'transparent'}; 
  }

  &:hover{
    background: ${(props) => props.theme.greyText};
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 3;
`;

export const RightButtons = styled.div`
  display: flex;
  gap: 10px;
`; 
export const LeftButtons = styled.div`
  display: flex;
  gap: 20px;
`; 
