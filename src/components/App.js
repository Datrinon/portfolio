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
import triangle from "../data/decals/triangle.svg";
import polygon from "../data/decals/polygon.svg";
import wave from "../data/decals/wave.svg";

import {BsArrowBarUp} from "react-icons/bs";
import ContactButtons from './Content/ContactButtons';
import { LIGHT_THEME, DARK_THEME } from './_styled/colors.styled';

export const DarkModeContext = React.createContext(null);
export const ThemeContext = React.createContext(null);


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(LIGHT_THEME);

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
      topAnchorIntersectionObserver.current.unobserve(landingRef.current);
      contactsIntersectionObserver.current.unobserve(footerRef.current);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      setTheme(DARK_THEME)
    } else {
      setTheme(LIGHT_THEME)
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={darkMode}>
      
      <A.Page className="page-container" darkMode={darkMode}>
        <Header setDarkMode={setDarkMode}/>
        <A.Main role="main" theme={theme}>
          <div id="landing" className="landing" ref={landingRef}>
            <Landing />
            {/* <A.FooterTriangle src={triangle}/> */}
          </div>
          <div id="about" className="about page-section">
            <A.DividingShape
              src={triangle}
              $bot={"3px"}
      <ThemeContext.Provider value={theme}>

        <A.Page className="page-container" darkMode={darkMode}>
          <Header setDarkMode={setDarkMode} />
          <A.Main role="main" theme={theme}>
            <div id="landing" className="landing" ref={landingRef}>
              <Landing />
              {/* <A.FooterTriangle src={triangle}/> */}
            </div>
            <div id="about" className="about page-section">
              <A.DividingShape
                src={triangle}
                $bot={"3px"}
              />
            <About />
          </div>
          <div id="skills" className="skills page-section">
            {/* <A.DividingShape
              <About />
            </div>
            <div id="skills" className="skills page-section">
              {/* <A.DividingShape
              src={triangle}
              $rot={"rotateY(180deg)"}
              /> */}
            {/* <A.DividingShape
              {/* <A.DividingShape
              src={polygon}
              $rot={"rotateY(180deg)"}
              $bot={"1px"}
              /> */}
            <Skills />
            {/* <A.DividingShape
              <Skills />
              {/* <A.DividingShape
              src={polygon}
              $rot={"rotateX(180deg)"}
              /> */}
            {/* <A.DividingShape
              {/* <A.DividingShape
              src={triangle}
              $rot={"rotate(180deg)"}
              /> */}
          </div>
          <div id="projects" className="projects page-section">
          <A.DividingShape
              className="heading-divider"
              src={wave}
              $rot={"rotate(180deg)"}
              $bot={"5px"}
            </div>
            <div id="projects" className="projects page-section">
              <A.DividingShape
                className="heading-divider"
                src={wave}
                $rot={"rotate(180deg)"}
                $bot={"5px"}
              />
            <Projects />
            <A.DividingShape
              className="footer-divider"
              src={wave}
              $top={"3px"}
              <Projects />
              <A.DividingShape
                className="footer-divider"
                src={wave}
                $top={"3px"}
              />
          </div>
          <div id="resume" className="resume page-section">

            <Resume />
          </div>
        </A.Main>
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
            </div>
            <div id="resume" className="resume page-section">

              <Resume />
            </div>
          </A.Main>
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
            <BsArrowBarUp />
          </A.FloatingReturnButton>
        </A.Page>
      </ThemeContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default App;
