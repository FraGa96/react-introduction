import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getOnlyDate } from '../../../utils/functions';
import { ToggleSwitch } from '../../common';
import styles from './ExpenseIncomeInput.module.css';

const ExpenseIncomeInput = ({
  onAdd = () => { },
  accounts = [],
}) => {
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(getOnlyDate());
  const [isIncome, setIsIncome] = useState(false);
  const [account, setAccount] = useState(accounts[0]);

  const restartInputs = () => {
    setValue(0);
    setDate(getOnlyDate());
  }

  const handleIsExpenseChanged = () => {
    setIsIncome((prevVal) => !prevVal);
  }

  const handleValueChanged = (event) => {
    const { value } = event.target;
    if (value >= 0) {
      setValue(Number(value));
    }
  };

  const handleDateChanged = (event) => {
    const { value } = event.target;
    const newDate = new Date(value);
    if (newDate <= new Date()) {
      setDate(getOnlyDate(new Date(value)));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== 0) {
      onAdd({ 
        account,
        date, 
        value: isIncome ? value : value * -1, 
      });
      restartInputs();
    }
  }

  const handleAccountChanged = (event) => {
    const { value } = event.target;
    setAccount(accounts.find((acc) => acc.id === value));
  }

  return (
    <form className={styles.ExpenseIncomeInput} onSubmit={handleSubmit}>
      <ToggleSwitch
        checked={isIncome}
        checkedColor='#45cc2d'
        checkedDeco='+'
        onChange={handleIsExpenseChanged}
        uncheckedColor='#cc2d2d'
        uncheckedDeco='-'
      />

      <select value={account?.id} onChange={handleAccountChanged}>
        {accounts.map((accountItem) => (
          <option
            key={accountItem.id}
            value={accountItem.id}
          >
            {accountItem.name}
          </option>
        ))}
      </select>

      <input type="number" value={value} onChange={handleValueChanged} />

      <input type="date" value={date} onChange={handleDateChanged} />

      <button type="submit">Add</button>
    </form>
  );
};

ExpenseIncomeInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ExpenseIncomeInput;
