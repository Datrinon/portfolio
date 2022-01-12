import React, { createElement } from 'react'
import Section from './Section'

import { SKILLS } from '../../data/skills'

import * as A from "./styled/Skills.styled";

function Skills() {

  return (
    <A.SkillsContainer>
      <Section title={"My Skills"}>
        {
          SKILLS.map((list, index) => {
            return (
              <A.SkillCategoryBox key={index}>
                <h3 className="skill-category-heading">{list.category}</h3>
                <ul className="skills-list">
                  {list.skills.map((skill, index) => {
                    return (
                      <li key={index} className="skill-bullet">
                        <skill.icon color={skill.color} />
                        <span>{skill.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </A.SkillCategoryBox>
            )
          })
        }
      </Section>
    </A.SkillsContainer>
  )
}

export default Skills
