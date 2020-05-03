import React, { Fragment } from 'react'
import { StyledButton } from '../../styles'
import {
	Card,
	CardHeader,
	CardContent,
	Table,
	TableHead,
	TableCell,
	TableRow,
	TableBody,
} from '@material-ui/core'
import { navigate } from '@reach/router'
import UrlData from '../../store/urlData'
import { aboutData } from './aboutData'
import { StyledCard } from './styles'

const AboutPage = () => {
	let key = 1

	const handleClick = () => {
		navigate(UrlData.homeUrl)
	}

	return (
		<Fragment>
			<StyledCard className='wrapper'>
				<div className='cols'>
					{aboutData.map((data) => (
						<Card className='card col' key={`ck-${key++}`}>
							<CardHeader
								className='root title'
								style={{ backgroundColor: data.color }}
								title={data.title}
							/>
							<CardContent className='content'>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>{data.description}</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>{data.info}</TableBody>
								</Table>
							</CardContent>
						</Card>
					))}
				</div>
			</StyledCard>

			<StyledButton onClick={handleClick}>Back to home</StyledButton>
		</Fragment>
	)
}

export default AboutPage
