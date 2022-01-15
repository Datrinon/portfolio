import styled from "styled-components";
import {ReactSVG} from 'react-svg';

import COLOR from "./colors.styled";

export const Page = styled.div`
  background-color: ${props => props.darkMode ? COLOR.BLACK : "white"};
  color: ${props => props.darkMode ? "white" : "black"};
`

export const AboutUpperTriangle = styled(ReactSVG)`
  position:relative;
  bottom: 1px;
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
`