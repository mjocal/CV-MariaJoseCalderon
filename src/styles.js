import globalStyles from './store/globalStyles'
import styled from 'styled-components'

const { globalFont } = globalStyles

export const StyledApp = styled.div`
	body {
		margin: 0 !important;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	font-family: ${globalFont};
	/* position: relative; */
	/* min-height: 99vh; */
	/* overflow-x: hidden; */

	.content-wrap {
		display: grid;
		width: 100%;
		grid-template-areas:
			'area-appHeader area-appHeader area-appHeader'
			'area-spaceLeft area-appContent area-spaceRight'
			'area-appFooter area-appFooter area-appFooter';
		grid-template-columns: 1fr 20fr 1fr;
		grid-template-rows: 1fr;
		column-gap: 5px;
		row-gap: 5px;
		padding-bottom: 50px;
	}

	.app-header {
		grid-area: area-appHeader;
	}

	.app-content {
		grid-area: area-appContent;
	}

	.app-footer {
		grid-area: area-appFooter;
		position: absolute;
		bottom: 0;
		height: 48px;
		width: 98%;
	}

	.ant-btn-primary {
		color: #fff;
		background-color: #3f51b5;
		border-color: #3f51b5;
	}
`

export const FormCard = styled.div.attrs({ className: 'card' })`
	width: 50%;
	margin: auto;
`

export const StyledH1 = styled.h1`
	color: #000000;
	text-shadow: 2px 2px #d6d6d6;
	font-size: 40px;
	text-align: center;
	margin-bottom: 0;
	margin-top: 1vw;
`

export const StyledH2 = styled.h2`
	color: #000000;
	text-shadow: 2px 2px #d6d6d6;
	font-size: 25px;
	text-align: center;
	margin-bottom: 0;
	margin-top: 0;
	font-weight: normal;
`

export const StyledButton = styled.button`
	font-size: initial;
	color: white;
	background-color: #1d57bc;
	border: 0;
	padding: 10px;
	border-radius: 4px;
	margin-top: 2em;
	margin-left: 43vw;
	width: 15%;

	:hover,
	:focus {
		background-color: #363636 !important;
		border-color: #363636 !important;
		outline: none;
	}

	a {
		color: white;
		text-decoration: none;
	}
`