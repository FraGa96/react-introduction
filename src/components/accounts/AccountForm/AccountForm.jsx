import React, { useState } from 'react';
import styles from './AccountForm.module.css';

const AccountForm = ({
  onAdd = () => { },
}) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);

  const restartForm = () => {
    setName('');
    setValue(0);
  }

  const handleNameChanged = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleValueChanged = (event) => {
    const { value } = event.target;
    setValue(Number(value));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      onAdd({ name: name.trim(), total: value });
      restartForm();
    }
  }


  return (
    <form className={styles.AccountForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Account Name'
        value={name}
        onChange={handleNameChanged}
      />

      <input
        type="number"
        value={value}
        onChange={handleValueChanged}
      />

      <button type="submit">Accept</button>
    </form>
  )
};

export default AccountForm;
