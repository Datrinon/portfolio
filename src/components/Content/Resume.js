import React, { useState, useRef, useEffect, useContext } from 'react'
import Section from './Section'

import resumePdf from "../../data/resume-DanTrinh.pdf"

import * as R from "./styled/Resume.styled";

import { GoLinkExternal } from "react-icons/go";
import { DarkModeContext, ThemeContext } from '../App';

function Resume() {

  const darkMode = useContext(DarkModeContext);
  const theme = useContext(ThemeContext);
  const [hidden, setHidden] = useState(false);
  
  const prevGradient = useRef(theme.decal2);
  const gradient = useRef(null);
  const [gradientTheme, setGradientTheme] = useState(theme.decal2);

  useEffect(() => {
    // when the theme changes...
    // set two.
    prevGradient.current = gradientTheme;
    // fade for one.
    gradient.current.classList.add("fade-away");


    // when the animation ends
    gradient.current.addEventListener("animationend", () => {
      // set one.
      setGradientTheme(theme.decal2);
      gradient.current.classList.remove("fade-away");
    }, { once: true });


    prevGradient.current = gradientTheme;

  }, [theme]);

  return (
    <R.ResumeSectionWrapper theme={theme}>
      <R.GradientDecal
        $color={prevGradient.current}
        className="gradient-0">
        <R.GradientDecal
          ref={gradient}
          $color={gradientTheme}
          className="gradient-1">
        </R.GradientDecal>
      </R.GradientDecal>
      <Section title={"Resume"}>
        <R.ResumeLinkContainer>
          <R.ResumeLink href={resumePdf} target="_blank">
            <span className="content">
              Open Resume in New Tab
              <GoLinkExternal className="icon" />
            </span>
          </R.ResumeLink>
        </R.ResumeLinkContainer>
        <R.ResumeIFrame
          hidden={hidden}
          title="Resume View"
          src={resumePdf}
          className="resume">
        </R.ResumeIFrame>
      </Section>
    </R.ResumeSectionWrapper>
  )
}

export default Resume
