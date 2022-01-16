import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiTwotoneMail } from 'react-icons/ai'


function ContactButtons() {
  return (
    <div className="contact-links">
      <a
        href="https://linkedin.com/in/dtrinh089"
        target="_blank"
        rel="noreferrer"
        className="contact-icon contact-link"><AiFillLinkedin />
      </a>
      <a
        href="mailto:dtrinh089@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="contact-icon contact-link"><AiTwotoneMail />
      </a>
      <a
        href="https://www.github.com/datrinon"
        target="_blank"
        rel="noreferrer"
        className="contact-icon contact-link">
        <AiFillGithub />
      </a>
    </div>
  )
}

export default ContactButtons
