import React, { Fragment } from 'react'
import { cardData } from './cardData'
import { StyledCardsDiv } from './styles'
import Card from '../Card/index'

const Homepage = () => {
	let key = 1

	return (
		<Fragment>
			<StyledCardsDiv className='wrapper'>
				<div className='cols'>
					{cardData.map((data) => (
						<Card
							key={`ck-${key++}`}
							title={data.title}
							description={data.description}
							isExternal={data.isExternal}
							imageUrl={data.imageUrl}
							pageUrl={data.pageUrl}
						/>
					))}
				</div>
			</StyledCardsDiv>
		</Fragment>
	)
}

export default Homepage
