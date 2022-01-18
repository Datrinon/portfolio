import React, { useState } from 'react'
import Section from './Section'

import resumePdf from "../../data/resume-DanTrinh.pdf"

import * as R from "./styled/Resume.styled";

function Resume() {

  const [hidden, setHidden] = useState(false);

  return (
    <R.ResumeSectionWrapper>
      <Section title={"Resume"}>
        {/* <R.ToggleVisButton
          onClick={() => setHidden(!hidden)}>Hide</R.ToggleVisButton> */}
        <R.ResumeLinkContainer>
          <R.ResumeLink href={resumePdf} target="_blank">Open Resume in New Tab</R.ResumeLink>
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
