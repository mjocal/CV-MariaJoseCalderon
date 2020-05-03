import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'

let id = 0
function createData(text) {
	id += 1
	return { id, text }
}

const dependencies = [
	createData('Material UI'),
	createData('Reach/Router'),
	createData('Styled Components'),
	createData('Eslint + Prettier'),
]

const images = [
	createData(
		'All images were taken from Unsplash, a platform for free to use photos you can download and use for any project'
	),
]

export const aboutData = [
	{
		title: 'Dependencies',
		description: 'This project uses:',
		color: '#3f51b5',
		info: dependencies.map((row) => (
			<TableRow key={row.id}>
				<TableCell>{row.text}</TableCell>
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
				All images were taken from <strong>Unsplash</strong>, a platform for
				free photos you can download and use in any project
			</span>
		),
		color: '#3f51b5',
		// info: images.map((row) => (
		// 	<TableRow key={row.id}>
		// 		<TableCell>{row.text}</TableCell>
		// 	</TableRow>
		// )),
	},
]
