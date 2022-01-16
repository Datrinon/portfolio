import React, { useState, useContext } from 'react';

import '../css/reset.css';
import '../css/App.css';
import Header from './Header/Header';
import About from './Content/About';
import Skills from './Content/Skills';
import Projects from './Content/Projects/Projects';
import Resume from './Content/Resume';
import Contact from './Content/Contact';

// styled stuffs
import * as A from "./_styled/App.styled";
import Landing from './Content/Landing';

// svg stuffs
import {ReactSVG} from "react-svg";
import triangle from "../data/decals/triangle.svg"
import triangle2 from "../data/decals/triangle2.svg"

import {BsArrowBarUp} from "react-icons/bs";
import ContactButtons from './Content/ContactButtons';

export const DarkModeContext = React.createContext(null);

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={darkMode}>
      
      <A.Page className="page-container" darkMode={darkMode}>
        <a name="top"></a>
        <Header setDarkMode={setDarkMode}/>
        <main role="main">
          <div>
            <Landing />
            <A.AboutUpperTriangle src={triangle} alt="a triangle graphic."/>
          </div>
          <div id="about" className="page-section">
            <About />
            {/* <ReactSVG
              style={{transform: "rotate(180deg)"}}
              src={triangle} alt="a triangle graphic."/> */}
          </div>
          <div id="skills" className="page-section">
            <Skills />
          </div>
          <div id="projects" className="page-section">
            <Projects />
          </div>
          <div id="resume" className="page-section">
            <Resume />
          </div>
        </main>
        <footer id="contact" className="page-section">
          <Contact />
        </footer>
        <A.FloatingContactButtonGroup className="floating-contact-buttons">
          <ContactButtons />
        </A.FloatingContactButtonGroup>
        <A.FloatingReturnButton href="#top">
          <BsArrowBarUp/>
        </A.FloatingReturnButton>
      </A.Page>
    </DarkModeContext.Provider>
  );
}

export default App;
