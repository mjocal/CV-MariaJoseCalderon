import styled from 'styled-components'

export const StyledCard = styled.div`
	text-align: -webkit-center;

	.wrapper {
		width: 90%;
		margin: 0 auto;
		max-width: 80rem;
		margin-top: 2em !important;
	}

	.card {
		margin-top: 40px;
		border-radius: spacing(0.5);
		transition: 0.3s;
		width: 90%;
		overflow: initial;
		background-color: #ffffff;
	}

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
		width: calc(25% - 2rem);
		margin: 1rem;
		padding: 0 30px;
	}

	.content {
		text-align: left;
		overflow-x: auto;
	}

	.root {
		border-radius: 8px;
		margin: auto;
		width: 88%;
		box-shadow: 0px 3px 8px rgba(34, 35, 58, 0.5);
	}

	.title {
		color: white;
		font-weight: bold;
	}
`
