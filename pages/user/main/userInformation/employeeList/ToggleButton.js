import React from 'react';
import styles from '../UserInformation.scss';

const ToggleButton = ({ onClick }) => {
  return (
    <label className={styles.switch}>
      <input type='checkbox' onClick={onClick} checked='false' />
      <span className={styles.slider} />
      <span className={styles.off}>OFF</span>
      <span className={styles.on}>ON</span>
    </label>
  );
};

export default ToggleButton;
