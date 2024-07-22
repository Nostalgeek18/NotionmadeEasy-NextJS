import {styled, css } from "styled-components";


export const Header = styled.header`
    position: fixed;
    width: 100%;
    z-index: 1000;
    background: var(--color-grey-0);
    box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1);
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;

    @media only screen and (max-width: 56.25em) {
        padding: 0 2rem;
    }
`;

export const NavigationUL = styled.ul`
    padding: 0;
    margin: 0;
    display: flex; 

        @media only screen and (max-width: 37.5em) {
            display: none; 
        }
`

export const LinkWrapper = styled.li`

`

export const HeaderLink = styled.div`
  padding: 2.2rem 3rem;
  display: inline-block;
  font-size: 1.6rem;
  color: var(--color-dark-0);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  transition: color 0.3s;

  &:hover {
    color: var(--color-blue-700);
  }

  @media only screen and (max-width: 56.25em) {
    padding: 3rem 1.8rem;
    font-size: 1.5rem;
  }
`;

export const HamMenuWrapper = styled.div`
    display: none;
    width: 3rem;
    padding: 2.2rem 0;
    @media only screen and (max-width: 37.5em) {
      /* Display on mobile */
      display: block;
    }
    
`


export const SmallMenuWrapper  = styled.div`
background: var(--color-grey-0);
position: absolute;
width: 100%;
top: 100%;
left: 0%;
visibility: hidden;
opacity: 1;
transition: all 0.3s;
box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
-moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);

/* Conditionally apply styles for the active state */
${({$smallMenuActive}) => $smallMenuActive && css`
    visibility: visible;
    opacity: 1;
` }


`;

export const SmallMenuLink = styled.div`
a {
  display: flex;
  justify-content: end;
  align-items: center;
  text-decoration: none;
  padding: 2.5rem 3rem;
  font-size: 1.6rem;
  color: var(--color-dark-0);
  text-align: right;
  border-bottom: 1px solid #eee;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s;

  &:hover {
    color: rgba(var(--main-color), 1);
  }
}

/* Styles for the first link */
&:first-child {
  a {
    border-top: 1px solid #eee;
  }
}

/* Styles for the last link */
&:last-child {
  a {
    
  }
}
`;

export const SmallMenuContent = styled.div`
  /* Styles for .header__sm-menu-content */
`;

export const SmallMenuLinks = styled.ul`
  /* Styles for .header__sm-menu-links */
  margin: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-dark-0);
  transition: color .3s; 
     &:hover {
       color: var(--main-color)
     }
`

export const LogoImgContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50px;
  overflow: hidden;
  margin-right: 1.5rem;
  background: rgba(var(--main-color), 1); 
  box-shadow: rgba(0, 0, 0, 0.086) 0px 0.796192px 0.796192px -0.9375px, rgba(0, 0, 0, 0.012) 0px 2.41451px 2.41451px -1.875px, rgba(0, 0, 0, 0.22) 0px 6.38265px 6.38265px -2.8125px, rgba(0, 0, 0, 0.15) 0px 16px 20px -3.75px;

  @media only screen and (max-width: 56.25em) {
      width: 4.5rem;
      height: 4.5rem;
      margin-right: 1.2rem;
    }
`

export const CompanyName = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  position: relative;
`

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`

export const CTAHeader = styled.button`
  background-color: var(--color-grey-100);
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 12px;
  display : flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;

  &:hover {
    background-color: var(--color-grey-300);
  }
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 37.5em) {
    display: none; 
  }
`
