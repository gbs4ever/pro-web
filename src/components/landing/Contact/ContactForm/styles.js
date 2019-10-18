import styled from 'styled-components'

export const Error = styled.span`
	color: #ff4136;
`

export const Center = styled.div`
	text-align: left;

	h4 {
		font-weight: normal;
	}
	.success-message {
		color: green;
		position: relative;
		padding-left: 32px;
		font-family: sans-serif;
	}
	.success-message:before {
		content: '';
		border-right: 2px solid green;
		border-bottom: 2px solid green;
		height: 10px;
		width: 4px;
		display: inline-block;
		transform: rotate(45deg);
		position: absolute;
		left: 12px;
		top: 0;
		background: transparent;
	}
`

export const InputField = styled.div`
	position: relative;
	margin-bottom: 1rem;
`
