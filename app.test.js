import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import {
  Intro,
  Skills,
  Contact,
  Projects,
  Testimonials,
} from 'Components/landing'
let container = null
//run before each test
beforeEach(() => {
  container = document.createElement('root')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

//tests
it('renders without crashing', () => {
  ;<div>
    <Intro />
    <Projects />
    <Skills />
    <Testimonials />
    <Contact />
  </div>
})
//tests
