import React from 'react'
import { Router } from '@reach/router'
import { StyledApp, StyledH1, StyledH2 } from './styles'
import Background from './components/Background'
import Homepage from './components/Homepage'
import AboutMe from './components/AboutMe'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'

function App() {
	return (
		<StyledApp>
			<Background />
			<div className='content-wrap'>
				<div className='app-header'>
					<StyledH1>María José Calderón</StyledH1>
					<StyledH2>Software Developer</StyledH2>
				</div>
				<div className='app-content'>
					<Router basename='cv_mjocal/'>
						<Homepage path={`${process.env.PUBLIC_URL}/`} />
						<AboutMe path={`${process.env.PUBLIC_URL}/aboutMe`} />
						<AboutPage path={`${process.env.PUBLIC_URL}/aboutPage`} />
					</Router>
				</div>
			</div>
			<div className='app-footer'>
				<Footer />
			</div>
		</StyledApp>
	)
}

export default App
