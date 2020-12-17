import React from 'react';
import styles from './Button.scss';

const Button = ({ value, margin }) => {
  return (
    <div
      className={styles.button_Container}
      style={{ marginTop: `${margin}px` }}>
      <input type='button' value={value} className={styles.button} />
    </div>
  );
};

export default Button;
