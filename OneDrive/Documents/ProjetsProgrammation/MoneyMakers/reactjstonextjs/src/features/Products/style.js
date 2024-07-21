import styled from "styled-components";

export const ProductsWrapper = styled.div`
    display: grid;
    flex: 0 0 auto;
    gap: 64px;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(3, 1fr);
    height: min-content;
    justify-content: center;
    padding: 0px;
    width: 100%;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
  }
`