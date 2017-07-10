import React from 'react'

const ExpenseRow = ({ expense }) => (
	<tr>
		<td>{expense.category}</td>
		<td>{expense.date}</td>
		<td>{expense.amount}</td>
		<td>{expense.description}</td>
	</tr>
)

export default ExpenseRow
