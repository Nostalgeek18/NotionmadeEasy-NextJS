import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation, Trans } from 'react-i18next';
import TagManager from 'react-gtm-module';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const router = useRouter();

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
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, Trans }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
