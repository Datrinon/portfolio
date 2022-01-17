import styled, { keyframes } from 'styled-components'

export const Landing = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;

  & .profile-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }

  & .vignette {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 150px black;
  }

  & .vertical-shadow {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(0deg, black, transparent);
  }
`

export const LandingCaptionContainer = styled.div`
  position: absolute;
  bottom: 15%;
  left: 15%;
  width: 150px;
  height: 110px;
  padding: 1em;
  background-color: rgba(255 255 255 / 0.75);
  border-radius: 5px;
  z-index: 2;

  & .heading {
    font-size: 125%;
    text-align: center;
  }

  & .link {
    margin-top: 1em;
    display: block;
    text-align: center;
    text-decoration: none;

    & .icon {
      position: relative;
      font-weight: bolder;
      display: block;
    }
  }
`

export const LandingCaption = styled.div`
    position: relative;
    top: 25%;
    transform: translateY(-50%);
`

export const Prompt = styled.a`
  font-style: italic;
  position: absolute;
  bottom: 1em;
  left: 50%;
  transform: translate(-50%);
`

// animation for the icon
const moveDown = keyframes`
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(25%);
  }
  100% {
    transform: translateY(0%);
  }
`

export const MoveDownIcon = styled.span`
  animation: ${moveDown} 2s ease-in-out alternate infinite;
`