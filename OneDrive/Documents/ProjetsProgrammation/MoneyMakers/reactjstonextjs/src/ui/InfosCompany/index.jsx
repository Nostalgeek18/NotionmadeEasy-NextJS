import React from 'react'
import { MdDevices } from "react-icons/md";
import { LiaHandshakeSolid } from "react-icons/lia";
import { SiGooglecalendar } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiPlugsBold } from "react-icons/pi";
import { MdOutlineDevices } from "react-icons/md";

import * as styled from './style'
import InfoCompany from '../InfoCompany';

import { useLanguage } from '../../context/LanguageContext';



export default function InfosCompany() {

  const { t } = useLanguage();
  

  return (
    <styled.InfosCompanyWrapper>
        <InfoCompany logos={[<LiaHandshakeSolid  size="3em"/>]}>
          <styled.InfoTitle>{t('features.feature_1.title')}</styled.InfoTitle>
          {t('features.feature_1.text')}
        </InfoCompany>
        <InfoCompany logos={[<MdOutlineDevices size="3em"/>]}>
          <styled.InfoTitle>{t('features.feature_2.title')}</styled.InfoTitle>
            {t('features.feature_2.text')}
        </InfoCompany>
        <InfoCompany logos={[<PiPlugsBold size="3em"/>]}>
        <styled.InfoTitle>{t('features.feature_3.title')}</styled.InfoTitle>
              <styled.CenterWrapper>
                <SiGooglecalendar size="2em"/>
                <FaGoogleDrive size="2em"/>
                <SiGmail size="2em"/>
              </styled.CenterWrapper>
         </InfoCompany> 
    </styled.InfosCompanyWrapper>
  )
}
