import styled from "styled-components";
import Link from 'next/link';


export const BundlePreviewWrapper = styled.a`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: auto;
    cursor: pointer;
    
`

export const ImgWrapper = styled.div`
    position: relative;
    background-color: var(--color-grey-100);
    border: 2px solid var(--color-grey-300);
    padding: 32px 48px 28px;
    border-radius: 20px;
`

export const Overlay = styled.div`
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: var(--color-grey-300);
    opacity: ${({ $isHovering }) => ( $isHovering ? 0.3 : 0) };
    border-radius: 16px;
    transition: opacity 0.2s ease-in-out;
`

export const BundleImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 16px;
`

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BundleCTA = styled.button`
    background-color: var(--color-dark-100);
    color: var(--color-grey-0);
    width: fit-content;
    height: fit-content;
    padding: 10px 12px;
    border-radius: 16px;
    border: unset;

    &:hover {
        background-color: var(--color-grey-700);
        color: var(--color-grey-100);
    }
`

export const BundleName = styled.h2`
    font-weight: 700;
    color: var(--color-dark-100);
    margin: 0;
`

export const Description = styled.div`
    font-weight: 500;
    color: var(--color-grey-500);
`