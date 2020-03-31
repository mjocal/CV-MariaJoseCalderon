import React from 'react'
import { StyledH, Content, Wrapper } from './styles'
import { navigate } from '@reach/router'
import UrlData from '../../store/urlData'
import { StyledButton } from '../../styles'

const AboutMe = () => {
	// let key = 1

	const handleClick = () => {
		navigate(UrlData.homeUrl)
	}

	return (
		<Wrapper>
			<Content>
				<div className='content-left'>
					<StyledH>About Me Test</StyledH>
				</div>
				<div className='content-right'>
					<p>Some text</p>
				</div>
			</Content>
			<StyledButton onClick={handleClick}>Back to home</StyledButton>
		</Wrapper>
	)
}

export default AboutMe
