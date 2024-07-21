import styled from "styled-components";


export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: var(--color-grey-900);
  color: var(--color-grey-0);
  &:hover {
    background-color: var(--color-grey-700);
  }
  width: fit-content;
`;