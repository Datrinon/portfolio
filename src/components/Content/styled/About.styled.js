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

  & .section-contents {
    /* display: grid;
    grid-template-areas:
    "pic"
    "bio";
    grid-template-rows: auto 1fr;

    & .bio {
      grid-area: bio;
    }

    & .profile-pic-container {
      grid-area: pic;
    } */

    @media ${device.tablet} {
      all: unset;
    }
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

export const AboutMe = styled.ul`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  & li {
    position: absolute;
  }

  & .fact-1 {
    top: 0em;
    right: 105%;
    width: fit-content;
  }

  & .fact-2 {
    top: 15%;
    left: 110%;
  }

  & .fact-3 {
    top: 40%;
    right: 110%;
  }

  & .fact-4 {
    top: 75%;
    left: 110%;
  }

  @media ${device.mobileL} {
    & li {
      width: fit-content;
    }
  }
`

export const AboutMeFact = styled.li`
    animation: ${appear} ${props => props.ms ? `${props.ms}ms` : "300ms"};

    @media ${device.mobileL} {
      width: fit-content;
    }
  }
`

export const ProfilePic = styled.div`
  position: relative;
  width: 128px;
  height: 128px;

  & .profile-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media ${device.tablet} {
    width: 200px;
    height: 200px;
  }
`