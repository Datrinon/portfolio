import React, { useRef, useEffect, useState } from 'react'
import Section from './Section'
import bio from "../../data/bio.txt"
import placeholder from "../../data/placeholder.webp"

import * as A from "./styled/About.styled";

function About() {

  const [bioText, setBioText] = useState();

  useEffect(() => {
    (async () => {
      const result = await fetch(bio);

      const text = await result.text();

      setBioText(text);
      // lol
    })();
  }, []);

  return (
    <A.AboutContainer>
      <A.AboutHeader>
        <A.AboutHeading
          className="section-title">
          Who am I?
        </A.AboutHeading>
        <A.AboutMeFacts>
          <A.AboutMeFact className="fact-1" ms={500}>
            Recent Grad</A.AboutMeFact>
          <A.AboutMeFact className="fact-2" ms={1500}>
            React.JS Enthusiast</A.AboutMeFact>
          <A.AboutMeFact className="fact-3" ms={3400}>
            a Team Man</A.AboutMeFact>
        </A.AboutMeFacts>
      </A.AboutHeader>
      <A.Bio className="bio">
        <p className="bio-text">
          {bioText}
        </p>
        <p className="bio-footer">
          Please scroll below to see some of the projects that I've accomplished. Thanks for visiting my website!
        </p>
      </A.Bio>
    </A.AboutContainer>
  )
}

export default About
