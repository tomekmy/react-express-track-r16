import { events } from './expenseActions'

export default (state={}, action) => {
  const { payload, type } = action;
  switch(type) {
    case events.MARK_AS_PAID:
      return {...state, [payload.id]: {
        ...state[payload.id],
        paid: payload.value
      }
    }
    default:
      return state
  }
}