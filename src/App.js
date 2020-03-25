import React from 'react'
import { StyledApp, StyledH1, StyledH2 } from './styles'
import Background from './components/Background'
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
					{/* LOCAL TESTING */}
					<h1>Test</h1>
					{/* <Router basename="/pmoHub">
            <LandingMenu path={`/`} />
            <ReportingMenu path={`/Reporting`} />
            <CapacityMenu path={`/CapacityCheck`} />
          </Router> */}
				</div>
			</div>
			<div className='app-footer'>
				<Footer />
			</div>
		</StyledApp>
	)
}

export default App
