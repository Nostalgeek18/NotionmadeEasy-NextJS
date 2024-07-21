import React from 'react'

import { useLanguage } from '../../context/LanguageContext'
import * as styled from './style'


export default function LangIndicator() {

const { language } = useLanguage();

const LangIndication = language == "en" ? '' : `(${language})`
  return (
    <styled.LangIndicator>
        {LangIndication}
    </styled.LangIndicator>
  )
}
