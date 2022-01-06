import React, { useRef, useEffect, useState } from 'react'
import Section from './Section'
import bio from "../../data/bio.txt"
import placeholder from "../../data/placeholder.webp"
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
    <Section title={"Hello! I'm Dan."}>
      <div className="bio">
        <p className="bio-text">
          {bioText}
        </p>
        <p>
        Please scroll below to see some of the projects that I've accomplished. Thanks for visiting my website! 
        </p>
      </div>
      <div className="profile-pic">
        <img
          width={300}
          src={placeholder}
          alt={"A portrait photograph of Dan."}/>
      </div>
    </Section>
  )
}

export default About
