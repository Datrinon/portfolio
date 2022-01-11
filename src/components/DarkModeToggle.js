import React, { useContext } from 'react'
import { FiSun, FiMoon} from 'react-icons/fi'
import { DarkModeContext } from './App';

import * as D from "./DarkModeToggle.styled";

function DarkModeToggle({setDarkMode}) {

  const darkMode = useContext(DarkModeContext);

  return (
    <D.Container>
      <D.DarkModeButton onClick={() => setDarkMode(prev => !prev)}>
        <D.Icon className="icon" darkMode={!darkMode}>
          <FiSun className="sun"/>
        </D.Icon>
        <D.Icon className="icon" darkMode={darkMode}>
          <FiMoon className="moon"/>
        </D.Icon>
        <D.Ticker className="selected-indicator" darkMode={darkMode}></D.Ticker>
      </D.DarkModeButton>
    </D.Container>
  )
}

export default DarkModeToggle
