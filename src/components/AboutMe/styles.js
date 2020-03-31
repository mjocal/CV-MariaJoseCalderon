import styled from 'styled-components'

export const StyledH = styled.h1`
	font-size: 2.8rem;
	font-weight: 500;
	color: #fff;
	text-align: center;
	text-shadow: 2px 2px #395562;
	margin: 0 auto;
`

export const Content = styled.div`
	display: grid;
	width: 100%;
	grid-template-areas: 'area-left area-right';
	grid-template-columns: 1fr 1fr;
	column-gap: 5px;
	/* padding-bottom: 50px; */

	.content-left {
		grid-area: area-left;
	}

	.content-right {
		grid-area: area-right;
	}
`

export const Wrapper = styled.div``
