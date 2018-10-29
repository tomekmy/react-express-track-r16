import React from 'react'

const ExpenseTable = (props) => {
  console.log(props);

  const generateTable = () => {
    return props.expenses.map((element) => {
      return (
        <div className="expenseTable">
          <div>Category</div><div>{element.category}</div>
          <div>Date</div><div>{element.date}</div>
          <div>Amount</div><div>{element.amount}</div>
          <div>Description</div><div>{element.description}</div>
        </div>
      );
    });
  };

  return generateTable()
};

export default ExpenseTable
