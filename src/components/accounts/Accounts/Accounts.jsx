import React, { useMemo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAccount } from '../../../redux/accounts';
import { currencyFormat } from '../../../utils/functions';
import AccountForm from '../AccountForm';
import AccountsList from '../AccountsList';
import styles from './Accounts.module.css';

const Accounts = () => {
  const [showForm, setShowForm] = useState(false);
  const accountsList = useSelector(({ accounts }) => accounts);

  const dispatch = useDispatch();

  useEffect(() => {
    setShowForm(false);
  }, [accountsList]);

  const total = useMemo(() => accountsList
    .reduce((prevVal, currentItem) => prevVal + currentItem.total, 0),
    [accountsList]);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  const handleAddAccount = (newAccount) => {
    dispatch(addAccount(newAccount));
  }

  return (
    <>
      <h1>Accounts</h1>

      <span className={styles.AccountsTotal}>
        {currencyFormat(total)}
      </span>

      <button
        className={`${styles.AccountsButton} ${showForm
          ? styles.AccountsButtonCancel : ''}`}
        type="button"
        onClick={toggleForm}
      >
        {!showForm ? 'Add Account' : 'Dismiss'}
      </button>

      <div
        className={`${styles.AccountFormContainer} ${!showForm
          ? styles.AccountFormContainerClosed : ''}`}
      >
        <AccountForm onAdd={handleAddAccount} />
      </div>

      <div>
        <AccountsList accountsList={accountsList} />
      </div>
    </>
  )
}

export default Accounts;
