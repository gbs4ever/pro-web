import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Sim and I’m a Backend & Software  engineer!" />
      </Thumbnail>
      <Details>
        <p>
          I'm a Software Engineer with over 5 years of experience, focusing on full-stack web development and demonstrating proficiency in multiple programming languages. 
          I possess robust analytical and problem-solving capabilities, excel in collaborative settings, communicate effectively, and exhibit exceptional organizational skills.
        </p>
        <p>
          <strong>Skills:</strong> Ruby,Rails,SQL,Node.js, JavaScript, jQuery,API integration,
          Docker, React, Redux,Netsuite(Suitescript ),Linux(WSL),HTML/CSS
        </p>

        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
