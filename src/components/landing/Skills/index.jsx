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
          I'm a Software engineer with 2+ years of technical experience
          developing corporate systems that drive productivity, and increase
          revenue as well as overall success.
        </p>

        <p>
          <strong>Skills:</strong> Ruby,Rails,SQL,Node.js, JavaScript, jQuery,
          Docker, React, Redux,
          <a href="https://www.netsuite.com/portal/home.shtml" target="_blank">
            NetSuite
          </a>
          ,
          <a href="https://ubuntu.com/" target="_blank">
            Linux(WSL)
          </a>
          , HTML/CSS,{' '}
        </p>

        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
