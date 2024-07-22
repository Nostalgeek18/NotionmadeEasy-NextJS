import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import { useLanguage } from '@/context/LanguageContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import * as styled from './style'

export default function LangSelector() {


    const { changeLanguage, language : currentLanguageCode } = useLanguage()


    const languages = [
        {
            code: 'en',
            name: 'English',
            country_code : 'gb',
            flag: 'https://flagcdn.com/gb.svg'
        }, 
        {
            code: 'fr',
            name: 'Français',
            country_code : 'fr',
            flag: 'https://flagcdn.com/fr.svg'
        }
        // , 
        // {
        //     code: 'es',
        //     name: 'Español',
        //     country_code : 'es',
        //     flag: 'https://flagcdn.com/es.svg'
        // },
        // {
        //     code: 'de',
        //     name : 'Deutsch',
        //     country_code: 'de',
        //     flag: 'https://flagcdn.com/de.svg'
        // }
    ]


    const { country_code : currentCountryCode } = languages.find(({code}) => code == currentLanguageCode);

    const orderedLanguages = languages.filter(({code}) => code === currentCountryCode).concat(languages.filter(({code}) => code !== currentCountryCode)) //all country codes except current ones


  return (
    <div className="dropdown">
        <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <styled.Flag src={`https://flagcdn.com/${currentCountryCode}.svg`} alt={`flag-${currentCountryCode}`} />
        </button>
        <ul className="dropdown-menu">
        {orderedLanguages.map(({code, name, country_code}) => (
                <li key={country_code}>
                    <button 
                    className="dropdown-item p-3" 
                    onClick={()=> changeLanguage(code)}
                    disabled={code === currentLanguageCode}
                    >
                        <span style={{opacity : code === currentLanguageCode ? 0.5 : 1}} className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                        {name}
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}
