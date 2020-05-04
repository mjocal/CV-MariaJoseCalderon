import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 90%;
	margin: 0 auto;
	max-width: 80rem;
	margin-top: 2em !important;

	text-align: -webkit-center;

	.cols {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		margin-top: 2em;
	}

	.col {
		width: calc(25%);
		margin: 1rem;

		/* padding: 0 30px; */
	}

	.root {
		max-width: 345;
	}

	.media {
		height: 240px;
		width: 320px;
	}
`
