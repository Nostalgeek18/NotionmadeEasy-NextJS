import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import * as styled from './style';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../Button';
import '../../i18n';
import { CompanyInfos } from '../../utils/util';

export default function AboutSection() {
  const { t, language, Trans } = useLanguage();
  const { COMPANY_NAME: companyName } = CompanyInfos;

  const languageLink = language === "en" ? '' : `/${language}`;

  return (
    <styled.AboutWrapper>
      <styled.ImageContainer>
        <img src="/images/logoFull.png" alt={`${companyName} logo`} />
      </styled.ImageContainer>
      <styled.InfosWrapper>
        <styled.Title>{t('about.title')}</styled.Title>
        <styled.Snippet>{t('about.snippet')}</styled.Snippet>
        <styled.ContactSnippet>
          <Trans 
            t={t}
            i18nKey="about.contact_us"
          >
            {/* HAS TO BE HARDCODED INSIDE TRANS COMPONENT. If future-self watch this and forget about it, go watch cosden ytb channel*/}
            For any inquiries, you may contact us at <a href='mailto:notionmadeeasy.info@gmail.com'>notionmadeeasy.info@gmail.com</a>
          </Trans>
        </styled.ContactSnippet>
        <Link href={`${languageLink}/templates`} passHref>
          <Button>{t('homepage.introduction.CTA_templates')}</Button>
        </Link>
      </styled.InfosWrapper>
    </styled.AboutWrapper>
  );
}
