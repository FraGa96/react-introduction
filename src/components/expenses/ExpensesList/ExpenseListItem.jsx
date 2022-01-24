import React from 'react';
import PropTypes from 'prop-types';
import { getOnlyDate } from '../../../utils/functions';

const ExpenseListItem = ({
  value = 0,
  date = new Date(),
}) => (
  <li style={{ color: value > 0 ? 'var(--green-money)' : 'var(--red-expense)'}}>
    {value > 0 ? `$${value}` : `-$${Math.abs(value)}`} on {getOnlyDate(date)}
  </li>
);

ExpenseListItem.propTypes = {
  value: PropTypes.number,
  date: PropTypes.instanceOf(Date),
};

export default ExpenseListItem;
