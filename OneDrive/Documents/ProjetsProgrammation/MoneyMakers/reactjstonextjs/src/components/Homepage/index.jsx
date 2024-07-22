"use client";
import React from 'react'

import * as styled from './style'
import Introduction from '../../ui/Introduction';
import ThreeSteps from '../../ui/ThreeSteps';
import InfosCompany from '../../ui/InfosCompany';
import FAQ from '../../ui/FAQ';
import BundleSection from '../../ui/BundleSection';

export default function Homepage() {



  // Construct the canonical URL based on the current language

  return (
    <>
      <Introduction />
      <ThreeSteps />
      <InfosCompany />
      <FAQ />
    </>
  )
}
