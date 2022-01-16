import styled from 'styled-components';
import { HEADING_SIZE } from '../../_styled/sizes.styled';


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

export const ResumeIFrame = styled.iframe`
  display: block;
  width: 90%;
  height: 11.5in;
  max-width: 800px;
  max-height: ${props => props.hidden ? "0in" : "14.5in"};
  margin: 0 auto;
  margin-bottom: 0.5em;
  transition: max-height 300ms;
`;