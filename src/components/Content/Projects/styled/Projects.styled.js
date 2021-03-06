import styled, { css } from 'styled-components'
import { appear } from '../../../_styled/anim.styled';
import { device } from '../../../_styled/breakpoints.styled'
import { HEADING_SIZE } from '../../../_styled/sizes.styled'
import { boxShadow } from './boxShadow';

export const ProjectsContainer = styled.div`
  & .section-title {
    font-size: ${HEADING_SIZE.LV2};
    text-align: center;
  }

  & .project-category .title {
    font-weight: bold;
    font-size: ${HEADING_SIZE.LV3};
    text-align: center;
  }

  & .project-category .subtitle {
    margin: 0.5em 0;
    text-align: center;
  }

  & .title-container {
    border-top: 2px dotted darkgrey;
    border-bottom: 2px dotted darkgrey;
    width: 50%;
    margin: 1em auto;
    margin-bottom: 0;
    padding: 1em 0;
  }

  & .section-contents {
  }

  & .featured.project-category {
    /* border: 1px solid red; */
  }
`



export const FeaturedProjectListingContainer = styled.ul`
  & .listing-container {
    max-width: 1000px;
    width: 80vw;

    margin: 0.5em auto;
  }

  /* The default view for this is portrait mode */
  & .listing-container .project {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${device.laptop} {
      align-items: center;
    }
  }

  & .project .image-wrapper {
    align-self: center;
  }

  & .project .image {
    width: 100%;
    height: auto;
    object-fit: contain;
    box-shadow: ${boxShadow};
    border-radius: 5px;
  }

  /**
  * Use this to alternate the presentation of the items using nth child.
  */
  @media ${device.laptop} {
    & .listing-container {
      margin: 3em auto;
      max-height: 400px;
    }
    
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


const featuredProjectDesc = css`
  margin-top: 1em;
  width: 100%;

  & .project-title-wrapper {
    display: grid;
    grid-template-areas: 
    "icon title"
    "icon date";
    grid-template-columns: 4rem auto;
    column-gap: 1em;

    & .icon {
      grid-area: icon;
      width: 100%;
      align-self: center;
      border-radius: 5px;
    }

    & .project-title {
      grid-area: title;
    }

    & .project-finish-date {
      grid-area: date;
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

export const StandardProjectListingContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90vw;
  max-width: 1400px;
  margin: 0 auto;
  flex-wrap: wrap;
`


const standardProject = css`
  display: flex;
  flex-direction: column;
  width: 256px;
  height: auto;
  margin: 2em 2.5em;
  border-radius: 8px;
  box-shadow: ${boxShadow};
  background: ${props => props.theme.BG3};
  position: relative;

  & .image {
    width: 100%;
    height: 210px;
    object-fit: cover;
  }

  & .project-title {
    text-align: center;
    font-size: 1.4em;
    margin-top: 0.5em;
  }

  & .project-finish-date {
    text-align: center;
    padding: 0.5em 0;
    font-size: 0.8em;
    color: rgba(178 178 178 0.8);
    font-style: italic;
  }

  & .project-desc {
    margin: 0.5em auto;
    text-align: center;
    line-height: 1.25em;
    width: 85%;
    height: 70px;
  }

  & .actions {
    display: flex;
    flex-direction: row;
  }

  & .project-stack {
    text-align: center;
  }

  & .project-stack::before {
    left: 50%;
    transform: translateX(-50%);
  }

  & .project-stack .skill {
    background-color: transparent;
    position: relative;

    &:hover::after {
      left: 0;
      top: -50%;
      position: absolute;
      content: attr(data-caption);
      color: white;
      background-color: rgba(34 34 34 / 0.8);
      padding: 0.5em;
      border-radius: 5px;
      z-index: 10;
      animation: ${appear} 300ms;
    }
  }

  & .project-stack .skill .skill-icon {
    font-size: 2em;

  }

  & .skill-name {
    display: none;
  }

  & .actions {
    position: relative;
    bottom: 0;
    width: 100%;

    &::after {
      content: "";
      position: absolute;
      height: 70%;
      border-right: 1px solid rgba(0,0,0, 0.5);
      left: 50%;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  & .action {
    margin: 0;
    width: 50%;
    padding: 0.25em 0;
    text-align: center;
    border-radius: 0;
    justify-content: center;
  }

  & .image {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  & .action.repo {
    position: relative;
    border-bottom-left-radius: 8px;
  }

  & .action.demo {
    border-bottom-right-radius: 8px;
  }
`;

export const Project = styled.div`
  /* CSS for project in standard reel are just cards. */
  &.project.standard {
    ${standardProject}
  }

  /* No special CSS needed for featured projects, except its desc. */
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
  width: fit-content;
  display: inline-block;

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
    color: ${props => props.theme.FG2};
    font-variant-caps: all-petite-caps;
    font-size: 125%;
    top: -1em;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: underline;
    text-decoration-thickness: -5em;


    @media ${device.laptop} {
      left: 5px;
      transform: initial;
    }
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
  transition: transform 300ms, color 300ms;

  & .icon {
    font-size: 1.5rem;
    color: inherit;
  }

  & .text {
    align-self: center;
    margin-left: 5px;
    color: inherit;
  }

  &:hover {
    transform: scale(1.05);
    color: white;
  }
`