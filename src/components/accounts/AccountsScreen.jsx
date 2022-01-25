import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AccountsScreen.module.css';

const AccountsScreen = () => (
  <div className={styles.AccountsScreen}>
    <Outlet />
  </div>
);

export default AccountsScreen;
