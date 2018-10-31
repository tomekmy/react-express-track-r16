export const events = {
  MARK_AS_PAID: 'MARK_AS_PAID',
  FETCH_EXPENSES: 'FETCH_EXPENSES',
  FETCH_EXPENSES_PENDING: 'FETCH_EXPENSES_PENDING',
  FETCH_EXPENSES_FULFILLED: 'FETCH_EXPENSES_FULFILLED',
  FETCH_EXPENSES_REJECTED: 'FETCH_EXPENSES_REJECTED'
}

export const markAsPaid = (id, value) => (
  {
    type: events.MARK_AS_PAID,
    payload: {
      id,
      value
    }
  }
)

export const fetchExpenses = () => (
  {
    type: events.FETCH_EXPENSES,
    // payload: fetch('http://localhost/data/data.json')
    payload: fetch('http://192.168.1.118:8080/data')
    .then((response) => {
      return response.json();
    })
  }
)