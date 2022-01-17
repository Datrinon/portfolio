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
      <L.LandingCaptionContainer>
        <L.LandingCaption>
          <h2 className="heading">
            Hello! I'm Dan.
          </h2>
        </L.LandingCaption>
        <L.Prompt className="link" href="#about">
          About Me
          <L.MoveDownIcon className="icon">
            <BsChevronDoubleDown />
          </L.MoveDownIcon>
        </L.Prompt>
      </L.LandingCaptionContainer>
    </L.Landing>
  )
}

export default Landing
