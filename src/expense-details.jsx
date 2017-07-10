import React from 'react'

const ExpenseDetails = ({ expense }) => (
	<div className='expenses-container'>
		<div className='container'>
			<div className='row'>
				<div className='col-4'>Category:</div>
				<div className='col-8 text-right'>{expense.category}</div>
			</div>
			<div className='row'>
				<div className='col-4'>Date:</div>
				<div className='col-8 text-right'>{expense.date}</div>
			</div>
			<div className='row'>
				<div className='col-4'>Amount:</div>
				<div className='col-8 text-right'>{expense.amount}</div>
			</div>
			<div className='row'>
				<div className='col-4'>Description:</div>
				<div className='col-8 text-right'>{expense.description}</div>
			</div>
		</div>
	</div>
)

export default ExpenseDetails