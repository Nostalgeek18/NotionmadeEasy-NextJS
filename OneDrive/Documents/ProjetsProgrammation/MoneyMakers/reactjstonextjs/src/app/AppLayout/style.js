import styled from "styled-components"

export const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 4rem 4.8rem 6.4rem;
    overflow: scroll;
`

export const AppLayout = styled.div`
    width: 100%;
    height: auto;
`

export const Container = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
export const WrapperOutlet = styled.div`
    width: 100%;
    padding: 160px 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;

    @media only screen and (max-width: 37.5em) {
        padding: 160px 2rem;
    }

    @media only screen and (max-width: 56.25em) {
        padding: 100px 40px;
    }
`