import React from 'react';
import styles from '../userInformation.scss';
import ToggleButton from './ToggleButton';

const item = ({ name, id, onClick, onChange, status }) => {
  return (
    <div className={styles.item} id={id}>
      <div className={styles.name}>{name}</div>
      <div className={styles.statusWrap}>
        <div className={styles.statusButton}>
          <ToggleButton onChange={onChange} status={status} />
        </div>
        <div className={styles.deleteButton} onClick={onClick}>
          삭제
        </div>
      </div>
    </div>
  );
};

export default item;
