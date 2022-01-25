import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import coinImage from '../../../assets/coin-image.png';
import burgerIcon from '../../../assets/burger-menu.png';
import * as routes from '../../../utils/routes.contants';
import styles from './Header.module.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: routes.ACCOUNT_ROUTE, label: 'Accounts' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen && (
        <button
          className={styles.HeaderOverlay}
          onClick={closeMenu}
          type="button"
        />
      )}

      <header className={styles.Header}>
        <div className={styles.HeaderLogo}>
          <img alt="logo" src={coinImage} />

          <span>Expense control</span>
        </div>

        <button
          className={styles.HeaderBurger}
          type="button"
          onClick={toggleSidebar}
        >
          <img alt="" src={burgerIcon} />
        </button>

        <div className={styles.HeaderNav} data-open={isOpen}>
          {navItems.map((navItem) => (
            <NavLink
              key={navItem.path}
              className={({ isActive }) => `${styles.HeaderNavLink} ${isActive
                ? styles.HeaderNavLinkActive : ''}`}
              to={navItem.path}
              onClick={closeMenu}
            >
              {navItem.label}
            </NavLink>
          ))}
        </div>
      </header>
    </>
  )
};
