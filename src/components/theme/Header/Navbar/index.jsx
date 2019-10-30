import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import icon from 'Static/illustrations/icons2.svg'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		{/* <img src={icon} /> */}
		{/* <Link to="/">Simcha Greenbaum</Link> */}
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
