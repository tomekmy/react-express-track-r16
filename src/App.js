import React from 'react'
import TopBar from './top-bar'

class App extends React.Component {

	render() {
		return (
			<div>
				<TopBar/>

				<div className='container-fluid'>
					<div className='row fill-height'>
						<div className='col-md-8 pb-3'>
						</div>
						<div className='col-md-4'>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
