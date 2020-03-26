import React, { Fragment } from 'react'
import StyledH from './styles'
import { StyledButton } from '../../styles'
import { navigate } from '@reach/router'
import UrlData from '../../store/urlData'

const AboutMe = () => {
	// let key = 1

	const handleClick = () => {
		navigate(UrlData.homeUrl)
	}

	return (
		<Fragment>
			{/* <StyledCardsDiv className="wrapper">
            <div className="cols">
            {cardData.map(data => (
                <Card
                key={`ck-${key++}`}
                title={data.title}
                description={data.description}
                isExternal={data.isExternal}
                imageUrl={data.imageUrl}
                pageUrl={data.pageUrl}
                bgColor1={data.bgColor1}
                bgColor2={data.bgColor2}
                />
            ))}
            </div>
        </StyledCardsDiv> */}

			<StyledH>About Page Test</StyledH>

			<StyledButton onClick={handleClick}>Back to home</StyledButton>
		</Fragment>
	)
}

export default AboutMe
