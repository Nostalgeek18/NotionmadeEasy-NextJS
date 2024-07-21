import React from 'react'

import * as styled from './style'

//For homepage - NOT TO USE AT THE MOMENT
export default function BundleSection({bundle}) {

    const { 
        id, 
        name, 
        description, 
        price, 
        perks,
        image
    } = bundle;

  return (
    <styled.SectionWrapper>
        <styled.BundleImage src={image} />
        <styled.BundleInfosSection>
            <styled.BundleTitle>{name}</styled.BundleTitle>
            <styled.BundleDescription>{description}</styled.BundleDescription>
            <styled.BundleCTA>Get this bundle (${price})</styled.BundleCTA>
        </styled.BundleInfosSection>
    </styled.SectionWrapper>
  )
}
