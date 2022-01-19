import styled, { keyframes } from 'styled-components'
import { device } from '../../_styled/breakpoints.styled';
import { palette } from '../../_styled/colors.styled';

export const Landing = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;

  & .profile-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
    object-position: top;
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

// 2 second span
// Complete the appearance in one second
// After that follow up the text in 50% ->.
const containerAppear = keyframes`
  0% {
    transform: scale(0);
  }

  85% {
    transform: scale(1.15);
  }
/* 
  95% {
    transform: scale(0.95);
  } */

  100% {
    transform: scale(1.0);
  }
`;

const captionAppear = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`


export const LandingCaptionContainer = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 110px;
  padding: 1em;
  background-color: ${props => props.theme.translucent};
  transition: background-color 300ms;
  border-radius: 5px;
  border: 8px double ${palette.sunrayGold};
  z-index: 2;

  /* Animation code */
  animation: ${containerAppear} ease 800ms;

  & .dialogue {
    animation: ${captionAppear} ease 1.15s;
  }

  & .prompt {
    animation: ${captionAppear} ease 1.5s;
  }

  /* Layout arrangements */
  & .heading {
    font-size: 175%;
    text-align: center;
  }

  & .prompt.link {
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

  @media ${device.tablet} {
    bottom: 15%;
    left: 15%;
    transform: initial;
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