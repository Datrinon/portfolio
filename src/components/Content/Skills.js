import React, { createElement, useContext } from 'react'
import Section from './Section'

import { SKILLS } from '../../data/skills'

import * as A from "./styled/Skills.styled";
import { ThemeContext } from '../App';

function Skills() {

  const theme = useContext(ThemeContext);

  return (
    <A.SkillsContainer>
      <Section title={"My Skills"}>
        {
          SKILLS.map((list, index) => {
            return (
              <A.SkillCategoryBox key={index} theme={theme}>
                <list.icon className="skill-cat-icon"/>
                <h3 className="skill-category-heading">{list.category}</h3>
                <ul className="skills-list">
                  {list.skills.map((skill, index) => {
                    return (
                      <A.SkillBullet key={index} className="skill-bullet">
                        <skill.icon color={skill.color} className="skill-icon" />
                        <span>{skill.name}</span>
                      </A.SkillBullet>
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
