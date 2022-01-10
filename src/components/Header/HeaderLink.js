import React from 'react'
import * as H from './Header.styled'

function HeaderLink({href, text}) {
  return (
    <li>
      <H.StyledHeaderLink href={href}>{text}</H.StyledHeaderLink>
    </li>
  )
}

export default HeaderLink
