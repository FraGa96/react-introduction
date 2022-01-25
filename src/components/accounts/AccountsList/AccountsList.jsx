import React from 'react';
import AccountItem from './AccountItem';
import styles from './AccountsList.module.css';

const AccountList = ({
  accountsList = []
}) => {
  return (
    <div className={styles.AccountsList}>
      {accountsList.map((account) => (
        <AccountItem
          key={account.id}
          name={account.name}
          total={account.total}
        />
      ))}
    </div>
  );
};

export default AccountList;
