// src/utils/languageUtils.js

export const getLanguagePrefix = (url) => {
    console.log('url : ', url);
    const pathSegments = url.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
  
    if (['en', 'fr', 'es', 'de'].includes(firstSegment)) {
      return { prefix: firstSegment, path: '/' + pathSegments.slice(1).join('/') };
    }
    return { prefix: 'en', path: url };
  };
  
  export const setLanguagePrefix = (url, lang) => {
    const { prefix, path } = getLanguagePrefix(url);
  
    if (lang === 'en') {
      return path; // Remove language prefix for default language
    }
  
    return `/${lang}${path === '/' ? '' : path}`;
  };