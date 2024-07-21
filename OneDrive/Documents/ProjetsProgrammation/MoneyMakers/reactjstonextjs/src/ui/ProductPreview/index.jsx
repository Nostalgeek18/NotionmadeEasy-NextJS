import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';
import { helmetJsonLdProp } from 'react-schemaorg';
import Link from 'next/link';
import * as styled from './style';

export default function ProductPreview({ name, description, price, formatted_price, short_url, imagePreview, currency }) {
  const [isHovering, setIsHovering] = useState(false);

  // const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <>
      <Link href="short_url" passHref>
        <styled.BundlePreviewWrapper 
          onMouseEnter={() => setIsHovering(true)} 
          onMouseLeave={() => setIsHovering(false)}
          itemScope
          itemType="https://schema.org/Product"
        >
          <styled.ImgWrapper>
            <styled.BundleImage 
              itemProp="image" 
              src={imagePreview} 
              alt={`${name} Notion template product preview`}
            />
            <styled.Overlay $isHovering={isHovering}></styled.Overlay>
          </styled.ImgWrapper>
          <styled.TopSection>
            <styled.BundleName itemProp="name">{name}</styled.BundleName>
            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
             <meta itemProp="availability" content="https://schema.org/OnlineOnly" />
              <meta itemProp="priceCurrency" content={currency.toUpperCase()} />
              <styled.BundleCTA itemProp="price" content={price}>
                {price === 0 ? 'Free' : `${formatted_price}`}
              </styled.BundleCTA>
              {/* Shipping details */}
              <div itemProp="shippingDetails" itemScope itemType="https://schema.org/OfferShippingDetails">
                <div itemProp="shippingDestination" itemScope itemType="https://schema.org/DefinedRegion">
                  <meta itemProp="name" content="Worldwide" />
                </div>
                <div itemProp="deliveryTime" itemScope itemType="https://schema.org/ShippingDeliveryTime">
                  <meta itemProp="businessDays" content="0" />
                </div>
              </div>
            </div>
          </styled.TopSection>
          {/* <styled.Description dangerouslySetInnerHTML={{ __html: sanitizedDescription }}/> */}
          <styled.Description itemProp="description">
            {description}
          </styled.Description>
        </styled.BundlePreviewWrapper>
      </Link>
    </>
  );
}
