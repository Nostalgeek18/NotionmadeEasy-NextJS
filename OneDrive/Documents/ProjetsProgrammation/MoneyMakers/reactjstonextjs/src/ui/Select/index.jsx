import React, { useState } from 'react'
import { TbArrowsSort } from "react-icons/tb";

import * as styled from './style'


export default function Select({options, value,onChange, ...props}) {


  return (
    <>
      <styled.Select value={value} onChange={onChange} {...props}>
          {options.map(option =>(
            <option value={option.value} key={option.value}>{option.label}</option>
            ))}
      </styled.Select>
    </>
  )
}

