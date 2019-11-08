import React from 'react'
import { Layout, SEO } from 'Common'
import {
	Intro,
	Skills,
	Contact,
	Projects,
	Testimonials,
} from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Projects />
		<Skills />
		<Testimonials />
		<Contact />
	</Layout>
)
