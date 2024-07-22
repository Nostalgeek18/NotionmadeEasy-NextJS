import React, {useState } from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import { useLanguage } from '@/context/LanguageContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import * as styled from './style'

export default function LangSelector() {


  const [dropdownOpen, setDropdownOpen] = useState(false);
    const { changeLanguage, language : currentLanguageCode } = useLanguage()


    const toggleDropdown = () => {
      console.log('dropdownOpen is : ', dropdownOpen);
      setDropdownOpen(!dropdownOpen);
  };

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
    <styled.Dropdown>
            <styled.Button onClick={toggleDropdown}>
                <styled.Flag src={`https://flagcdn.com/${currentCountryCode}.svg`} alt={`flag-${currentCountryCode}`} />
            </styled.Button>
            <styled.DropdownMenu $isOpen={dropdownOpen} >
                {orderedLanguages.map(({ code, name, country_code }) => (
                    <li key={country_code}>
                        <styled.DropdownItem
                            onClick={() => changeLanguage(code)}
                            disabled={code === currentLanguageCode}
                        >
                            <styled.FlagIcon src={`https://flagcdn.com/${country_code}.svg`} alt={`flag-${country_code}`} opacity={code === currentLanguageCode ? 0.5 : 1} />
                            {name}
                        </styled.DropdownItem>
                    </li>
                ))}
            </styled.DropdownMenu>
      </styled.Dropdown>
  )
}
