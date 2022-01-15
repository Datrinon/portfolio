import React from 'react'
import { FEATURED_PROJECTS, ODIN_PROJECTS } from '../../../data/projects'
import Section from '../Section'
import ProjectListing from './ProjectListing'

import * as P from './styled/Projects.styled'

function Projects() {

  return (
    <P.ProjectsContainer>
      <Section title={"Projects"}>
        <div className="featured project-category">
          <h3 className="title">Featured</h3>
          <p className="subtitle">The more notable entries of my recent works.</p>
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
          <h3 className="title">Odin Project: Front-end Projects</h3>
          <p className="subtitle">Projects I built during whilst learning through <a href="https://www.theodinproject.com/about" target="_blank" rel="noreferrer">the Odin Project</a>.</p>
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
