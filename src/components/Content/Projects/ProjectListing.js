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
        <div className="project-title-wrapper">
          {
            project.icon &&
            <img className="icon"
              src={project.icon}
              alt={`${project.name}'s icon.`}/>
          }
          <h3 className="project-title">{project.name}</h3>
          <p className="project-finish-date">Completed {project.finishDate}</p>
        </div>
        <p className="project-desc">{project.desc}</p>
        <P.ProjectStack className="project-stack">
          {
            project.builtWith.map((skill, index) => {
              // get only the r, g, b values
              let colors = skill.color.substring(4, skill.color.length - 1).split(",");
              colors = colors.map(color => parseInt(color * 0.45));

              const bg = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.75)`;

              return (<P.ProjectSkill key={index} className="skill" bg={bg}>
                <skill.icon className="skill-icon" color={skill.color}/>
                <span className="skill-name">{skill.name}</span>
              </P.ProjectSkill>)
            })
          }
        </P.ProjectStack>
        <div className="actions">
          <P.ProjectLink
            className="repo action"
            href={project.repo}
            target="_blank"
            rel="noreferrer">
            <RiCodeSSlashLine className="icon"/>
            <span className="text">View Repo</span>
          </P.ProjectLink>
          <P.ProjectLink
            className="demo action"            
            href={project.demo}
            target="_blank"
            rel="noreferrer">
            <FiMonitor className="icon"/>
            <span className="text">
            View Demo
              </span>
          </P.ProjectLink>
        </div>
      </div>
    </P.Project>
  )
}

export default ProjectListing
