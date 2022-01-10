import React from 'react'
import HeaderLink from './HeaderLink'


function Header({setDarkMode}) {
  return (
    <header>
      <div className="left-end">
        <h1 className="logo">
          Dan Trinh
        </h1>
      </div>
      <div className="right-end">
        <nav>
          <ul className="page-sections">
            <HeaderLink href={"#about"} text={"About"} />
            <HeaderLink href={"#skills"} text={"Skills"} />
            <HeaderLink href={"#projects"} text={"Projects"} />
            <HeaderLink href={"#resume"} text={"Resume"} />
            <HeaderLink href={"#contact"} text={"Contact"} />
            <button onClick={() => setDarkMode(prev => !prev)}>Toggle Dark Mode</button>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
