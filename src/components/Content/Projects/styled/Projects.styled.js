import styled, { css } from 'styled-components'
import { device } from '../../../_styled/breakpoints.styled'
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
    /* border: 1px solid red; */
  }
`


/**
 * Use this to alternate the presentation of the items using nth child.
 */
export const FeaturedProjectListingContainer = styled.ul`
  & .listing-container {
    max-width: 1000px;
    height: 40vh;
    max-height: 400px;
    margin: 0.5em auto;
  }

  /* The default view for this is portrait mode */
  & .listing-container .project {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .project .image-wrapper {
    align-self: center;
  }

  & .project .image {
    width: 100%;
    height: auto;
    object-fit: contain;
    box-shadow: 0px 5px 15px rgb(0 0 0 / 50%);
    border-radius: 5px;
  }


  @media ${device.laptop} {
    /* Move this to only apply when the size is greater than 1024px. */
    /* In lower-width viewports, we see a vertically presented project list. */
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
      justify-self: start;
    }

    & .listing-container:nth-child(even) .project .image-wrapper {
      justify-self: end;
    }

    & .project .image {

    }

    & .project .desc {
      grid-area: desc;
    }
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

const featuredProjectDesc = css`
  margin-top: 0.5em;

  & .project-title-wrapper {
    display: flex;

    & .icon {
      height: 3em;
    }

    & .project-title {
      align-self: center;
    }
  }

  & .project-title {
    font-size: ${HEADING_SIZE.LV3};
    font-weight: 500;
  }

  & .project-finish-date {
    margin: 0.5em 0;
    font-style: italic;
  }

  & .project-desc {
    margin: 1em 0;
    line-height: 1.15em;
  }

  & .project-stack {
    display: flex;
    justify-content: center;

    @media ${device.laptop} {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  } 
`

export const Project = styled.div`
  &.project.featured {
    ${featuredProject}
  }

  &.project.featured .desc {
    ${featuredProjectDesc}
  }
`

export const ProjectSkill = styled.li`
  background-color: ${props => props.bg ?? "rgba(78,78,78, 0.8)"} ;
  /* color: rgb(225, 225, 225); */
  color: beige;
  padding: 3px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 90%;
  flex: 0 0 auto;
  margin: 0.25em 0.5em;

  & .skill-icon {
    position: relative;
    font-size: 1rem;
    top: 2px;
    right: 1px;
  }
`

export const ProjectStack = styled.ul`
  position: relative;
  margin-top: 2em;

  &::before {
    position: absolute;
    content: "Built with";
    font-variant-caps: all-petite-caps;
    top: -1em;
    left: 5px;
    text-decoration: underline;
  }
`;

export const ProjectLink = styled.a`
  display: block;
  cursor: pointer;
  background-color: rgb(255 180 68 / 80%);
  color: black;
  padding: 3px 0.5em;
  border-radius: 5px;
  width: 120px;
  margin: 0.5em auto;
  text-decoration: none;
  text-align: center;
  display: flex;
  font-weight: 400;

  & .icon {
    font-size: 1.5rem;
    color: inherit;
  }

  & .text {
    align-self: center;
    margin-left: 5px;
    color: inherit;
  }
`