import { styled } from 'styled-components';

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