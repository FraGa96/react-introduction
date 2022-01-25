import React from 'react';
import { currencyFormat } from '../../../utils/functions';
import styles from './AccountItem.module.css';

const AccountItem = ({
  name = '',
  total = 0,
  onClick = () => { },
}) => (
  <button className={styles.AccountItem} type="button" onClick={onClick}>
    <span>{name}</span>

    <span className={total < 0 ? styles.AccountItemNegative : ''}>
      {currencyFormat(total)}
    </span>
  </button>
);

export default AccountItem;
