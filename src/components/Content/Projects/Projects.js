import React, { useContext } from 'react'
import { FEATURED_PROJECTS, ODIN_PROJECTS } from '../../../data/projects'
import { ThemeContext } from '../../App'
import Section from '../Section'
import ProjectListing from './ProjectListing'

import * as P from './styled/Projects.styled'

function Projects() {
  
  const theme = useContext(ThemeContext);

  return (
    <P.ProjectsContainer>
      <Section title={"Projects"}>
        <div className="featured project-category">
          <div className="title-container">
            <h3 className="title">Featured</h3>
            <p className="subtitle">The more notable entries of my recent works.</p>
          </div>
          <P.FeaturedProjectListingContainer>
            {
              FEATURED_PROJECTS.map((project, index) => (
                <li key={index} className="listing-container">
                  <ProjectListing
                    project={project}
                    featured={true} />
                </li>
              )
              )
            }
          </P.FeaturedProjectListingContainer>
        </div>
        <div className="standard-reel project-category">
          <div className="title-container">
            <h3 className="title">The Odin Project Series</h3>
            <p className="subtitle">Projects I built to reinforce what I learnt through the front-end course of <a href="https://www.theodinproject.com/about" target="_blank" rel="noreferrer">the Odin Project</a>.</p>
          </div>
          <P.StandardProjectListingContainer>
            {
              ODIN_PROJECTS.map((project, index) => (
                <li key={index}>
                  <ProjectListing project={project} featured={false} />
                </li>
              ))
            }
          </P.StandardProjectListingContainer>
        </div>
      </Section>
    </P.ProjectsContainer>
  )
}

export default Projects
