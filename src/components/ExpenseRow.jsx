import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const ExpenseRow = props => {
	const data = {...props.expense};
	return (
		<tr onClick={() => props.selectElement(data)} className={props.selected ? 'selected' : null}>
			<td><Link to={`/details/${props.expense.id}`}>{data.category}</Link></td>
			<td>{data.date}</td>
			<td>{data.amount + data.currency}</td>
			<td>{data.description}</td>
			<td><input type="checkbox" onChange={() => props.markAsPaid(data.id, !data.paid)} checked={!!data.paid} /></td>
		</tr>
	);
};

ExpenseRow.propTypes = {
  expense: PropTypes.shape({
    category: PropTypes.string,
		date: PropTypes.string,
		amount: PropTypes.number,
		currency: PropTypes.string,
		description: PropTypes.string
  })
};

export default ExpenseRow
