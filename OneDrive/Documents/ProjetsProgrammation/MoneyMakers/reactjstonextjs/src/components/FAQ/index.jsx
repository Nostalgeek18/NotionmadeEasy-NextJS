import React from 'react'
import { Helmet } from 'react-helmet-async'

import FAQ from '../../ui/FAQ'
import { useLanguage } from '../../context/LanguageContext'

export default function FAQPage() {

  const { t, language } = useLanguage();

  // Construct the canonical URL based on the current language
  const canonicalUrl = `https://notionmadeeasy.co/${language}/faq`;

  return (
    <>
      <Helmet>
      <html lang={language} />
          <title>{t('templates.title', 'Notion made easy | FAQ')}</title>
          <meta 
            name="description"
            content={t('templates.description', 'At Notion Made Easy, we empower productivity seekers with user-friendly and efficient tools.')}
          />
          <link rel="canonical" href={canonicalUrl}/>
      </Helmet>
      <FAQ />
    </>
  )
}
