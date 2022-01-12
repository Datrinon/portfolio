import React from 'react'
import * as L from "./styled/Landing.styled";
import placeholder from "../../data/placeholder2.jpg"
import { BsChevronDoubleDown } from "react-icons/bs"

function Landing() {
  return (
    <L.Landing>
      <img
        className="profile-pic"
        src={placeholder}
        alt={"A portrait photograph of Dan."} />
      <div className="vignette">

      </div>
      <div className="vertical-shadow">
        
      </div>
      <L.LandingCaption>
        <p className="heading">
          Hello! I'm Dan.
        </p>
        <a className="link" href="#about">
          About Me
          <span>
            <BsChevronDoubleDown/>
          </span>
        </a>
      </L.LandingCaption>
    </L.Landing>
  )
}

export default Landing
