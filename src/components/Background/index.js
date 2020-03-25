import React from 'react'
import StyledBackground from './styles'

const Background = () => {
	return (
		<StyledBackground>
			<div className='ripple-background'>
				<div className='circle xxlarge shade1'></div>
				<div className='circle xlarge shade2'></div>
				<div className='circle large shade3'></div>
				<div className='circle mediun shade4'></div>
				<div className='circle small shade5'></div>
			</div>
			<div className='right' />
		</StyledBackground>
	)
}

export default Background
