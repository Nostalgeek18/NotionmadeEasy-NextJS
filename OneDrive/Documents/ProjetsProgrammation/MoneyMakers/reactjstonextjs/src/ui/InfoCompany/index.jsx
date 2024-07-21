import React from 'react'

import * as styled from './style'



export default function InfoCompany({logos, children}) {

  return (
    <styled.InfoCompanyWrapper>
      <styled.LogosWrapper>
        {logos.map((logo, index) => {
          return <span key={index}>{logo}</span>   
        })}
      </styled.LogosWrapper>
        <styled.ChildrenWrapper>
         {children}
        </styled.ChildrenWrapper>
    </styled.InfoCompanyWrapper>
  )
}
