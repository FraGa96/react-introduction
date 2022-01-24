import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getOnlyDate } from '../../../utils/functions';
import { ToggleSwitch } from '../../common';
import styles from './ExpenseIncomeInput.module.css';

const ExpenseIncomeInput = ({
  onAdd = () => { },
}) => {
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(new Date());
  const [isIncome, setIsIncome] = useState(false);

  const restartInputs = () => {
    setValue(0);
    setDate(new Date());
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
      setDate(new Date(value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== 0) {
      onAdd({ value: isIncome ? value : value * -1, date, });
      restartInputs();
    }
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

      <input type="number" value={value} onChange={handleValueChanged} />

      <input type="date" value={getOnlyDate(date)} onChange={handleDateChanged} />

      <button type="submit">Add</button>
    </form>
  );
};

ExpenseIncomeInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ExpenseIncomeInput;
