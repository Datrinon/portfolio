import styled from "styled-components";
import {ReactSVG} from 'react-svg';

import { standard, palette } from "./colors.styled";
import { appear } from "./anim.styled";
import { boxShadow } from "../Content/Projects/styled/boxShadow";
import { device } from "./breakpoints.styled";

export const Page = styled.div`
  background-color: ${props => props.theme.BG};
  color: ${props => props.theme.FG};
  transition: background-color 100ms, fill 100ms, color 100ms;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  & .page-section, .page-section > * {
    transition: background-color 100ms, fill 100ms, color 100ms;
  }

  & .about, .skills, .skills .divider {
    background-color: ${props => props.theme.BG};
  }
  
  & .projects .heading-divider {
    fill: ${props => props.theme.BG};
  }

  & .projects {
    background-color: ${props => props.theme.BG2};
  }

  & .projects .footer-divider {
    fill: ${props => props.theme.BG};
  }

  & .resume {
    /* background: linear-gradient(180deg,
      ${props => props.theme.BG}, ${props => props.theme.decal2}
    ); */
    background: ${props => props.theme.BG};
  }

  /* This section is for spacing adjustments for small gaps */
  & .skills {
    position: relative;
    bottom: 1px;
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
  top: ${props => props.$top};
  transform: ${props => props.$rot ? props.$rot : `initial`};
`

export const FloatingReturnButton = styled.a`
  position: fixed;
  right: 50px;
  bottom: 25px;
  z-index: 10;
  text-decoration: none;
  border-radius: 50%;
  padding: 14px 16px;
  font-size: 1.5em;
  display: ${props => props.$display ? "initial" : "none"};
  animation: ${appear} 300ms;
  background: ${palette.sunrayGold};
  box-shadow: ${boxShadow};

  & svg {
    fill: rgb(34,34,34);
  }
`


export const FloatingContactButtonGroup = styled.div`
  position: fixed;
  transform: translateY(50%);
  bottom: 75%;
  right: 0;
  display: ${props => props.$display ? "initial" : "none"};
  animation: ${appear} 300ms;
  z-index: 10;
  box-shadow: ${boxShadow};

  @media ${device.tablet} {
    bottom: 25%;
  } 

  & .contact-links {
    display: flex;
    flex-direction: column;
    font-size: 2em;
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
      border-top-left-radius: 5px;
      background-color: hsl(201, 15%, 15%);
    }

    & .contact-icon.email {
      background-color: hsl(201, 25%, 23%);

    }

    & .contact-icon.github {
      border-bottom-left-radius: 5px;
      background-color: hsl(201, 37%, 38%);
    }
  }
`