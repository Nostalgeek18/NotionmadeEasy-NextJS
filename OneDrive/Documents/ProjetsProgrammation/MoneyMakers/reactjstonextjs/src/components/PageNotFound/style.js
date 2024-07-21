import styled from "styled-components";

export const PageWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

export const Box = styled.div`
  /* box */
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

export const Heading = styled.h1`
    font-size: 3rem;
    font-weight: 700;
`

export const GoBackBTN = styled.button`
    width: fit-content;
    padding: 12px 24px;
    border-radius: 16px;

    &:hover {
        background-color: var(--color-grey-300);
    }
`