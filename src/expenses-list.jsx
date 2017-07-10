import _ from 'lodash'
import React from 'react'
import ExpenseRow from './expense-row'

const ExpensesList = ({ expenses, onSelect }) => {
	const renderExpense = expense => (<ExpenseRow expense={expense} onSelect={onSelect} key={expense.id} />)

	return (
		<div className='expenses-container'>
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Category</th>
						<th>Amount</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{_.map(expenses, renderExpense)}
				</tbody>
			</table>
		</div>
	)
}

export default ExpensesList
