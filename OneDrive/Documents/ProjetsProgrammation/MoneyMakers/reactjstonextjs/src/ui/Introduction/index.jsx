import React from 'react'
import { SiNike } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { SiUber } from "react-icons/si";
import { TbBrandToyota } from "react-icons/tb";
import { SiGeneralelectric } from "react-icons/si";
import { FaPinterest } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import TagManager from 'react-gtm-module';

import Button from '../Button';
import { useLanguage } from '../../context/LanguageContext';
import * as styled from './style'

export default function Introduction() {

    const { language, t } = useLanguage();

    const LanguageLink = language == "en" ? '' : `${language}/`

    const Logos = [
        <SiNike />,
        <FaAmazon />,
        <SiUber />,
        <TbBrandToyota />,
        <SiGeneralelectric />,
        <FaPinterest />,
        <FaFigma />,
    ]

    function handleClick() {
         // Push event to GTM
         TagManager.dataLayer({
            dataLayer: {
                event: 'notion_templates_CTA_click',
                click_url : `${LanguageLink}/templates`,
                click_text: t('homepage.introduction.CTA_templates'), 
                location : window.location.pathname,
            }
        });
    }
    
    return (
        <styled.IntroductionWrapper>
            <styled.Title>{t('homepage.introduction.title')}</styled.Title>
            <styled.SubTitle>{t('homepage.introduction.subtitle')}</styled.SubTitle>
            <styled.CTAsWrapper>
                <Button onClick={handleClick} href={`templates`}>
                    {t('homepage.introduction.CTA_templates')}
                </Button>
                {/* <styled.CTASecundary>{t('homepage.introduction.CTA_work_with_us')}</styled.CTASecundary> */}
            </styled.CTAsWrapper>
            <styled.Banner>
                <styled.BannerLabel>{t('homepage.introduction.trusted_by')}</styled.BannerLabel>
                <styled.LogosScroller>
                    <styled.ScrollerSlide>
                        {Logos.map((logo, index) => <styled.StyledLogo key={index}>
                            {logo}
                        </styled.StyledLogo>)}
                    </styled.ScrollerSlide>
                    <styled.ScrollerSlide>
                        {Logos.map((logo, index) => <styled.StyledLogo key={index}>
                            {logo}
                        </styled.StyledLogo>)}
                    </styled.ScrollerSlide>
                </styled.LogosScroller>
            </styled.Banner>
        </styled.IntroductionWrapper>
    )
}