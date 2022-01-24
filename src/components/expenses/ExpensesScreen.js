import React, { useState } from 'react';
import ExpenseIncomeInput from './ExpenseIncomeInput';
import ExpensesList from './ExpensesList';

const ExpensesScreen = () => {
  const [expensesList, setExpensesList] = useState([]);

  const addItem = (newExpense) => {
    setExpensesList((prevList) => [
      newExpense,
      ...prevList
    ]);
  };

  return (
    <div>
      <ExpenseIncomeInput onAdd={addItem} />
      
      <ExpensesList items={expensesList} />
    </div>
  );
};

export default ExpensesScreen;
