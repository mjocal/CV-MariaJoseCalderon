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
		text-align: center;
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
		background-color: #68789b;
		border-color: #68789b;
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
	background-color: #68789b;
	border: 0;
	padding: 10px;
	border-radius: 4px;
	margin-top: 2em;
	width: 15%;
	transition: background 0.5s;

	:hover,
	:focus {
		background-color: #e9b5ff !important;
		border-color: #e9b5ff !important;
		outline: none;
	}

	a {
		color: white;
		text-decoration: none;
	}
`
