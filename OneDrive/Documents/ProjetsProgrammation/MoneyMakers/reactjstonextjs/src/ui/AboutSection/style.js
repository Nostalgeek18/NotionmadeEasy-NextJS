import styled from "styled-components";

export const AboutWrapper = styled.div` 
    display : flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 40px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    border-radius: 16px;
    border: 1px solid var(--color-grey-300);
    width: 100%;
    max-width: 400px;
    height: 400px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        height: 240px;
    }
`

export const InfosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 700px;
    color: var(--color-dark-0);

    


`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 4em;
`

export const Snippet = styled.h2`
    font-size: 1.5em;
    text-align: justify;
`

export const ContactSnippet = styled.p`
    color: var(--color-grey-400);
    font-size: 1.2em;

    & a {
        display: inline-block;
        text-decoration: underline;
        color: var(--color-grey-500);
    }
`