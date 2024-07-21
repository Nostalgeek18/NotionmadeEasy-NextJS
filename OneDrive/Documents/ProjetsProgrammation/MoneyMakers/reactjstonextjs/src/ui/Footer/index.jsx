import TagManager from 'react-gtm-module';
import { useLanguage } from '../../context/LanguageContext';
import LangSelector from '../../features/LangSelector/LangSelector';
import LangIndicator from '../LangIndicator';
import Link from 'next/link';
import { CompanyInfos } from '../../utils/util';
import * as styled from './style';

// Compound component: Footer
export default function Footer() {
  const { t, language: languageCore } = useLanguage();
  const language = languageCore === "en" ? '' : languageCore;
  const currentYear = new Date().getFullYear();
  const { COMPANY_NAME: companyName } = CompanyInfos;

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

  return (
    <styled.FooterWrapper>
      <styled.MainSectionWrapper>
        <styled.SocialsWrapper>
          <styled.SiteBrand>
            <styled.Logo src="/images/logoWebsite.png" alt={`${companyName} logo`} />
            <styled.WebsiteName>{companyName} <LangIndicator /></styled.WebsiteName>
            <LangSelector />
          </styled.SiteBrand>
        </styled.SocialsWrapper>
        <styled.SectionsWrapper>
          <styled.SectionWrapper>
            <styled.SectionName>{t('footer.sections.pages.title')}</styled.SectionName>
            <Link href={`${language}/templates`} passHref>
              <styled.LinkPage>{t('footer.sections.pages.link_1')}</styled.LinkPage>
            </Link>
            <Link href={`${language}/about`} passHref>
              <styled.LinkPage>{t('footer.sections.pages.link_2')}</styled.LinkPage>
            </Link>
          </styled.SectionWrapper>
          <styled.SectionWrapper>
            <styled.SectionName>{t('footer.sections.info.title')}</styled.SectionName>
            <Link href={`${language}/faq`} passHref>
              <styled.LinkPage>{t('footer.sections.info.link_1')}</styled.LinkPage>
            </Link>
            <styled.LinkPage
              onClick={() => {
                handleClick({
                  event: 'mailto_click',
                  location: window.location.pathname,
                  click_url: 'mailto:notionmadeeasy.info@gmail.com',
                  click_text: t('footer.sections.info.link_3')
                });
              }}
              href="mailto:notionmadeeasy.info@gmail.com"
            >
              {t('footer.sections.info.link_2')}
            </styled.LinkPage>
            <Link href={`${language}/privacy`} passHref>
              <styled.LinkPage>{t('footer.sections.info.link_3')}</styled.LinkPage>
            </Link>
          </styled.SectionWrapper>
        </styled.SectionsWrapper>
      </styled.MainSectionWrapper>
      <styled.CopyRightWrapper>
        {t('footer.copyright', { year: currentYear })}
      </styled.CopyRightWrapper>
    </styled.FooterWrapper>
  );
}
