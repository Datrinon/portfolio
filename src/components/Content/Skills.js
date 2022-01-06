import React, { createElement } from 'react'
import Section from './Section'

import { SKILLS } from '../../data/skills'

function Skills() {

  return (
    <Section title={"My Skills"}>
      {
        SKILLS.map((list, index) => {
          return (
            <div key={index}>
              <h3>{list.category}</h3>
              <ul>
                {list.skills.map((skill, index) => {
                  return (
                    <li key={index}>
                      <skill.icon color={skill.color}/>
                      <span>{skill.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })
      }
    </Section>
  )
}

export default Skills
