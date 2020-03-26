import UrlData from '../../store/urlData'

export const cardData = [
	{
		title: 'About me',
		isExternal: false,
		description: 'Get to know me a little',
		imageUrl: '/images/about.jpg',
		pageUrl: UrlData.aboutMeUrl,
	},
	{
		title: 'About this page',
		isExternal: false,
		description: 'See more details about this React App',
		imageUrl: '/images/about.jpg',
		pageUrl: UrlData.aboutPageUrl,
	},
	{
		title: 'Networking',
		description: 'Visit my LinkedIn profile',
		imageUrl: '/images/about.jpg',
		pageUrl: UrlData.linkedInUrl,
	},
	{
		title: 'Repository',
		description: 'Visit my GitHub account',
		imageUrl: '/images/about.jpg',
		pageUrl: UrlData.gitHubUrl,
	},
]