import styled from 'styled-components'

export const StyledCard = styled.div`
	text-align: -webkit-center;

	@media screen {
		.col {
			width: calc(33.333333% - 2rem);
		}
	}

	@media screen and (max-width: 48rem) {
		.col {
			width: calc(50% - 2rem);
		}
	}

	@media screen and (max-width: 32rem) {
		.col {
			width: 80%;
			margin: 0 0 2rem 0;
		}
	}

	.icon {
		font-size: 15px;
		color: #3f51b5;
		cursor: pointer;
	}

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
		margin: 1rem;
	}

	.content {
		text-align: left;
		overflow-x: auto;
	}

	.root {
		border-radius: 8px;
		width: 70%;
		box-shadow: 0px 3px 8px rgba(34, 35, 58, 0.5);
	}

	.maxRoot {
		max-width: 345px;
	}

	.title {
		color: white;
		font-weight: bold;
	}
`
