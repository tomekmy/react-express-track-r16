import React from 'react'
import TopBar from './top-bar'
import Expense from './components/expense'
import ExpenseTable from './components/ExpenseTable'

import { expenses as data } from './data'

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<TopBar />
				<Expense expenses={data} />
				<ExpenseTable expenses={data} />

				<div className="container-fluid">
					<div className="row fill-height">
						<div className="col-md-8 pb-3" />
						<div className="col-md-4" />
					</div>
				</div>
			</div>
		)
	}
}

export default App
