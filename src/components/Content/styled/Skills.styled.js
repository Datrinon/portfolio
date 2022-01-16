import styled from 'styled-components'
import { device } from '../../_styled/breakpoints.styled';
import { HEADING_SIZE } from '../../_styled/sizes.styled'


export const SkillsContainer = styled.div`
  & .section-title {
    font-size: ${HEADING_SIZE.LV2};
    text-align: center;
  }

  & .section-contents {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    max-width: 1000px;
    margin: 0.5em auto;

    @media ${device.tablet} {
      flex-direction: row;
    }
  }
`

export const SkillCategoryBox = styled.div`
  border: 1px solid;
  border-color: inherit;
  border-radius: 5px;
  width: 180px;
  padding: 10px 2em;
  padding-bottom: 1em;
  margin: 0.25em 1em;
  max-width: 33vw;
  height: 210px;

  & .skill-category-heading {
    text-align: center;
    min-height: 2em;
    font-weight: bold;
    font-size: 1.1rem;
  }

  & .skills-list {
    padding-top: 0.25em;
  }
`;

export const SkillBullet = styled.li`
  min-height: 1.5em;
  font-size: 1.05em;
  line-height: 1.75em;

  & .skill-icon {
    position: relative;
    top: 2px;
    padding-right: 4px;
    font-size: 110%;
  }
`;