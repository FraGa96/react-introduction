import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccountItem from './AccountItem';
import styles from './AccountsList.module.css';

const AccountList = ({
  accountsList = []
}) => {
  const navigate = useNavigate();

  const goToAccountMovements = (id) => () => {
    navigate(id);
  };

  return (
    <div className={styles.AccountsList}>
      {accountsList.map((account) => (
        <AccountItem
          key={account.id}
          name={account.name}
          total={account.total}
          onClick={goToAccountMovements(account.id)}
        />
      ))}
    </div>
  );
};

export default AccountList;
