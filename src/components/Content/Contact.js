import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiTwotoneMail } from 'react-icons/ai'



function Contact() {
  return (
    <div>
      <div className="contact-links">
        <a href="https://www.google.com"><AiFillLinkedin/></a>
        <a href="mailto:dtrinh089@gmail.com"><AiTwotoneMail /></a>
        <a href="https://www.github.com/datrinon"><AiFillGithub/></a>
      </div>
      <div>
        Last Update: January 2021.
      </div>
    </div>
  )
}

export default Contact
