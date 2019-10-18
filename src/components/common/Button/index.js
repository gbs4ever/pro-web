import styled from 'styled-components'

export const Button = styled.button`
	cursor: pointer;
	border-radius: 3px;
	padding: 0.7rem 2.5rem;
	border: none;
	-webkit-appearance: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: #fff;
	background: #0074d9;

	&:focus {
		outline: none;
		border-bottom-color: transparent;
		backgroundcolor: #1cb495 !important;
	}
	&:hover {
		outline: none;

		color: #fff !important;
		background: #1cb495;
		border-radius: 5px;
	}

	&:disabled {
		background: gray;
	}

	${({ secondary }) =>
		secondary &&
		`
		background: #001F3F;
	`}
`
