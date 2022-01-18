import styled, {css} from 'styled-components'
import { device } from '../../_styled/breakpoints.styled';
import { LIGHT_THEME, palette } from '../../_styled/colors.styled';
import { HEADING_SIZE } from '../../_styled/sizes.styled'
import { boxShadow } from '../Projects/styled/boxShadow';


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
    /* This code so that the box-shadow won't be clipped. */
    position: relative;
    z-index: 1;

    @media ${device.tablet} {
      flex-direction: row;
    }
  }
`

export const SkillCategoryBox = styled.div`
  border-radius: 15px;
  width: 180px;
  padding: 1em 2em;
  padding-bottom: 1em;
  margin: 0.25em 1em;
  max-width: 33vw;
  background-color: ${LIGHT_THEME.BG};
  box-shadow: ${boxShadow};

  & .skill-category-heading {
    text-align: center;
    min-height: 2em;
    font-weight: bold;
    font-size: 1.2rem;
  }

  & .skills-list {
    padding-top: 0.25em;
    height: 225px;
  }

  & .skill-cat-icon {
    display: block;
    margin: 0 auto;
    margin-bottom: 0.5em;
    font-size: 2em;
    transform: scale(1.25);
    color: ${palette.celadonBlue};
  }
`;

export const SkillBullet = styled.li`
  min-height: 1.5em;
  font-size: 1.1em;
  line-height: 1.75em;

  & .skill-icon {
    position: relative;
    top: 8px;
    padding-right: 4px;
    font-size: 150%;
  }
`;