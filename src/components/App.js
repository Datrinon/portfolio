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
import triangle from "../data/decals/triangle.svg"


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
            <img src={triangle} alt="a triangle graphic."/>
          </div>
          <div id="about">
            <About />
            <img
              style={{transform: "rotate(180deg)"}}
              src={triangle} alt="a triangle graphic."/>
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="resume">
            <Resume />
          </div>
        </main>
        <footer id="contact">
          <Contact />
        </footer>
        <a href="#top">Top</a>
      </A.Page>
    </DarkModeContext.Provider>
  );
}

export default App;
