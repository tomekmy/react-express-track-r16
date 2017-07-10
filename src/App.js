import React from 'react'
import TopBar from './top-bar'
import ExpensesList from './expenses-list'
import { expenses } from './data'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			expenses
		}
	}

	render() {
		const { expenses } = this.state
		return (
			<div>
				<TopBar/>

				<div className='container-fluid'>
					<div className='row fill-height'>
						<div className='col-md-8 pb-3'>
							<ExpensesList expenses={expenses}/>
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
