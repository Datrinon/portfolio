import React, { useState, useContext, useRef, useEffect } from 'react';

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

  const [ contactsVisible, setContactsVisible ] = useState(true);
  const [ topAnchorVisible, setTopAnchorVisible ] = useState(false);
  // IO code here.
  const footerRef = useRef(null);
  const landingRef = useRef(null);
  const topAnchorIntersectionObserver = useRef(null);
  const contactsIntersectionObserver = useRef(null);

  useEffect(() => {
    // set up intersection observers to watch if we get to element of "about me"
    // then show the arrow bar up thing.
    const onLandingIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTopAnchorVisible(false);
        } else {
          setTopAnchorVisible(true);
        }
      });
    }

    const onFooterIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setContactsVisible(false);
        } else {
          setContactsVisible(true);
        }
      });
    }

    /**
     * Applies the following options:
     * Watch for intersections on the client viewport
     * Safety bounds of 1em
     * At a threshold of 0.2 past the bounds, invoke the observer's callback.
     */
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    topAnchorIntersectionObserver.current =
        new IntersectionObserver(onLandingIntersect, observerOptions);

    contactsIntersectionObserver.current =
        new IntersectionObserver(onFooterIntersect, observerOptions);

    topAnchorIntersectionObserver.current.observe(landingRef.current);
    contactsIntersectionObserver.current.observe(footerRef.current);

    return () => {
      topAnchorIntersectionObserver.current.unobserve();
      contactsIntersectionObserver.current.unobserve();
    }
  }, []);

  return (
    <DarkModeContext.Provider value={darkMode}>
      
      <A.Page className="page-container" darkMode={darkMode}>
        <Header setDarkMode={setDarkMode}/>
        <main role="main">
          <div id="landing" ref={landingRef}>
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
        <footer id="contact" className="page-section" ref={footerRef}>
          <Contact />
        </footer>
        <A.FloatingContactButtonGroup
          className="floating-contact-buttons"
          $display={contactsVisible}>
          <ContactButtons />
        </A.FloatingContactButtonGroup>
        <A.FloatingReturnButton
          href="#"
          onClick={() => console.log("Clicked anchor")}
          $display={topAnchorVisible}>
          <BsArrowBarUp/>
        </A.FloatingReturnButton>
      </A.Page>
    </DarkModeContext.Provider>
  );
}

export default App;
