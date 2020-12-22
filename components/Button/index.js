import React from 'react';
import styles from './Button.scss';

const Button = ({ value, margin, searchInput, goToForm }) => {
  return (
    <div
      className={
        searchInput.length > 0 ? styles.active : styles.button_Container
      }
      style={{ marginTop: `${margin}px` }}>
      <input
        type='button'
        value={value}
        className={styles.button}
        onClick={() => {
          goToForm();
        }}
      />
    </div>
  );
};

export default Button;
