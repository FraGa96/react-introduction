import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ExpensesList from '../../common/ExpensesList';

const AccountsMovements = () => {
  const { id } = useParams();
  const store = useSelector(({ accounts, expensesIncomes }) => ({ accounts, expensesIncomes }));
  const { accounts, expensesIncomes } = store;

  const accountSelected = useMemo(() => accounts
    .find((account) => account.id === id) || {}
    , [id, accounts]);

  const accountMovements = useMemo(() => expensesIncomes
    .filter((movement) => movement.account.id === accountSelected.id)
    , [accountSelected, expensesIncomes]);

  return (
    <>
      <h2>{accountSelected.name}</h2>

      <ExpensesList items={accountMovements} />
    </>
  );
}

export default AccountsMovements;
