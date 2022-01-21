import styled from 'styled-components';
import { appear } from '../../_styled/anim.styled';
import { device } from '../../_styled/breakpoints.styled';
import { palette } from '../../_styled/colors.styled';
import { HEADING_SIZE } from '../../_styled/sizes.styled';
import { boxShadow } from '../Projects/styled/boxShadow';

export const ResumeSectionWrapper = styled.div`
  position: relative;
  
  & .section-title {
    font-size: ${HEADING_SIZE.LV2};
    text-align: center;
    margin: 0.5em 0;
  }

  & .section-container {
    position: relative;
    z-index: 1;
  }
`

export const GradientDecal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 10px;
  background: linear-gradient(0deg, ${props => props.$color ?? "transparent"}, transparent);

  &.fade-away {
    animation: ${appear} reverse 300ms;
  }
`

export const ResumeLinkContainer = styled.div`
  text-align: center;
  margin: 1em auto;
`

export const ResumeLink = styled.a`
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  background-color: ${palette.sunrayGold};

  & .content {
    color: black;
  }

  & .content:hover {
    color: white;
  }

  &:active {
    color: black;
  }

  & .icon {
    position: relative;
    top: 3px;
  }
`


export const ResumeIFrame = styled.iframe`
  display: block;
  width: 60%;
  height: 300px;
  max-width: 800px;
  max-height: ${props => props.hidden ? "0in" : "14.5in"};
  margin: 0 auto;
  margin-bottom: 2.5em;
  transition: max-height 300ms;
  border: 1px solid black;

  @media ${device.tablet} {
    width: 90%;
    height: 800px;
    margin-bottom: 0.5em;
  }
`;