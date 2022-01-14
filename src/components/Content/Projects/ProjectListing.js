import React from 'react'

import * as P from "./styled/Projects.styled";

import { FiCode, FiMonitor } from 'react-icons/fi';
import { RiCodeSSlashLine } from 'react-icons/ri';

function ProjectListing({project, featured=false}) {

  return (
    <P.Project className={`project ${featured ? "featured" : "standard"}`}>
      <div className="image-wrapper">
        <img className="image" src={project.photo} alt={`A screenshot from the primary view of the app ${project.name}.`}/>
      </div>
      <div className="desc">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-finish-date">Completed {project.finishDate}</p>
        <p className="project-desc">{project.desc}</p>
        <ul className="project-stack">
          {
            project.builtWith.map((skill, index) => {
              // get only the r, g, b values
              let colors = skill.color.substring(4, skill.color.length - 1).split(",");
              colors = colors.map(color => parseInt(color * 0.35));

              const bg = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.75)`;

              return (<P.ProjectSkill key={index} className="skill" bg={bg}>
                <skill.icon className="skill-icon" color={skill.color}/>
                <span className="skill-name">{skill.name}</span>
              </P.ProjectSkill>)
            })
          }
        </ul>
        <P.ProjectLink href={project.repo} target="_blank" rel="noreferrer">
          <RiCodeSSlashLine className="icon"/>
          <span className="text">View Repo</span>
        </P.ProjectLink>
        <P.ProjectLink href={project.demo} target="_blank" rel="noreferrer">
          <FiMonitor className="icon"/>
          <span className="text">
          View Demo
            </span>
        </P.ProjectLink>
      </div>
    </P.Project>
  )
}

export default ProjectListing
