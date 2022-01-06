import React from 'react'

function HeaderLink({href, text}) {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  )
}

export default HeaderLink
