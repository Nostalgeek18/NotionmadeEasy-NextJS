import styled from "styled-components";
import { IoArrowRedoSharp } from "react-icons/io5";

export const ThreeStepsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    @media (max-width: 768px) {
        text-align: center;
    }

`

export const SnippetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 4rem;
    gap: 0.5rem;
`

export const SnippetTitle = styled.div`
    font-size: 38px;
    font-weight: 800;
    text-transform: capitalize;
    color: var(--color-dark-100);
`

export const SnippetDescription = styled.div`
    color: var(--color-dark-500);
    font-size: 20px;
`

export const StepsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1em;
  }
    
`

export const Step = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 800;

    &:hover {
        cursor: pointer;
    }
`

export const StepNumber = styled.h3`
    font-size: 150px;
    color: ${({$isHover,$stepId, $targetId})=> ($isHover & $stepId == $targetId ? 'var(--color-grey-700);' : 'var(--color-grey-300);')};
    /* cursor: ${({$isHover,$stepId, $targetId})=> ($isHover & $stepId == $targetId ? 'pointer' : 'default')}; */

    transition: color 0.3s ease-out;

    @media (max-width: 768px) {
        font-size: 108px;
    }

`

export const StepSnippet = styled.div`
    color: var(--color-dark-100);
    font-size: 1.5em;

`

export const StepInstruction = styled.div`
    font-weight: 500;
    color: var(--color-grey-700);
    font-size: 1em;
`

export const ArrowIcon = styled(IoArrowRedoSharp)`

    @media (max-width: 768px) {
        rotate: 90deg;
    }

`


export const CTAContainer = styled.div`
     position: relative;
     margin-top: 4rem;
`
export const CTA = styled.button`
    width: 100%;
    border: none;
    color: var(--color-grey-100);
    background-color: var(--color-dark-100);
    padding: 2.25rem 4.5rem; /* Increased padding */
    border-radius: 15px;
    font-size: 2.4rem;
    font-weight: 500;
    transform: translateY(0);
    transition: transform 250ms ease-in-out;
    z-index: 0;
    text-transform: capitalize;

    &:hover {
        cursor: pointer;
        transform: translateY(6px);
    }
`

export const CTABottom = styled.div`
    width: 100%;
    height: 6.5rem; /* Adjusted height */
    background-color: var(--color-grey-500);
    border-radius: 10px 10px 15px 15px;
    position: absolute;
    top: 24px; /* Adjusted position */
    z-index: -1;
`

export const CTAShadow = styled.div`
    width: calc(100% + 0.5rem);
    height: 0rem; /* Adjusted height */
    outline: 2px solid var(--color-grey-100);
    background-color: var(--color-grey-300);
    border-radius: 10px 10px 15px 15px;
    position: absolute;
    top: 32px; /* Adjusted position */
    left: -4px;
    z-index: -2;
`
