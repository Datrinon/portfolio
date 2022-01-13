import React from 'react'

import * as P from "./styled/Projects.styled";

function ProjectListing({project, featured=false}) {

  return (
    <P.Project className={`project ${featured ? "featured" : "standard"}`}>
      <div className="image">
        <img width={30} src={project.photo} alt={`A screenshot from the primary view of the app ${project.name}.`}/>
      </div>
      <div className="desc">
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
        <p>{project.finishDate}</p>
        <ul>
          {
            project.builtWith.map((skill, index) => {
              return (<li key={index}>
                <skill.icon/>
                <span>{skill.name}</span>
              </li>)
            })
          }
        </ul>
        <a href={project.repo} target="_blank" rel="noreferrer">View Repo</a>
        <a href={project.demo} target="_blank" rel="noreferrer">View Demo</a>
      </div>
    </P.Project>
  )
}

export default ProjectListing
