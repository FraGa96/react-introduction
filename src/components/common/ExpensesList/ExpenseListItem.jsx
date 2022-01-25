import React from 'react';
import PropTypes from 'prop-types';

const ExpenseListItem = ({
  value = 0,
  date = '',
  accountName = '',
}) => (
  <li style={{ color: value > 0 ? 'var(--green-money)' : 'var(--red-expense)'}}>
    {value > 0 ? `$${value}` : `-$${Math.abs(value)}`} on {date} in {accountName}
  </li>
);

ExpenseListItem.propTypes = {
  value: PropTypes.number,
  date: PropTypes.string,
  accountName: PropTypes.string,
};

export default ExpenseListItem;
