"use client";
import React, { createContext, useState, useContext, useEffect, useTransition, startTransition } from 'react';
import { useRouter } from 'next/navigation';
import { NextIntlProvider, useIntl, useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import TagManager from 'react-gtm-module';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const t = useTranslations('');
  const localActive = useLocale();
  const [language, setLanguage] = useState(localActive);

  // const [language, setLanguage] = useState(intl.locale);

  const changeLanguage = (lng) => {
    console.log('changing language to : ', lng);
    startTransition(() => {
      router.replace(`/${lng}`)
    })
    TagManager.dataLayer({
      dataLayer: {
        event: 'click_language',
        language_to: lng,
        pageURL: window.location.pathname,
      },
    });

    // const newPathName = router.asPath.replace(/^\/(en|fr|es|de)/, `/${lng}`);
    // router.push(newPathName);
  };

  const Trans = 'EMPTY VALUE FOR NOW, HAS TO FIND EQUIVALANT IN NEXT.JS'
  return (
    <LanguageContext.Provider value={{changeLanguage, t, Trans, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
