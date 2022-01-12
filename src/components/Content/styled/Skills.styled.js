import styled from 'styled-components'
import { HEADING_SIZE } from '../../_styled/sizes.styled'


export const SkillsContainer = styled.div`
  & .section-title {
    font-size: ${HEADING_SIZE.LV2};
  }

  & .section-contents {
    display: flex;
    justify-content: space-around;
    max-width: 800px;
    margin: 0.5em auto;
  }
`

export const SkillCategoryBox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 180px;
  padding: 10px 20px;
  max-width: 33vw;

  & .skill-category-heading {
    text-align: center;
    min-height: 2em;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;