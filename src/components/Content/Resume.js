import React from 'react'
import Section from './Section'

import resumePdf from "../../data/resume-DanTrinh.pdf#zoom=50"

import * as R from "./styled/Resume.styled";

function Resume() {
  return (
    <R.ResumeContainer>
      <Section title={"Resume"}>
        <R.ResumeIFrame
          title="Resume View"
          src={resumePdf}
          className="resume">
        </R.ResumeIFrame>
      </Section>
    </R.ResumeContainer>
  )
}

export default Resume
