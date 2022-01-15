import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiTwotoneMail } from 'react-icons/ai'

import * as F from "./styled/Footer.styled";

function Contact() {
  return (
    <F.FooterContainer>
      <div className="contact-links">
        <a href="https://www.google.com"><AiFillLinkedin/></a>
        <a href="mailto:dtrinh089@gmail.com"><AiTwotoneMail /></a>
        <a href="https://www.github.com/datrinon"><AiFillGithub/></a>
      </div>
      <div>
        Last Update: January 2021.
      </div>
    </F.FooterContainer>
  )
}

export default Contact
