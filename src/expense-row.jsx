import React from 'react'

const ExpenseRow = ({ expense, onSelect }) => (
	<tr onClick={() => onSelect(expense)}>
		<td>{expense.category}</td>
		<td>{expense.date}</td>
		<td>{expense.amount}</td>
		<td>{expense.description}</td>
	</tr>
)

export default ExpenseRow
