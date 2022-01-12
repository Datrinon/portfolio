import styled from 'styled-components';
import { appear } from '../../_styled/anim.styled';
import { device } from '../../_styled/breakpoints.styled';
import { HEADING_SIZE } from '../../_styled/sizes.styled';

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 2em auto;

  & > * {
    margin: 0.5em auto;
  }
`

export const AboutHeader = styled.header`
  position: relative;
  border: 1px solid blue;
  max-width: 800px;
`

export const AboutHeading = styled.h2`
  font-size: ${HEADING_SIZE.LV2};
  text-align: center;

  padding: 1em 0;
`

export const AboutMeFacts = styled.ul`
  li:not(:last-child)::after  {
    content: ", ";
  }

  li:last-child::before {
    content: " and ";
  }

`

export const AboutMeFact = styled.li`
  display: inline;
  animation: ${appear} ${props => props.ms ? `${props.ms}ms` : "300ms"};

  @media ${device.mobileL} {
    width: fit-content;
  }

  &::after {
  }
`
