import _ from 'lodash'
import React from 'react'
import uuid from 'uuid/v4'
import TopBar from './top-bar'
import ExpensesList from './expenses-list'
import ExpenseDetails from './expense-details'
import { expenses } from './data'
import Modal from './modal'
import AddNewExpense from './add-new-expense'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			expenses
		}
	}

	onExpenseSelect = expense => {
		this.setState({
			selectedExpense: expense
		})
	}

	showNewPopup = () => {
		this.setState({
			showNewPopup: true
		})
	}

	hideNewPopup = () => {
		this.setState({
			showNewPopup: false
		})
	}

	createNew = expense => {
		const e = Object.assign({}, expense, { id: uuid() })
		this.setState({
			expenses: _.concat(this.state.expenses, e),
			showNewPopup: false
		})
	}

	render() {
		const { expenses, selectedExpense, showNewPopup } = this.state
		return (
			<div>
				<TopBar/>

				<div className='container-fluid'>
					<div className='row fill-height'>
						<div className='col-md-8 pb-3'>
							<ExpensesList expenses={expenses} onSelect={this.onExpenseSelect}/>
							<div className='expenses-add'>
								<button onClick={this.showNewPopup} className='btn btn-success'>Add new</button>
							</div>
						</div>
						<div className='col-md-4'>
							{ selectedExpense ? <ExpenseDetails expense={selectedExpense}/> : null }
						</div>
					</div>
					<Modal visible={showNewPopup} onDismiss={this.hideNewPopup}>
						<AddNewExpense onSave={this.createNew} onCancel={this.hideNewPopup}/>
					</Modal>
				</div>
			</div>
		)
	}
}

export default App
