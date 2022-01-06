import React from 'react'
import HeaderLink from './HeaderLink'


function Header() {
  return (
    <header>
      <div className="left-end">
        <div className="logo">
          Dan Trinh
        </div>
      </div>
      <div className="right-end">
        <nav>
          <ul className="page-sections">
            <HeaderLink href={"#about"} text={"About"} />
            <HeaderLink href={"#skills"} text={"Skills"} />
            <HeaderLink href={"#projects"} text={"Projects"} />
            <HeaderLink href={"#resume"} text={"Resume"} />
            <HeaderLink href={"#contact"} text={"Contact"} />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
