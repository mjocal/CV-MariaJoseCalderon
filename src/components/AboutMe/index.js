import React from 'react'
import { Wrapper } from './styles'
import { navigate } from '@reach/router'
import UrlData from '../../store/urlData'
import { aboutMeData } from './aboutMeData'
import { StyledButton } from '../../styles'
import pdf from '../../store/files/CV_MaJose_Calderon_SoftwareDeveloper.pdf'
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Divider,
} from '@material-ui/core'
import { Fragment } from 'react'

const AboutMe = () => {
	const handleClick = () => {
		navigate(UrlData.homeUrl)
	}

	return (
		<Fragment>
			<Wrapper>
				<div className='cols'>
					{aboutMeData.map((data) => (
						<Card className='root card col'>
							<CardActionArea>
								<CardMedia
									className='media'
									component='img'
									alt={data.tooltip}
									image={data.image}
									title={data.tooltip}
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h2'>
										{data.title}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'
									>
										{data.description}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					))}
				</div>
				{/* <Divider /> */}
				<Typography style={{ marginTop: 20 }} variant='body2' gutterBottom>
					<strong>Contact info: </strong>
					dra.mariacalderon@gmail.com | (+506) 8881-9964
				</Typography>
			</Wrapper>
			<StyledButton>
				<a href={pdf} rel='noopener noreferrer' target='_blank'>
					Download resume
				</a>
			</StyledButton>

			<StyledButton onClick={handleClick}>Back to home</StyledButton>
		</Fragment>
	)
}

export default AboutMe
