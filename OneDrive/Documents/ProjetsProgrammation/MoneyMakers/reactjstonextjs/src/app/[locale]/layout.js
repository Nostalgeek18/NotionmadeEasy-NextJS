import { NextIntlClientProvider, useMessages } from 'next-intl';

import QueryClientProviderWrapper from '@/components/QueryClientProviderWrapper';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';
import OutletWrapper from '@/ui/OutletWrapper';
import { LanguageProvider } from '@/context/LanguageContext';
import { DarkModeProvider } from '@/context/DarkModeContext';
import GlobalStyles from '@/styles/GlobalStyles';
import { useTranslations } from "next-intl";
import Head from 'next/head'


// Fetch messages and render layout
export default function RootLayout({
  children,
  params: { locale },
}) {

  const t = useTranslations();
  const title = t('pages.homepage.title', 'Notion made easy | Notion templates for productivity');
  const description = t('pages.homepage.description', 'Notion is the all-in-one productivity app for task management and note-taking. Organize your life with our dashboard templates.');
  const canonicalUrl = `https://notionmadeeasy.co/en`; // Adjust as needed

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "name": "Notion made easy",
    "description": "Notion templates seller",
    "url": "https://notionmadeeasy.co/",
    "email": "notionmadeeasy.info@gmail.com",
    "image": "https://notionmadeeasy.co/images/faviconLogo.png",
    "logo": "https://notionmadeeasy.co/images/faviconLogo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1 514-575-5562",
        "contactType": "customer service"
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
  };

  
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body >
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <link rel="canonical" href={`https://notionmadeeasy.co/${locale}`} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
        </Head>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}>
            <GlobalStyles />
            <DarkModeProvider>
            <LanguageProvider>
              <Header/>
              <OutletWrapper>
                <QueryClientProviderWrapper>
                  {children}
                </QueryClientProviderWrapper>
              </OutletWrapper>
              <Footer />
            </LanguageProvider>
            </DarkModeProvider>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
