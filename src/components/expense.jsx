import React from 'react'

const Expense = (props) => {
  console.log(props);
  return (
    <div className="expenseTable">
      <div>Category:</div><div>{props.expenses[0].category}</div>
      <div>Date:</div><div>2017-07-10</div>
      <div>Amount:</div><div>$11.25</div>
      <div>Description:</div><div>Lunch shopping</div>
    </div>
  )
};

export default Expense
