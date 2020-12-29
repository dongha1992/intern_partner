import React from 'react';
import styles from '../UserInformation.scss';

const ToggleButton = ({ onChange, status }) => {
  return (
    <label className={styles.switch}>
      <input type='checkbox' onChange={onChange} checked={status} />
      <span className={styles.slider} />
      <span className={styles.off}>OFF</span>
      <span className={styles.on}>ON</span>
    </label>
  );
};

export default ToggleButton;
