import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev1 from 'Static/illustrations/dev1.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
  <div style={{ height: '100vh' }}>
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <h2>
            Do you need someone who can help deliver technological solutions for
            your company’s needs ?
          </h2>
          <h4 />
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev1} alt="I’m Sim and I’m a Full Stack Engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  </div>
)
