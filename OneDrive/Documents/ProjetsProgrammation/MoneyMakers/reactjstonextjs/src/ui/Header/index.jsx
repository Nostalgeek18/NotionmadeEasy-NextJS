"use client";
import { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from 'next/navigation';
import TagManager from 'react-gtm-module';

import LangSelector from '../../features/LangSelector/LangSelector';
import LangIndicator from '../LangIndicator';
import { useLanguage } from '../../context/LanguageContext';
import DarkModeToggle from '../DarkModeToggle';
import Link from 'next/link';
import * as styled from './style';
import { CompanyInfos } from '../../utils/util';

// Compound component: Header
export default function Header() {
  const router = useRouter();
  const { language, changeLanguage, t } = useLanguage();

  const headerLinks = [
    { 
      id: 0,
      page: 'home',
      link: '',
      tLabel: 'header.home'
    },
    { 
      id: 1,
      page: 'templates',
      link: 'templates',
      tLabel: 'header.templates'
    },
    { 
      id: 2,
      page: 'about',
      link: 'about',
      tLabel: 'header.about'
    },
  ];

  const [smallMenuActive, setSmallMenuActive] = useState(false);

  function toggleSmallMenu() {
    setSmallMenuActive(oldValue => !oldValue);
  }

  function handleClick(datas) {
    const { event, location, click_url, click_text } = datas;

    // Push event to GTM
    TagManager.dataLayer({
      dataLayer: {
        event,
        location,
        click_url,
        click_text
      }
    });
  }

  // Hide menu every redirection (rerender)
  useEffect(() => {
    setSmallMenuActive(false);
  }, [router.asPath]);

  const { COMPANY_NAME: companyName } = CompanyInfos;

  return (
    <styled.Header>
      <styled.HeaderContent>
        <styled.LogoContainer onClick={() => {
          handleClick({
            event: 'logo_click',
            location: window.location.pathname,
            click_text: companyName,
            click_url: `${language}`,
          });
          if (language === "en") {
            router.push('/');
          } else {
            router.push(`/${language}`);
          }
        }}>
          <styled.LogoImgContainer>
            <styled.LogoImage src={'/images/logoWebsite.png'} alt={`${companyName} logo`} />
          </styled.LogoImgContainer>
          <styled.CompanyName>{companyName}<LangIndicator /></styled.CompanyName>
        </styled.LogoContainer>
        {/* Desktop menu */}
        <styled.NavigationUL>
          {headerLinks.map(({ id, page, link, tLabel }) => (
            <NavigationLink
              key={id}
              language={language}
              link={link}
              page={page}
              handleClick={handleClick}
            >
              {t(`${tLabel}`)}
            </NavigationLink>
          ))}
        </styled.NavigationUL>
        <styled.RightContainer>
          <LangSelector />
          <DarkModeToggle />
        </styled.RightContainer>

        {/* Mobile menu */}
        <HamburgerMenu toggleSmallMenu={toggleSmallMenu} smallMenuActive={smallMenuActive} />
        <SmallMenu language={language} smallMenuActive={smallMenuActive} links={headerLinks} t={t} switchLanguage={changeLanguage} />
      </styled.HeaderContent>
    </styled.Header>
  );
}

function NavigationLink({ link, page, children, language, handleClick }) {
  const router = useRouter();
  const extensionLink = link === "" ? "" : `/${link}`;
  language = language === "en" ? "" : language;

  return (
    <styled.LinkWrapper onClick={() => {
      handleClick({
        event: `${page}_click`,
        location: window.location.pathname,
        click_text: children,
        click_url: `${language}${extensionLink}`
      });
      router.push(`${language}${extensionLink}`);
    }}>
      <Link href={`${language}${extensionLink}`} passHref>
        <styled.HeaderLink>
          {children}
        </styled.HeaderLink>
      </Link>
    </styled.LinkWrapper>
  );
}

function HamburgerMenu({ smallMenuActive, toggleSmallMenu }) {
  return (
    <styled.HamMenuWrapper onClick={toggleSmallMenu}>
      {smallMenuActive ? (
        <img
          src="/images/ham-menu-close.svg"
          alt="hamburger menu"
          className={`header__main-ham-menu d-none}`}
        />) : (
        <img
          src="/images/ham-menu.svg"
          alt="hamburger menu close"
          className={`header__main-ham-menu-close d-none}`}
        />
      )}
    </styled.HamMenuWrapper>
  );
}

function SmallMenu({ smallMenuActive, links, t, switchLanguage, language }) {
  return (
    <styled.SmallMenuWrapper $smallMenuActive={smallMenuActive}>
      <styled.SmallMenuContent>
        <styled.SmallMenuLinks>
          {links.map(({ id, link, tLabel }) => (
            <styled.SmallMenuLink key={id}>
              <Link href={`/${language}/${link}`} passHref>
                <styled.HeaderLink>
                  {t(`${tLabel}`)}
                </styled.HeaderLink>
              </Link>
            </styled.SmallMenuLink>
          ))}
          <styled.SmallMenuLink>
            <styled.HeaderLink>
              <LangSelector />
              <DarkModeToggle />
            </styled.HeaderLink>
          </styled.SmallMenuLink>
        </styled.SmallMenuLinks>
      </styled.SmallMenuContent>
    </styled.SmallMenuWrapper>
  );
}
