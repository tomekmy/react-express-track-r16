import React from 'react'
import ExpenseRow from './ExpenseRow'

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
					</tr>
					
					{ this.generateTable(this.props.expenses) }
					<tr>
						<td></td>
						<td></td>
						<td>{this.props.expenses.reduce((sum, element) => sum + element.amount, 0)}$</td>
						<td></td>
					</tr>
				</tbody>
			</table>);
	}
}

export default ExpenseTable
