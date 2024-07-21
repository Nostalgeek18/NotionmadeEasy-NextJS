import React from 'react'
import { IoIosCheckmark } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

import * as styled from './style'


export default function BundlesOffers() {
  return (
    <styled.SectionWrapper>
      <styled.OfferWrapper>
        <styled.OfferTitle>Life OS Pro</styled.OfferTitle>
        <styled.OfferPrice>$97</styled.OfferPrice>
        <styled.Delimiter></styled.Delimiter>
        <styled.FeaturesWrapper>
            <styled.Feature><IoIosCheckmark size="2em" /> Super awesome feature</styled.Feature>
            <styled.Feature><IoIosCheckmark size="2em" /> Super awesome feature</styled.Feature>
            <styled.Feature><IoIosCheckmark size="2em" /> Super awesome feature</styled.Feature>
            <styled.Feature><IoIosCheckmark size="2em" /> Super awesome feature</styled.Feature>
            <styled.Feature><IoIosCheckmark size="2em" /> Super awesome feature</styled.Feature>
        </styled.FeaturesWrapper>
        <styled.CTA>Get it now <BsArrowRight /></styled.CTA>
      </styled.OfferWrapper>
    </styled.SectionWrapper>
  )
}
