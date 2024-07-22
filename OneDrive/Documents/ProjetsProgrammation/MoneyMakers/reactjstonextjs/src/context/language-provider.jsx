"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { NextIntlProvider, useIntl } from 'next-intl';
import { useTranslations } from 'next-intl';
import TagManager from 'react-gtm-module';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const t = useTranslations('');
  console.log('INSIDE LANGUAGE PROVIDER !!!', t);
  const intl = useIntl();
  const [language, setLanguage] = useState("en");
  // const [language, setLanguage] = useState(intl.locale);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    TagManager.dataLayer({
      dataLayer: {
        event: 'click_language',
        language_to: lng,
        pageURL: window.location.pathname,
      },
    });

    const newPathName = router.asPath.replace(/^\/(en|fr|es|de)/, `/${lng}`);
    router.push(newPathName);
  };

  useEffect(() => {
    // Optional: Change the language in a similar way to react-i18next
    // This might not be necessary with next-intl as it's already handled by the provider
  }, [language]);

  return (
    <LanguageContext.Provider value={{changeLanguage, t, intl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
