import styled from "styled-components";


export const InfosCompanyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }

`

export const CenterWrapper = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
`

export const InfoTitle = styled.div`
    font-weight: 700;
`