import styled from 'styled-components'

export const StyledCard = styled.div`
	.back {
		background: ${(props) => `#e0be5b `};
		background: ${(props) =>
			`-webkit-linear-gradient(45deg, #e0be5b } 0%, #bcd8eb 100%)`};
		background: ${(props) =>
			`-o-linear-gradient(45deg, #e0be5b  0%, #bcd8eb 100%)`};
		background: ${(props) =>
			`linear-gradient(45deg, #e0be5b  0%, #bcd8eb 100%)`};
		color: black;
		text-shadow: 1px 1px white;
	}
`
