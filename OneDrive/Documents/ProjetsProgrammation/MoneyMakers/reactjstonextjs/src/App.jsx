// src/pages/_app.js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { DarkModeProvider } from '../context/DarkModeContext';
import { LanguageProvider } from '../context/LanguageContext';
import GlobalStyles from '../styles/GlobalStyles';
import '../i18n';  // Ensure i18n is initialized

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <DarkModeProvider>
          <LanguageProvider>
            <GlobalStyles />
            <Component {...pageProps} />
          </LanguageProvider>
        </DarkModeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
