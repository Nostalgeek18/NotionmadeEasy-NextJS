import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const IntroductionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  gap: 40px;
`;

export const Title = styled.h1`
  font-size: 52px;
  color: var(--color-dark-100);
  max-width: 700px;
  font-weight: 700;
`;

export const SubTitle = styled.h2`
  color: var(--color-grey-500);
`;

export const CTAsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CTA = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const CTAMain = styled(CTA)`
  background-color: var(--color-grey-900);
  color: var(--color-grey-0);
  &:hover {
    background-color: var(--color-grey-700);
  }
`;

export const CTASecundary = styled(CTA)`
  color: var(--color-grey-900);
  background-color: var(--color-grey-200);
  &:hover {
    background-color: var(--color-grey-300);
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const BannerLabel = styled.span`
  color: var(--color-grey-900);
`;

export const LogosScroller = styled.div`
  overflow: hidden;
  padding: 1rem 0; /* top and bottom padding */
  white-space: nowrap;
  flex-wrap: nowrap;
  display: flex;
  width: 300px;
  position: relative;
`;

export const ScrollerSlide = styled.div`
  display: flex;
  animation: ${scroll} 10s linear infinite;
  flex: 1;
  width: 300px;
`;

export const BannerLogo = styled.img`
  height: 25px;
  width: 26px;
  margin: 0px 16px;
`;

export const StyledLogo = styled.div`
  display: flex;
  width: 25px;
  margin: 0 8px;

  & > * {
    height: 100%;
    width: 100%;
  }
`;
