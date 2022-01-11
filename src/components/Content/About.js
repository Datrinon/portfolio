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
      <A.ProfilePic className="profile-pic-container">
        <img
          className="profile-pic"
          src={placeholder}
          alt={"A portrait photograph of Dan."} />
        <A.AboutMe>
          <A.AboutMeFact className="fact-1" ms={500}>
            Recent Grad</A.AboutMeFact>
          <A.AboutMeFact className="fact-2" ms={1500}>
            Aspiring Web Dev</A.AboutMeFact>
          <A.AboutMeFact className="fact-3" ms={2800}>
            React.JS Enthusiast</A.AboutMeFact>
          <A.AboutMeFact className="fact-4" ms={3400}>
            Team Man</A.AboutMeFact>
        </A.AboutMe>
      </A.ProfilePic>
      <A.AboutHeader>
        <A.AboutHeading
          className="section-title">
          Hello! I'm Dan.
        </A.AboutHeading>

      </A.AboutHeader>
      <div className="bio">
        <p className="bio-text">
          {bioText}
        </p>
        <p>
          Please scroll below to see some of the projects that I've accomplished. Thanks for visiting my website!
        </p>
      </div>
    </A.AboutContainer>
  )
}

export default About
