import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/apps-dev.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Sim and I’m a Backend engineer!" />
    </Thumbnail>
  </Wrapper>
)
