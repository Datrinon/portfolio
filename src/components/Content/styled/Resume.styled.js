import styled from 'styled-components';
import { HEADING_SIZE } from '../../_styled/sizes.styled';


export const ResumeContainer = styled.div`
  & .section-title {
    font-size: ${HEADING_SIZE.LV2};
    text-align: center;
    margin: 0.5em 0;
  }
`

export const ResumeIFrame = styled.iframe`
  display: block;
  margin: 0 auto;
  width: 90%;
  height: 6in;
`;