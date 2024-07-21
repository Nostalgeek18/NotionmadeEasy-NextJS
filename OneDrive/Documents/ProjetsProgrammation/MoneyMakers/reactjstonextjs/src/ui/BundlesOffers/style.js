import styled from "styled-components";

export const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    /* 768px and under */
  @media (max-width: 768px) {
      flex-direction: column;
  }
`

export const OfferWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 24px;
    min-height: 400px;
    width: 300px;
    background-color: var(--color-dark-0);
    border-radius: 12px;
    color: var(--color-grey-0);
`

export const OfferTitle = styled.h2`
    margin: 0;
`

export const OfferPrice = styled.div`
    font-weight: 700;
    font-size: 48px;
`

export const FeaturesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* border-top: 1px solid var(--color-grey-300);
    padding-top: 8px; */
`
export const Feature = styled.div`
    display: flex;
    align-items: center;
`

export const Delimiter = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--color-grey-300);
    opacity: 0.3;
    margin: 4px 0;
`

export const CTA = styled.button`
    width: fit-content;
    padding: 12px 20px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    background-color: var(--color-indigo-100);
    box-shadow: 0 10px 20px -10px #e5e7eb;
    border: none;
    color: var(--color-dark-0);

    &:hover {
        background-color: var(--color-silver-100);
    }
`