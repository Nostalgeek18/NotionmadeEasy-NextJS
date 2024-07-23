"use client";
import React from 'react'
// import { Helmet } from 'react-helmet-async';
// import { helmetJsonLdProp } from 'react-schemaorg';

import { useLanguage } from '../../context/LanguageContext';
import * as styled from './style'
import Products from '../../features/Products';
import BundleOperations from '../../features/BundleOperations';
import BundlesOffers from '../../ui/BundlesOffers';

export default function TemplatesPage() {

  const { language, changeLanguage, t } = useLanguage();

  // Construct the canonical URL based on the current language
  const canonicalUrl = `https://notionmadeeasy.co/${language}/templates`;

  const field= 'field';
  return (
    <>
        {/* <Helmet>
          <title>{t('pages.templates.title', 'Notion made easy | Notion templates gallery')}</title>
          <html lang={language} />
          <meta 
            name="description"
            content={t('pages.templates.description', 'You like Notion, but don’t have time or energy to build an entire workspace from scratch? Try our pre-built templates for your personal & student life.')}
          />
          <link rel="canonical" href={canonicalUrl}/>
        </Helmet> */}
        <styled.TemplatesTitle>{t('templates.title', 'Easy notion templates')}</styled.TemplatesTitle>
        <BundleOperations field={field} />
        {/* <Products /> */}
        {/* <BundlesOffers /> */}
    </>
  )
}
