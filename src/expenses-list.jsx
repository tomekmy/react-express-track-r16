import _ from 'lodash'
import React from 'react'
import ExpenseRow from './expense-row'

const ExpensesList = ({ expenses }) => {
	const renderExpense = expense => (<ExpenseRow expense={expense} key={expense.id} />)

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
