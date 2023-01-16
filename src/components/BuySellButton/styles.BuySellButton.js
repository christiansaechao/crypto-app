import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 23px;
`;
export const Button = styled.div`
  width: 200px;
  height: 68px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.mainAccentColor};
  transition: 0.2s all ease-in-out;
  color: ${({ theme }) => theme.mainAccentColor};
  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.mainAccentColor};
    color: ${({ theme }) => theme.secondaryBackground};
  }
`;
