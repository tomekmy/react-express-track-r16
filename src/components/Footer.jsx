import React from 'react'
import { connect } from 'react-redux';
import { sumBy, filter } from 'lodash';

const mapStateToProps = store => ({
  paid: sumBy(filter(store.expenses, 'paid'),'amount')
});

export const Footer = (props) => {
  return (
    <div className="expenseDetails">
      <div>Total paid:</div><div>{ props.paid }</div>
    </div>
  )
};

Footer.Connected = connect(mapStateToProps)(Footer);
