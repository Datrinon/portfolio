import React from 'react'
import ContactButtons from './ContactButtons';

import * as F from "./styled/Footer.styled";

function Contact() {
  return (
    <F.FooterContainer>
      <ContactButtons />
      <div>
        Last Updated in January 2022.
      </div>
    </F.FooterContainer>
  )
}

export default Contact
