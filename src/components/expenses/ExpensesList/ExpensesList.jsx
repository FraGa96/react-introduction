import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ExpenseListItem from './ExpenseListItem';

const ExpensesList = ({
  items = []
}) => {
  const total = useMemo(() => items
    .reduce((prevValue, currentItem) => prevValue + currentItem.value, 0),
    [items]);
  
  const getTotalColor = () => {
    if(total === 0) {
      return '#000';
    }

    return total > 0 ? 'var(--green-money)' : 'var(--red-expense)';
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <ExpenseListItem key={index} value={item.value} />
        ))}
      </ul>

      <span 
        style={{ color: getTotalColor()}}
      >
        Total: {`$${Math.abs(total)}`}
      </span>
    </div>
  );
};

ExpensesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    date: PropTypes.instanceOf(Date),
  }))
};

export default ExpensesList;
