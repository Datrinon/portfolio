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
