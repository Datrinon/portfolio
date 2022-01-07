import React from 'react'
import Section from './Section'

import resumePdf from "../../data/resume-DanTrinh.pdf"

function Resume() {
  return (
    <Section title={"Resume"}>
      <iframe title="Resume View" src={resumePdf} width="100%" height="30px">
      </iframe>
    </Section>
  )
}

export default Resume
