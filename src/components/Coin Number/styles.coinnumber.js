import styled, { useTheme } from "styled-components";

export const Number = styled.abbr`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ number, theme }) =>
    number > 0 ? theme.coinNumber.up : theme.coinNumber.down};
  text-decoration: none;
`;

export function Up() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="5"
      fill="none"
      viewBox="0 0 8 5"
    >
      <path
        fill='green'
        d="M3.345.567a1 1 0 011.31 0l2.514 2.177c.7.606.27 1.756-.655 1.756H1.486C.56 4.5.132 3.35.831 2.744L3.345.567z"
      ></path>
    </svg>
  );
}

export function Down() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="5"
      fill="none"
      viewBox="0 0 8 5"
    >
      <path
        fill='red'
        d="M4.655 4.433a1 1 0 01-1.31 0L.831 2.256C.131 1.65.561.5 1.486.5h5.028c.926 0 1.354 1.15.655 1.756L4.655 4.433z"
      ></path>
    </svg>
  );
}
