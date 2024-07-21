import React, {useState} from 'react'

import * as styled from './style'
import FAQItem from '../FAQItem';
import { useLanguage } from '../../context/LanguageContext';

export default function FAQ() {

  const { t, language } = useLanguage();

  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  //TODO
  // pass a t() object from i18n as label each time

  const FAQDatas = [
    {
        title : t('FAQ.questions.question1.title'),
        label : t('FAQ.questions.question1.snippet')
    },
    {
        title : t('FAQ.questions.question2.title'),
        label : t('FAQ.questions.question2.snippet')
    },
    {
      title : t('FAQ.questions.question3.title'),
      label : t('FAQ.questions.question3.snippet')
    },
    {
    title : t('FAQ.questions.question4.title'),
    label : t('FAQ.questions.question4.snippet')
    },
    {
      title : t('FAQ.questions.question5.title'),
      label : t('FAQ.questions.question5.snippet')
    }
  ]

  return (
    <styled.FAQWrapper>
        <styled.FAQTitle>{t('FAQ.snippet')}</styled.FAQTitle>
        <styled.Accordion>
        {FAQDatas.map((data, index) => (
            <FAQItem key={index} index={index} openItem={openItem} onSelect={toggleItem} title={data.title} label={data.label}/>
        ))}
        </styled.Accordion>
    </styled.FAQWrapper>
  )
}
