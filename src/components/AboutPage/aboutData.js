import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

let id = 0
function createData(text, url) {
	id += 1
	return { id, text, url }
}

const dependencies = [
	createData('Material UI ', 'https://material-ui.com/'),
	createData('Reach/Router ', 'https://reach.tech/router'),
	createData('Styled Components ', 'https://styled-components.com/'),
	createData(
		'Eslint + Prettier ',
		'https://prettier.io/docs/en/integrating-with-linters.html'
	),
]

export const aboutData = [
	{
		title: 'Dependencies',
		description: 'This project uses:',
		color: '#3f51b5',
		info: dependencies.map((row) => (
			<TableRow key={row.id}>
				<TableCell>
					{row.text}
					<a href={row.url} rel='noopener noreferrer' target='_blank'>
						<OpenInNewIcon className='icon' />
					</a>{' '}
				</TableCell>
			</TableRow>
		)),
	},
	{
		title: 'Styles',
		description: 'The animated background was created using CSS',
		info: (
			<TableRow>
				<TableCell>Custom styles were made using Styled Components</TableCell>
			</TableRow>
		),
		color: '#009688',
	},
	{
		title: 'Images',
		description: (
			<span>
				All cards images were taken from{' '}
				<strong>
					<a
						href='https://unsplash.com/'
						rel='noopener noreferrer'
						target='_blank'
					>
						Unsplash
					</a>
				</strong>
				, a platform for free photos you can download and use in any project
			</span>
		),
		color: '#3f51b5',
	},
]
