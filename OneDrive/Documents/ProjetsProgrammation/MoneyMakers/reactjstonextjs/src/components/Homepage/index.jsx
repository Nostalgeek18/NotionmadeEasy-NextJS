import React from 'react'
import { Helmet } from 'react-helmet-async';
import { helmetJsonLdProp } from 'react-schemaorg';

import { useLanguage } from '../../context/LanguageContext';
import * as styled from './style'
import Introduction from '../../ui/Introduction';
import ThreeSteps from '../../ui/ThreeSteps';
import InfosCompany from '../../ui/InfosCompany';
import FAQ from '../../ui/FAQ';
import { bundles } from '../../data/data-bundle';
import BundleSection from '../../ui/BundleSection';

export default function Homepage() {


  const { t, language, Trans } = useLanguage();

  // Construct the canonical URL based on the current language
  const canonicalUrl = `https://notionmadeeasy.co/${language}`;

  return (
    <>
      <Helmet script={[
          helmetJsonLdProp({
            "@context" : "https://schema.org",
            "@type" : "OnlineStore",
            "name" : "Notion made easy",
            "description" : "Notion templates seller",
            "url" : "https://notionmadeeasy.co/",
            "email" : "notionmadeeasy.info@gmail.com",
            "image" : "https://notionmadeeasy.co/images/faviconLogo.png",
            "logo" : "https://notionmadeeasy.co/images/faviconLogo.png",
            "contactPoint" : [
              {
                "@type" : "ContactPoint",
                "telephone" : "+1 514-575-5562",
                "contactType" : "customer service"
              }
            ],
            "knowsLanguage": [
              {
                "@type": "Language",
                "name": "English",
                "alternateName": "en"
              },
              {
                "@type": "Language",
                "name": "French",
                "alternateName": "fr"
              }
            ]
          })
        ]}>
      <html lang={language} />
          <title>{t('pages.homepage.title', 'Notion made easy | Notion templates for productivity')}</title>
          <meta 
            name="description"
            content={t('pages.homepage.description', 'Notion is the all-in-one productivity app for task management and note-taking. Organize your life our  dashboard templates.')}
          />
          <link rel="canonical" href={canonicalUrl}/>
      </Helmet>
      <Introduction />
      <ThreeSteps />
      <InfosCompany />
      {/* <BundleSection bundle={IntroBundle} /> */}
      <FAQ />
    </>
  )
}
