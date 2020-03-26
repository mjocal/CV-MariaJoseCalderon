import styled from 'styled-components'
import globalStyles from '../../store/globalStyles'

const { globalFont } = globalStyles

const StyledFooter = styled.div`
	.footer-content {
		font-family: ${globalFont};
		font-size: 15px !important;
		text-align: center;
		color: black;
		text-shadow: grey;
	}
`

export default StyledFooter
