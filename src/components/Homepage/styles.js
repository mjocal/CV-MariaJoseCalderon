import styled from 'styled-components'

export const StyledH = styled.h1`
	font-size: 2.8rem;
	font-weight: 500;
	color: #fff;
	text-align: center;
	text-shadow: 2px 2px #395562;
	margin: 0 auto;
`

export const StyledCardsDiv = styled.div`
	/* padding-bottom: 65px !important; */

	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.wrapper {
		width: 90%;
		margin: 0 auto;
		max-width: 80rem;
		margin-top: 2em !important;
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
		width: calc(34% - 2rem);
		margin: 1rem;
		cursor: pointer;
		padding: 0 45px;
	}

	.container {
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		-webkit-perspective: 1000px;
		perspective: 1000px;
	}

	.front,
	.back {
		background-size: cover;
		background-position: center;
		-webkit-transition: -webkit-transform 1.2s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: -webkit-transform 1.2s cubic-bezier(0.4, 0.2, 0.2, 1);
		-o-transition: transform 1.2s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1.2s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1.2s cubic-bezier(0.4, 0.2, 0.2, 1),
			-webkit-transform 1.2s cubic-bezier(0.4, 0.2, 0.2, 1);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		text-align: center;
		min-height: 225px;
		height: auto;
		border-radius: 10px;
		color: #fff;
		font-size: 1.5rem;
	}

	.front:after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		opacity: 0.6;
		background-color: #000;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		border-radius: 10px;
	}
	.container:hover .front,
	.container:hover .back {
		-webkit-transition: -webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: -webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
		-o-transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1),
			-webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
	}

	.back {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.inner {
		-webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
		transform: translateY(-50%) translateZ(60px) scale(0.94);
		top: 50%;
		position: absolute;
		left: 0;
		width: 100%;
		padding: 2rem;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		outline: 1px solid transparent;
		-webkit-perspective: inherit;
		perspective: inherit;
		z-index: 2;
	}

	.container .back {
		-webkit-transform: rotateY(180deg);
		transform: rotateY(180deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.container .front {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.container:hover .back {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.container:hover .front {
		-webkit-transform: rotateY(-180deg);
		transform: rotateY(-180deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.front .inner p {
		font-size: 1.7rem;
		position: relative;
		text-shadow: 1px 1px black;
	}

	.inner p {
		font-size: 1.4rem;
		text-shadow: 1px 1px black;
	}

	.front .inner span {
		color: rgba(255, 255, 255, 0.7);
		font-weight: 300;
	}

	@media screen and (max-width: 64rem) {
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
			width: 100%;
			margin: 0 0 2rem 0;
		}
	}
`
