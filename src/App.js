import React from 'react'
import TopBar from './top-bar'
import Expense from './components/expense'
import ExpenseTable from './components/ExpenseTable'
import {keyBy, values} from 'lodash'

import { expenses as data } from './data'

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			expenses: keyBy(data, 'id')
		}
	}

	markAsPaid = (id, value) => {
		const expenses = this.state.expenses;
		const expensesCopy = {...expenses, [id]:{...expenses[id], paid: value}}
		this.setState({
			expenses: expensesCopy
		});
	}


	render() {
		return (
			<div className="wrapper">
				<TopBar />
				<Expense expenses={values(this.state.expenses)} />
				<ExpenseTable
					markAsPaid={this.markAsPaid}
				 	expenses={values(this.state.expenses)} />

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
