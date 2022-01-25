import React, { useEffect, useMemo, useState } from 'react';
import { currencyFormat } from '../../utils/functions';
import AccountForm from './AccountForm';
import AccountsList from './AccountsList';
import styles from './AccountsScreen.module.css';

const AccountsScreen = () => {
  const [showForm, setShowForm] = useState(false);
  const [accountsList, setAccountsList] = useState([]);

  useEffect(() => {
    setShowForm(false);
  }, [accountsList]);

  const total = useMemo(() => accountsList
    .reduce((prevVal, currentItem) => prevVal + currentItem.total, 0),
    [accountsList]);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  const addAccount = (newAccount) => {
    setAccountsList((prevAccounts) => [
      ...prevAccounts,
      {
        id: new Date().getTime(),
        ...newAccount
      }
    ]);
  }

  return (
    <div className={styles.Accounts}>
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
        <AccountForm onAdd={addAccount} />
      </div>

      <div>
        <AccountsList accountsList={accountsList} />
      </div>
    </div>
  );
};

export default AccountsScreen;
