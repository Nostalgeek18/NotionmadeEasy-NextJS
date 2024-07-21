import React from 'react'
import * as styled from './style';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'

import { useDarkMode } from "../../context/DarkModeContext";

export default function DarkModeToggle() {

    const { isDarkMode, toggleDarkMode } = useDarkMode();


  return (
    <styled.ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </styled.ButtonIcon>
  )
}
