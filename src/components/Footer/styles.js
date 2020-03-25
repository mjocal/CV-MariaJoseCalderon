import styled from 'styled-components'
import globalStyles from '../../store/globalStyles'

const {
	globalFont,
	footerBgColor,
	footerTextColor,
	footerTextShadow,
} = globalStyles

const StyledFooter = styled.div`
	.footer-content {
		font-family: ${globalFont};
		/* background-color: ${footerBgColor}; */
		font-size: 15px !important;
		text-align: center;
		color: black;
		text-shadow: grey;
		/* padding-bottom: 10px; */
	}
`

export default StyledFooter
