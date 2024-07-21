import styled from "styled-components";


export const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-500);
    border-radius: 16px;
    margin: 0 auto;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const BundleImage = styled.img`
    max-height: 400px;
`

export const BundleInfosSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;

    @media (max-width: 768px) {
        padding: 0 24px 24px 24px;
    }
`

export const BundleTitle = styled.h2`
    color: var(--color-dark-0);
    font-weight: 700;
    font-size: 3rem;
    font-family: "Sora", sans-serif;
`

export const BundleDescription = styled.p`
  font-weight: 500;
  line-height: 1.5em;
  color: var(--color-grey-0);
`

export const BundleCTA = styled.button`
    border-radius: 12px;
    padding: 12px 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-200);
    color: var(--color-grey-700);
    border: unset;
    width: fit-content;

    &:hover {
        background-color: var(--color-grey-700);
        color: var(--color-grey-100);
    }

    @media (max-width: 768px) {
        margin: 0 auto;
        width: 100%;
    }
`