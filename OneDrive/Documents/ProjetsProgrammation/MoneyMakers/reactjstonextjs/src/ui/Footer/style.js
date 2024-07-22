import styled, { css } from "styled-components";
import Link from 'next/link';

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: var(--color-grey-0);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow: hidden;
  padding: 1rem 5rem;
  position: relative;
  gap: 24px;
  font-family: "Inter", sans-serif;

  @media only screen and (max-width: 37.5em) {
    padding: 60px 40px 60px;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 40px 24px 50px;
  }
`

export const MainSectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: min-content;
  justify-content: space-between;
  width: 100%;
  overflow: visible;
  position: relative;

  /* 768px and under */
  @media (max-width: 768px) {
      flex-direction: column;
      gap: 16px;
  }
`

export const SocialsWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`

export const SocialLogosWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const SiteBrand = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`

export const WebsiteName = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: var(--color-dark-100);
  margin: 0;
  position: relative;
  display: flex;
  margin-right: 4px;

  & span {
    position: absolute;
    top:0;
    right: -20px;
  }
`

export const Logo = styled.img` 
  border-radius: 50%;
  width: 40px;
  box-shadow: rgba(0, 0, 0, 0.086) 0px 0.796192px 0.796192px -0.9375px, rgba(0, 0, 0, 0.012) 0px 2.41451px 2.41451px -1.875px, rgba(0, 0, 0, 0.22) 0px 6.38265px 6.38265px -2.8125px, rgba(0, 0, 0, 0.15) 0px 16px 20px -3.75px;
`

export const Slogan = styled.p`
  display: none; /* removed */
  font-size: 24px;
  font-weight: 500;
  color: var(--color-grey-700);
  margin: 0;
`

export const SectionsWrapper = styled.div`
  display: flex;
  gap: 60px;
  width: min-content;

  /* 768px and under */
  @media (max-width: 768px) {
      flex-direction: column;
      gap: 16px;
  }

`

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 4px;

`

export const SectionName = styled.div` 
  color: var(--color-dark-100);
  font-weight: 700;
  font-size: 20px;
`

export const LinkPage = styled.div`
  color: var(--color-grey-400);
  font-size: 18px;
  cursor: hover;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--color-grey-600);
  }
  
`
  
export const CopyRightWrapper = styled.div`

`