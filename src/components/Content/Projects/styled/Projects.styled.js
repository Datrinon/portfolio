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

  & .section-contents {
  }

  & .featured.project-category {
    border: 1px solid red;
  }
`


/**
 * Use this to alternate the presentation of the items using nth child.
 */
export const FeaturedProjectListingContainer = styled.ul`
  & .listing-container {
    width: 90vw;
    max-width: 1000px;
    margin: 0.5em auto;
    border: 1px solid red;
  }

  & .listing-container .project {
    display: grid;
    grid-template-areas: "pic desc";
    grid-template-columns: 70% 30%;
    grid-template-rows: 100%;
    align-items: center;
    justify-items: center;
    height: 100%;
  }

  & .listing-container:nth-child(even) .project {
    grid-template-areas: "desc pic";
    grid-template-columns: 30% 70%;
  }

  & .project .image-wrapper {
    grid-area: pic;
    width: 80%;
    height: 95%;
    justify-self: start;
  }

  & .listing-container:nth-child(even) .project .image-wrapper {
    justify-self: end;
  }

  & .project .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 5px 15px rgb(0 0 0 / 50%);
    border: 1px solid black;
    border-radius: 5px;
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