import React from 'react'
import ExpenseRow from './ExpenseRow'
import {sumBy, filter, orderBy} from 'lodash'

class ExpenseTable extends React.Component {

	state = {
		expense: this.props.expenses,
		sortMethod: 'asc'
	}

	sortData = (sort) => {
		this.state.sortMethod === 'asc' ? this.setState({sortMethod: 'desc'}) : this.setState({sortMethod: 'asc'});
		this.setState({expense: orderBy(this.props.expenses, sort, this.state.sortMethod)});
	}

	generateTable = () => {
		return this.state.expense.map(element => {
			return (
					<ExpenseRow
						expense={element}
						key={element.id}
						selectElement={this.props.selectElement}
						selected={this.props.selectedID === element.id}
						markAsPaid={this.props.markAsPaid}
					/>
			);
		});
	};

	render() {
		return (
			<table className="expenseTable">
				<tbody>
					<tr>
						<td onClick={() => this.sortData('category')}>
							<strong>Category</strong>
						</td>
						<td onClick={() => this.sortData('date')}>
							<strong>Date</strong>
						</td>
						<td onClick={() => this.sortData('amount')}>
							<strong>Amount</strong>
						</td>
						<td onClick={() => this.sortData('description')}>
							<strong>Description</strong>
						</td>
						<td onClick={() => this.sortData('paid')}>
							<strong>Paid</strong>
						</td>
					</tr>
					
					{ this.generateTable(this.props.expenses) }
					<tr>
						<td>Total unpaid:</td>
						<td>
							{this.props.expenses.reduce((sum, element) => sum + element.amount - (element.paid?element.amount:0), 0)}$
						</td>
						<td>Total paid:</td>
						<td>
							{sumBy(filter(this.props.expenses, 'paid'), 'amount')}$
						</td>
						<td></td>
					</tr>
				</tbody>
			</table>);
	}
}

export default ExpenseTable
