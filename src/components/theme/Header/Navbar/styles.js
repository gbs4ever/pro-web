import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 1.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		color: #4ab6d4;
		padding: 9px 9px;
		top: 0;
		flex-direction: row;
		margin: 2px;
		overflow: hidden;
	}
	a:hover {
		color: #fff !important;
		background: #61dafb;
		border-radius: 5px;
	}
	img {
		margin: 5px;
		border-radius: 5px;
		width: 300px;
		height: 85px;
	}
`
