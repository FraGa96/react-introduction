import React from 'react';
import styles from './ToggleSwitch.module.css';

export const ToggleSwitch = ({
  checked = false,
  checkedColor = '#2196f3',
  checkedDeco = '',
  name = 'toggleSwitch',
  onChange = () => { },
  uncheckedColor = '#ccc',
  uncheckedDeco = '',
}) => (
  <label className={styles.ToggleSwitch}>
    <input
      type="checkbox"
      checked={checked}
      name={name}
      onChange={onChange}
    />

    <span
      className={styles.ToggleSwitchSlider}
      data-text={checked ? checkedDeco : uncheckedDeco}
      style={{
        backgroundColor: checked ? checkedColor : uncheckedColor
      }}
    />
  </label>
);
