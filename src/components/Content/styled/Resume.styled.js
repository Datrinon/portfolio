import styled from 'styled-components';
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
`

// export const ToggleVisButton = styled.button`
//   position: absolute;
//   top: 0;
//   right: 45%;
// `;

// export const ResumeContainer = styled.div`

// `

export const ResumeLinkContainer = styled.div`
  text-align: center;
  margin: 1em auto;
`

export const ResumeLink = styled.a`
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  background-color: ${palette.sunrayGold};

  &:hover {
    color: white;
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
    height: 11.5in;
    margin-bottom: 0.5em;
  }
`;