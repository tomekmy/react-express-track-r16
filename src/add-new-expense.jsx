import React from 'react'

const InputSection = ({name, label, value, onChange}) => (
	<div className="form-group">
		<label>{label}</label>
		<input name={name} className="form-control" onChange={onChange} value={value || ''}/>
	</div>
)

class AddNewExpense extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	handleChange = e => {
		const {name, value} = e.target
		this.setState({[name]: value})
	}

	handleSave = () => {
		this.props.onSave(this.state)
	}

	render() {
		const { onCancel } = this.props
		const { date, category, amount, description } = this.state

		return (
			<div className="container card p-3" >
				<h1>Add new</h1>
				<InputSection name="date" label="Date" value={date} onChange={this.handleChange} />
				<InputSection name="category" label="Category" value={category} onChange={this.handleChange} />
				<InputSection name="amount" label="Amount" value={amount} onChange={this.handleChange} />
				<div className="form-group">
					<label>Description</label>
					<textarea name="description" className="form-control" rows="4" onChange={this.handleChange} value={description}/>
				</div>
				<div className='text-right'>
					<button className='btn btn-success mr-1' onClick={this.handleSave} >Add</button>
					<button className='btn' onClick={onCancel}>Cancel</button>
				</div>
			</div>
		)
	}
}

export default AddNewExpense
