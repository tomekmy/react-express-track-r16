import React from 'react'

class NewExpense extends React.Component {

  state = {
    category: '',
    amount: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <div>
        <div><input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange} /></div>
        <div><input type="text" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.handleChange} /></div>
        <button onClick={this.props.addNewExpense}>Add new</button>
      </div>
    );
  }
}

export default NewExpense