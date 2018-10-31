import React from 'react';

import TopBar from './top-bar';
import Expense from './components/Expense';
import ExpenseTable from './components/ExpenseTable';
import NewExpense from './components/NewExpense';
import WithLogging from './components/WithLoading';
import {values} from 'lodash';

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


	render() {
		const expense = <Expense expenses={this.props.expenses[this.state.selectedID]} />;

		return (
			<div className="wrapper">
				<TopBar />
				{this.state.selectedID ? expense : null}
				<ExpenseTable
					markAsPaid={this.props.markAsPaid}
					expenses={values(this.props.expenses)}
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

export default WithLogging(ExpensesApp);