import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpenseOrIncome } from '../../redux/expensesIncomes';
import ExpenseIncomeInput from './ExpenseIncomeInput';
import ExpensesList from '../common/ExpensesList';
import styles from './ExpensesScreen.module.css';

const ExpensesScreen = () => {
  const store = useSelector(({ expensesIncomes, accounts }) => ({ expensesIncomes, accounts }));
  const dispatch = useDispatch();
  const {
    accounts,
    expensesIncomes,
  } = store;

  const addItem = (newExpense) => {
    dispatch(addExpenseOrIncome(newExpense));
  };

  return (
    <div className={styles.ExpensesScreen}>
      <ExpenseIncomeInput onAdd={addItem} accounts={accounts} />

      <ExpensesList items={expensesIncomes} />
    </div>
  );
};

export default ExpensesScreen;
