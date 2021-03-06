import React, { useContext } from 'react'
import * as L from "./styled/Landing.styled";
import placeholder from "../../data/landing.jpg"
import { BsChevronDoubleDown } from "react-icons/bs"
import { ThemeContext } from '../App';

function Landing() {

  const theme = useContext(ThemeContext);

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
      <L.LandingCaptionContainer theme={theme}>
        <L.LandingCaption className="dialogue">
          <h2 className="heading">
            Hello! I'm Dan.
          </h2>
        </L.LandingCaption>
        <L.Prompt className="link prompt" href="#about">
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
