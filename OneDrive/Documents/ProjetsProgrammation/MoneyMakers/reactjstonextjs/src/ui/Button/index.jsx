import React from 'react';
import Link from 'next/link';
import * as styled from './style';

export default function Button({ onClick = "", href = "/", children, type = "main" }) {
  return (
    <Link href={href} passHref>
      <styled.StyledLink onClick={onClick} $type={type}>
        {children}
      </styled.StyledLink>
    </Link>
  );
}
