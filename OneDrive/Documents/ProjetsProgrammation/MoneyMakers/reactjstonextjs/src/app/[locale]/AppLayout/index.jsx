
"use client";
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { DarkModeProvider } from '@/context/DarkModeContext';
// import { LanguageProvider } from '@/context/LanguageContext';
import GlobalStyles from '@/styles/GlobalStyles';
import * as styled from './style';
// import Header from '@/ui/Header';
// import Footer from '@/ui/Footer';
import { i18n } from 'next-i18next';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const Layout = ({ children }) => {
  console.log('INSIDE LOCALE')
  return (
    children
    // <QueryClientProvider client={queryClient}>
    //   <HelmetProvider>
    //     <DarkModeProvider>
    //       <LanguageProvider>
    //         <GlobalStyles />
    //         <styled.AppLayout>
    //           <Header />
    //           <styled.WrapperOutlet>
    //             {children}
    //           </styled.WrapperOutlet>
    //           <Footer />
    //         </styled.AppLayout>
    //       </LanguageProvider>
    //     </DarkModeProvider>
    //   </HelmetProvider>
    // </QueryClientProvider>
  );
};

export default Layout;
