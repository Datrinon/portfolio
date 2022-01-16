import styled from 'styled-components';
import { appear } from '../../_styled/anim.styled';
import { device } from '../../_styled/breakpoints.styled';
import { HEADING_SIZE } from '../../_styled/sizes.styled';

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  & > * {
    margin: 0.5em auto;
  }
`

export const AboutHeader = styled.header`
  position: relative;
  max-width: 800px;
`

export const AboutHeading = styled.h2`
  font-size: ${HEADING_SIZE.LV2};
  text-align: center;

  padding: 1em 0;
  padding-bottom: 0.5em;
`

export const AboutMeFacts = styled.ul`
  text-align: center;
  opacity: 0;
  transition: opacity 600ms;

  &.reveal {
    opacity: 1;
  }
  
  li:not(:last-child)::after  {
    content: ", ";
  }

  li:last-child::before {
    content: " and ";
  }

  li:last-child::after {
    content: ".";
  }
`

export const AboutMeFact = styled.li`
  display: inline;
  animation: ${appear} ${props => props.ms ? `${props.ms}ms` : "300ms"};
  font-size: 1.5rem;
  font-weight: bold;

  @media ${device.mobileL} {
    width: fit-content;
  }

  &::after {
  }
`

export const Bio = styled.div`
  max-width: 600px;
  text-align: justify;

  & > p {
    margin: 1em 0;
    line-height: 1.875rem;
  }
`