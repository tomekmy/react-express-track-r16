export const events = {
  MARK_AS_PAID: 'MARK_AS_PAID'
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