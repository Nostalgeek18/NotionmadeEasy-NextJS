import React from 'react'
import { Helmet } from 'react-helmet-async';

import { useLanguage } from '../../context/LanguageContext';

import AboutSection from '../../ui/AboutSection';

export default function AboutPage() {

  const { t, language } = useLanguage();

  // Construct the canonical URL based on the current language
  const canonicalUrl = `https://notionmadeeasy.co/${language}/about`;

  return (
    <>
      <Helmet>
      <html lang={language} />
          <title>{t('pages.about.title')}</title>
          <meta 
            name="description"
            content={t('pages.about.description')}
          />
          <link rel="canonical" href={canonicalUrl}/>
      </Helmet>
      <AboutSection />
    </>
  )
}
