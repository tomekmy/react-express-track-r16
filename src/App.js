import { connect } from 'react-redux';
import { actions } from './expenses';
import { withRouter } from 'react-router-dom'
import ExpensesApp from './ExpensesApp';


const mapStateToProps = state => {
	return {
		expenses: state.expenses
	}
}

export default withRouter(connect(mapStateToProps, actions)(ExpensesApp));
