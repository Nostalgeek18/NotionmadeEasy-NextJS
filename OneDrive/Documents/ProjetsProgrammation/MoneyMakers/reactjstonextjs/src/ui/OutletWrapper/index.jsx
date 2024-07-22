"use client";
import React from 'react'

import * as styled from './style';

export default function OutletWrapper({children}) {
  return (
    <styled.WrapperOutlet>
        {children}
    </styled.WrapperOutlet>
  )
}
