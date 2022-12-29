import styled from "styled-components";

export const NavbarContainer = styled.div`
/* From https://css.glass */
background: rgba(27, 27, 27, 1);
border-radius: 16px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(13.4px);
-webkit-backdrop-filter: blur(13.4px);


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 80px;
  padding: 40px 0px;
  & > * {
    margin-bottom: 10px;
  }
`;
