import styled from 'styled-components'

const StyledBackground = styled.div`
	.right {
		color: #68789b;
		opacity: 0.7;
		z-index: -2;
		border: 83px solid;
		height: 100%;
		position: fixed;
		margin: -8px 0 32vw 95vw;
	}

	.ripple-background {
		margin: 35vw 0;
		padding: 0;
		position: absolute;
		z-index: -1;
	}

	.circle {
		position: fixed;
		margin: 32vw 0;
		border-radius: 50%;
		background: #68789b;
		animation: ripple 15s infinite;
		box-shadow: 0px 0px 1px 0px #508fb9;
	}

	.small {
		width: 200px;
		height: 200px;
		left: -100px;
		bottom: -100px;
	}

	.medium {
		width: 400px;
		height: 400px;
		left: -200px;
		bottom: -200px;
	}

	.large {
		width: 600px;
		height: 600px;
		left: -300px;
		bottom: -300px;
	}

	.xlarge {
		width: 800px;
		height: 800px;
		left: -400px;
		bottom: -400px;
	}

	.xxlarge {
		width: 1000px;
		height: 1000px;
		left: -500px;
		bottom: -500px;
	}

	.shade1 {
		opacity: 0.2;
	}
	.shade2 {
		opacity: 0.5;
	}

	.shade3 {
		opacity: 0.7;
	}

	.shade4 {
		opacity: 0.8;
	}

	.shade5 {
		opacity: 0.9;
	}

	@keyframes ripple {
		0% {
			transform: scale(0.8);
		}

		50% {
			transform: scale(1.2);
		}

		100% {
			transform: scale(0.8);
		}
	}
`
export default StyledBackground
