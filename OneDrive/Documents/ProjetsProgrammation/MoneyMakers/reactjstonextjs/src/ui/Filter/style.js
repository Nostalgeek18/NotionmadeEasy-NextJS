import styled, { css } from "styled-components";

export const StyledFilter = styled.div`
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  background-color: var(--color-grey-300);
  border: none;

  ${(props) =>
    props.$active &&
    css`
     /* has to match hover effect below */
      background-color: var(--color-grey-700);
      color: var(--color-grey-0);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.8rem 1.2rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-grey-700);
    color: var(--color-grey-0);
  }
`;