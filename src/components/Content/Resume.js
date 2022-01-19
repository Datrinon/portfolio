import React, { useState } from 'react'
import Section from './Section'

import resumePdf from "../../data/resume-DanTrinh.pdf"

import * as R from "./styled/Resume.styled";

import { GoLinkExternal } from "react-icons/go";

function Resume() {

  const [hidden, setHidden] = useState(false);

  return (
    <R.ResumeSectionWrapper>
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
