import React from 'react'
import { FEATURED_PROJECTS, ODIN_PROJECTS } from '../../../data/projects'
import Section from '../Section'
import ProjectListing from './Project'

function Projects() {

  return (
    <Section title={"Projects"}>
      <div className="featured">
        <h3>Featured</h3>
        <p>The best of my recent projects.</p>
        <ul>
          {
            FEATURED_PROJECTS.map((project, index) => (
              <li key={index}>
                <ProjectListing project={project} featured={true}/>
              </li>
              )
            )
          }
        </ul> 
      </div>
      <div className="standard-reel">
        <h3>Odin Project Series</h3>
        <p>Projects I built during whilst learning with Odin.</p>
        <ul>
          {
            ODIN_PROJECTS.map((project, index) => (
              <li key={index}>
                <ProjectListing project={project} featured={false}/>
              </li>
            ))
          }
        </ul>
      </div>
    </Section>
  )
}

export default Projects
