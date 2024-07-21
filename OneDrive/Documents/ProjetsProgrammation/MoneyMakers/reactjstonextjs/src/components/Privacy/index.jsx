import { Helmet } from 'react-helmet-async'

import * as styled from './style'
import { termlyHTML } from '../../utils/util'
import { useLanguage } from '../../context/LanguageContext'


export default function PrivacyPage() {

    const { t, language } = useLanguage();

    // Construct the canonical URL based on the current language
    const canonicalUrl = `https://notionmadeeasy.co/${language}/privacy`;;

    return (
        <>
            <Helmet>
            <html lang={language} />
                <title>{t('pages.privacy.title')}</title>
                <meta 
                    name="description"
                    content={t('pages.privacy.description')}
                />
                <link rel="canonical" href={canonicalUrl}/>
            </Helmet>
            <div dangerouslySetInnerHTML={{__html : termlyHTML}} />
        </>
    )
}