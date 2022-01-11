import React, { useState, useContext } from 'react'
import HeaderLink from './HeaderLink'
import { VscMenu, VscClose } from 'react-icons/vsc'

import * as H from "./Header.styled";
import { DarkModeContext } from '../App';
import DarkModeToggle from '../DarkModeToggle';

function Header({ setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const darkMode = useContext(DarkModeContext);

  return (
    <H.Header menuOpen={menuOpen}>
      <H.LogoContainer className="left-end">
        <H.MenuToggleButton
          className="menu-toggle-button"
          onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ?
            <VscClose /> :
            <VscMenu />}
        </H.MenuToggleButton>
        <H.NameHeading className="logo">
          Dan Trinh
        </H.NameHeading>
      </H.LogoContainer>
      <H.Menu className="menu">
        <nav className="nav-links">
          <ul className="page-sections">
            <HeaderLink href={"#about"} text={"About"} />
            <HeaderLink href={"#skills"} text={"Skills"} />
            <HeaderLink href={"#projects"} text={"Projects"} />
            <HeaderLink href={"#resume"} text={"Resume"} />
            <HeaderLink href={"#contact"} text={"Contact"} />
            <li>
              <DarkModeToggle setDarkMode={setDarkMode}/>
            </li>
          </ul> 
        </nav>
      </H.Menu>
    </H.Header>
  )
}

export default Header
