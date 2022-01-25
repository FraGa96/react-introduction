import React, { useState } from 'react';
import ExpenseIncomeInput from './ExpenseIncomeInput';
import ExpensesList from './ExpensesList';
import styles from './ExpensesScreen.module.css';

const ExpensesScreen = () => {
  const [expensesList, setExpensesList] = useState([]);

  const addItem = (newExpense) => {
    setExpensesList((prevList) => [
      newExpense,
      ...prevList
    ]);
  };

  return (
    <div className={styles.ExpensesScreen}>
      <ExpenseIncomeInput onAdd={addItem} />
      
      <ExpensesList items={expensesList} />
    </div>
  );
};

export default ExpensesScreen;
