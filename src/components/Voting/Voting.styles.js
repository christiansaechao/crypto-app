import styled from "styled-components";

export const VotingContainer = styled.div`
  border: 1px solid ${(props) => props.theme.greyText};
  padding: 20px 40px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;

  & span {
    text-transform: capitalize;
  }
`;

export const TextContainer = styled.div``;

export const MainText = styled.div`
  &.already-voted {
    display: flex;
    align-items: center;
  }

  & .capitalize {
    text-transform: capitalize;
  }
`;
export const SubText = styled.div`
  font-size: 0.8rem;
  color: #a2a2a2;
`;

export const VotedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &.column {
    flex-direction: column;
  }
`;

export const VotePercentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  font-size: 0.8rem;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 5px 30px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.greyText};
  color: white;
  border-radius: 5px;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  & .orange {
    font-size: 0.7rem;
    color: ${(props) => props.theme.orange};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.orange};
  }
`;

export function Up() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#FFAF2C"
      strokeWidth="1.5"
      color="#FFAF2C"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        d="M16.472 20H4.1a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h2.768a2 2 0 001.715-.971l2.71-4.517a1.631 1.631 0 012.961 1.308l-1.022 3.408a.6.6 0 00.574.772h4.575a2 2 0 011.93 2.526l-1.91 7A2 2 0 0116.473 20z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 20V9"
      ></path>
    </svg>
  );
}

export function Down() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#FFAF2C"
      strokeWidth="1.5"
      color="#FFAF2C"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        d="M16.472 3.5H4.1a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6h2.768a2 2 0 011.715.971l2.71 4.517a1.631 1.631 0 002.961-1.308l-1.022-3.408a.6.6 0 01.574-.772h4.575a2 2 0 001.93-2.526l-1.91-7A2 2 0 0016.473 3.5z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 14.5v-11"
      ></path>
    </svg>
  );
}
