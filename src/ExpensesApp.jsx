import React from 'react';

import TopBar from './top-bar';
import Expense from './components/Expense';
import ExpenseTable from './components/ExpenseTable';
import NewExpense from './components/NewExpense';
import WithLogging from './components/WithLoading';
import { Route } from 'react-router-dom'
import { Footer } from './components/Footer';
import { values } from 'lodash';

class ExpensesApp extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedID: ''
		}
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

	componentDidMount() {
		this.props.fetchExpenses()
	}


	render() {
		// const expense = <Expense expenses={this.props.expenses[this.state.selectedID]} />;

		return (
			<div className="wrapper">
				<TopBar />
				<Route
					path='/details/:id'
					render={({match}) => {
						const expense = this.props.expenses[match.params.id];
						if (expense) {
							return <Expense expenses={expense} />;
						} else {
							return null;
						}
					} 
				}
				></Route>
				<ExpenseTable
					markAsPaid={this.props.markAsPaid}
					expenses={values(this.props.expenses)}
					selectedID={this.state.selectedID}
					selectElement={this.selectElement} />

				<NewExpense addNewExpense={this.addNewExpense} />
				<Footer.Connected />
			</div>
		)
	}
}

export default WithLogging(ExpensesApp);