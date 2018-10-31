import React from 'react';
import { Footer } from './Footer'

const Expense = (props) => {
  return (
    <div className="expenseDetails">
      <div>Category:</div>
      <div>Date:</div>
      <div>Amount:</div>
      <div>Description:</div>
      <div>Paid:</div>
      <div>{props.expenses.category}</div>
      <div>{props.expenses.date}</div>
      <div>{props.expenses.amount}</div>
      <div>{props.expenses.description}</div>
      <div>{String(!!props.expenses.paid)}</div>
      <Footer.Connected />
    </div>
  )
};

export default Expense
