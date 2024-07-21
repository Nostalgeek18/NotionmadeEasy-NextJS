import React, { useState } from 'react'
import TagManager from 'react-gtm-module'

import * as styled from './style'
import { useLanguage } from '../../context/LanguageContext'

export default function FAQItem({index, openItem, onSelect, title, label}) {

    if(!label) label = `This is the description for Accordion Item ${index + 1}. This is the description for Accordion Item ${index + 1}`

    function handleClick() {

      // Push event to GTM
      TagManager.dataLayer({
        dataLayer: {
            event: 'click',
            category: 'toggle',
            action: 'click',
            label: 'FAQ_' + title,
            pageURL : window.location.pathname
        }
      });

      //pass method from parameters
      onSelect(index)
    }

  return (
    <styled.AccordionItem $isOpen={openItem === index} key={index}>
            <styled.AccordionItemHeader onClick={handleClick}>
                <styled.AccordionItemHeaderTitle>{title}</styled.AccordionItemHeaderTitle>
                <styled.AccordionItemHeaderIcon
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                $isOpen={openItem === index}
                >
                <path d="m6 9 6 6 6-6" />
                </styled.AccordionItemHeaderIcon>
            </styled.AccordionItemHeader>
            <styled.AccordionItemDescriptionWrapper $isOpen={openItem === index}>
                <styled.AccordionItemDescription>
                <styled.AccordionItemDescriptionHr $isOpen={openItem === index} />
                <styled.AccordionItemDescriptionText>
                    {label}
                </styled.AccordionItemDescriptionText>
                </styled.AccordionItemDescription>
            </styled.AccordionItemDescriptionWrapper>
    </styled.AccordionItem>
  )
}
