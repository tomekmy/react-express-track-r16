import { connect } from 'react-redux';
import { actions } from './expenses';
import ExpensesApp from './ExpensesApp';


const mapStateToProps = state => {
	return {
		expenses: state.expenses
	}
}

export default connect(mapStateToProps, actions)(ExpensesApp);
