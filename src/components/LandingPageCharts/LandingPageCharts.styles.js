import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  width: 60%;
  height: 40vh;
  margin: 10px 0;
  padding: 30px 20px 40px 20px;
  border-radius: 10px;
  background: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.greyText};
`;

export const DropdownsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .chevron{
    color: ${props => props.theme.orange}; 
  }
`;

export const ButtonDropdownContainer = styled.div`
  position: relative; 
  text-transform: capitalize; 
`; 

export const ButtonContainer = styled.div`
  position: relative;
  width: 120px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  background: transparent;
  border-radius: 6px;
  padding: 10px 15px;
  border: 1px solid ${(props) => props.theme.greyText};
  transition: all .3s ease-in-out;
  cursor: pointer; 

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

export const ListContainer = styled.ol`
  margin: 0;
  padding: 0;
  width: 120px;
  padding: 10px 15px;
  list-style: none;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background: #161616;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.24);

  &.left {

  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItem = styled.li`
  text-align: left;
  color: white;
  padding: 5px;
  margin-bottom: 1px;
  border-bottom: 1px solid transparent;
  transition: all .2s ease-in-out; 
  text-transform: capitalize; 
  &:hover{
    border-bottom: 1px solid white; 
  }
`;

export const RightButtons = styled.div`
  display: flex;
  gap: 20px;
`; 