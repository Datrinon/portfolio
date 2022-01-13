import styled, {css} from 'styled-components'
import { HEADING_SIZE } from '../../../_styled/sizes.styled'


export const ProjectsContainer = styled.div`
  & .section-title {
    font-size: ${HEADING_SIZE.LV2};
    text-align: center;
  }

  & .project-category .title {
    font-size: ${HEADING_SIZE.LV3};
    text-align: center;
  }

  & .project-category .subtitle {
    text-align: center;
  }
`


/**
 * Use this to alternate the presentation of the items using nth child.
 */
export const FeaturedProjectListingContainer = styled.ul`
  & .listing-container .project {
    display: grid;
    grid-template-areas: "pic desc"

  }

  & .listing-container:nth-child(even) .project {
    grid-template-areas: "desc pic"
  }

  & .project .image {
    grid-area: pic;
  }

  & .project .desc {
    grid-area: desc;
  }
`


/**
 * Create two project components
 * Use mixins for them.
 */
const featuredProject = css`

  & .image {
    /* width: 780px;
    height: 488px; */
  }
`

export const Project = styled.div`
  &.project.featured {
    ${featuredProject}
  }
`