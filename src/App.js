import React from 'react'
import './App.css'
import { StyledApp, StyledH1 } from './styles'

function App() {
	return (
		<StyledApp>
			{/* <BodyFlow /> */}
			<div className='content-wrap'>
				<div className='app-header'>
					<StyledH1>Finsol PMO+ HUB</StyledH1>
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
				{/* <Footer /> */}
				<h3>Test footer</h3>
			</div>
		</StyledApp>
	)
}

export default App
