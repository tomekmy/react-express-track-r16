import React from 'react'
import ExpenseRow from './ExpenseRow'
import {sumBy, filter} from 'lodash'

class ExpenseTable extends React.Component {

	state = {
		selectedID: ''
	}

	selectElement = ({id}) => {
		this.setState({
			selectedID: id
		});
	}

	generateTable = (props) => {
		return props.map(element => {
			return (
					<ExpenseRow
						expense={element}
						key={element.id}
						onSelect={this.selectElement}
						selected={this.state.selectedID === element.id}
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
						<td>
							<strong>Category</strong>
						</td>
						<td>
							<strong>Date</strong>
						</td>
						<td>
							<strong>Amount</strong>
						</td>
						<td>
							<strong>Description</strong>
						</td>
						<td>
							<strong>Paid</strong>
						</td>
					</tr>
					
					{ this.generateTable(this.props.expenses) }
					<tr>
						<td>Total paid:</td>
						<td>
							{this.props.expenses.reduce((sum, element) => sum + element.amount, 0)}$
						</td>
						<td>Total unpaid:</td>
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
