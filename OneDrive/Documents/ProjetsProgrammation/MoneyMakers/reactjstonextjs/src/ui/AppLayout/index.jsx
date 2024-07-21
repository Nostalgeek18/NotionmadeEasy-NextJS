// src/components/Layout.js
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as styled from './style';
import Header from '../Header';
import Footer from '../Footer';

const AppLayout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or return a loading indicator, etc.
  }


  return createPortal(
    <styled.AppLayout>
      <Header />
      <styled.WrapperOutlet>
        {children}
      </styled.WrapperOutlet>
      <Footer />
    </styled.AppLayout>,
    document.body // Will render the component 'outside the normal flow and will be directly a top element in the DOM.
  );
};

export default AppLayout;
