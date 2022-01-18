import styled from "styled-components";
import {ReactSVG} from 'react-svg';

import { standard, palette } from "./colors.styled";
import { appear } from "./anim.styled";

export const Page = styled.div`
  background-color: ${props => props.darkMode ? standard.BLACK : "white"};
  color: ${props => props.darkMode ? "white" : "black"};
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  & .about, .skills, .skills .divider {
    background-color: ${palette.marble};
  }

  & .projects .heading-divider {
    fill: ${palette.marble};
  }
`

export const FooterTriangle = styled(ReactSVG)`
  position:relative;
  bottom: 1px;
`
export const DividingShape = styled(ReactSVG)`
  position: relative;
  bottom: ${props => props.$bot};
  left: ${props => props.$left};
  transform: ${props => props.$rot ? props.$rot : `initial`};
`

export const FloatingReturnButton = styled.a`
  position: fixed;
  right: 1em;
  bottom: 1em;
  z-index: 10;
  text-decoration: none;
  border-radius: 50%;
  border: 1px solid;
  padding: 0.25em;
  font-size: 32px;
  border-color: inherit;
  display: ${props => props.$display ? "initial" : "none"};
  animation: ${appear} 300ms;
`

export const FloatingContactButtonGroup = styled.div`
  position: fixed;
  bottom: 25%;
  transform: translateY(50%);
  right: 0;
  display: ${props => props.$display ? "initial" : "none"};
  animation: ${appear} 300ms;
  z-index: 10;

  & .contact-links {
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    border: 1px solid black;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    & .contact-link {
      border-bottom: 1px solid;
      border-color: black;
      padding: 5px;
    }

    & .contact-link:last-child{
      border-bottom: 1px solid transparent;
    }

    & .contact-icon {
      color: hsl(359deg 40% 100%) !important;
    }

    & .contact-icon.linkedin {
      background-color: hsl(201, 15%, 35%);
    }

    & .contact-icon.email {
      background-color: hsl(201, 25%, 43%);

    }

    & .contact-icon.github {
      background-color: hsl(201, 37%, 50%);
    }
  }
`