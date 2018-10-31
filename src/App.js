import React from 'react'
import TopBar from './top-bar'
import Expense from './components/Expense'
import ExpenseTable from './components/ExpenseTable'
import NewExpense from './components/NewExpense'
import WithLogging from './components/WithLoading'
import {keyBy, values} from 'lodash'

// import { expenses as data } from './data'

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			expenses: [],
			selectedID: ''
		}
	}

	componentDidMount() {
		fetch('http://192.168.1.118:8080/data')
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				this.setState({expenses: keyBy(myJson, 'id')});
		});
	}

	markAsPaid = (id, value) => {
		const expenses = this.state.expenses;
		const expensesCopy = {...expenses, [id]:{...expenses[id], paid: value}}
		this.setState({
			expenses: expensesCopy
		});
	}

	selectElement = ({id}) => {
		this.setState({
			selectedID: id
		});
	}

	// TODO:
	addNewExpense = () => {
		console.log('addNewExpense');
	};


	render() {
		const expense = <Expense expenses={this.state.expenses[this.state.selectedID]} />;

		return (
			<div className="wrapper">
				<TopBar />
				{this.state.selectedID ? expense : null}
				<ExpenseTable
					markAsPaid={this.markAsPaid}
					expenses={values(this.state.expenses)}
					selectedID={this.state.selectedID}
					selectElement={this.selectElement} />

				<NewExpense addNewExpense={this.addNewExpense} />
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

export default WithLogging(App)
