import React from 'react';
import { currencyFormat } from '../../../utils/functions';
import styles from './AccountItem.module.css';

const AccountItem = ({
  name = '',
  total = 0,
}) => (
  <div className={styles.AccountItem}>
    <span>{name}</span>

    <span className={total < 0 ? styles.AccountItemNegative : ''}>
      {currencyFormat(total)}
    </span>
  </div>
);

export default AccountItem;
