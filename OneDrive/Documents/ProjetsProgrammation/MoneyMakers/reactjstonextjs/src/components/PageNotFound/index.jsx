import React from 'react'
import * as styled from './style'
import { FaArrowLeftLong } from "react-icons/fa6";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useLanguage } from '../../context/LanguageContext';

export default function PageNotFound() {

  const { t } = useLanguage();

  const moveBack = useMoveBack();

  return (
    <styled.PageWrapper>
    <styled.Box>
      <styled.Heading as="h1">
        {t('page404.heading')}
      </styled.Heading>
      <styled.GoBackBTN onClick={moveBack}>
      <FaArrowLeftLong /> {t('page404.back', 'back')}
      </styled.GoBackBTN>
    </styled.Box>
  </styled.PageWrapper>
  )
}
