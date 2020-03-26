import React, { useState } from 'react'
import { StyledCard } from './styles'
import { navigate } from '@reach/router'

const Card = (props) => {
	const {
		imageUrl,
		title,
		description,
		pageUrl,
		bgColor1,
		bgColor2,
		isExternal,
	} = props

	const [hovered, setHovered] = useState(false)
	const toggleHover = () => setHovered(!hovered)
	const root = process.env.PUBLIC_URL

	const routing = () => {
		if (pageUrl === '') {
			window.open(pageUrl, '_self')
		} else if (isExternal === false) {
			navigate(pageUrl)
		} else {
			window.open(pageUrl)
		}
	}

	return (
		<StyledCard
			theme={{ bgColor1, bgColor2 }}
			className='col'
			onTouchStart={toggleHover}
			onClick={routing}
		>
			<div className='container'>
				<div
					className='front'
					style={{
						backgroundImage: `url(${root}${imageUrl})`,
					}}
				>
					<div className='inner'>
						<p>{title}</p>
					</div>
				</div>
				<div className='back'>
					<div className='inner'>{description}</div>
				</div>
			</div>
		</StyledCard>
	)
}

export default Card
