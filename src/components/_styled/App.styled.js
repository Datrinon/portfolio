import styled from "styled-components";
import {ReactSVG} from 'react-svg';

import COLOR from "./colors.styled";
import { appear } from "./anim.styled";

export const Page = styled.div`
  background-color: ${props => props.darkMode ? COLOR.BLACK : "white"};
  color: ${props => props.darkMode ? "white" : "black"};
`

export const FooterTriangle = styled(ReactSVG)`
  position:relative;
  bottom: 1px;
`
export const DividingShape = styled(ReactSVG)`
  position: relative;
  bottom: ${props => props.$bot};
  left: ${props => props.$lef};
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
  bottom: 50%;
  transform: translateY(50%);
  right: 0;
  display: ${props => props.$display ? "initial" : "none"};
  animation: ${appear} 300ms;

  & .contact-links {
    display: flex;
    flex-direction: column;
    font-size: 2em;
    border: 1px solid black;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    & .contact-link {
      border-bottom: 1px solid;
      padding: 5px;
    }

    & .contact-link:last-child{
      border-bottom: 1px solid transparent;
    } 
  }
`