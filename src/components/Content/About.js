import React, { useRef, useEffect, useState } from 'react'
import Section from './Section'
import bio from "../../data/bio.txt"
import placeholder from "../../data/placeholder.webp"

import * as A from "./styled/About.styled";

function About() {

  const [bioText, setBioText] = useState();

  const thisElement = useRef(null);
  const intersectionObserver = useRef(null);

  const [displaySubtitle, setDisplaySubtitle] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await fetch(bio);

      const text = await result.text();

      setBioText(text);
    })();

    const onIntersectAbout = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setDisplaySubtitle(true);
          observer.unobserve(entry.target);
        }
      })
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    // set up intersection observer
    intersectionObserver.current = new IntersectionObserver(onIntersectAbout, options);
    intersectionObserver.current.observe(thisElement.current);

    return () => {
      intersectionObserver.current.unobserve(thisElement.current);
    }
  }, []);

  return (
    <A.AboutContainer ref={thisElement}>
      <A.AboutHeader>
        <A.AboutHeading
          className="section-title">
          Who am I?
        </A.AboutHeading>
        <A.AboutMeFacts className={displaySubtitle && "reveal"}>
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
