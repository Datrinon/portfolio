import React from 'react'

function ProjectListing({project, featured=false}) {

  return (
    <div className={featured ? "featured" : "standard"}>
      <div className="image">
        <img width={20} src={project.photo} alt={`A screenshot from the primary view of the app ${project.name}.`}/>
      </div>
      <div>
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
    </div>
  )
}

export default ProjectListing
