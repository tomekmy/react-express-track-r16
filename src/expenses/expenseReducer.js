import { events } from './expenseActions';
import { keyBy } from 'lodash';

export default (state={}, action) => {
  const { payload, type } = action;
  switch(type) {
    case events.MARK_AS_PAID:
      return {...state, [payload.id]: {
        ...state[payload.id],
        paid: payload.value
      }
    }
    case events.FETCH_EXPENSES_FULFILLED:
      return keyBy(payload, 'id')
    default:
      return state
  }
}